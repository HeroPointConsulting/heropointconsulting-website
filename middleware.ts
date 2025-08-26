import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { rateLimit, getClientIdentifier, RateLimitConfigs } from '@/lib/rate-limit'
// Note: CSRF validation moved to API route level due to Edge Runtime limitations

// Define auth routes that authenticated users shouldn't access
const authRoutes = ['/login', '/register']
const protectedApiRoutes = ['/api/auth/register', '/api/auth/login']
// CSRF protection is now handled at the API route level

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (realIP) {
    return realIP
  }
  
  // NextRequest doesn't have ip property in edge runtime
  return '127.0.0.1'
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const ip = getClientIP(request)
  
  // Apply rate limiting to API routes (CSRF validation moved to individual API routes)
  if (pathname.startsWith('/api/')) {
    // Simple rate limiting using IP-based identification
    const identifier = getClientIdentifier(ip)
    
    // Different rate limits for different endpoints
    let config = RateLimitConfigs.api
    if (protectedApiRoutes.some(route => pathname.startsWith(route))) {
      config = RateLimitConfigs.auth
    } else if (pathname.startsWith('/api/contact')) {
      config = RateLimitConfigs.contact
    }
    
    const rateLimitResult = rateLimit(identifier, config)
    
    if (!rateLimitResult.success) {
      const response = NextResponse.json(
        { 
          error: 'Rate limit exceeded', 
          retryAfter: Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)
        },
        { status: 429 }
      )
      
      // Add rate limit headers
      response.headers.set('X-RateLimit-Limit', rateLimitResult.limit.toString())
      response.headers.set('X-RateLimit-Remaining', rateLimitResult.remaining.toString())
      response.headers.set('X-RateLimit-Reset', rateLimitResult.resetTime.toString())
      
      if (rateLimitResult.blockUntil) {
        response.headers.set('Retry-After', Math.ceil((rateLimitResult.blockUntil - Date.now()) / 1000).toString())
      }
      
      return response
    }
    
    // Add rate limit headers and service worker prevention to API responses
    const response = NextResponse.next()
    response.headers.set('X-RateLimit-Limit', rateLimitResult.limit.toString())
    response.headers.set('X-RateLimit-Remaining', rateLimitResult.remaining.toString())
    response.headers.set('X-RateLimit-Reset', rateLimitResult.resetTime.toString())
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    response.headers.set('Service-Worker-Allowed', 'false')
    
    return response
  }
  
  // Simple auth routing - only redirect if we have a valid token
  const token = request.cookies.get('auth-token')?.value
  const hasValidToken = !!token && token.trim().length > 10 // Basic token check

  // Check if current path is an auth route
  const isAuthRoute = authRoutes.some(route => 
    pathname === route // Exact match only
  )

  // Only redirect authenticated users away from auth routes
  if (isAuthRoute && hasValidToken) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // For auth pages and dashboard, prevent service worker caching
  if (isAuthRoute || pathname === '/dashboard') {
    const response = NextResponse.next()
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    response.headers.set('Service-Worker-Allowed', 'false')
    return response
  }

  return NextResponse.next()
}

// Configure which routes this middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes) - Actually we DO want to match API routes now
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}
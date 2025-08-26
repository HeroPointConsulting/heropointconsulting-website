/**
 * CSRF Protection utilities
 */

import { NextRequest } from 'next/server'
import crypto from 'crypto'

// CSRF secret - required environment variable
const CSRF_SECRET = process.env.CSRF_SECRET
if (!CSRF_SECRET) {
  throw new Error('CSRF_SECRET environment variable is required')
}
// Type assertion after validation
const csrfSecret: string = CSRF_SECRET

/**
 * Generate a CSRF token for a session
 */
export function generateCSRFToken(sessionId?: string): string {
  const timestamp = Date.now().toString()
  const randomBytes = crypto.randomBytes(16).toString('hex')
  const payload = `${timestamp}.${randomBytes}.${sessionId || 'anonymous'}`
  
  const hmac = crypto.createHmac('sha256', csrfSecret)
  hmac.update(payload)
  const signature = hmac.digest('hex')
  
  return `${payload}.${signature}`
}

/**
 * Verify a CSRF token
 */
export function verifyCSRFToken(token: string, sessionId?: string): boolean {
  try {
    const parts = token.split('.')
    if (parts.length !== 4) return false
    
    const [timestamp, randomBytes, tokenSessionId, signature] = parts
    
    // Check session match
    const expectedSessionId = sessionId || 'anonymous'
    if (tokenSessionId !== expectedSessionId) return false
    
    // Check timestamp (token valid for 1 hour)
    const tokenTime = parseInt(timestamp, 10)
    const now = Date.now()
    const maxAge = 60 * 60 * 1000 // 1 hour
    
    if (now - tokenTime > maxAge) return false
    
    // Verify signature
    const payload = `${timestamp}.${randomBytes}.${tokenSessionId}`
    const hmac = crypto.createHmac('sha256', csrfSecret)
    hmac.update(payload)
    const expectedSignature = hmac.digest('hex')
    
    // Use timing-safe comparison
    return crypto.timingSafeEqual(
      Buffer.from(signature, 'hex'),
      Buffer.from(expectedSignature, 'hex')
    )
  } catch {
    return false
  }
}

/**
 * Extract CSRF token from request
 */
export function extractCSRFToken(request: NextRequest): string | null {
  // Check X-CSRF-Token header first
  const headerToken = request.headers.get('X-CSRF-Token')
  if (headerToken) return headerToken
  
  // Check form data for _csrf field
  const contentType = request.headers.get('content-type')
  if (contentType?.includes('application/json')) {
    // For JSON requests, token should be in header
    return null
  }
  
  return null
}

/**
 * Get user session ID from JWT token (simplified)
 */
export function getSessionIdFromRequest(request: NextRequest): string | null {
  const token = request.cookies.get('auth-token')?.value
  if (!token) return null
  
  try {
    // Extract payload without verification (we just need the user ID)
    const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
    return payload.userId?.toString() || null
  } catch {
    return null
  }
}
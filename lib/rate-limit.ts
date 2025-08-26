/**
 * Simple in-memory rate limiting
 * For production, consider using Redis or a dedicated rate limiting service
 */

interface RateLimitEntry {
  count: number
  resetTime: number
  blocked?: boolean
  blockUntil?: number
}

const rateLimitMap = new Map<string, RateLimitEntry>()

// Clean up old entries every 5 minutes
const CLEANUP_INTERVAL = 5 * 60 * 1000
let lastCleanup = Date.now()

function cleanup() {
  const now = Date.now()
  if (now - lastCleanup < CLEANUP_INTERVAL) return
  
  for (const [key, entry] of rateLimitMap.entries()) {
    if (entry.resetTime < now && (!entry.blockUntil || entry.blockUntil < now)) {
      rateLimitMap.delete(key)
    }
  }
  lastCleanup = now
}

export interface RateLimitConfig {
  windowMs: number  // Time window in milliseconds
  maxRequests: number  // Maximum requests per window
  blockDurationMs?: number  // How long to block after limit exceeded
}

export interface RateLimitResult {
  success: boolean
  limit: number
  remaining: number
  resetTime: number
  blocked?: boolean
  blockUntil?: number
}

/**
 * Rate limit check
 */
export function rateLimit(identifier: string, config: RateLimitConfig): RateLimitResult {
  cleanup()
  
  const now = Date.now()
  const entry = rateLimitMap.get(identifier)
  
  // Check if currently blocked
  if (entry?.blockUntil && entry.blockUntil > now) {
    return {
      success: false,
      limit: config.maxRequests,
      remaining: 0,
      resetTime: entry.resetTime,
      blocked: true,
      blockUntil: entry.blockUntil
    }
  }
  
  // Initialize or reset if window expired
  if (!entry || entry.resetTime <= now) {
    const newEntry: RateLimitEntry = {
      count: 1,
      resetTime: now + config.windowMs
    }
    rateLimitMap.set(identifier, newEntry)
    
    return {
      success: true,
      limit: config.maxRequests,
      remaining: config.maxRequests - 1,
      resetTime: newEntry.resetTime
    }
  }
  
  // Check if limit exceeded
  if (entry.count >= config.maxRequests) {
    // Block if configured
    if (config.blockDurationMs) {
      entry.blocked = true
      entry.blockUntil = now + config.blockDurationMs
      rateLimitMap.set(identifier, entry)
    }
    
    return {
      success: false,
      limit: config.maxRequests,
      remaining: 0,
      resetTime: entry.resetTime,
      blocked: entry.blocked,
      blockUntil: entry.blockUntil
    }
  }
  
  // Increment counter
  entry.count++
  rateLimitMap.set(identifier, entry)
  
  return {
    success: true,
    limit: config.maxRequests,
    remaining: config.maxRequests - entry.count,
    resetTime: entry.resetTime
  }
}

/**
 * Get client identifier from IP and optionally user ID
 */
export function getClientIdentifier(ip: string, userId?: string): string {
  return userId ? `user:${userId}` : `ip:${ip}`
}

/**
 * Common rate limit configurations
 */
export const RateLimitConfigs = {
  // Authentication endpoints - strict limits
  auth: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 5, // 5 attempts per 15 minutes
    blockDurationMs: 30 * 60 * 1000 // Block for 30 minutes after limit
  },
  
  // API endpoints - moderate limits
  api: {
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 60, // 60 requests per minute
    blockDurationMs: 5 * 60 * 1000 // Block for 5 minutes after limit
  },
  
  // Contact form - prevent spam
  contact: {
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 3, // 3 submissions per hour
    blockDurationMs: 60 * 60 * 1000 // Block for 1 hour after limit
  }
}
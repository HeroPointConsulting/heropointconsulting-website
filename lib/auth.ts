/**
 * Authentication utilities - JWT tokens and password hashing
 */

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from './db'

// JWT secret - required environment variable
const JWT_SECRET = process.env.JWT_SECRET
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is required')
}
// Type assertion after validation
const jwtSecret: string = JWT_SECRET
const JWT_EXPIRES_IN = '7d'

/**
 * JWT payload interface
 */
export interface JwtPayload {
  userId: number
  email: string
  iat?: number
  exp?: number
}

/**
 * Hash password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12
  return bcrypt.hash(password, saltRounds)
}

/**
 * Verify password against hash
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

/**
 * Generate JWT token for user
 */
export function generateToken(user: User): string {
  const payload: JwtPayload = {
    userId: user.id,
    email: user.email,
  }
  
  return jwt.sign(payload, jwtSecret, {
    expiresIn: JWT_EXPIRES_IN,
  })
}

/**
 * Verify and decode JWT token
 */
export function verifyToken(token: string): JwtPayload | null {
  try {
    const decoded = jwt.verify(token, jwtSecret)
    if (typeof decoded === 'object' && decoded !== null && 'userId' in decoded && 'email' in decoded) {
      return decoded as JwtPayload
    }
    return null
  } catch {
    return null
  }
}

/**
 * Extract token from Authorization header
 */
export function extractTokenFromHeader(authorization: string | null): string | null {
  if (!authorization) return null
  
  const parts = authorization.split(' ')
  if (parts.length !== 2 || parts[0] !== 'Bearer') return null
  
  return parts[1]
}

/**
 * Password validation rules
 */
export function validatePassword(password: string): { isValid: boolean; errors: string[] } {
  const errors: string[] = []
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long')
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter')
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter')
  }
  
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number')
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  }
}

/**
 * Email validation
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.toLowerCase())
}

/**
 * Name validation
 */
export function validateName(name: string): boolean {
  return name.trim().length >= 2 && name.trim().length <= 100
}
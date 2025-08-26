/**
 * Simple validation utilities for Hero Point Consulting contact form
 */

export interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
  interestArea: string
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Sanitize string input - remove harmful characters
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript protocol
    .substring(0, 5000) // Limit length
}

/**
 * Validate contact form data
 */
export function validateContactForm(data: ContactFormData): { 
  isValid: boolean 
  errors: Record<string, string> 
} {
  const errors: Record<string, string> = {}

  // Validate name
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long'
  }

  // Validate email
  if (!data.email) {
    errors.email = 'Email is required'
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  // Validate message
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long'
  }

  // Validate interest area
  if (!data.interestArea) {
    errors.interestArea = 'Please select an area of interest'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

/**
 * Sanitize contact form data
 */
export function sanitizeContactForm(data: ContactFormData): ContactFormData {
  return {
    name: sanitizeInput(data.name),
    email: sanitizeInput(data.email).toLowerCase(),
    company: data.company ? sanitizeInput(data.company) : undefined,
    message: sanitizeInput(data.message),
    interestArea: sanitizeInput(data.interestArea)
  }
}
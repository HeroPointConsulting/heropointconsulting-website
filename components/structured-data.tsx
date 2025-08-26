"use client"

import { useMemo } from 'react'

interface StructuredDataProps {
  data: Record<string, unknown>
}

/**
 * Safely escape JSON for use in script tags to prevent XSS
 */
function escapeJsonForScript(data: unknown): string {
  try {
    // First stringify the data
    let jsonString = JSON.stringify(data, null, 0)
    
    // Escape dangerous characters that could break out of script context
    jsonString = jsonString
      .replace(/</g, '\\u003c')  // Prevent </script> injection
      .replace(/>/g, '\\u003e')  // Prevent > injection
      .replace(/&/g, '\\u0026')  // Prevent & injection
      .replace(/'/g, '\\u0027')  // Prevent ' injection
      .replace(/"/g, '\\u0022')  // Prevent " injection in attributes
      .replace(/\//g, '\\/')     // Prevent </script> pattern
    
    return jsonString
  } catch (error) {
    console.error('Error serializing structured data:', error)
    return '{}' // Safe fallback
  }
}

/**
 * Validate structured data to ensure it's safe and properly formatted
 */
function validateStructuredData(data: unknown): boolean {
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    return false
  }
  
  const dataObj = data as Record<string, unknown>
  
  // Check for required @context and @type fields
  if (!dataObj['@context'] || !dataObj['@type']) {
    console.warn('Structured data missing required @context or @type')
    return false
  }
  
  // Recursively check for dangerous content
  const hasUnsafeContent = (obj: unknown): boolean => {
    if (typeof obj === 'string') {
      // Check for script tags, javascript: urls, or other dangerous patterns
      const dangerousPatterns = [
        /<script[^>]*>/i,
        /javascript:/i,
        /data:/i,
        /vbscript:/i,
        /onload=/i,
        /onerror=/i,
        /onclick=/i
      ]
      
      return dangerousPatterns.some(pattern => pattern.test(obj))
    }
    
    if (Array.isArray(obj)) {
      return obj.some(hasUnsafeContent)
    }
    
    if (obj && typeof obj === 'object') {
      return Object.values(obj).some(hasUnsafeContent)
    }
    
    return false
  }
  
  if (hasUnsafeContent(dataObj)) {
    console.error('Structured data contains potentially unsafe content')
    return false
  }
  
  return true
}

export function StructuredData({ data }: StructuredDataProps) {
  const safeJsonString = useMemo(() => {
    if (!validateStructuredData(data)) {
      return '{}'  // Return empty object for invalid data
    }
    
    return escapeJsonForScript(data)
  }, [data])

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: safeJsonString
      }}
    />
  )
}

export function MultipleStructuredData({ data }: { data: Record<string, unknown>[] }) {
  // Filter out invalid data entries
  const validData = useMemo(() => {
    return data.filter(validateStructuredData)
  }, [data])

  return (
    <>
      {validData.map((item, index) => (
        <StructuredData key={index} data={item} />
      ))}
    </>
  )
}
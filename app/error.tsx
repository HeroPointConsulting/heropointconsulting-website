"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertCircle, RefreshCw, Home, MessageSquare, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Simple error logging
    console.error('Page error:', error.message, {
      digest: error.digest,
      timestamp: new Date().toISOString()
    })
  }, [error])

  // Determine error type for better user messaging
  const getErrorInfo = (error: Error) => {
    const message = error.message?.toLowerCase() || ''
    
    if (message.includes('network') || message.includes('fetch')) {
      return {
        title: 'Connection Issue',
        description: 'Unable to connect to our servers. Please check your internet connection.',
        suggestion: 'Try refreshing the page or check your network connection.'
      }
    }
    
    if (message.includes('timeout')) {
      return {
        title: 'Request Timeout',
        description: 'The request took too long to complete.',
        suggestion: 'Our servers might be busy. Please try again in a moment.'
      }
    }
    
    return {
      title: 'Something went wrong',
      description: 'An unexpected error occurred while loading this page.',
      suggestion: 'Please try refreshing the page.'
    }
  }

  const errorInfo = getErrorInfo(error)
  const isDevelopment = process.env.NODE_ENV === 'development'

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24">
      <div className="w-full max-w-md space-y-4">
        {/* Main Error Card */}
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
              <AlertCircle className="h-6 w-6 text-destructive" />
            </div>
            <CardTitle className="text-xl">{errorInfo.title}</CardTitle>
            <CardDescription>
              {errorInfo.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">
                {errorInfo.suggestion}
              </p>
              
              {isDevelopment && error.message && (
                <details className="text-left bg-destructive/10 border border-destructive/20 p-3 rounded-md">
                  <summary className="text-sm font-medium cursor-pointer text-destructive mb-2">
                    Development Error Details
                  </summary>
                  <code className="text-xs text-destructive break-all">
                    {error.message}
                  </code>
                </details>
              )}
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col gap-3">
            <div className="flex gap-2 w-full">
              <Button onClick={reset} className="flex-1 gap-2">
                <RefreshCw className="h-4 w-4" />
                Try Again
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.history.back()}
                className="gap-2"
              >
                <ArrowLeft className="h-3 w-3" />
                Back
              </Button>
            </div>
            
            <Button asChild variant="outline" size="sm" className="w-full gap-2">
              <Link href="/">
                <Home className="h-4 w-4" />
                Go to Homepage
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Support Card */}
        <Card>
          <CardContent className="pt-6 text-center">
            <MessageSquare className="h-5 w-5 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground mb-3">
              Still having trouble?
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link href="/contact">
                Contact Support
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
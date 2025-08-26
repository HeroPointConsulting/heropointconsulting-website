"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, Home, RefreshCw, Bug } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Simple error logging
    console.error('Global error:', error.message, {
      digest: error.digest,
      timestamp: new Date().toISOString()
    })
  }, [error])

  const isDevelopment = process.env.NODE_ENV === 'development'

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center p-6 bg-background">
          <div className="w-full max-w-2xl mx-auto space-y-8">
            {/* Error Header */}
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Something went wrong
                </h1>
                <p className="text-muted-foreground text-lg">
                  We&apos;re experiencing technical difficulties. Please try again.
                </p>
              </div>
            </div>

            {/* Error Details Card */}
            {isDevelopment && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Bug className="h-5 w-5" />
                    Development Error Details
                  </CardTitle>
                  <CardDescription>
                    This information is only shown in development
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {error.message && (
                    <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-md">
                      <div className="text-sm font-medium text-destructive mb-1">
                        Error Message
                      </div>
                      <code className="text-xs text-destructive break-all">
                        {error.message}
                      </code>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Actions */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Button onClick={reset} size="lg" className="gap-2">
                <RefreshCw className="h-4 w-4" />
                Try Again
              </Button>
              <Button variant="outline" asChild size="lg" className="gap-2">
                <Link href="/">
                  <Home className="h-4 w-4" />
                  Go Home
                </Link>
              </Button>
            </div>

            {/* Additional Actions */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <h3 className="font-medium">Still having issues?</h3>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="outline" asChild>
                      <Link href="/contact">
                        Contact Support
                      </Link>
                    </Button>
                    <Button 
                      variant="ghost" 
                      onClick={() => window.location.reload()}
                    >
                      Reload page
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </body>
    </html>
  )
}
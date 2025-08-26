"use client"

import React from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error: Error; reset: () => void }>
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console for debugging
    console.error('Error boundary caught an error:', error, {
      componentStack: errorInfo.componentStack || 'Unknown component stack'
    })
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    this.setState({
      hasError: true,
      error,
      errorInfo
    })
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined
    })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return <FallbackComponent error={this.state.error!} reset={this.handleReset} />
      }

      return <DefaultErrorFallback error={this.state.error!} reset={this.handleReset} />
    }

    return this.props.children
  }
}

interface ErrorFallbackProps {
  error: Error
  reset: () => void
}

function DefaultErrorFallback({ error, reset }: ErrorFallbackProps) {
  const isDevelopment = process.env.NODE_ENV === 'development'

  return (
    <div className="min-h-[400px] flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" aria-hidden="true" />
            <CardTitle className="text-destructive">Something went wrong</CardTitle>
          </div>
          <CardDescription>
            An unexpected error occurred while rendering this component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {isDevelopment && error && (
            <div className="bg-muted p-3 rounded-md">
              <p className="text-sm font-medium text-muted-foreground mb-1">Error Details:</p>
              <code className="text-xs text-destructive break-all">
                {error.message}
              </code>
            </div>
          )}
          
          <div className="flex flex-col gap-2">
            <Button onClick={reset} className="w-full gap-2">
              <RefreshCw className="h-4 w-4" aria-hidden="true" />
              Try Again
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.location.reload()} 
              className="w-full"
            >
              Reload Page
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground text-center">
            If this problem persists, please{' '}
            <a 
              href="/contact" 
              className="text-primary hover:underline"
              onClick={() => {
                // Track error report interaction
                if (typeof window !== 'undefined') {
                  console.warn('User reported error via contact link')
                }
              }}
            >
              contact support
            </a>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

// Higher-order component for easy wrapping
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
) {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  )

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`
  
  return WrappedComponent
}

// Specialized error boundaries for different contexts
export function FormErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary
      fallback={({ reset }) => (
        <div className="p-4 border border-destructive/20 rounded-md bg-destructive/5">
          <div className="flex items-center gap-2 text-destructive mb-2">
            <AlertTriangle className="h-4 w-4" aria-hidden="true" />
            <span className="font-medium">Form Error</span>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            There was an issue with the form. Please try again.
          </p>
          <Button size="sm" onClick={reset} variant="outline">
            <RefreshCw className="h-3 w-3 mr-1" aria-hidden="true" />
            Reset Form
          </Button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  )
}

export function PageErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary
      fallback={({ reset }) => (
        <main className="min-h-screen flex items-center justify-center p-6 bg-background">
          <Card className="w-full max-w-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-destructive" aria-hidden="true" />
                <CardTitle className="text-xl">Page Error</CardTitle>
              </div>
              <CardDescription>
                This page encountered an error and couldn&apos;t be displayed properly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-2">
                <Button onClick={reset} size="lg" className="w-full gap-2">
                  <RefreshCw className="h-4 w-4" aria-hidden="true" />
                  Try Again
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.href = '/'} 
                  size="lg"
                  className="w-full"
                >
                  Go Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      )}
    >
      {children}
    </ErrorBoundary>
  )
}
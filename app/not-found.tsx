"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Home, Search, ArrowLeft, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"

export default function NotFound() {
  const router = useRouter()
  const [canGoBack, setCanGoBack] = useState(false)

  useEffect(() => {
    // Check if user can go back in history
    setCanGoBack(window.history.length > 1)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24 bg-background">
      <div className="w-full max-w-2xl mx-auto text-center space-y-8">
        {/* 404 Display */}
        <div className="space-y-4">
          <div className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent select-none">
            404
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or doesn&apos;t exist.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4 sm:grid-cols-2 max-w-lg mx-auto">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="gap-2">
            <Link href="/solutions">
              <Search className="h-4 w-4" />
              Browse Solutions
            </Link>
          </Button>
        </div>

        {/* Popular Links */}
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Looking for something specific?
            </CardTitle>
            <CardDescription>
              Try these popular pages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <Link 
                href="/contact" 
                className="flex items-center gap-3 p-3 rounded-md hover:bg-muted transition-colors text-left group"
              >
                <div className="h-2 w-2 bg-primary rounded-full group-hover:scale-125 transition-transform" />
                <div>
                  <div className="font-medium">Contact Us</div>
                  <div className="text-sm text-muted-foreground">Get in touch with our team</div>
                </div>
              </Link>
              
              <Link 
                href="/solutions" 
                className="flex items-center gap-3 p-3 rounded-md hover:bg-muted transition-colors text-left group"
              >
                <div className="h-2 w-2 bg-primary rounded-full group-hover:scale-125 transition-transform" />
                <div>
                  <div className="font-medium">Solutions</div>
                  <div className="text-sm text-muted-foreground">Explore our services</div>
                </div>
              </Link>
              
              <Link 
                href="/about" 
                className="flex items-center gap-3 p-3 rounded-md hover:bg-muted transition-colors text-left group"
              >
                <div className="h-2 w-2 bg-primary rounded-full group-hover:scale-125 transition-transform" />
                <div>
                  <div className="font-medium">About Hero Point</div>
                  <div className="text-sm text-muted-foreground">Learn about our mission</div>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Help */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
          {canGoBack && (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => router.back()}
              className="gap-2"
            >
              <ArrowLeft className="h-3 w-3" />
              Go Back
            </Button>
          )}
          
          <span>Need help? {' '}
            <Link 
              href="/contact" 
              className="text-primary hover:underline font-medium"
            >
              Contact Support
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}
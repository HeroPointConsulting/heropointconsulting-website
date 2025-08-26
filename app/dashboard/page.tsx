"use client"

import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Mail, Shield, Target, Brain, Cog, CheckCircle, ArrowRight } from "lucide-react"

// Solution packages from the solutions page
const solutionPackages = [
  {
    name: "Hero Point Systems",
    subtitle: "Strategic Consulting Services",
    description: "Sprint-based consulting services to ignite your brand and operations",
    icon: Target,
    features: [
      "Brand Strategy & Identity Creation",
      "Website & Digital Presence Development", 
      "Growth Marketing & Customer Acquisition",
      "Leadership Development & Operations Scaling"
    ],
    packages: ["Ignition", "Launch", "Ascend", "Orbit"]
  },
  {
    name: "Hero Point Command Center", 
    subtitle: "Productivity Software Platform",
    description: "All-in-one platform to run your business and life in one hub",
    icon: Cog,
    features: [
      "Unified Business Dashboard",
      "Project & Task Management",
      "Calendar Integration",
      "AI Co-Pilot Assistance"
    ],
    packages: ["Personal", "Professional", "Enterprise"]
  },
  {
    name: "Hero AI",
    subtitle: "AI Solutions & Automation", 
    description: "Intelligent AI assistants that supercharge productivity",
    icon: Brain,
    features: [
      "Workflow Automation",
      "Intelligent Assistant Deployment",
      "Custom AI Solution Development", 
      "Enterprise AI Transformation"
    ],
    packages: ["Pilot", "Co-Pilot", "Autopilot"]
  }
]

export default function DashboardPage() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-2 border-purple-600 border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    // Redirect to login if not authenticated
    if (typeof window !== 'undefined') {
      window.location.href = '/login?redirect=/dashboard'
    }
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {user.name}!
            </h1>
            <p className="text-gray-600">
              Manage your Hero Point account and explore our solutions
            </p>
          </div>

          {/* Account Overview */}
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-medium flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Account Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Member since</p>
                  <p className="text-sm">
                    {new Date(user.created_at).toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                  Active Account
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-medium">Current Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center py-4">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm font-medium text-gray-600">No Active Services</p>
                  <p className="text-xs text-gray-500">Ready to get started?</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-medium">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start text-xs" asChild>
                  <a href="/contact">
                    <Mail className="h-3 w-3 mr-2" />
                    Contact Support
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-xs" asChild>
                  <a href="/solutions">
                    <ArrowRight className="h-3 w-3 mr-2" />
                    View All Solutions
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Available Solutions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Available Solutions</h2>
            <p className="text-gray-600 mb-8">
              Choose from our integrated consulting, software, and AI solutions to transform your business
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {solutionPackages.map((solution) => {
              const Icon = solution.icon
              return (
                <Card key={solution.name} className="group relative overflow-hidden border-muted hover:border-primary/50 transition-all hover:shadow-lg flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardHeader className="relative">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl text-primary">{solution.name}</CardTitle>
                    <Badge variant="outline" className="w-fit">{solution.subtitle}</Badge>
                    <CardDescription className="text-sm mt-2">{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative flex flex-col flex-1">
                    <div className="space-y-3 mb-6">
                      <h4 className="text-sm font-semibold text-gray-700">Key Features:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="text-sm font-semibold text-gray-700">Available Packages:</h4>
                      <div className="flex flex-wrap gap-1">
                        {solution.packages.map((pkg) => (
                          <Badge key={pkg} variant="secondary" className="text-xs">
                            {pkg}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <Button className="w-full" variant="outline" asChild>
                        <a href="/contact">
                          Subscribe to {solution.name.split(' ').pop()}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Contact CTA */}
          <Card className="mt-12 bg-primary text-primary-foreground">
            <CardContent className="text-center py-8">
              <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
              <p className="mb-6 text-primary-foreground/90">
                Let&apos;s discuss how our integrated approach can drive your growth. Contact us today!
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <a href="/contact" className="flex items-center gap-2">
                    Schedule a Consultation
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                  <a href="/solutions">Learn More</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
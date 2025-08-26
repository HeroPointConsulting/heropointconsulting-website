"use client"

import { ArrowRight, Users, Globe, TrendingUp, Target, Cog, Brain, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const benefits = [
  {
    icon: Brain,
    title: "Work with cutting-edge AI tools daily",
    description: "Access to the latest AI technologies and tools to enhance your productivity"
  },
  {
    icon: Users,
    title: "Flat, agile team structure",
    description: "Rapid learning opportunities in a collaborative, non-hierarchical environment"
  },
  {
    icon: Globe,
    title: "Remote work flexibility",
    description: "Modern benefits package with flexible remote work options"
  },
  {
    icon: TrendingUp,
    title: "Equity opportunities",
    description: "Share in the success of a high-growth technology company"
  }
]

const positions = {
  systems: [
    {
      title: "Strategic Consultant",
      description: "Drive client engagements in brand, web, or marketing sprints",
      department: "Hero Point Systems"
    },
    {
      title: "Engagement Manager", 
      description: "Oversee multi-sprint programs across our services",
      department: "Hero Point Systems"
    },
    {
      title: "Brand Strategist",
      description: "Specialized role in brand development and positioning",
      department: "Hero Point Systems"
    },
    {
      title: "Web UX Consultant",
      description: "Design and optimize user experiences for rapid launches",
      department: "Hero Point Systems"
    },
    {
      title: "Graphic Designer",
      description: "Create compelling visual designs for brands and marketing materials",
      department: "Hero Point Systems"
    }
  ],
  commandCenter: [
    {
      title: "Full-Stack Software Engineer",
      description: "Develop platform features (React, Node.js)",
      department: "Hero Point Command Center"
    },
    {
      title: "Product Manager",
      description: "Shape the product roadmap and feature prioritization",
      department: "Hero Point Command Center"
    },
    {
      title: "UX/UI Designer",
      description: "Design intuitive interfaces for our platform",
      department: "Hero Point Command Center"
    }
  ],
  heroAI: [
    {
      title: "AI Solutions Architect",
      description: "Design custom AI solutions for client workflows",
      department: "Hero AI"
    },
    {
      title: "Data Engineer",
      description: "Develop data pipelines and integrations",
      department: "Hero AI"
    }
  ]
}

const allPositions = [
  ...positions.systems,
  ...positions.commandCenter,
  ...positions.heroAI
]

export default function CareersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-primary/10 dark:from-primary/10 dark:via-gray-900 dark:to-primary/5" />
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-primary">
              Join Our Team
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              At HPC, small teams with big ambitions do heroic work. We leverage cutting-edge AI in our day-to-day, freeing our talent to focus on creative, high-impact challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Culture & Benefits Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              Culture & Benefits
            </h2>
            <p className="mt-4 text-muted-foreground">
              Why talented people choose to build their careers at HPC
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <Card key={benefit.title} className="group relative overflow-hidden border-muted hover:border-primary/50 transition-all hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardHeader className="text-center">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground mx-auto">
                      <Icon className="h-6 w-6" />
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              Open Positions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Find your perfect role across our three divisions
            </p>
          </div>

          <Tabs defaultValue="all" className="mx-auto max-w-6xl">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Positions</TabsTrigger>
              <TabsTrigger value="systems">Systems</TabsTrigger>
              <TabsTrigger value="platform">Platform</TabsTrigger>
              <TabsTrigger value="ai">AI</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-12">
              <div className="space-y-4">
                {allPositions.map((position, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all hover:border-primary/50">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl text-primary">{position.title}</CardTitle>
                          <Badge variant="outline" className="mt-2">{position.department}</Badge>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`mailto:partners@heropointconsulting.com?subject=Application for ${position.title}`}>
                            Apply Now
                          </Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{position.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="systems" className="mt-12">
              <div className="text-center mb-8">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Hero Point Systems</h3>
                <p className="text-muted-foreground mt-2">Strategic Consulting Division</p>
              </div>
              <div className="space-y-4">
                {positions.systems.map((position, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all hover:border-primary/50">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl text-primary">{position.title}</CardTitle>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`mailto:partners@heropointconsulting.com?subject=Application for ${position.title}`}>
                            Apply Now
                          </Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{position.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="platform" className="mt-12">
              <div className="text-center mb-8">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-4">
                  <Cog className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Hero Point Command Center</h3>
                <p className="text-muted-foreground mt-2">Software Platform Division</p>
              </div>
              <div className="space-y-4">
                {positions.commandCenter.map((position, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all hover:border-primary/50">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl text-primary">{position.title}</CardTitle>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`mailto:partners@heropointconsulting.com?subject=Application for ${position.title}`}>
                            Apply Now
                          </Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{position.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ai" className="mt-12">
              <div className="text-center mb-8">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-4">
                  <Brain className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Hero AI</h3>
                <p className="text-muted-foreground mt-2">AI Solutions Division</p>
              </div>
              <div className="space-y-4">
                {positions.heroAI.map((position, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all hover:border-primary/50">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl text-primary">{position.title}</CardTitle>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`mailto:partners@heropointconsulting.com?subject=Application for ${position.title}`}>
                            Apply Now
                          </Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{position.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-8">
              Application Process
            </h2>
            
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Contact:</span>
                </div>
                <Link 
                  href="mailto:partners@heropointconsulting.com" 
                  className="text-lg text-primary hover:underline"
                >
                  partners@heropointconsulting.com
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Don&apos;t see a perfect fit?</strong> We still want to hear from you – we&apos;re always looking for heroic talent.
                </p>
                <div className="mt-8">
                  <Button size="lg" asChild>
                    <Link href="mailto:partners@heropointconsulting.com?subject=General Interest - Career Opportunities">
                      Get in Touch
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
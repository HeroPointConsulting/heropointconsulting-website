"use client"

import { ArrowRight, CheckCircle, Target, Brain, Cog, Zap, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const divisions = [
  {
    icon: Target,
    title: "Hero Point Systems",
    subtitle: "Strategic Consulting Services",
    description: "Sprint-based consulting services to ignite your brand and operations. From naming and branding to digital launch and operational scaling – we deliver in days what others take months to do.",
    features: [
      "Brand Development (Ignition)",
      "Digital Presence (Launch)",
      "Growth Marketing (Ascend)",
      "Operations Scaling (Orbit)"
    ],
  },
  {
    icon: Cog,
    title: "Hero Point Command Center",
    subtitle: "Productivity Software Platform",
    description: "All-in-one platform to run your business and life in one hub. Strategic plans, projects, tasks, calendars, and finances unified in a single interface with AI assistance.",
    features: [
      "Unified Business Dashboard",
      "Project & Task Management",
      "Calendar Integration",
      "AI Co-Pilot Assistance"
    ],
  },
  {
    icon: Brain,
    title: "Hero AI",
    subtitle: "AI Solutions & Automation",
    description: "Intelligent AI assistants that supercharge productivity. Proactive automation that observes, learns, and acts as digital team members augmenting human decision-making.",
    features: [
      "Workflow Automation",
      "Intelligent Assistants",
      "Custom AI Development",
      "Enterprise AI Integration"
    ],
  },
]

const whyChooseUs = [
  {
    icon: Users,
    title: "Integrated Approach",
    description: "Consulting, technology, and AI under one roof – no siloed vendors to coordinate."
  },
  {
    icon: Zap,
    title: "Speed & Agility",
    description: "Proprietary 1-week sprint methodology leveraging AI – deliver in weeks what others do in months, at ~50% typical cost and timeline."
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Our unified approach drives measurable outcomes: faster launches, higher conversion, streamlined operations."
  },
  {
    icon: CheckCircle,
    title: "Cost-Effective Innovation",
    description: "Advanced solutions at startup-friendly pricing through AI-accelerated execution and lean operations."
  },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-primary/10 dark:from-primary/10 dark:via-gray-900 dark:to-primary/5" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-background/20 shadow-xl shadow-primary/10 ring-1 ring-primary/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        </div>
        
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl text-primary animate-in">
              Unlock Your Heroic Potential
            </h1>
            <h2 className="mt-6 text-2xl font-medium text-muted-foreground">
              Integrated Consulting, Software, and AI to Power Your Growth
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Strategy meets Software meets AI – everything you need to transform from good to great, fast.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4 flex-col sm:flex-row">
              <Button size="lg" className="gap-2 w-full sm:w-auto" asChild>
                <Link href="/solutions">
                  Explore Our Solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars of Growth Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              Three Pillars of Growth
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hero Point unites three solution areas to drive your transformation:
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {divisions.map((division) => {
                const Icon = division.icon
                return (
                  <Card key={division.title} className="group relative overflow-hidden border-muted hover:border-primary/50 transition-all hover:shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CardHeader className="text-center">
                      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground mx-auto">
                        <Icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-2xl text-primary">{division.title}</CardTitle>
                      <Badge variant="outline" className="w-fit mx-auto mt-2">{division.subtitle}</Badge>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <CardDescription className="text-base">
                        {division.description}
                      </CardDescription>
                      <div className="space-y-2">
                        {division.features.map((feature) => (
                          <div key={feature} className="flex items-center justify-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Hero Point Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              Why Choose Hero Point
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {whyChooseUs.map((item) => {
                const Icon = item.icon
                return (
                  <Card key={item.title} className="group relative overflow-hidden border-muted hover:border-primary/50 transition-all hover:shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-8">
              Our Mission
            </h2>
            <p className="text-lg leading-8 text-muted-foreground mb-8">
              Founded by veteran strategists and technologists, HPC is on a mission to empower 1,000,000 businesses and 10,000,000 individuals by 2035.
            </p>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-primary px-6 py-24 text-center sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary to-primary/80" />
        <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-20" />
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to unlock your next level of performance?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/90">
            Get in touch – our team will respond within one business day.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <Button size="lg" variant="secondary" className="gap-2" asChild>
              <Link href="/contact">
                Contact Us Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-secondary/50 text-secondary-foreground border-transparent hover:bg-secondary/70 hover:border-transparent transition-all duration-200" asChild>
              <Link href="/solutions">View Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
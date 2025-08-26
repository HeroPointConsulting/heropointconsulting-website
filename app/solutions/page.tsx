"use client"

import { ArrowRight, CheckCircle, Target, Brain, Cog, Zap, BarChart3, Calendar, Bot, Rocket, Users, Settings } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MultipleStructuredData } from "@/components/structured-data"
import { generateServiceSchema, HERO_POINT_SERVICES } from "@/lib/structured-data"

const consultingPackages = [
  {
    name: "Ignition",
    description: "Brand development and identity creation",
    icon: Rocket,
    features: [
      "Brand Strategy Development",
      "Visual Identity Creation",
      "Brand Guidelines",
      "Market Positioning",
      "Competitive Analysis"
    ]
  },
  {
    name: "Launch", 
    description: "Website and digital presence development",
    icon: Zap,
    features: [
      "Website Design & Development",
      "Digital Asset Creation",
      "SEO Optimization",
      "Content Strategy",
      "Digital Marketing Setup"
    ]
  },
  {
    name: "Ascend",
    description: "Growth marketing and customer acquisition",
    icon: BarChart3,
    features: [
      "Growth Strategy Development",
      "Marketing Campaign Creation",
      "Lead Generation Systems",
      "Conversion Optimization",
      "Performance Analytics"
    ]
  },
  {
    name: "Orbit",
    description: "Leadership development and operations scaling",
    icon: Users,
    features: [
      "Leadership Development Programs",
      "Operational Process Design",
      "Team Structure Optimization",
      "Performance Management Systems",
      "Scalability Planning"
    ]
  }
]

const platformFeatures = [
  {
    icon: Settings,
    title: "Unified Business Dashboard",
    description: "Centralized view of all your business operations and metrics"
  },
  {
    icon: CheckCircle,
    title: "Project & Task Management",
    description: "Streamlined project tracking with intelligent task automation"
  },
  {
    icon: Calendar,
    title: "Calendar Integration",
    description: "Seamless scheduling across all your business activities"
  },
  {
    icon: Bot,
    title: "AI Co-Pilot Assistance", 
    description: "AI-powered insights and recommendations for better decisions"
  }
]

const platformBenefits = [
  "All-in-one business management",
  "Real-time insights and reporting", 
  "Team collaboration tools",
  "Personal productivity features"
]

const aiServiceTiers = [
  {
    name: "Pilot",
    subtitle: "Automation kickstart projects",
    description: "Get started with AI automation for your most critical workflows",
    features: [
      "Single workflow automation",
      "Basic AI assistant setup",
      "Integration with existing tools",
      "1-month implementation",
      "Basic support and training"
    ],
    popular: false
  },
  {
    name: "Co-Pilot", 
    subtitle: "Multi-workflow AI integration",
    description: "Comprehensive AI integration across multiple business processes",
    features: [
      "Multiple workflow automation",
      "Advanced AI assistant deployment",
      "Custom AI model fine-tuning",
      "3-month implementation",
      "Priority support and training",
      "Performance analytics"
    ],
    popular: true
  },
  {
    name: "Autopilot",
    subtitle: "Full enterprise AI transformation", 
    description: "Complete AI-driven business transformation for enterprises",
    features: [
      "Enterprise-wide AI deployment",
      "Custom AI solution development",
      "Advanced workflow automation",
      "6-month implementation",
      "Dedicated support team",
      "Custom AI model development",
      "Advanced analytics and insights"
    ],
    popular: false
  }
]

const aiServices = [
  "Workflow Automation",
  "Intelligent Assistant Deployment", 
  "Custom AI Solution Development",
  "Enterprise AI Transformation"
]

export default function SolutionsPage() {
  // Generate structured data for all services
  const serviceSchemas = HERO_POINT_SERVICES.map(service => generateServiceSchema(service))

  return (
    <>
      <MultipleStructuredData data={serviceSchemas as unknown as Record<string, unknown>[]} />
      <div className="flex flex-col">
        {/* Hero Section */}
      <section className="relative overflow-hidden bg-background px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-primary/10 dark:from-primary/10 dark:via-gray-900 dark:to-primary/5" />
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-primary">
              Our Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              HPC unites three solution areas to drive your growth:
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Tabs defaultValue="consulting" className="mx-auto max-w-6xl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="consulting">Consulting Services</TabsTrigger>
              <TabsTrigger value="software">Software Platform</TabsTrigger>
              <TabsTrigger value="ai">AI Solutions</TabsTrigger>
            </TabsList>

            {/* Consulting Services Tab */}
            <TabsContent value="consulting" className="mt-12">
              <div className="text-center mb-12">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-primary">Hero Point Systems</h2>
                <Badge variant="outline" className="mt-2">Strategic Consulting Services</Badge>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                  Sprint-based consulting services to ignite your brand and operations. From naming and branding to digital launch and operational scaling – we deliver in days what others take months to do.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-16">
                {consultingPackages.map((pkg) => {
                  const Icon = pkg.icon
                  return (
                    <Card key={pkg.name} className="group relative overflow-hidden border-muted hover:border-primary/50 transition-all hover:shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <CardHeader className="text-center">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground mx-auto">
                          <Icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-xl text-primary">{pkg.name}</CardTitle>
                        <CardDescription className="text-sm">{pkg.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {pkg.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              <div className="mt-12 text-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Started with Consulting
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            {/* Software Platform Tab */}
            <TabsContent value="software" className="mt-12">
              <div className="text-center mb-12">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-4">
                  <Cog className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-primary">Hero Point Command Center</h2>
                <Badge variant="outline" className="mt-2">Productivity Software Platform</Badge>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                  All-in-one platform to run your business and life in one hub. Strategic plans, projects, tasks, calendars, and finances unified in a single interface with AI assistance.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mt-16">
                <div>
                  <h3 className="text-xl font-bold mb-6 text-primary">Platform Features</h3>
                  <div className="space-y-6">
                    {platformFeatures.map((feature) => {
                      const Icon = feature.icon
                      return (
                        <div key={feature.title} className="flex gap-4">
                          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-6 text-primary">Benefits</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {platformBenefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Learn More About Command Center
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            {/* AI Solutions Tab */}
            <TabsContent value="ai" className="mt-12">
              <div className="text-center mb-12">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-4">
                  <Brain className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-primary">Hero AI</h2>
                <Badge variant="outline" className="mt-2">AI Solutions & Automation</Badge>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                  Intelligent AI assistants that supercharge productivity. Proactive automation that observes, learns, and acts as digital team members augmenting human decision-making.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-xl font-bold mb-6 text-primary text-center">AI Services</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
                  {aiServices.map((service) => (
                    <div key={service} className="flex items-center gap-2 p-4 rounded-lg border">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-xl font-bold mb-8 text-primary text-center">Service Tiers</h3>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                  {aiServiceTiers.map((tier) => (
                    <Card
                      key={tier.name}
                      className={`relative ${tier.popular ? "border-primary shadow-lg scale-105" : ""}`}
                    >
                      {tier.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          <Badge className="px-3 py-1">Most Popular</Badge>
                        </div>
                      )}
                      <CardHeader className="text-center">
                        <CardTitle className="text-2xl text-primary">{tier.name}</CardTitle>
                        <Badge variant="outline" className="w-fit mx-auto">{tier.subtitle}</Badge>
                        <CardDescription className="mt-4">{tier.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {tier.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="mt-12 text-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Explore AI Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-primary px-6 py-24 text-center sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary to-primary/80" />
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to transform your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/90">
            Let&apos;s discuss how our integrated approach can drive your growth. Get in touch – our team will respond within one business day.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <Button size="lg" variant="secondary" className="gap-2" asChild>
              <Link href="/contact">
                Contact Us Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-secondary/50 text-secondary-foreground border-transparent hover:bg-secondary/70 hover:border-transparent transition-all duration-200" asChild>
              <Link href="/about">Learn More About HPC</Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
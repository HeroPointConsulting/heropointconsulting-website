"use client"

import { Target, Brain, Cog, Trophy, Zap, MessageCircle, Shield, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StructuredData } from "@/components/structured-data"
import { generateAboutPageSchema } from "@/lib/structured-data"

const coreValues = [
  {
    icon: Trophy,
    title: "Champion's Mentality",
    description: "Think like a champion: bold, driven, resilient."
  },
  {
    icon: Zap,
    title: "Demand Excellence", 
    description: "Set the bar high and never compromise on quality."
  },
  {
    icon: MessageCircle,
    title: "Excellent Communication",
    description: "Clarity, transparency, and empathy in all we say and do."
  },
  {
    icon: Shield,
    title: "Radical Ownership",
    description: "Take full responsibility. If it's ours, we own it completely."
  },
  {
    icon: Lightbulb,
    title: "Relentless Innovation",
    description: "Continuously improve and pioneer; never stop evolving."
  },
]

const divisions = [
  {
    icon: Target,
    title: "Hero Point Systems",
    subtitle: "The Strategy",
    description: "Our strategic consulting division serves as the entry point, guiding organizations through pivotal growth challenges with sprint-based methodologies."
  },
  {
    icon: Cog,
    title: "Hero Point Command Center",
    subtitle: "The Software",
    description: "Our productivity platform provides the scalable infrastructure needed to execute strategic plans and manage complex operations."
  },
  {
    icon: Brain,
    title: "Hero AI",
    subtitle: "The Intelligence", 
    description: "Our AI solutions imbue intelligence throughout the entire ecosystem, supercharging both consulting engagements and platform capabilities."
  },
]

export default function AboutPage() {
  return (
    <>
      <StructuredData data={generateAboutPageSchema()} />
      <div className="flex flex-col">
        {/* Hero Section */}
      <section className="relative overflow-hidden bg-background px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-primary/10 dark:from-primary/10 dark:via-gray-900 dark:to-primary/5" />
        </div>
        
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-primary">
              Empowering Heroic Potential
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Founded by veteran strategists and technologists, we&apos;re on a mission to transform how organizations and individuals achieve their greatest ambitions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Hero Point Consulting&apos;s mission is to empower organizations and individuals to achieve their heroic potential by unifying brand, technology, and people into an integrated growth system.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    By 2035, our vision is to empower over a million businesses and ten million individuals through this integrated ecosystem, becoming the world&apos;s premier growth command center.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The HPC Story Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-16">
              The HPC Story
            </h2>
          </div>
          
          <div className="mx-auto max-w-5xl">
            <div className="space-y-12">
              {/* Origin */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">1</div>
                    Origin
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Hero Point Consulting was born from a simple insight: even the most ambitious organizations struggle to reach their heroic potential when their efforts are fragmented. Initially launched as a boutique consulting firm, Hero Point began by guiding businesses through pivotal growth challenges.
                  </p>
                </CardContent>
              </Card>

              {/* Evolution */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">2</div>
                    Evolution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    As we engaged with more clients, we saw visionary plans falter in execution due to lack of proper tools and systems. Rather than let those gaps slow our clients&apos; hero&apos;s journey, HPC chose to fill them by expanding into software and AI solutions.
                  </p>
                </CardContent>
              </Card>

              {/* Today */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">3</div>
                    Today
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    HPC has transformed from a small consultancy into an integrated growth ecosystem, intentionally designed so our divisions work together: consulting engagements spark ideas, the Command Center provides delivery mechanisms, and AI tools supercharge everything.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              Our Core Values
            </h2>
            <p className="mt-4 text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {coreValues.map((value) => {
                const Icon = value.icon
                return (
                  <Card key={value.title} className="group relative overflow-hidden border-muted hover:border-primary/50 transition-all hover:shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CardHeader className="text-center">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground mx-auto">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg text-primary">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-sm">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Three Divisions Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-8">
              The Three Divisions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              HPC is structured into three divisions – the Strategy, the Software, and the Intelligence. Together, they deliver end-to-end growth where consulting engagements often serve as the entry point, the Command Center provides a scalable platform, and Hero AI imbues intelligence throughout.
            </p>
          </div>
          
          <div className="mx-auto max-w-6xl">
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
                      <CardTitle className="text-xl text-primary">{division.title}</CardTitle>
                      <Badge variant="outline" className="w-fit mx-auto mt-2">{division.subtitle}</Badge>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-sm">
                        {division.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
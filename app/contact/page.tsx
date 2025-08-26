"use client"

import { useState } from "react"
import { Mail, Send, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { StructuredData } from "@/components/structured-data"
import { generateContactPageSchema } from "@/lib/structured-data"
import { validateContactForm, sanitizeContactForm, type ContactFormData } from "@/lib/validation"

const interestAreas = [
  "Consulting Services",
  "Command Center Platform", 
  "AI Solutions",
  "General Inquiry",
  "Career Opportunities"
]

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
    interestArea: ""
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setIsSubmitting(true)
    setErrorMessage('')
    
    // Validate form data
    const validation = validateContactForm(formData)
    if (!validation.isValid) {
      setErrors(validation.errors)
      setIsSubmitting(false)
      return
    }

    try {
      // Sanitize form data
      const sanitizedData = sanitizeContactForm(formData)
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
          interestArea: ""
        })
        setErrors({})
      } else {
        setSubmitStatus('error')
        const errorData = await response.json()
        setErrorMessage(errorData.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <StructuredData data={generateContactPageSchema()} />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Mail className="h-4 w-4" />
              Get in Touch
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Ready to Unlock Your Heroic Potential?
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let&apos;s discuss how Hero Point can transform your business with integrated consulting, software, and AI solutions.
            </p>
          </div>

          <div className="space-y-12">
            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Tell us about your project and how we can help you achieve your goals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg dark:bg-green-950 dark:border-green-800">
                      <p className="text-green-800 dark:text-green-300 font-medium">Thank you for your message!</p>
                      <p className="text-green-700 dark:text-green-400">We&apos;ll get back to you within 24 hours.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg dark:bg-red-950 dark:border-red-800">
                      <p className="text-red-800 dark:text-red-300 font-medium">Error sending message</p>
                      <p className="text-red-700 dark:text-red-400">{errorMessage}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className={errors.name ? 'border-red-300 dark:border-red-600' : ''}
                        />
                        {errors.name && <p className="text-red-600 dark:text-red-400 text-sm mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={errors.email ? 'border-red-300 dark:border-red-600' : ''}
                        />
                        {errors.email && <p className="text-red-600 dark:text-red-400 text-sm mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="interestArea">Area of Interest *</Label>
                      <Select value={formData.interestArea} onValueChange={(value) => handleInputChange('interestArea', value)}>
                        <SelectTrigger className={errors.interestArea ? 'border-red-300 dark:border-red-600' : ''}>
                          <SelectValue placeholder="Select an area of interest" />
                        </SelectTrigger>
                        <SelectContent>
                          {interestAreas.map((area) => (
                            <SelectItem key={area} value={area}>
                              {area}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.interestArea && <p className="text-red-600 dark:text-red-400 text-sm mt-1">{errors.interestArea}</p>}
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us about your project, goals, or questions..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className={errors.message ? 'border-red-300 dark:border-red-600' : ''}
                      />
                      {errors.message && <p className="text-red-600 dark:text-red-400 text-sm mt-1">{errors.message}</p>}
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="max-w-md mx-auto">
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Contact Information
                  </CardTitle>
                  <CardDescription>
                    Reach out to discuss your project needs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground break-all">partners@heropointconsulting.com</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Response Time
                    </p>
                    <p className="text-muted-foreground">Within 24 hours</p>
                  </div>
                  <div className="pt-4">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">
                      Secure Contact Form
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
"use client"

import { Shield, Mail, User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-primary/10 dark:from-primary/10 dark:via-gray-900 dark:to-primary/5" />
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-6">
              <Shield className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-primary">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-8">
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Personal Information</h3>
                  <p className="text-muted-foreground">
                    We collect personal information you provide to us, including:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Professional information (company, job title, industry)</li>
                    <li>Account credentials and profile information</li>
                    <li>Payment information for subscription services</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-semibold mb-2">Usage Information</h3>
                  <p className="text-muted-foreground">
                    We automatically collect information about how you use our services:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                    <li>Website and platform usage analytics</li>
                    <li>Device information and browser type</li>
                    <li>IP address and location data</li>
                    <li>Interaction with our content and features</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide and improve our consulting, software, and AI services</li>
                  <li>Process payments and manage your account</li>
                  <li>Communicate with you about our services and updates</li>
                  <li>Personalize your experience with our platform</li>
                  <li>Analyze usage patterns to enhance our offerings</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in our operations</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> When you explicitly consent to sharing your information</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate technical and organizational measures to protect your information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and employee training</li>
                  <li>Secure payment processing through trusted providers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We retain your information for as long as necessary to provide our services and comply with legal obligations. 
                  Account information is retained while your account is active and for a reasonable period after closure 
                  to handle any remaining obligations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar technologies to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website performance and usage</li>
                  <li>Provide personalized content and features</li>
                  <li>Enable security features and fraud prevention</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  You can control cookies through your browser settings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Children&apos;s Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our services are not directed to children under 13 years of age. We do not knowingly collect 
                  personal information from children under 13. If you believe we have collected information 
                  from a child under 13, please contact us immediately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place to protect your information in accordance 
                  with applicable data protection laws.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes 
                  by posting the new policy on this page and updating the &quot;Last updated&quot; date. We encourage you 
                  to review this policy periodically.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="font-medium">Hero Point Consulting</p>
                  <p className="text-muted-foreground">Email: {process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'partners@heropointconsulting.com'}</p>
                  <p className="text-muted-foreground">
                    We will respond to your inquiry within 30 days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
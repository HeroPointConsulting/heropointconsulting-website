"use client"

import { FileText, AlertTriangle, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function TermsOfServicePage() {
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
              <FileText className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-primary">
              Terms of Service
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              These terms govern your use of Hero Point Consulting&apos;s services and platform.
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
            
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                By using our services, you agree to be bound by these Terms of Service. Please read them carefully.
              </AlertDescription>
            </Alert>

            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  By accessing or using Hero Point Consulting&apos;s services, including our consulting services, 
                  Command Center platform, and Hero AI solutions, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations.
                </p>
                <p className="text-muted-foreground">
                  If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Description of Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  Hero Point Consulting provides three main service categories:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Hero Point Systems (Strategic Consulting)</h3>
                    <p className="text-muted-foreground">
                      Sprint-based consulting services including brand development, digital presence creation, 
                      growth marketing, and operations scaling.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Hero Point Command Center (Software Platform)</h3>
                    <p className="text-muted-foreground">
                      A productivity platform that unifies business operations, project management, 
                      and AI-assisted decision making.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Hero AI (AI Solutions)</h3>
                    <p className="text-muted-foreground">
                      Intelligent automation and AI assistant services designed to enhance productivity 
                      and decision-making processes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. User Accounts and Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>You must provide accurate and complete information when creating an account</li>
                  <li>You are responsible for maintaining the security of your account credentials</li>
                  <li>You must notify us immediately of any unauthorized use of your account</li>
                  <li>You may not share your account with others or create accounts for fraudulent purposes</li>
                  <li>We reserve the right to suspend or terminate accounts that violate these terms</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Subscription Services</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                    <li>All fees are non-refundable except as required by law</li>
                    <li>Price changes will be communicated with 30 days advance notice</li>
                    <li>Failure to pay may result in service suspension or termination</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-semibold mb-2">Consulting Services</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Consulting fees are outlined in individual service agreements</li>
                    <li>Payment terms vary by engagement and will be specified in your contract</li>
                    <li>Additional work outside the original scope may incur additional charges</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Acceptable Use Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">You agree not to use our services to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights of others</li>
                  <li>Upload or distribute malicious software or harmful content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt our services or servers</li>
                  <li>Use our services for spam or unsolicited communications</li>
                  <li>Engage in any fraudulent or deceptive activities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Our Content</h3>
                  <p className="text-muted-foreground">
                    All content, features, and functionality of our services are owned by Hero Point Consulting 
                    and are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Your Content</h3>
                  <p className="text-muted-foreground">
                    You retain ownership of content you upload to our platform. By uploading content, 
                    you grant us a license to use, store, and process your content to provide our services.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your privacy is important to us. Our collection and use of personal information is governed by our 
                  <a href="/privacy" className="text-primary hover:underline"> Privacy Policy</a>, 
                  which is incorporated into these terms by reference.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Service Availability and Modifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>We strive to maintain high service availability but cannot guarantee 100% uptime</li>
                  <li>We may modify, suspend, or discontinue services with reasonable notice</li>
                  <li>Planned maintenance will be communicated in advance when possible</li>
                  <li>We are not liable for damages resulting from service interruptions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  To the maximum extent permitted by law, Hero Point Consulting shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Service interruptions or security breaches</li>
                  <li>Third-party actions or content</li>
                  <li>Any damages exceeding the fees paid for services in the preceding 12 months</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Indemnification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You agree to indemnify and hold harmless Hero Point Consulting from any claims, damages, 
                  or expenses arising from your use of our services, violation of these terms, or infringement 
                  of any third-party rights.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">By You</h3>
                  <p className="text-muted-foreground">
                    You may terminate your account at any time by contacting us or using account settings. 
                    Termination does not relieve you of payment obligations for services already provided.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">By Us</h3>
                  <p className="text-muted-foreground">
                    We may suspend or terminate your access for violations of these terms, non-payment, 
                    or other legitimate business reasons with appropriate notice.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>12. Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Any disputes arising from these terms or our services will be resolved through:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Good faith negotiations between the parties</li>
                  <li>Binding arbitration if negotiations fail</li>
                  <li>Arbitration will be conducted under applicable arbitration rules</li>
                  <li>The prevailing party may recover reasonable attorney fees</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>13. Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction 
                  where Hero Point Consulting operates, without regard to conflict of law principles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>14. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update these Terms of Service from time to time. Material changes will be communicated 
                  with at least 30 days advance notice. Your continued use of our services after changes take effect 
                  constitutes acceptance of the new terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>15. Severability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If any provision of these terms is found to be unenforceable, the remaining provisions will continue 
                  in full force and effect. The unenforceable provision will be modified to the minimum extent necessary 
                  to make it enforceable.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="font-medium">Hero Point Consulting</p>
                  <p className="text-muted-foreground">Email: partners@heropointconsulting.com</p>
                  <p className="text-muted-foreground">
                    We will respond to your inquiry within 5 business days.
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
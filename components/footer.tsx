import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"
import { FooterLogo } from "@/components/footer-logo"

const footerLinks = {
  solutions: [
    { name: "Hero Point Systems", href: "/solutions" },
    { name: "Command Center", href: "/solutions" },
    { name: "Hero AI", href: "/solutions" },
    { name: "All Solutions", href: "/solutions" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Consulting Services", href: "/solutions" },
    { name: "Software Platform", href: "/solutions" },
    { name: "AI Solutions", href: "/solutions" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

const socialLinks = [
  { name: "Email", icon: Mail, href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'partners@heropointconsulting.com'}` },
  { name: "LinkedIn", icon: Linkedin, href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/heropointconsulting" },
]

export function Footer() {

  return (
    <footer id="footer" className="border-t bg-background" role="contentinfo" aria-label="Site footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 lg:col-span-1">
              <FooterLogo />
              <p className="mt-4 text-sm text-muted-foreground">
                Integrated Consulting, Software, and AI to Power Your Growth. Strategy meets Software meets AI.
              </p>
              <div className="mt-6 flex space-x-4">
                {socialLinks.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span className="sr-only">{item.name}</span>
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary">Solutions</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary">Company</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary">Services</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary">Legal</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6 md:flex md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hero Point Consulting. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <Link
              href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'partners@heropointconsulting.com'}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'partners@heropointconsulting.com'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
// Structured data (JSON-LD) generators for SEO

type JsonLdBase = {
  '@context': string
  '@type': string
}

interface Organization extends JsonLdBase {
  '@type': 'Organization'
  name: string
  url: string
  logo: {
    '@type': 'ImageObject'
    url: string
  }
  contactPoint: {
    '@type': 'ContactPoint'
    telephone: string
    contactType: string
    email: string
  }
  address: {
    '@type': 'PostalAddress'
    addressCountry: string
    addressRegion: string
  }
  sameAs: string[]
  description: string
  founder?: {
    '@type': 'Person'
    name: string
  }
  foundingDate?: string
  numberOfEmployees?: {
    '@type': 'QuantitativeValue'
    value: string
  }
  industry?: string
  serviceArea?: {
    '@type': 'Place'
    name: string
  }
}

interface WebSite extends JsonLdBase {
  '@type': 'WebSite'
  name: string
  url: string
  description: string
  potentialAction: {
    '@type': 'SearchAction'
    target: {
      '@type': 'EntryPoint'
      urlTemplate: string
    }
    'query-input': string
  }
  publisher: {
    '@type': 'Organization'
    name: string
    url: string
    logo: {
      '@type': 'ImageObject'
      url: string
    }
  }
}

interface Service extends JsonLdBase {
  '@type': 'Service'
  name: string
  description: string
  provider: {
    '@type': 'Organization'
    name: string
    url: string
  }
  serviceType: string
  areaServed: string
}

type StructuredData = Organization | WebSite | Service

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

export function generateOrganizationSchema(): Organization {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hero Point Consulting",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/hpc-image-general-200x200.png`
    },
    description: "Integrated Consulting, Software, and AI to Power Your Growth. Strategy meets Software meets AI – everything you need to transform from good to great, fast.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-HEROPOINT", // Replace with actual phone
      contactType: "customer service",
      email: "partners@heropointconsulting.com"
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "United States"
    },
    sameAs: [
      process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/heropointconsulting",
      // Add other social media URLs
    ],
    founder: {
      "@type": "Person",
      name: "Hero Point Consulting Team"
    },
    foundingDate: "2024", // Replace with actual founding date
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "1-10"
    },
    industry: "Business Consulting",
    serviceArea: {
      "@type": "Place",
      name: "United States"
    }
  }
}

export function generateWebSiteSchema(): WebSite {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hero Point Consulting",
    url: baseUrl,
    description: "Integrated Consulting, Software, and AI to Power Your Growth",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    publisher: {
      "@type": "Organization",
      name: "Hero Point Consulting",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/hpc-image-general-200x200.png`
      }
    }
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  serviceType: string
}): Service {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Hero Point Consulting",
      url: baseUrl
    },
    serviceType: service.serviceType,
    areaServed: "United States"
  }
}

export function generateContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Hero Point Consulting",
    description: "Get in touch with Hero Point Consulting for business transformation solutions",
    url: `${baseUrl}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: "Hero Point Consulting",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "partners@heropointconsulting.com",
        availableLanguage: "English"
      }
    }
  }
}

export function generateAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Hero Point Consulting",
    description: "Learn about Hero Point Consulting's mission to help businesses transform and grow",
    url: `${baseUrl}/about`,
    mainEntity: generateOrganizationSchema()
  }
}

export function generateBreadcrumbSchema(breadcrumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url
    }))
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  }
}

export function generateJobPostingSchema(job: {
  title: string
  description: string
  location: string
  employmentType: string
  datePosted: string
  validThrough: string
  salary?: {
    min: number
    max: number
    currency: string
  }
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    hiringOrganization: {
      "@type": "Organization",
      name: "Hero Point Consulting",
      url: baseUrl,
      logo: `${baseUrl}/hpc-image-general-200x200.png`
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
        addressCountry: "US"
      }
    },
    employmentType: job.employmentType,
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    ...(job.salary && {
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: job.salary.currency,
        value: {
          "@type": "QuantitativeValue",
          minValue: job.salary.min,
          maxValue: job.salary.max,
          unitText: "YEAR"
        }
      }
    })
  }
}

// Services data for structured data
export const HERO_POINT_SERVICES = [
  {
    name: "Hero Point Systems",
    description: "Comprehensive business transformation through integrated consulting and technology solutions",
    serviceType: "Business Consulting"
  },
  {
    name: "Command Center Platform",
    description: "Centralized performance management and analytics platform for business optimization",
    serviceType: "Software Solutions"
  },
  {
    name: "Hero AI",
    description: "AI-powered business intelligence and automation solutions to accelerate growth",
    serviceType: "AI Solutions"
  },
  {
    name: "Strategic Consulting",
    description: "Expert business strategy and transformation consulting services",
    serviceType: "Management Consulting"
  }
]

// Utility function to inject structured data into page
export function injectStructuredData(data: StructuredData) {
  return {
    __html: JSON.stringify(data)
  }
}
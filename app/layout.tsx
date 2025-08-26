import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/structured-data";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: "Hero Point Consulting - Unlock Your Heroic Potential",
    template: "%s | Hero Point Consulting"
  },
  description: "Integrated Consulting, Software, and AI to Power Your Growth. Strategy meets Software meets AI – everything you need to transform from good to great, fast.",
  keywords: ["consulting", "software", "AI", "business transformation", "growth", "hero point", "strategic consulting", "business automation", "AI solutions", "business process optimization", "digital transformation"],
  authors: [{ name: "Hero Point Consulting" }],
  creator: "Hero Point Consulting",
  publisher: "Hero Point Consulting",
  category: "Business Consulting",
  classification: "Business",
  icons: {
    icon: '/hpc-favicon-64x64.png',
    apple: '/hpc-apple-touch-icon-180x180.png',
    shortcut: '/hpc-favicon-64x64.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    siteName: "Hero Point Consulting",
    title: "Hero Point Consulting - Unlock Your Heroic Potential",
    description: "Integrated Consulting, Software, and AI to Power Your Growth. Strategy meets Software meets AI – everything you need to transform from good to great, fast.",
    images: [
      {
        url: '/hpc-image-general-200x200.png',
        width: 1200,
        height: 630,
        alt: "Hero Point Consulting - Business Transformation Through Integrated Solutions",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hero Point Consulting - Unlock Your Heroic Potential",
    description: "Integrated Consulting, Software, and AI to Power Your Growth. Strategy meets Software meets AI – everything you need to transform from good to great, fast.",
    images: ['/hpc-image-general-200x200.png'],
    creator: "@heropointconsulting",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          // This inline script prevents theme flash on page load
          // Content is safe as it contains no user input
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('hpc-theme')||'light';document.documentElement.classList.remove('light','dark');document.documentElement.classList.add(t)}catch(e){document.documentElement.classList.add('light')}})()`,
          }}
        />
        <script
          // Unregister any existing service workers to prevent interference
          dangerouslySetInnerHTML={{
            __html: `(async function(){if('serviceWorker' in navigator){try{const registrations=await navigator.serviceWorker.getRegistrations();for(let registration of registrations){console.log('Unregistering service worker:',registration.scope);await registration.unregister()}}catch(e){console.log('Service worker cleanup failed:',e)}}if('caches' in window){try{const cacheNames=await caches.keys();for(let cacheName of cacheNames){console.log('Clearing cache:',cacheName);await caches.delete(cacheName)}}catch(e){console.log('Cache cleanup failed:',e)}}})()`,
          }}
        />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main role="main">
              {children}
            </main>
            <Footer />
          </div>
          <StructuredData data={generateOrganizationSchema() as unknown as Record<string, unknown>} />
          <StructuredData data={generateWebSiteSchema() as unknown as Record<string, unknown>} />
        </Providers>
      </body>
    </html>
  );
}
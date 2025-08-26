import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: process.env.NODE_ENV === 'development' 
              ? [
                  "default-src 'self'",
                  "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Allow unsafe-eval in development for Next.js HMR
                  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                  "img-src 'self' data: blob: https:",
                  "font-src 'self' https://fonts.gstatic.com",
                  "connect-src 'self' ws://localhost:* wss://localhost:*", // Allow WebSocket for dev
                  "frame-ancestors 'none'",
                  "base-uri 'self'",
                  "form-action 'self'",
                  "object-src 'none'",
                  "media-src 'self'",
                  "worker-src 'self'",
                  "manifest-src 'self'",
                ].join('; ')
              : [
                  "default-src 'self'",
                  "script-src 'self' 'unsafe-inline'", // Stricter for production
                  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                  "img-src 'self' data: blob: https:",
                  "font-src 'self' https://fonts.gstatic.com",
                  "connect-src 'self'",
                  "frame-ancestors 'none'",
                  "base-uri 'self'",
                  "form-action 'self'",
                  "object-src 'none'",
                  "media-src 'self'",
                  "worker-src 'self'",
                  "manifest-src 'self'",
                ].join('; '),
          },
          {
            key: 'Permissions-Policy',
            value: [
              'camera=()',
              'microphone=()',
              'geolocation=()',
              'payment=()',
              'usb=()',
              'magnetometer=()',
              'accelerometer=()',
              'gyroscope=()',
            ].join(', '),
          },
        ],
      },
    ]
  },
  
  // Enable compression
  compress: true,
  
  // TypeScript strict mode
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint during build
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
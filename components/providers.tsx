"use client"

import { ThemeProvider } from "@/hooks/use-theme"
import { AuthProvider } from "@/hooks/use-auth"

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ThemeProvider>
  )
}
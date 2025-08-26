"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"

export interface User {
  id: number
  email: string
  name: string
  created_at: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => Promise<void>
  refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  const isAuthenticated = !!user

  // Check if user is authenticated on mount
  useEffect(() => {
    setMounted(true)
    checkAuth()
  }, [])

  async function checkAuth() {
    try {
      const response = await fetch("/api/auth/me", {
        credentials: "include",
      })

      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
      } else {
        setUser(null)
      }
    } catch (error) {
      console.warn("Auth check failed:", error)
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }

  async function login(email: string, password: string) {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      })

      const data = await response.json()

      if (response.ok) {
        setUser(data.user)
        return { success: true }
      } else {
        return { success: false, error: data.error }
      }
    } catch {
      return { success: false, error: "Network error. Please try again." }
    }
  }

  async function register(name: string, email: string, password: string) {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
        credentials: "include",
      })

      const data = await response.json()

      if (response.ok) {
        return { success: true }
      } else {
        const errorMessage = data.details 
          ? `${data.error}: ${data.details.join(", ")}`
          : data.error
        return { success: false, error: errorMessage }
      }
    } catch {
      return { success: false, error: "Network error. Please try again." }
    }
  }

  async function logout() {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      })
    } catch {
      // Ignore errors during logout
    } finally {
      setUser(null)
      // Use window.location for a clean redirect
      window.location.href = "/login"
    }
  }

  async function refreshUser() {
    await checkAuth()
  }

  const value = {
    user,
    isLoading: isLoading || !mounted,
    isAuthenticated,
    login,
    register,
    logout,
    refreshUser,
  }

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
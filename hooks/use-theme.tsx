"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light")

  // Initialize theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("hpc-theme") as Theme | null
    const initialTheme = saved || "light"
    setThemeState(initialTheme)
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(initialTheme)
  }, [])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem("hpc-theme", newTheme)
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(newTheme)
  }

  const toggleTheme = () => {
    // Read current state directly from DOM to avoid stale state
    const isDark = document.documentElement.classList.contains("dark")
    const newTheme = isDark ? "light" : "dark"
    setTheme(newTheme)
  }

  const value = {
    theme,
    toggleTheme,
    setTheme,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
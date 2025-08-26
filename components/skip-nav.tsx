"use client"

import { cn } from "@/lib/utils"

interface SkipNavProps {
  href?: string
  className?: string
  children?: React.ReactNode
}

export function SkipNav({ 
  href = "#main-content", 
  className,
  children = "Skip to main content"
}: SkipNavProps) {
  return (
    <a
      href={href}
      className={cn(
        // Base styles for accessibility
        "sr-only focus:not-sr-only",
        // Positioning when focused
        "focus:absolute focus:top-4 focus:left-4 focus:z-50",
        // Visual styling
        "focus:bg-primary focus:text-primary-foreground",
        "focus:px-4 focus:py-2 focus:rounded-md",
        "focus:font-medium focus:text-sm",
        // Interaction styles
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "transition-all duration-200",
        className
      )}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault()
          const target = document.querySelector(href)
          if (target) {
            target.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            })
            // Focus the target element if it's focusable
            if (target instanceof HTMLElement && target.tabIndex >= 0) {
              target.focus()
            }
          }
        }
      }}
    >
      {children}
    </a>
  )
}

export function SkipNavLinks() {
  return (
    <div className="skip-nav-links">
      <SkipNav href="#main-content">
        Skip to main content
      </SkipNav>
      <SkipNav href="#navigation" className="focus:left-32">
        Skip to navigation
      </SkipNav>
      <SkipNav href="#footer" className="focus:left-60">
        Skip to footer
      </SkipNav>
    </div>
  )
}
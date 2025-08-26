"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, User, LogOut, Settings, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"
import { HeaderLogo } from "@/components/header-logo"
import { useAuth } from "@/hooks/use-auth"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const { user, logout, isLoading } = useAuth()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogout = async () => {
    await logout()
  }

  // Generate user initials for avatar
  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav 
        id="navigation" 
        className="container mx-auto px-4 sm:px-6 lg:px-8" 
        aria-label="Global navigation"
        role="navigation"
      >
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-x-12">
            <HeaderLogo />
            <div className="hidden md:flex md:gap-x-8" role="menubar">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  role="menuitem"
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary focus:text-primary rounded-sm px-2 py-1",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <ThemeToggle />
            
            {/* Authentication Section */}
            {mounted && (
              <>
                {isLoading ? (
                  // Loading skeleton for auth buttons
                  <div className="hidden md:flex items-center gap-2">
                    <div className="h-9 w-16 bg-muted animate-pulse rounded" />
                    <div className="h-9 w-20 bg-muted animate-pulse rounded" />
                  </div>
                ) : user ? (
                  // Authenticated user dropdown menu
                  <div className="hidden md:flex items-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="flex items-center gap-2 h-10 px-3">
                          <Avatar className="h-7 w-7">
                            <AvatarFallback className="text-xs bg-primary/10 text-primary font-medium">
                              {getUserInitials(user.name)}
                            </AvatarFallback>
                          </Avatar>
                          <span className="hidden lg:inline-block text-sm font-medium">
                            {user.name}
                          </span>
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel className="font-normal">
                          <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.email}</p>
                          </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link href="/dashboard" className="flex items-center cursor-pointer">
                            <User className="h-4 w-4 mr-2" />
                            Dashboard
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem disabled>
                          <Settings className="h-4 w-4 mr-2" />
                          Settings
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                          onClick={handleLogout}
                          className="text-destructive dark:text-red-400 focus:text-destructive dark:focus:text-red-400 focus:bg-destructive/10 cursor-pointer"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign out
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ) : (
                  // Unauthenticated user buttons
                  <div className="hidden md:flex items-center gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/login">Sign in</Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="/register">Get started</Link>
                    </Button>
                  </div>
                )}
              </>
            )}

            {/* Mobile menu */}
            <div className="flex md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                    <Menu className="h-6 w-6" aria-hidden="true" />
                    <span className="sr-only">Open navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-4 mt-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium transition-colors",
                          pathname === item.href
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        )}
                        aria-current={pathname === item.href ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    
                    {/* Mobile auth section */}
                    {mounted && (
                      <>
                        <div className="border-t pt-4 mt-4">
                          {isLoading ? (
                            <div className="space-y-2">
                              <div className="h-10 bg-muted animate-pulse rounded" />
                              <div className="h-10 bg-muted animate-pulse rounded" />
                            </div>
                          ) : user ? (
                            <>
                              <div className="px-3 py-2 text-sm text-muted-foreground mb-2">
                                Signed in as {user.name}
                              </div>
                              <Link
                                href="/dashboard"
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                              >
                                <User className="h-4 w-4" />
                                Dashboard
                              </Link>
                              <Button 
                                variant="ghost" 
                                className="w-full justify-start text-destructive dark:text-red-400 hover:text-destructive dark:hover:text-red-400 hover:bg-destructive/10 mt-2" 
                                onClick={handleLogout}
                              >
                                <LogOut className="h-4 w-4 mr-2" />
                                Sign out
                              </Button>
                            </>
                          ) : (
                            <div className="space-y-2">
                              <Button variant="ghost" className="w-full" asChild>
                                <Link href="/login">Sign in</Link>
                              </Button>
                              <Button className="w-full" asChild>
                                <Link href="/register">Get started</Link>
                              </Button>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
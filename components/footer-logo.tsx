"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "@/hooks/use-theme"

export function FooterLogo() {
  const { theme } = useTheme()
  
  // Theme provider now immediately provides correct theme
  const logoSrc = theme === "dark" 
    ? "/hpc-banner-website-white-1200x300.png" 
    : "/hpc-banner-website-black-1200x300.png"

  return (
    <Link href="/" className="flex items-center">
      <Image
        src={logoSrc}
        alt="Hero Point Consulting"
        width={200}
        height={50}
        className="h-auto w-auto max-w-[200px]"
        priority
      />
    </Link>
  )
}
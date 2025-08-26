import Link from "next/link"
import Image from "next/image"

export function HeaderLogo() {
  return (
    <Link href="/" className="flex items-center">
      {/* Dark logo (black) - shown in light mode, hidden in dark mode */}
      <Image
        src="/hpc-banner-website-black-1200x300.png"
        alt="Hero Point Consulting"
        width={200}
        height={50}
        className="h-auto w-auto max-w-[140px] sm:max-w-[160px] block dark:hidden"
        priority
      />
      {/* Light logo (white) - hidden in light mode, shown in dark mode */}
      <Image
        src="/hpc-banner-website-white-1200x300.png"
        alt="Hero Point Consulting"
        width={200}
        height={50}
        className="h-auto w-auto max-w-[140px] sm:max-w-[160px] hidden dark:block"
        priority
      />
    </Link>
  )
}
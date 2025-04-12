"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import JoinButton from "@/components/join-button"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="fixed w-full bg-background shadow-md z-50 dark:bg-secondary">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="#home" className="flex items-center">
          <Image
            src="https://static.readdy.ai/image/067a02bce33b6b27de94410c4a168271/90dfca2c66b9476bf081c286db74e7d2.jpeg"
            alt="CWCA Logo"
            width={48}
            height={48}
            className="h-12 w-auto rounded"           
          />
          <h1 className="px-4 text-3xl font-medium ">
            <span className="px-2">C</span>
            <span className="px-2">W</span>
            <span className="px-2">C</span>
            <span className="px-2">A</span>
          </h1>
        </Link>

        <nav
          className={`${mobileMenuOpen ? "flex flex-col absolute top-16 right-4 bg-background dark:bg-secondary p-4 rounded shadow-lg" : "hidden"} md:flex md:static md:flex-row md:shadow-none md:p-0 md:bg-transparent space-y-4 md:space-y-0 md:space-x-8`}
        >
          <Link
            href="#home"
            className="font-medium text-foreground hover:text-primary transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="font-medium text-foreground hover:text-primary transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#classes"
            className="font-medium text-foreground hover:text-primary transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Classes
          </Link>
          <Link
            href="#testimonials"
            className="font-medium text-foreground hover:text-primary transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="font-medium text-foreground hover:text-primary transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="block md:hidden" onClick={toggleMobileMenu}>
            <Menu className="h-6 w-6 text-primary" />
          </Button>
        </div>
      </div>
    </header>
  )
}





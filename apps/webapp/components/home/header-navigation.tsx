"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigationLinks = [
    // change the href to necessary pages as of now it is not created
  { name: "Documentation", href: "/docs" },
  { name: "Examples", href: "/examples" },
  { name: "Dashboard", href: "/dashboard" },
]

export function HeaderNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo Section - Left Aligned */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              {/* Logo Icon */}
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-orange-500">
                <div className="text-white font-mono text-sm font-bold">{"<>"}</div>
              </div>
              {/* Title */}
              <h1 className="text-lg font-bold text-foreground">Blend Integration</h1>
            </Link>
            {/* Badge */}
            <span className="hidden sm:inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
              Powered by Scaffold Rust
            </span>
          </div>
        </div>

        {/* Desktop Navigation - Right Aligned */}
        <nav className="hidden md:flex items-center gap-x-8">
          {/* Navigation Links */}
          <div className="flex items-center gap-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* GitHub Button */}
          <Button variant="outline" size="sm" asChild className="gap-2 bg-transparent">
            <Link href="https://github.com/ScaffoldRust/Blend-Integration" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-6">
                {/* Mobile Badge */}
                <div className="flex justify-center">
                  <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm font-semibold text-muted-foreground">
                    Powered by Scaffold Rust
                  </span>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-4">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                {/* Mobile GitHub Button */}
                <Button variant="outline" size="lg" asChild className="gap-2 mt-4 bg-transparent">
                  <Link href="https://github.com/ScaffoldRust/Blend-Integration" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

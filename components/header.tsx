"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Logo } from "@/components/logo"

const navLinks = [
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#precos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToForm = () => {
    const form = document.getElementById('lead-form')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group focus-visible:ring-2 focus-visible:ring-[#E91E8C]/50 focus-visible:outline-none"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E91E8C] to-[#00D4FF] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button
              onClick={scrollToForm}
              className="relative overflow-hidden bg-gradient-to-r from-[#E91E8C] to-[#00D4FF] hover:opacity-90 transition-opacity text-white font-semibold px-6"
            >
              Quero Participar
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 bg-background border-border">
              <div className="flex flex-col gap-8 mt-8">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <Button
                  onClick={scrollToForm}
                  className="w-full bg-gradient-to-r from-[#E91E8C] to-[#00D4FF] hover:opacity-90 transition-opacity text-white font-semibold"
                >
                  Quero Participar
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

"use client"

import { useState } from "react"
import { Menu, X, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "nis2", label: "NIS2" },
  { id: "auditor", label: "Auditor" },
  { id: "formacion", label: "Formación" },
  { id: "concienciacion", label: "Concienciación" },
  { id: "tutorizacion", label: "Tutorización" },
]

export function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LOGO + NOMBRE → vuelve a Inicio */}
        <button
          onClick={() => setActiveTab("inicio")}
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          <Shield className="h-8 w-8 text-primary" />
          <span className="text-xl font-semibold text-foreground">Jorge Morrás</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                activeTab === item.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild>
            <a
              href="https://es.linkedin.com/in/jorgemorras"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactar
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id)
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-3 text-base font-medium rounded-md transition-colors ${
                  activeTab === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full">
                <a
                  href="https://es.linkedin.com/in/jorgemorras"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contactar
                </a>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}

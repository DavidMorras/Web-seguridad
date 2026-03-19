"use client"

import { useState } from "react"
import { Menu, X, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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

        {/* Logo + Nombre con enlace */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <Shield className="h-8 w-8 text-primary" />
          <span className="text-xl font-semibold text-foreground">Jorge Morrás</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}

"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, AlignJustify, Grid3x3, MenuSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group transition-all duration-200 hover:opacity-80"
          >
            <span className="text-xl font-bold text-primary">Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary rounded-md transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="Toggle menu"
                className="relative h-10 w-10 rounded-full bg-primary/5 border border-primary/20 hover:bg-primary/15 hover:border-primary/30 hover:scale-110 active:scale-95 transition-all duration-300 group overflow-hidden"
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                
                {/* Modern Menu Icon - Clean and Compact */}
                <Menu 
                  className={`relative z-10 h-5 w-5 text-foreground/70 group-hover:text-primary transition-all duration-300 ${
                    mobileMenuOpen ? 'rotate-90 scale-110 opacity-0' : 'opacity-100'
                  }`}
                />
                <X 
                  className={`absolute z-10 h-5 w-5 text-primary transition-all duration-300 ${
                    mobileMenuOpen ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
                  }`}
                />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[320px] sm:w-[400px] p-0 overflow-hidden [&>button]:hidden"
            >
              {/* Color Splash Background - Entire Sidebar - More Visible */}
              <div className="absolute inset-0 bg-primary/12 animate-color-splash" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/18 via-primary/10 to-primary/4 animate-splash-expand" />
              
              <div className="relative h-full flex flex-col bg-background/98 backdrop-blur-xl">
                {/* Modern Header with Logo/Avatar Placeholder */}
                <div className="relative px-6 pt-8 pb-6">
                  <div className="flex items-center justify-end mb-6">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={closeMobileMenu}
                      className="relative h-10 w-10 rounded-full bg-primary/5 border border-primary/20 hover:bg-primary/15 hover:border-primary/30 hover:scale-110 active:scale-95 text-primary/70 hover:text-primary transition-all duration-300 animate-slide-in-left group overflow-hidden"
                    >
                      {/* Animated background on hover */}
                      <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                      {/* Icon */}
                      <X className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
                    </Button>
                  </div>
                  
                  {/* Modern Logo/Avatar Section */}
                  <div className="flex flex-col items-center animate-slide-in-right">
                    {/* Avatar/Logo Placeholder - Circular with gradient */}
                    <div className="relative mb-4">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 border-2 border-primary/20 flex items-center justify-center overflow-hidden animate-scale-in">
                        {/* You can replace this with an actual image */}
                        <span className="text-2xl font-bold text-primary">P</span>
                      </div>
                      {/* Animated ring effect */}
                      <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping-slow" />
                    </div>
                    
                    {/* Optional: Name or tagline */}
                    <div className="text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                      <p className="text-sm font-medium text-primary/80">Portfolio</p>
                    </div>
                  </div>
                </div>
                
                {/* Mobile Navigation - Clean, No Arrows */}
                <nav className="flex-1 overflow-y-auto px-6 pb-6">
                  <div className="flex flex-col space-y-2">
                    {navItems.map((item, index) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="group relative flex items-center px-5 py-3.5 text-base font-medium rounded-xl hover:bg-primary/12 hover:text-primary transition-all duration-300 animate-fade-in-up hover:translate-x-1"
                        style={{ animationDelay: `${index * 80}ms` }}
                      >
                        {/* Animated background on hover */}
                        <div className="absolute inset-0 bg-primary/8 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

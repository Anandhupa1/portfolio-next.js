"use client"

import * as React from "react"
import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <Link 
                href="/" 
                className="inline-block group transition-all duration-200 hover:opacity-80"
              >
                <span className="text-2xl font-bold text-primary">Portfolio</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                Building beautiful digital experiences with modern design and clean code.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 w-fit"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Connect</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group relative h-10 w-10 rounded-full bg-primary/5 border border-primary/20 hover:bg-primary/15 hover:border-primary/30 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center overflow-hidden"
                    >
                      {/* Animated background on hover */}
                      <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                      <Icon className="relative z-10 h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                © {currentYear} Portfolio. Made with{" "}
                <Heart className="h-4 w-4 text-primary fill-primary" />{" "}
                with Next.js
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <Link
                  href="/privacy"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


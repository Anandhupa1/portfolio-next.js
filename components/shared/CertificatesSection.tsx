"use client"

import * as React from "react"
import Image from "next/image"
import { Award, Calendar, ExternalLink, Download, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  description?: string
  image: string
  credentialUrl?: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Masai School",
    date: "2023",
    description: "Intensive full-stack development program covering modern web technologies",
    image: "/images/certificates/masai-certificate.jpg",
    credentialUrl: "https://example.com/verify",
  },
  {
    id: 2,
    title: "React Advanced Patterns",
    issuer: "Online Platform",
    date: "2023",
    description: "Advanced React concepts and best practices",
    image: "/images/certificates/react-certificate.jpg",
  },
  {
    id: 3,
    title: "JavaScript Mastery",
    issuer: "Coding Academy",
    date: "2022",
    description: "Comprehensive JavaScript course covering ES6+ features",
    image: "/images/certificates/js-certificate.jpg",
    credentialUrl: "https://example.com/verify",
  },
  {
    id: 4,
    title: "Node.js Backend Development",
    issuer: "Tech Institute",
    date: "2023",
    description: "Building scalable backend applications with Node.js",
    image: "/images/certificates/nodejs-certificate.jpg",
  },
  {
    id: 5,
    title: "TypeScript Fundamentals",
    issuer: "Tech Academy",
    date: "2023",
    description: "Master TypeScript for modern web development",
    image: "/images/certificates/typescript-certificate.jpg",
  },
  {
    id: 6,
    title: "MongoDB Database Design",
    issuer: "Database University",
    date: "2023",
    description: "Advanced database design and optimization",
    image: "/images/certificates/mongodb-certificate.jpg",
  },
  {
    id: 7,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    description: "Cloud infrastructure and services",
    image: "/images/certificates/aws-certificate.jpg",
  },
  {
    id: 8,
    title: "Docker & Kubernetes",
    issuer: "DevOps Institute",
    date: "2023",
    description: "Containerization and orchestration",
    image: "/images/certificates/docker-certificate.jpg",
  },
  {
    id: 9,
    title: "GraphQL API Development",
    issuer: "API Academy",
    date: "2023",
    description: "Building efficient GraphQL APIs",
    image: "/images/certificates/graphql-certificate.jpg",
  },
  {
    id: 10,
    title: "UI/UX Design Principles",
    issuer: "Design School",
    date: "2022",
    description: "User interface and experience design",
    image: "/images/certificates/design-certificate.jpg",
  },
]

export default function CertificatesSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [touchStart, setTouchStart] = React.useState(0)
  const [touchEnd, setTouchEnd] = React.useState(0)
  const [itemsPerView, setItemsPerView] = React.useState(2)
  const [isPaused, setIsPaused] = React.useState(false)

  const totalItems = certificates.length

  React.useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else {
        setItemsPerView(2)
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  // Ensure currentIndex is valid when itemsPerView changes
  React.useEffect(() => {
    const maxIndex = Math.max(0, totalItems - itemsPerView)
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  }, [itemsPerView, currentIndex, totalItems])

  const maxIndex = Math.max(0, totalItems - itemsPerView)

  // Auto-scroll functionality with pause on hover
  React.useEffect(() => {
    if (isPaused) return

    const autoScrollInterval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIdx = Math.max(0, totalItems - itemsPerView)
        return prev >= maxIdx ? 0 : prev + 1
      })
    }, 5000) // Auto-scroll every 5 seconds

    return () => clearInterval(autoScrollInterval)
  }, [itemsPerView, totalItems, isPaused])

  const nextSlide = () => {
    setIsPaused(true)
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    setTimeout(() => setIsPaused(false), 5000)
  }

  const prevSlide = () => {
    setIsPaused(true)
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
    setTimeout(() => setIsPaused(false), 5000)
  }

  const goToSlide = (index: number) => {
    setIsPaused(true)
    setCurrentIndex(index)
    setTimeout(() => setIsPaused(false), 5000)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <section className="relative  bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
         
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Certificates & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognitions and certifications that showcase my expertise and dedication
          </p>
        </div>

        {/* Slider Container */}
        <div 
          className="relative max-w-6xl mx-auto "
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 h-12 w-12 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:border-primary/30 items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
            aria-label="Previous certificate"
          >
            <ChevronLeft className="h-6 w-6 text-primary group-hover:translate-x-[-2px] transition-transform duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 h-12 w-12 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:border-primary/30 items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
            aria-label="Next certificate"
          >
            <ChevronRight className="h-6 w-6 text-primary group-hover:translate-x-[2px] transition-transform duration-300" />
          </button>

          {/* Slider Wrapper */}
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out py-4"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {certificates.map((certificate) => (
                <div
                  key={certificate.id}
                  className="min-w-0 flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="group relative h-full rounded-2xl bg-card border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden">
                    {/* Certificate Image */}
                    <div className="relative aspect-video w-full overflow-hidden bg-muted">
                      <Image
                        src={certificate.image}
                        alt={certificate.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <Award className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {certificate.title}
                      </h3>

                      {/* Issuer */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-base font-semibold text-primary">
                          {certificate.issuer}
                        </span>
                      </div>

                      {/* Date */}
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{certificate.date}</span>
                      </div>

                      {/* Description */}
                      {certificate.description && (
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {certificate.description}
                        </p>
                      )}

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        {certificate.credentialUrl && (
                          <Link
                            href={certificate.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium text-sm transition-all duration-300 hover:scale-105"
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span>Verify</span>
                          </Link>
                        )}
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-medium text-sm transition-all duration-300 hover:scale-105">
                          <Download className="h-4 w-4" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>

                    {/* Decorative Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to certificate ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

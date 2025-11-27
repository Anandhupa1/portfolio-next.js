"use client"

import * as React from "react"
import Link from "next/link"
import { MapPin, Building2, GraduationCap, ExternalLink, Calendar, ChevronLeft, ChevronRight, BookOpen, LucideIcon } from "lucide-react"

export interface WorkExperience {
  id: number
  type: "education" | "work"
  title: string
  company: string
  location: string
  period: string
  description: string
  website: string
  icon: LucideIcon
  color: string
}

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    type: "education",
    title: "BSc Mathematics",
    company: "University",
    location: "India",
    period: "2019 - 2022",
    description: "Completed Bachelor of Science in Mathematics, building strong analytical and problem-solving skills.",
    website: "#",
    icon: BookOpen,
    color: "from-primary/20 to-primary/5",
  },
  {
    id: 2,
    type: "education",
    title: "Full Stack Web Development",
    company: "Masai School",
    location: "Bengaluru, India",
    period: "2022 - 2023",
    description: "Completed intensive full-stack web development program with focus on modern technologies and best practices.",
    website: "https://www.masaischool.com",
    icon: GraduationCap,
    color: "from-primary/20 to-primary/5",
  },
  {
    id: 3,
    type: "work",
    title: "Web Developer",
    company: "Webcastle Media",
    location: "Cochin, India",
    period: "2023 - Present",
    description: "Currently working as a web developer, building modern web applications and digital solutions for clients.",
    website: "https://www.webcastlemedia.com",
    icon: Building2,
    color: "from-primary/25 to-primary/10",
  },
  {
    id: 4,
    type: "education",
    title: "Advanced JavaScript & React",
    company: "Online Certification",
    location: "Remote",
    period: "2023",
    description: "Completed advanced courses in JavaScript, React, and modern frontend development frameworks.",
    website: "#",
    icon: GraduationCap,
    color: "from-primary/20 to-primary/5",
  },
  {
    id: 5,
    type: "work",
    title: "Freelance Developer",
    company: "Independent Projects",
    location: "Remote",
    period: "2022 - Present",
    description: "Working on various freelance projects, delivering custom web solutions and applications for diverse clients.",
    website: "#",
    icon: Building2,
    color: "from-primary/25 to-primary/10",
  },
]

export default function WorkExperienceSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [touchStart, setTouchStart] = React.useState(0)
  const [touchEnd, setTouchEnd] = React.useState(0)
  const [itemsPerView, setItemsPerView] = React.useState(2)
  const [isPaused, setIsPaused] = React.useState(false)

  const totalItems = workExperiences.length

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
    }, 4000) // Auto-scroll every 4 seconds

    return () => clearInterval(autoScrollInterval)
  }, [itemsPerView, totalItems, isPaused])

  const nextSlide = () => {
    setIsPaused(true) // Pause auto-scroll when user manually navigates
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    // Resume after 5 seconds
    setTimeout(() => setIsPaused(false), 5000)
  }

  const prevSlide = () => {
    setIsPaused(true) // Pause auto-scroll when user manually navigates
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
    // Resume after 5 seconds
    setTimeout(() => setIsPaused(false), 5000)
  }

  const goToSlide = (index: number) => {
    setIsPaused(true) // Pause auto-scroll when user manually navigates
    setCurrentIndex(index)
    // Resume after 5 seconds
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
    <section className="relative py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From learning the fundamentals to building real-world applications
          </p>
        </div>

        {/* Slider Container */}
        <div 
          className="relative max-w-8xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 h-12 w-12 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:border-primary/30 items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-primary group-hover:translate-x-[-2px] transition-transform duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 h-12 w-12 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:border-primary/30 items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-primary group-hover:translate-x-[2px] transition-transform duration-300" />
          </button>

          {/* Slider Wrapper */}
          <div
            className="height-auto overflow-x-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform md:pt-4 duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {workExperiences.map((experience) => {
                const Icon = experience.icon
                return (
                  <div
                    key={experience.id}
                    className="min-w-0 flex-shrink-0 px-4"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <Link
                      href={experience.website}
                      target={experience.website !== "#" ? "_blank" : undefined}
                      rel={experience.website !== "#" ? "noopener noreferrer" : undefined}
                      className="group relative block h-full"
                    >
                      {/* Card */}
                      <div className="relative h-full p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden">
                        {/* Gradient Background on Hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        
                        {/* Content */}
                        <div className="relative z-10">
                          {/* Icon and Type Badge */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="relative">
                              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                <Icon className="h-7 w-7 text-primary" />
                              </div>
                              {/* Pulse effect on hover */}
                              <div className="absolute inset-0 rounded-xl bg-primary/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md" />
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              experience.type === "education" 
                                ? "bg-primary/10 text-primary" 
                                : "bg-primary/15 text-primary"
                            }`}>
                              {experience.type === "education" ? "Education" : "Work"}
                            </span>
                          </div>

                          {/* Title and Company */}
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            {experience.title}
                          </h3>
                          <div className="flex items-center gap-2 mb-4">
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                            <span className="text-lg font-semibold text-foreground/80">
                              {experience.company}
                            </span>
                          </div>

                          {/* Location and Period */}
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span className="text-sm">{experience.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span className="text-sm">{experience.period}</span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {experience.description}
                          </p>

                          {/* Visit Website Link */}
                          {experience.website !== "#" && (
                            <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                              <span className="text-sm">Visit Website</span>
                              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          )}
                        </div>

                        {/* Decorative Corner Element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </Link>
                  </div>
                )
              })}
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
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


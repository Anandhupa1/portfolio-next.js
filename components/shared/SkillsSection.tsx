"use client"

import * as React from "react"
import Image from "next/image"

export interface Skill {
  id: number
  name: string
  category: "frontend" | "backend" | "tools" | "other"
  image: string // Required image path for skill logo
}

const skills: Skill[] = [
  {
    id: 1,
    name: "React",
    category: "frontend",
    image: "/images/skills/react.svg",
  },
  {
    id: 2,
    name: "Next.js",
    category: "frontend",
    image: "/images/skills/nextjs.svg",
  },
  {
    id: 3,
    name: "TypeScript",
    category: "frontend",
    image: "/images/skills/typescript.svg",
  },
  {
    id: 4,
    name: "JavaScript",
    category: "frontend",
    image: "/images/skills/javascript.svg",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    category: "frontend",
    image: "/images/skills/tailwind.svg",
  },
  {
    id: 6,
    name: "Node.js",
    category: "backend",
    image: "/images/skills/nodejs.svg",
  },
  {
    id: 7,
    name: "MongoDB",
    category: "backend",
    image: "/images/skills/mongodb.svg",
  },
  {
    id: 8,
    name: "Git",
    category: "tools",
    image: "/images/skills/git.svg",
  },
  {
    id: 9,
    name: "Figma",
    category: "tools",
    image: "/images/skills/figma.svg",
  },
  {
    id: 10,
    name: "Python",
    category: "backend",
    image: "/images/skills/python.svg",
  },
  {
    id: 11,
    name: "HTML5",
    category: "frontend",
    image: "/images/skills/html5.svg",
  },
  {
    id: 12,
    name: "CSS3",
    category: "frontend",
    image: "/images/skills/css3.svg",
  },
]

const categoryColors = {
  frontend: "from-blue-500/20 to-cyan-500/20",
  backend: "from-purple-500/20 to-pink-500/20",
  tools: "from-orange-500/20 to-red-500/20",
  other: "from-green-500/20 to-emerald-500/20",
}

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools",
  other: "Other",
}

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)

  const filteredSkills = selectedCategory
    ? skills.filter((skill) => skill.category === selectedCategory)
    : skills

  const categories = Array.from(new Set(skills.map((skill) => skill.category)))

  return (
    <section className="relative py-15 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing digital experiences
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === null
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            All Skills
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.id}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Skill Card */}
              <div className="relative aspect-square p-6 rounded-2xl bg-card border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[skill.category]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                  {/* Skill Logo/Image */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110 p-3">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={60}
                      height={60}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No skills found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}


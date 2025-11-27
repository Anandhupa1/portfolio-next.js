import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getProjectById, getAllProjects } from "@/lib/projects"
import { ExternalLink, ArrowLeft, Calendar, User, Code, Globe } from "lucide-react"

type Props = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Portfolio`,
      description: project.shortDescription,
      type: "website",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Portfolio`,
      description: project.shortDescription,
      images: [project.image],
    },
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center gap-2">
              <Globe className="h-3 w-3" />
              <span className="capitalize">{project.category}</span>
            </div>
            {project.year && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{project.year}</span>
              </div>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {project.shortDescription}
          </p>
        </div>

        {/* Project Image */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-muted mb-12 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">About the Project</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                {project.description}
              </p>

              {/* Project Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {project.client && (
                  <div className="p-6 rounded-xl bg-card border border-border/50">
                    <div className="flex items-center gap-3 mb-2">
                      <User className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-foreground">Client</h3>
                    </div>
                    <p className="text-muted-foreground">{project.client}</p>
                  </div>
                )}
                {project.role && (
                  <div className="p-6 rounded-xl bg-card border border-border/50">
                    <div className="flex items-center gap-3 mb-2">
                      <Code className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-foreground">Role</h3>
                    </div>
                    <p className="text-muted-foreground">{project.role}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Technologies */}
              <div className="p-6 rounded-xl bg-card border border-border/50 mb-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visit Website */}
              <Link
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="h-5 w-5" />
                <span>Visit Website</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


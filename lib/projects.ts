export interface Project {
  id: string
  title: string
  description: string
  shortDescription: string
  image: string
  website: string
  technologies: string[]
  category: "ecommerce" | "web" | "mobile" | "other"
  featured?: boolean
  year?: string
  client?: string
  role?: string
}

export const projects: Project[] = [
  {
    id: "v-perfumes",
    title: "V Perfumes",
    description: "A comprehensive e-commerce platform for perfumes and fragrances, featuring a modern shopping experience with advanced filtering, wishlist, and seamless checkout. Built with Next.js and optimized for performance. The platform serves customers across UAE, KSA, Oman, and Qatar with over 50 physical outlets. Features include click and collect, buy now pay later options, and a seamless mobile experience.",
    shortDescription: "Leading perfume e-commerce platform with advanced shopping features",
    image: "/images/projects/v-perfumes.jpg",
    website: "https://vperfumes.com",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "E-commerce", "Payment Gateway", "Multi-currency"],
    category: "ecommerce",
    featured: true,
    year: "2024",
    client: "V Perfumes",
    role: "Full Stack Developer",
  },
  {
    id: "storedada",
    title: "StoreDada",
    description: "An all-in-one e-commerce platform solution that helps businesses grow faster with rapid deployment, advanced customization, and powerful integrations. Features include PWA support, multi-vendor marketplace, comprehensive analytics, ERP integration, and social media marketing tools. The platform enables businesses to scale efficiently with features like multi-currency support, multi-lingual functionality, and advanced SEO optimization.",
    shortDescription: "Enterprise e-commerce platform with advanced features and integrations",
    image: "/images/projects/storedada.jpg",
    website: "https://storedada.com",
    technologies: ["Next.js", "React", "TypeScript", "PWA", "E-commerce Platform", "Multi-vendor", "ERP Integration"],
    category: "ecommerce",
    featured: true,
    year: "2024",
    client: "Webcastle Media",
    role: "Full Stack Developer",
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getAllProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}


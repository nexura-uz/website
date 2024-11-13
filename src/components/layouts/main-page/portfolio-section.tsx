"use client"

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function PortfolioSection() {
  const t = useTranslations("PortfolioSection")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t("title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg shadow-green/30 transition-all duration-300 ease-in-out cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div
                className={`absolute inset-0 bg-green bg-opacity-90 flex flex-col justify-center items-center p-6 transition-all duration-300 ease-in-out ${hoveredProject === index ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white text-center">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            asChild
            className="inline-flex items-center px-6 py-3 bg-green text-white font-semibold rounded-xl hover:bg-dark-green transition-colors duration-300"
          >
            <Link href="/portfolio">
              {t("view_all_projects")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

const projects = [
  {
    title: "E-commerce Platform",
    description: "Created a fully responsive e-commerce platform to drive online sales for a leading fashion retailer.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Health & Fitness App",
    description: "Developed a cross-platform mobile app for personalized workout and nutrition tracking.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Financial Dashboard",
    description: "Designed and built a real-time financial dashboard for a fintech startup, integrating multiple data sources.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Educational Learning Platform",
    description: "Created an interactive online learning platform with video courses, quizzes, and progress tracking.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Smart Home IoT Interface",
    description: "Developed a user-friendly interface for controlling and monitoring smart home devices.",
    image: "/placeholder.svg?height=300&width=400",
  },
]
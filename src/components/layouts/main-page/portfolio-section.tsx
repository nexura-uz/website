"use client"

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import portfolios from '../../../portfolios'

export default function PortfolioSection() {
  const t = useTranslations("PortfolioSection")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t("title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolios.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg shadow-green/30 transition-all duration-300 ease-in-out cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Image
                src={project.image}
                alt={t(`${project.title}`)}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div
                className={`absolute inset-0 bg-green bg-opacity-90 flex flex-col justify-center items-center p-6 transition-all duration-300 ease-in-out ${hoveredProject === index ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <Link href={""} target='_blank' className="text-white text-xl font-semibold mb-2">{t(`${project.title}`)}</Link>
                <p className="text-white text-center">{t(`${project.description}`)}</p>
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


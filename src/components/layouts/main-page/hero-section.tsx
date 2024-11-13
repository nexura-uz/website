'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import useThemeStore from '@/stores/theme-store'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function HeroSection() {
  const t = useTranslations("HeroSection")
  const [isVisible, setIsVisible] = useState(false)
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden text-primary pt-10">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill={isDarkMode ? "#111827" : "#f3f4f6"}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, fill: isDarkMode ? "#111827" : "#f3f4f6" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,50 Q25,0 50,50 T100,50"
            fill="none"
            stroke="#0ea47a"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              {t("text")}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-green hover:bg-dark-green text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors duration-300">
                {t("get_started")}
              </Button>
              <Link href={"/portfolio"}>
                <Button variant="outline" className="bg-white text-green border-green hover:bg-green hover:text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors duration-300">
                  {t("view_our_work")}
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <Image
              src="/images/hero-section/hero-image.jpeg"
              alt="Digital Interfaces Mockup"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green rounded-full opacity-20 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
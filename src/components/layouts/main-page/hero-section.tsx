'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="#f3f4f6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Empowering Digital Experiences with Frontend Excellence
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Web and mobile solutions tailored to elevate your brand
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-[#0ea47a] hover:bg-[#0c8d68] text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors duration-300">
                Get Started
              </Button>
              <Button variant="outline" className="bg-white text-[#0ea47a] border-[#0ea47a] hover:bg-[#0ea47a] hover:text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors duration-300">
                View Our Work
              </Button>
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
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#0ea47a] rounded-full opacity-20 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
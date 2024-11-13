"use client"

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'


const testimonials = [
    { name: 'Sarah Johnson', company: 'TechCorp', text: 'Nexura transformed our digital presence with their innovative solutions.' },
    { name: 'Alex Rodriguez', company: 'StartUp Inc.', text: 'The team at Nexura went above and beyond to deliver our project on time and within budget.' },
    { name: 'Lisa Chen', company: 'Global Enterprises', text: 'Their expertise in AI integration has given us a significant competitive edge.' },
]

export default function ClientTestimonialsSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    return (
        <section className="py-20 bg-gray-100 dark:bg-gray-900 border-t border-green/30">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
                <div className="relative">
                    <motion.div
                        key={currentTestimonial}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md max-w-2xl mx-auto"
                    >
                        <p className="text-gray-600 dark:text-gray-400 mb-4">&quot;{testimonials[currentTestimonial].text}&quot;</p>
                        <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                        <p className="text-green">{testimonials[currentTestimonial].company}</p>
                    </motion.div>
                    <button
                        onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                    >
                        <ChevronLeft className="text-green" />
                    </button>
                    <button
                        onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                    >
                        <ChevronRight className="text-green" />
                    </button>
                </div>
            </div>
        </section>
    )
}
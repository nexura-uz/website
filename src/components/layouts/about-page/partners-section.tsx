"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from 'next/image'

const partnerLogos = [
    '/placeholder.svg?height=100&width=200',
    '/placeholder.svg?height=100&width=200',
    '/placeholder.svg?height=100&width=200',
    '/placeholder.svg?height=100&width=200',
    '/placeholder.svg?height=100&width=200',
    '/placeholder.svg?height=100&width=200',
]

export default function AboutPartnersSection() {
    const t = useTranslations("AboutPagePartners")

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">{t("title")}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {partnerLogos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <Image
                                src={logo}
                                alt={`Partner ${index + 1}`}
                                width={200}
                                height={100}
                                className="mx-auto filter grayscale hover:filter-none transition-all duration-300"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
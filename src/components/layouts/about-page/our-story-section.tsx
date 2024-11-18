"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

const milestones = [
    { year: 2015, title: 'Founded', description: 'Nexura was established with a vision to revolutionize tech solutions.' },
    { year: 2017, title: 'First Major Client', description: 'Secured our first enterprise-level client, marking a significant growth milestone.' },
    { year: 2019, title: 'International Expansion', description: 'Opened our first international office, extending our reach globally.' },
    { year: 2021, title: 'AI Integration', description: 'Launched our AI-powered solutions, setting new industry standards.' },
    { year: 2023, title: 'Sustainability Initiative', description: 'Committed to net-zero emissions, aligning tech with environmental responsibility.' },
]

export default function AboutOurStorySection() {
    const t = useTranslations("AboutPageStory")

    return (
        <section className="py-20 bg-background border-t border-green/30">
            <div className="max-w-7xl container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">{t("title")}</h2>
                <div className="space-y-12">
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={milestone.year}
                            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center"
                        >
                            <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                                <h3 className="text-2xl font-semibold text-green">{milestone.year}</h3>
                                <h4 className="text-xl font-medium">{milestone.title}</h4>
                                <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                            </div>
                            <div className="w-4 h-4 bg-green rounded-full"></div>
                            <div className={`w-1/2 ${index % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'}`}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
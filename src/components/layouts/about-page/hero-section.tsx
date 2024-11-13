"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export default function AboutHeroSection() {
    const t = useTranslations("AboutPageHero")
    return (
        <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative h-[60vh] flex items-center justify-center text-white"
            >
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/placeholder.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
                <div className="relative z-10 text-center">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-5xl font-bold mb-4"
                    >
                        {t("title")}
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl mb-8"
                    >
                        {t("sub_title")}
                    </motion.p>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="max-w-2xl mx-auto text-lg"
                    >
                        {t("text")}
                    </motion.p>
                </div>
            </motion.section>
    )
}
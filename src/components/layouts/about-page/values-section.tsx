"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export default function AboutValuesSection() {
    const t = useTranslations("AboutPageValues")

    const values = [
        { title: t("card_title_1"), description: t("card_description_1") },
        { title: t("card_title_2"), description: t("card_description_2") },
        { title: t("card_title_3"), description: t("card_description_3") },
        { title: t("card_title_4"), description: t("card_description_4") },
    ]

    return (
        <section className="py-20 bg-background border-t border-green/30">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">{t("title")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md transition-colors duration-300 hover:dark:bg-green group cursor-pointer"
                        >
                            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
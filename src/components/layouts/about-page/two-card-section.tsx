"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export default function AboutTwoCardSection() {
    const t = useTranslations("AboutPage2Card")

    return (
        <section className="py-20 bg-gray-100 dark:bg-gray-900 border-t border-green/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 px-4 mb-8"
                    >
                        <div className="bg-white dark:bg-gray-800 p-8 h-full rounded-xl shadow-md shadow-green/30 transition-all duration-300 hover:shadow-lg hover:shadow-green/40 cursor-pointer">
                            <h3 className="text-2xl font-bold mb-4 text-green">{t("card_title_1")}</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {t("card_description_1")}
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2 px-4 mb-8"
                    >
                        <div className="bg-white dark:bg-gray-800 p-8 h-full rounded-xl shadow-md shadow-green/30 transition-all duration-300 hover:shadow-lg hover:shadow-green/40 cursor-pointer">
                            <h3 className="text-2xl font-bold mb-4 text-green">{t("card_title_2")}</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {t("card_description_2")}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
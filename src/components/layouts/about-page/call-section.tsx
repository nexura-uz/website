"use client"

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function AboutCallSection() {
    const t = useTranslations("AboutPageContact")

    return (
        <section className="py-20 bg-green text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
                <p className="mb-8 text-lg">{t("text")}</p>
                <Link href={"/contact-us"}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-green px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 transition-colors"
                    >
                        {t("contact_us")}
                    </motion.button>
                </Link>
            </div>
        </section>
    )
}
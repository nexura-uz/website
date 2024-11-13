"use client"

import { Code, Users, Lightbulb, CheckCircle } from "lucide-react"
import { useTranslations } from "next-intl"

export default function WhyChooseUsSection() {
  const t = useTranslations("WhyChooseUsSection")

  const strengths = [
    {
      title: t("card_title_1"),
      description: t("card_description_1"),
      icon: Users,
    },
    {
      title: t("card_title_2"),
      description: t("card_description_2"),
      icon: CheckCircle,
    },
    {
      title: t("card_title_3"),
      description: t("card_description_3"),
      icon: Lightbulb,
    },
    {
      title: t("card_title_4"),
      description: t("card_description_4"),
      icon: Code,
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 text-primary border-t border-green/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t("title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md shadow-green/30 transition-all duration-300 hover:shadow-lg hover:shadow-green/40 cursor-pointer">
              <div className="flex items-center mb-4">
                <strength.icon className="w-8 h-8 text-green mr-3" />
                <h3 className="text-xl font-semibold">{strength.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


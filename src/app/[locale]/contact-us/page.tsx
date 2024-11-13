"use client"

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { ContactForm } from "./form";
import { useTranslations } from 'next-intl';

export default function Page() {
    const t = useTranslations("ContactUsPage")

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-primary">
            <motion.section
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-backgroud pt-36 pb-20 text-center"
            >
                <motion.h1
                    className="text-4xl font-bold mb-4 text-primary"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    {t("title")}
                </motion.h1>
                <motion.p
                    className="text-xl text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {t("sub_title")}
                </motion.p>
            </motion.section>

            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className='col-span-2'
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-primary">{t("contact_info")}</h2>
                        {[
                            { icon: Mail, text: 'contact@nexura.com' },
                            { icon: Phone, text: '+1 (555) 123-4567' },
                            { icon: MapPin, text: '123 Tech Street, San Francisco, CA 94105' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center mb-4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    className="mr-4 text-green"
                                >
                                    <item.icon size={24} />
                                </motion.div>
                                <span className="text-gray-600 dark:text-gray-400">{item.text}</span>
                            </motion.div>
                        ))}

                        <motion.iframe
                            loading='lazy'
                            height={"350"}
                            className='w-full mt-5 rounded-xl'
                            initial={{ boxShadow: '0 0 0 rgba(0, 0, 0, 0)' }}
                            animate={{ boxShadow: '0 4px 6px -1px rgba(14, 164, 122, 0.1), 0 2px 4px -1px rgba(14, 164, 122, 0.06)' }}
                            transition={{ duration: 0.5 }}
                        >
                        </motion.iframe>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-primary">{t("send_us_message")}</h2>
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}


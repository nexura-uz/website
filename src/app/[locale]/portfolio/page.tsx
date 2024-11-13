"use client"

import ClientTestimonialsSection from "@/components/layouts/about-page/client-testimonials-section";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function Page() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-primary">

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green to-green/80 text-white pt-36 pb-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Innovating the Future with Nexura</h1>
                        <p className="text-xl mb-8">We create cutting-edge technology solutions that drive business growth and transform industries.</p>
                        <Link href={"/contact-us"}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block bg-white text-green font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                                Get in Touch
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </section>


            <ClientTestimonialsSection />
        </div>
    )
}
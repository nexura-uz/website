"use client"

import { motion } from "framer-motion";

export default function Page() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-primary">

            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-background text-primary pt-36 pb-20"
            >
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Nexura Tech Blog</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Stay up-to-date with the latest trends, insights, and innovations in the world of technology.
                    </p>
                </div>
            </motion.section>
        </div>
    )
}
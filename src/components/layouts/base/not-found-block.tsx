'use client'

import { Link } from '@/i18n/routing'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

export default function NotFoundBlock() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <motion.h1
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                    className="text-8xl font-bold text-primary mb-4"
                >
                    404
                </motion.h1>
                <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-4">Oops, we {"couldn't"} find that page.</h2>
                <motion.div
                    animate={{
                        rotate: [0, 10, -10, 10, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: 'loop',
                    }}
                    className="text-green mb-6"
                >
                    <Search size={48} />
                </motion.div>
                <p className="text-gray-500 mb-8">
                    The page {"you're"} looking for might have been moved, deleted, or never existed.
                </p>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href="/"
                        className="inline-block bg-green text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300 hover:bg-[#0c8d68]"
                    >
                        Return to Homepage
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    )
}
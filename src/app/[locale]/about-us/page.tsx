'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ClientTestimonialsSection from '@/components/layouts/about-page/client-testimonials-section'
import { Link } from '@/i18n/routing'


interface ITeamMember {
    name: string
    title: string
    bio: string
    image: string
}
const milestones = [
    { year: 2015, title: 'Founded', description: 'Nexura was established with a vision to revolutionize tech solutions.' },
    { year: 2017, title: 'First Major Client', description: 'Secured our first enterprise-level client, marking a significant growth milestone.' },
    { year: 2019, title: 'International Expansion', description: 'Opened our first international office, extending our reach globally.' },
    { year: 2021, title: 'AI Integration', description: 'Launched our AI-powered solutions, setting new industry standards.' },
    { year: 2023, title: 'Sustainability Initiative', description: 'Committed to net-zero emissions, aligning tech with environmental responsibility.' },
]

const values = [
    { title: 'Innovation', description: 'Pushing boundaries in technology' },
    { title: 'Customer Focus', description: 'Putting our clients at the heart of everything we do' },
    { title: 'Quality', description: 'Delivering excellence in every project' },
    { title: 'Integrity', description: 'Upholding the highest ethical standards' },
]

const teamMembers = [
    { name: 'Jane Doe', title: 'CEO', bio: 'Visionary leader with 15+ years in tech innovation', image: '/placeholder.svg?height=300&width=300' },
    { name: 'John Smith', title: 'CTO', bio: 'Tech guru driving our cutting-edge solutions', image: '/placeholder.svg?height=300&width=300' },
    { name: 'Emily Brown', title: 'COO', bio: 'Operations expert ensuring smooth project delivery', image: '/placeholder.svg?height=300&width=300' },
    { name: 'Michael Lee', title: 'Head of Design', bio: 'Creative mind behind our user-centric designs', image: '/placeholder.svg?height=300&width=300' },
]



const partnerLogos = [
    '/placeholder.svg?height=100&width=200',
    '/placeholder.svg?height=100&width=200',
    '/placeholder.svg?height=100&width=200',
    '/placeholder.svg?height=100&width=200',
    '/placeholder.svg?height=100&width=200',
    '/placeholder.svg?height=100&width=200',
]

export default function Page() {
    const [selectedTeamMember, setSelectedTeamMember] = useState<ITeamMember | null>(null)

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-primary">
            {/* Hero Section */}
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
                        About Nexura
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl mb-8"
                    >
                        Innovating for a Connected Future
                    </motion.p>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="max-w-2xl mx-auto text-lg"
                    >
                        At Nexura, {"we're"} passionate about leveraging cutting-edge technology to solve complex challenges and drive digital transformation.
                    </motion.p>
                </div>
            </motion.section>

            {/* Our Story */}
            <section className="py-20 bg-background border-t border-green/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
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

            {/* Our Mission & Vision */}
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
                                <h3 className="text-2xl font-bold mb-4 text-green">Our Mission</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
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
                                <h3 className="text-2xl font-bold mb-4 text-green">Our Vision</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    To be the global leader in delivering transformative tech solutions that shape the future of industries and improve lives worldwide.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-background border-t border-green/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md transition-colors duration-300 hover:dark:bg-green hover:text-white group cursor-pointer"
                            >
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-white">{value.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 group-hover:text-white">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Team */}
            <section className="py-20 bg-gray-100 dark:bg-gray-900 border-t border-green/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center cursor-pointer"
                                onClick={() => setSelectedTeamMember(member)}
                            >
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={200}
                                    height={200}
                                    className="rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                <p className="text-green mb-2">{member.title}</p>
                                <p className="text-gray-600 md:text-gray-400 text-sm">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Member Modal */}
            {selectedTeamMember && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={() => setSelectedTeamMember(null)}
                >
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        className="bg-background p-8 rounded-xl max-w-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedTeamMember.image}
                            alt={selectedTeamMember.name}
                            width={200}
                            height={200}
                            className="rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-2xl font-semibold mb-2">{selectedTeamMember.name}</h3>
                        <p className="text-green mb-4">{selectedTeamMember.title}</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedTeamMember.bio}</p>
                        <button
                            onClick={() => setSelectedTeamMember(null)}
                            className="bg-green text-white px-4 py-2 rounded hover:bg-[#0c8d68] transition-colors"
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}

            {/* Partner Logos */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {partnerLogos.map((logo, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <Image
                                    src={logo}
                                    alt={`Partner ${index + 1}`}
                                    width={200}
                                    height={100}
                                    className="mx-auto filter grayscale hover:filter-none transition-all duration-300"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            <ClientTestimonialsSection />

            {/* Call to Action */}
            <section className="py-20 bg-green text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Innovate with Nexura?</h2>
                    <p className="mb-8 text-lg">{"Let's"} discuss how we can help transform your business with our cutting-edge solutions.</p>
                    <Link href={"/contact-us"}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-green px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 transition-colors"
                        >
                            Contact Us
                        </motion.button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { useState } from "react"
import Image from 'next/image'

interface ITeamMember {
    name: string
    title: string
    bio: string
    image: string
}

export default function AboutTeamSection() {
    const t = useTranslations("AboutPageTeam")
    const [selectedTeamMember, setSelectedTeamMember] = useState<ITeamMember | null>(null)


    const teamMembers = [
        { name: 'Jane Doe', title: 'CEO', bio: t("member_text_1"), image: '/placeholder.svg?height=300&width=300' },
        { name: 'John Smith', title: 'CTO', bio: t("member_text_2"), image: '/placeholder.svg?height=300&width=300' },
        { name: 'Emily Brown', title: 'COO', bio: t("member_text_3"), image: '/placeholder.svg?height=300&width=300' },
        { name: 'Michael Lee', title: 'Head of Design', bio: t("member_text_4"), image: '/placeholder.svg?height=300&width=300' },
    ]

    return (
        <>
            <section className="py-20 bg-gray-100 dark:bg-gray-900 border-t border-green/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">{t("title")}</h2>
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
        </>
    )
}
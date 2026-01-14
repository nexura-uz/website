import { portfolios } from "@/utils/constants";
import Link from "next/link";
import Image from "next/image";import { Metadata } from "next";
;

export const metadata: Metadata = {
  title: "Nexura - Portfolio",
  description: "Bizing loyihalar",
};

export default function Page() {
    return (
        <section className="py-10 lg:py-16 bg-background text-primary min-h-screen">
            <div className="container mx-auto px-3">
                <h2 className="text-3xl font-bold text-center mb-12">Loyihalar</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {portfolios.map((project, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-xl hover:shadow-md hover:shadow-primary/60 transition-all duration-300 ease-in-out cursor-pointer group"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={300}
                                className="w-full h-64 object-cover"
                            />
                            {/* image size 800x500 */}
                            <Link href={project.link} target='_blank'
                                className="absolute inset-0 bg-gray-800/80 hover:bg-light-gray/80 flex flex-col justify-center items-center p-6 transition-all duration-300 ease-in-out"
                            >
                                <h3 className="text-primary text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-white group-hover:text-gray text-center">{project.description}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
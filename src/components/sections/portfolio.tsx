import Image from 'next/image'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link';
import { portfolios } from '@/utils/constants';



export default function PortfolioSection() {

    return (
        <section className="py-16 bg-background text-primary">
            <div className="max-w-7xl mx-auto px-3">
                <h2 className="text-3xl font-bold text-center mb-12">Loyihalar</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {portfolios.map((project, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-xl hover:shadow-md hover:shadow-primary/60 transition-all duration-300 ease-in-out cursor-pointer"
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
                                className="absolute inset-0 bg-gray-800/80 hover:bg-gray-800 flex flex-col justify-center items-center p-6 transition-all duration-300 ease-in-out"
                            >
                                <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-white text-center">{project.description}</p>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <Link href="/portfolio" className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-xl">
                        Barcha loyihalarni ko'rish
                        <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

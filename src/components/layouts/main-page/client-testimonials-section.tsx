import Image from 'next/image'
import { Quote } from 'lucide-react'

export default function ClientTestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-[#0ea47a]">
              <Quote className="w-8 h-8 text-[#0ea47a] mb-4" />
              <p className="text-gray-700 mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <div className="mt-4">
                <Image
                  src={testimonial.companyLogo}
                  alt={testimonial.company}
                  width={100}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote: "Nexura transformed our online presence with a stunning, user-friendly website that perfectly captures our brand essence. Their expertise and attention to detail are unmatched.",
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechInnovate Solutions",
    avatar: "/placeholder.svg?height=48&width=48",
    companyLogo: "/placeholder.svg?height=40&width=100",
  },
  {
    quote: "The mobile app Nexura developed for us has significantly improved our customer engagement. Their innovative approach and technical prowess delivered beyond our expectations.",
    name: "Michael Chen",
    position: "CEO",
    company: "HealthTrack Systems",
    avatar: "/placeholder.svg?height=48&width=48",
    companyLogo: "/placeholder.svg?height=40&width=100",
  },
  {
    quote: "Working with Nexura was a game-changer for our e-commerce platform. Their solutions boosted our sales and streamlined our operations. We couldn't be happier with the results.",
    name: "Emily Rodriguez",
    position: "Operations Manager",
    company: "Global Retail Co.",
    avatar: "/placeholder.svg?height=48&width=48",
    companyLogo: "/placeholder.svg?height=40&width=100",
  },
]
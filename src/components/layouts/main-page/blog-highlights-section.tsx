import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'

export default function BlogHighlightsSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-primary border-t border-green/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Insights</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-green/30 transition-all duration-300 hover:shadow-lg hover:shadow-green/40 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-green">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.description}</p>
                <Link
                  href={post.link}
                  className="text-green font-medium hover:underline inline-flex items-center"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            asChild
            className="inline-flex items-center px-6 py-3 bg-green text-white font-semibold rounded-xl hover:bg-dark-green transition-colors duration-300"
          >
            <Link href="/blog">
              Read Our Blog
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

const blogPosts = [
  {
    title: "Top UI Trends for 2024",
    description: "Explore the cutting-edge UI design trends that are shaping the digital landscape in 2024.",
    image: "/placeholder.svg?height=200&width=400",
    link: "/blog/top-ui-trends-2024",
  },
  {
    title: "10 Tips for Mobile-Friendly Design",
    description: "Learn how to create seamless mobile experiences with these essential design tips.",
    image: "/placeholder.svg?height=200&width=400",
    link: "/blog/mobile-friendly-design-tips",
  },
  {
    title: "The Future of Frontend Frameworks",
    description: "Dive into the evolving world of frontend frameworks and what's next for web development.",
    image: "/placeholder.svg?height=200&width=400",
    link: "/blog/future-of-frontend-frameworks",
  },
]
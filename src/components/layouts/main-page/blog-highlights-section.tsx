import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function BlogHighlightsSection() {
  const t = useTranslations("BlogHighlightsSection")

  const blogPosts = [
    {
      title: t("blog_title_1"),
      description: t("blog_description_1"),
      image: "/images/blogs/trends-2024.png",
      link: "/blog/top-ui-trends-2024",
    },
    {
      title: t("blog_title_2"),
      description: t("blog_description_2"),
      image: "/images/blogs/mobile-design-tips.png",
      link: "/blog/mobile-friendly-design-tips",
    },
    {
      title: t("blog_title_3"),
      description: t("blog_description_3"),
      image: "/images/blogs/future-of-web.png",
      link: "/blog/future-of-frontend-frameworks",
    },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-primary border-t border-green/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t("title")}</h2>
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
              {t("read_our_blog")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


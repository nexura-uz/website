import { getPostListAction } from "@/app/actions/posts";
import BlogHeroSection from "@/components/layouts/blog-page/hero-section";

export default async function Page({ params }: { params: Promise<any> }) {
  const locale = (await params).locale;
  const posts = await getPostListAction();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-primary">
      <BlogHeroSection />
        {locale}
      {JSON.stringify(posts, null, 2)}

      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-green/30 transition-all duration-300 hover:shadow-lg hover:shadow-green/40 overflow-hidden"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {post.description}
              </p>
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
      </div> */}
    </div>
  );
}

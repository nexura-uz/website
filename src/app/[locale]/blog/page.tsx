import { getPostListAction } from "@/app/actions/posts";
import BlogCard from "@/components/custom-ui/blog-card";
import BlogHeroSection from "@/components/layouts/blog-page/hero-section";
import { Link } from "@/i18n/routing";
import { getSession } from "@/lib/auth";
import { PlusIcon, UserIcon } from "lucide-react";

export default async function Page({ params }: { params: Promise<any> }) {
  const locale = (await params).locale;
  const session = await getSession();
  const posts = await getPostListAction({ take: 10 });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-primary">
      <BlogHeroSection />

      <div className="max-w-7xl container mx-auto px-4 py-10">
        {session && session.user && (
          <div className="p-5 border border-green/30 rounded-xl mb-5 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <UserIcon className="w-4 h-4" />
              <span>{session.user.name}</span>
            </div>
            <Link href={"blog/create"} className="flex items-center gap-2 text-white bg-green py-2 px-4 rounded-lg">
              Create
              <PlusIcon className="w-4 h-4" />
            </Link>
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts?.map((post, index) => (
            <BlogCard key={index} post={post} locale={locale} />
          ))}
        </div>
      </div>
    </div>
  );
}

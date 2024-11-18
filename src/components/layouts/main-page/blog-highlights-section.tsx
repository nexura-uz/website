import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import BlogCard from "@/components/custom-ui/blog-card";

export default function BlogHighlightsSection({
  locale,
  posts,
}: {
  locale: string;
  posts: any[];
}) {
  const t = useTranslations("BlogHighlightsSection");

  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-primary border-t border-green/30">
      <div className="max-w-7xl container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t("title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} locale={locale} />
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
  );
}

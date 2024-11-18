"use client";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "@/i18n/routing";
import { getDayLLL } from "@/lib/utils";

export default function BlogCard({
  post,
  locale,
}: {
  post: any;
  locale: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-green/30 transition-all duration-300 hover:shadow-lg hover:shadow-green/40 overflow-hidden">
      <Link href={`/blog/${post.slug}`}>
        <Image
          src={post.image}
          alt={post[`title_${locale}`]}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-green">
          {post[`title_${locale}`]}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {`${post[`content_${locale}`]?.substring(0, 130)}...`}
        </p>
        <div className="flex justify-between items-center pt-5">
          <Link
            href={`/blog/${post.slug}`}
            className="text-green font-medium hover:underline inline-flex items-center"
          >
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4" />
            {getDayLLL(post.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
}

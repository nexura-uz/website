import { deletePostAction, getPostByIdAction } from "@/app/actions/posts";
import { Button } from "@/components/ui/button";
import { Link, redirect } from "@/i18n/routing";
import { getSession } from "@/lib/auth";
import { getDayLLL } from "@/lib/utils";
import { Calendar1Icon, EyeIcon, PencilIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ReactMarkdown from "react-markdown";

export default async function Page({ params }: { params: Promise<any> }) {
  const slug = (await params).slug;
  const locale: "uz" | "ru" | "en" = (await params).locale;
  const post = await getPostByIdAction(slug);
  const session = await getSession();

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-primary pt-[100px]">
      <div className="max-w-7xl container mx-auto px-4 py-10">
        <Image
          src={post.image}
          alt={post[`title_${locale}`]}
          width={1200}
          height={600}
          className="w-full max-h-[300px] xl:max-h-[600px] object-contain"
        />
        <div className="pt-5 pb-2 flex items-center justify-between">
          <h1 className="text-4xl md:text-5xl font-bold">
            {post[`title_${locale}`]}
          </h1>
          {session && session.user && (
            <div className="flex items-center gap-2">
              <Link
                href={`/blog/${post.slug}/edit`}
                className="bg-green hover:bg-dark-green text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2"
              >
                Edit <PencilIcon className="w-4 h-4" />
              </Link>
              <form
                action={async () => {
                  "use server";
                  await deletePostAction(post.id);
                  redirect({ href: `/blog`, locale });
                }}
              >
                <Button
                  type="submit"
                  variant={"destructive"}
                  className="flex items-center gap-2"
                >
                  Delete <TrashIcon className="w-4 h-4" />
                </Button>
              </form>
            </div>
          )}
        </div>
        <div className="text-green flex gap-6 border-b border-green/30 pb-1 mb-5">
          <p className="flex items-center gap-2">
            <Calendar1Icon className="h-4 w-4" /> {getDayLLL(post.createdAt)}
          </p>
          <p className="flex items-center gap-2">
            <EyeIcon className="h-4 w-4" /> {post.viewsCount}
          </p>
        </div>

        <Suspense fallback={<div />}>
          <div className="prose max-w-none">
            <ReactMarkdown className={"[&_*]:text-primary"}>
              {post[`content_${locale}`]}
            </ReactMarkdown>
          </div>
        </Suspense>
      </div>
    </div>
  );
}

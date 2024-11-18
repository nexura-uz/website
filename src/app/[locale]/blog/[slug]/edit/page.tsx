import { editPostAction, getPostByIdAction } from "@/app/actions/posts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@/i18n/routing";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<any> }) {
  const slug = (await params).slug;
  const locale: "uz" | "ru" | "en" = (await params).locale;
  const post = await getPostByIdAction(slug);
  const session = await getSession();

  if (!post || !session?.user) return notFound();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-primary">
      <div className="max-w-7xl container mx-auto px-4 pt-[100px]">
        <form
          action={async (formData) => {
            "use server";
            await editPostAction(post.id, formData)
              .then((saved_post) => {
                revalidatePath(`${locale}/blog/${saved_post?.slug}/edit`);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
          className="space-y-5"
        >
          <div className="flex flex-col gap-4 lg:flex-row">
            <Input
              defaultValue={post[`title_uz`]}
              name="title_uz"
              type="text"
              placeholder="Title uz"
            />
            <Input
              defaultValue={post[`title_ru`]}
              name="title_ru"
              type="text"
              placeholder="Title ru"
            />
            <Input
              defaultValue={post[`title_en`]}
              name="title_en"
              type="text"
              placeholder="Title en"
            />
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <Textarea
              defaultValue={post[`content_uz`]}
              name="content_uz"
              placeholder="Content uz"
              rows={10}
            />
            <Textarea
              defaultValue={post[`content_ru`]}
              name="content_ru"
              placeholder="Content ru"
              rows={10}
            />
            <Textarea
              defaultValue={post[`content_en`]}
              name="content_en"
              placeholder="Content en"
              rows={10}
            />
          </div>
          <div>
            <Input
              defaultValue={post[`image`]}
              name="image"
              type="text"
              placeholder="Image url"
            />
          </div>

          <Button
            type="submit"
            className="bg-green hover:bg-dark-green text-white font-semibold"
          >
            Edit
          </Button>

          <Link href={`/blog/${post.slug}`} className="mx-2">{post[`title_${locale}`]}</Link>
        </form>
      </div>
    </div>
  );
}

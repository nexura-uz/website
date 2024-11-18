import { createPostAction } from "@/app/actions/posts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getSession } from "@/lib/auth";
import { notFound } from "next/navigation";

export default async function Page() {
  const session = await getSession();

  if (!session?.user) return notFound();
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-primary">
      <div className="max-w-7xl container mx-auto px-4 pt-[100px]">
        <form
          action={async (formData) => {
            "use server";
            await createPostAction(formData)
              .then(() => {})
              .catch((error) => {
                console.log(error);
              });
          }}
          className="space-y-5"
        >
          <div className="flex flex-col gap-4 lg:flex-row">
            <Input name="title_uz" type="text" placeholder="Title uz" />
            <Input name="title_ru" type="text" placeholder="Title ru" />
            <Input name="title_en" type="text" placeholder="Title en" />
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <Textarea name="content_uz" placeholder="Content uz" rows={10} />
            <Textarea name="content_ru" placeholder="Content ru" rows={10} />
            <Textarea name="content_en" placeholder="Content en" rows={10} />
          </div>
          <div>
            <Input name="image" type="text" placeholder="Image url" />
          </div>

          <Button
            type="submit"
            className="bg-green hover:bg-dark-green text-white font-semibold"
          >
            Create
          </Button>
        </form>
      </div>
    </div>
  );
}

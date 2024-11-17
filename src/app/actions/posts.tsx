"only server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import slugify from "slugify"

export async function getPostListAction() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })
    return { data: posts }
  } catch {
    return { error: "Failed to fetch posts" }
  }
}

export async function getPostByIdAction(id: string) {
  try {
    const post = await prisma.post.findUnique({
      where: { id },
    })
    return { data: post }
  } catch {
    return { error: "Failed to fetch post" }
  }
}

export async function createPostAction(formData: FormData) {
  const title_uz = formData.get("title_uz") as string
  const title_ru = formData.get("title_ru") as string
  const title_en = formData.get("title_en") as string
  const content_uz = formData.get("content_uz") as string
  const content_ru = formData.get("content_ru") as string
  const content_en = formData.get("content_en") as string
  const image = formData.get("image") as string

  try {
    const post = await prisma.post.create({
      data: {
        title_uz,
        title_ru,
        title_en,
        content_uz,
        content_ru,
        content_en,
        image,
        slug: slugify(title_uz, { lower: true }),
      },
    })
    revalidatePath("/admin/posts")
    return { data: post }
  } catch {
    return { error: "Failed to create post" }
  }
}

export async function updatePostAction(id: string, formData: FormData) {
  const title_uz = formData.get("title_uz") as string
  const title_ru = formData.get("title_ru") as string
  const title_en = formData.get("title_en") as string
  const content_uz = formData.get("content_uz") as string
  const content_ru = formData.get("content_ru") as string
  const content_en = formData.get("content_en") as string
  const image = formData.get("image") as string

  try {
    const post = await prisma.post.update({
      where: { id },
      data: {
        title_uz,
        title_ru,
        title_en,
        content_uz,
        content_ru,
        content_en,
        image,
        slug: slugify(title_uz, { lower: true }),
      },
    })
    revalidatePath("/admin/posts")
    return { data: post }
  } catch {
    return { error: "Failed to update post" }
  }
}

export async function deletePostAction(id: string) {
  try {
    await prisma.post.delete({
      where: { id },
    })
    revalidatePath("/admin/posts")
    return { success: true }
  } catch {
    return { error: "Failed to delete post" }
  }
}
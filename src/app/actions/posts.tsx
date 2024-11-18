"only server";

import { prisma } from "@/lib/prisma";
import slugify from "slugify";

export async function getPostListAction(params?: any) {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      ...params,
    });
    return posts;
  } catch {
    return [];
  }
}

export async function getPostByIdAction(slug: string) {
  try {
    const post = await prisma.post.findUnique({
      where: { slug },
    });

    if (post) {
      await prisma.post.update({
        where: { id: post.id },
        data: { viewsCount: post.viewsCount + 1 },
      });
    }
    return post;
  } catch {
    return null;
  }
}

export async function createPostAction(formData: FormData) {
  try {
    const post = await prisma.post.create({
      data: {
        title_uz: formData.get("title_uz") as string,
        title_ru: formData.get("title_ru") as string,
        title_en: formData.get("title_en") as string,
        slug: slugify(formData.get("title_uz") as string),
        content_uz: formData.get("content_uz") as string,
        content_ru: formData.get("content_ru") as string,
        content_en: formData.get("content_en") as string,
        image: formData.get("image") as string,
      },
    });
    return post;
  } catch {
    throw new Error("Failed to create post");
  }
}

export async function editPostAction(id: string, formData: FormData) {
  try {
    const post = await prisma.post.update({
      where: { id },
      data: {
        title_uz: formData.get("title_uz") as string,
        title_ru: formData.get("title_ru") as string,
        title_en: formData.get("title_en") as string,
        slug: slugify(formData.get("title_uz") as string),
        content_uz: formData.get("content_uz") as string,
        content_ru: formData.get("content_ru") as string,
        content_en: formData.get("content_en") as string,
        image: formData.get("image") as string,
      },
    });
    return post;
  } catch {
    throw new Error("Failed to edit post");
  }
}


export async function deletePostAction(id: string) {
  try {
    await prisma.post.delete({ where: { id } });
  } catch {
    throw new Error("Failed to delete post");
  }
}


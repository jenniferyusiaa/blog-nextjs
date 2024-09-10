"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const handleCreatePostClick = async (formData: FormData) => {
  // Auth checking

  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  console.log(title, body);

  // Update database

  await prisma.post.create({
    data: {
      body,
      title,
    },
  });

  // Revalidate

  revalidatePath("/posts");
};

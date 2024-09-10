import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import { FC } from "react";

interface Params {
  params: {
    id: string;
  };
}

const PostId: FC<Params> = async ({ params }) => {
  await new Promise((resolve) => setTimeout(resolve, 2500));

  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id, 10),
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostId;

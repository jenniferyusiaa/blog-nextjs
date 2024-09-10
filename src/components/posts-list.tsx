import prisma from "@/lib/db";
import Link from "next/link";
import React from "react";

const PostsList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2500));

  const posts = await prisma.post.findMany();

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;

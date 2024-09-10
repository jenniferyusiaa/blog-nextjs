import PostsList from "@/components/posts-list";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Posts",
  description: "Posts page",
};

const Posts = async () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl">All posts</h1>
      </div>

      <Suspense fallback={<p className=" text-red-500">Loading...</p>}>
        <PostsList />
      </Suspense>
    </div>
  );
};

export default Posts;

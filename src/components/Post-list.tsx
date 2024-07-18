import prisma from "@/lib/bd";
import Link from "next/link";
import React from "react";

const PostList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await prisma.post.findMany();

  return (
    <div className="flex justify-center items-center">
      <ul className="flex items-start text-center flex-col mx-auto ">
        {posts.map((post: any) => {
          return (
            <li className="mb-4 px-1 md:px-0 list-disc font-bold border-b-2 text-left" key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostList;

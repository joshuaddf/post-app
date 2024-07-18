import prisma from "@/lib/bd";
import { notFound } from "next/navigation";
import React from "react";

type paramsType = {
  id: string;
};

const page = async ({ params }: { params: paramsType }) => {

  const post = await prisma.post.findUnique({
    where: {
      id: params.id
    },
  })

  if (!post) {
    notFound();
  }

  return (
    <main className="px-7 text-center pt-24">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
      <small className="py-8 font-bold text-zinc-600">Posted on {new Date(post.createdAt).toLocaleDateString()}</small>
    </main>
  );
};

export default page;

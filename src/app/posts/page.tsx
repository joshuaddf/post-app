import PostList from "@/components/Post-list";
import { Suspense } from "react";

const page = async () => {
  return (
    <main className="text-center pt-16 px-5 ">
      <h1 className="font-bold mb-5 text-4xl md:text-5xl">All posts</h1>

      <Suspense fallback="Loading...">
        <PostList />
      </Suspense>
    </main>
  );
};

export default page;

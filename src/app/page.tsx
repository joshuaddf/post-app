import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center pt-48 px-5 ">
      <h1 className="font-bold mb-5 text-4xl md:text-5xl">Random Post</h1>
      <p className="max-w-[750px] leading-5 mx-auto">
      What is that random, useless piece of information that you've always wanted to share with people? Feel free to post them here!
      </p>
      <Link href="/create-post">
       <button className="bg-zinc-900 text-white px-3 py-1 rounded-md mt-6">Start Posting</button>
      </Link>
    </main>
  );
}


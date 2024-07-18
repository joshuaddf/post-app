import createPost from "@/actions/actions";
import Form from "@/components/Form";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import React from "react";

const page = async () => {

  return (
    <main className="text-center pt-28">
      <h1 className="font-bold mb-5 text-4xl md:text-5xl">Create a post</h1>

     <Form />

    <div className=" pt-6 opacity-85">
      <LogoutLink className="bg-red-500 text-white px-2 text-sm py-1 rounded-md">Log out</LogoutLink>
    </div>
    </main>
  );
};

export default page;

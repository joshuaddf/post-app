"use client"; // Ensure this is a client component

import { useForm, SubmitHandler } from "react-hook-form";
import createPost from "@/actions/actions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";


type Inputs = {
  title: string;
  body: string;
};

export default function Form() {

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("body", data.body);

    try {
      await createPost(formData);
      reset();
      toast.success("Post created successfully");
      setTimeout(() => {
        router.push("/posts");
      }, 1700)
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to create post");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-12 flex flex-col space-y-4 items-center px-6"
      >
        <input
          className="border-2 rounded-md px-3 py-[0.2rem] w-full max-w-lg"
          placeholder="Title for a new post"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className="text-red-500">Title is required</span>
        )}

        <textarea
          className="border-2 rounded-md px-3 py-[0.2rem] w-full max-w-lg h-24"
          placeholder="Something interesting.😊"
          rows={20}
          {...register("body", { required: true })}
        />
        {errors.body && <span className="text-red-500">Body is required</span>}

        <button
          type="submit"
          className="bg-zinc-900 text-white px-4 py-[0.2rem] rounded-md"
        >
          Submit
        </button>
      </form>
      <ToastContainer autoClose={1650} position="bottom-right" />
    </>
  );
}

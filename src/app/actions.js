"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const headers = new Headers();
headers.append("Content-Type", "application/json");

let baseURL = "http://localhost:8000/posts";

const getAllPosts = async () => {
  const response = await fetch(`${baseURL}`);
  const posts = await response.json();
  return posts;
};

const findPostById = async (id) => {
  const response = await fetch(`${baseURL}/${id}`);
  let post;
  try {
    post = await response.json();
  } catch (error) {
    console.error("post not found ");

    redirect("/posts");
  }
  return post;
};

const createNewPost = async (formData) => {
  const postData = {
    ...Object.fromEntries(formData),
  };

  const response = await fetch(`${baseURL}`, {
    method: "POST",
    headers,
    body: JSON.stringify(postData),
  });
  console.log(response.ok);

  const newPost = await response.json();

  //   revalidatePath("/posts");
  //   revalidatePath("/posts/[id]", "page");
  //   redirect(`/posts/${newPost.id}`);
};

const deletePost = async (id) => {
  await fetch(`${baseURL}/${id}`, {
    method: "DELETE",
    //   body: JSON.stringify(postData),
  });
  // const newPost = await response.json();
  revalidatePath("/posts");
  revalidatePath("/posts/[id]", "page");
  redirect(`/posts`);
};

export { getAllPosts, deletePost, createNewPost, findPostById };
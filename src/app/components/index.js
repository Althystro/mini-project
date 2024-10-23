"use client";

import { useState } from "react";

import PostsHeader from "./PostsContainer/PostHeader";
import PostsList from "./PostsList";

async function PostContainer({ posts }) {
  const [query, setQuery] = useState("");
  // const posts = await getAllPosts();

  const filteredposts = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col justify-center items-center ">
      <PostsHeader setQuery={setQuery} />
      <PostsList posts={filteredposts} />
    </div>
  );
}

export default PostContainer;

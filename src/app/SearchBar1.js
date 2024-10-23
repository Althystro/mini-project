"use client";

import React, { useState } from "react";
import { deletePost } from "./actions";

function SearchBar1({ posts }) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  const titlePosts = posts
    .filter((post) => post.title.toLowerCase().includes(query.toLowerCase()))
    .map((post) => (
      <div key={post.id}>
        <h1>{`Title: ${post.title}.`}</h1>
        <h1>{`Description: ${post.description}`}</h1>
        <button onClick={() => deletePost(post.id)}>Delete</button>
      </div>
    ));
  return (
    <div>
      <input placeholder={"Title"} onChange={handleChange} />
      {titlePosts}
    </div>
  );
}

export default SearchBar1;

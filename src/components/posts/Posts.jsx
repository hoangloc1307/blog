import React, { memo } from "react";
import Post from "../post/Post";

function Posts({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default memo(Posts);

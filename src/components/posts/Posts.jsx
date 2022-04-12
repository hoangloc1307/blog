import React, { memo } from "react";
import Post from "../post/Post";

function Posts({ posts, pc }) {
  return (
    <div className={pc.posts}>
      {posts.map((post) => (
        <Post key={post.id} post={post} pc={""} />
      ))}
    </div>
  );
}

export default memo(Posts);

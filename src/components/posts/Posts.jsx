import React, { memo, useEffect } from "react";

import Post from "../post/Post";

function Posts({ posts }) {
  useEffect(() => {
    if (posts.length > 0) {
      const images = document.querySelectorAll(".post__image");
      const height = images[0].clientWidth / 1.33266932271;
      images.forEach((image) => {
        image.style.height = `${height}px`;
      });
    }
  }, [posts]);
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default memo(Posts);

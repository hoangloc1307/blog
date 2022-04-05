import React, { memo, useEffect } from "react";

import Post from "../post/Post";

function Posts({ posts }) {
  console.log("post");
  useEffect(() => {
    const imageHeightRatio = (ratio) => {
      const images = document.querySelectorAll(".post__image");
      const height = images[0].clientWidth / ratio;
      images.forEach((image) => {
        image.style.height = `${height}px`;
      });
    };
    if (posts.length > 0) {
      imageHeightRatio(1.33266932271);
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

import React, { useEffect } from "react";
import Post from "./Post";

import "./post.scss";

function PostBox() {
  useEffect(() => {
    const imageHeightRatio = (ratio) => {
      const images = document.querySelectorAll(".post__image");
      const height = images[0].clientWidth / ratio;
      images.forEach((image) => {
        image.style.height = `${height}px`;
      });
    };
    imageHeightRatio(1.33266932271);
  }, []);

  return (
    <div className="posts">
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default PostBox;

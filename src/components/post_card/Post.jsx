import React from "react";
import { Link } from "react-router-dom";

import postImage from "../../assets/images/blog_1";

function Post() {
  return (
    <div className="post">
      <img
        src={postImage}
        alt="Fresh from Our Garden"
        className="post__image"
      />
      <div className="post__content">
        <p className="post__user">User</p>
        <Link to={"/"} className="post__link">
          <h3 className="post__title">Fresh from Our Garden</h3>
          <p className="post__description">
            Create a blog post subtitle that summarizes your post in a few
            short, punchy sentences and entices your audience to continue
            reading....
          </p>
          <div className="post__interaction">
            <div className="post__view">
              <i className="fa-regular fa-eye"></i> 15
            </div>
            <div className="post__comment">
              <i className="fa-regular fa-message"></i> 20
            </div>
            <div className="post__like">
              <i className="fa-regular fa-heart"></i> 9
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Post;

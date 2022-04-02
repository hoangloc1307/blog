import React from "react";
import { Link } from "react-router-dom";

import postImage from "../../assets/images/blog_1.jpg";
import avatar from "../../assets/images/avatar.jpg";

function Post() {
  return (
    <div className="post">
      <Link to={"/"} className="post__image-container">
        <img
          src={postImage}
          alt="Fresh from Our Garden"
          className="post__image"
          style={{}}
        />
      </Link>
      <div className="post__content">
        <div className="post__user">
          <div className="user__image">
            <img src={avatar} alt="Avatar" />
          </div>
          <div className="user__info">
            <p className="user__name">Admin</p>
            <p className="user__datetime">
              <span className="user__date">Apr 2nd, 2022</span>
              <span className="user__time">2 min</span>
            </p>
          </div>
        </div>
        <Link to={"/"} className="post__link">
          <h3 className="post__title">Fresh from Our Garden</h3>
          <p className="post__description">
            Create a blog post subtitle that summarizes your post in a few
            short, punchy sentences and entices your audience to continue
            reading....
          </p>
        </Link>
        <div className="post__interaction">
          <div className="post__view">
            <i className="fa-regular fa-eye"></i> 15
          </div>
          <div className="post__comment">
            <i className="fa-regular fa-message"></i> 20
          </div>
          <div className="post__like">
            9 <i className="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

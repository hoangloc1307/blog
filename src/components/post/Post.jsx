import React from "react";
import { Link } from "react-router-dom";

import "./post.scss";
import avatar from "../../assets/images/avatar.jpg";

function Post({ post }) {
  return (
    <div className="post">
      <Link to={"/"} className="post__image-container">
        <img src={post.image} alt={post.title} className="post__image" />
      </Link>
      <div className="post__content">
        <div className="post__user">
          <div className="user__image">
            <img src={avatar} alt="Avatar" />
          </div>
          <div className="user__info">
            <p className="user__name">Admin</p>
            <p className="user__datetime">
              <span className="user__date">
                {post.createdAt.toDateString()}
              </span>
              <span className="user__time">2 min</span>
            </p>
          </div>
        </div>
        <Link to={"/"} className="post__link">
          <h3 className="post__title">{post.title}</h3>
          <p className="post__description">{post.description}</p>
        </Link>
        <div className="post__interaction">
          <div className="post__view">
            <i className="fa-regular fa-eye"></i> {post.view}
          </div>
          <div className="post__comment">
            <i className="fa-regular fa-message"></i> {post.comment}
          </div>
          <div className="post__like">
            {post.like} <i className="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

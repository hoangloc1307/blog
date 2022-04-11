import React from "react";
import { Link } from "react-router-dom";

import c from "./Post.module.scss";
import avatar from "../../assets/images/avatar.jpg";

function Post({ post }) {
  return (
    <div className={c.post}>
      <Link to={"/"} className={c.postLink}>
        <img src={post.image} alt={post.title} className={c.postImage} />
      </Link>
      <div className={c.postContent}>
        <div className={c.postUser}>
          <img className={c.userImage} src={avatar} alt="Avatar" />
          <div className={c.userInfo}>
            <p className={c.userName}>Admin</p>
            <p className={c.userDatetime}>
              <span className={c.userDate}>
                {post.createdAt.toDateString()}
              </span>
              <span className={c.userTime}>2 min</span>
            </p>
          </div>
        </div>
        <Link to={"/"} className={c.postLink}>
          <h3 className={c.postTitle}>{post.title}</h3>
          <p className={c.postDescription}>{post.description}</p>
        </Link>
        <div className={c.postInteraction}>
          <div className={c.postView}>
            <i className="fa-regular fa-eye"></i> {post.view}
          </div>
          <div className={c.postComment}>
            <i className="fa-regular fa-message"></i> {post.comment}
          </div>
          <div className={c.postLike}>
            {post.like} <i className="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

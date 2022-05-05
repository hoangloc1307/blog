import React from 'react';
import { Link } from 'react-router-dom';

import c from './Post.module.scss';
import avatar from '~/assets/images/avatar.jpg';
import clsx from 'clsx';

function Post({ post, pc }) {
  return (
    <div className={clsx(c.post, pc.post)}>
      <Link
        to={`/post/${post.title.toLowerCase().replaceAll(' ', '-')}`}
        className={clsx(c.postLinkImage, pc.postLinkImage)}
      >
        <img
          src={post.image}
          alt={post.title}
          className={clsx(c.postImage, pc.postImage)}
        />
      </Link>
      <div className={clsx(c.postContent, pc.postContent)}>
        <div className={clsx(c.postUser, pc.postUser)}>
          <img className={c.userImage} src={avatar} alt='Avatar' />
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
        <Link
          to={`/post/${post.title.toLowerCase().replaceAll(' ', '-')}`}
          className={clsx(c.postLink, pc.postLink)}
        >
          <h3 className={clsx(c.postTitle, pc.postTitle)}>{post.title}</h3>
          <p className={clsx(c.postDescription, pc.postDescription)}>
            {post.description}
          </p>
        </Link>
        <div className={c.postInteraction}>
          <div className={c.postView}>
            <i className='fa-regular fa-eye'></i> {post.view}
          </div>
          <div className={c.postComment}>
            <i className='fa-regular fa-message'></i> {post.comment}
          </div>
          <div className={c.postLike}>
            {post.like} <i className='fa-regular fa-heart'></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

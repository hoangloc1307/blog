import React, { useEffect, useState } from 'react';
import c from './PostDetail.module.scss';
import CategoryAndSearch from '../../components/category_and_search/CategoryAndSearch';
import { Link, useLocation } from 'react-router-dom';
import { postList } from '../../assets/fake_data/post';
import Post from '../../components/post/Post';
import Comment from '../../components/comment/Comment';
import NotFound from '../not_found/NotFound';

function PostDetail() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];

  const [post, setPost] = useState({});
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const result = postList;
      //Get post detail
      const postDetail = result.filter(
        (p) => path === p.title.toLowerCase().replaceAll(' ', '-')
      );
      setPost(...postDetail);

      //Get recent posts
      const postsRecent = result.slice(0, 3);
      setRecentPosts(postsRecent);
    };
    fetchPost();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [path]);

  return (
    <>
      {post ? (
        <div className='container'>
          <CategoryAndSearch></CategoryAndSearch>

          {/* Post Content */}
          <div className={c.postContainer}>
            <h2 className={c.postTitle}>{post.title}</h2>
            <div className={c.postContent}>{post.content}</div>
            <div className={c.postFooter}>
              <ul className={c.social}>
                <li className={c.socialItem}>
                  <a href='/' className={c.socialLink}>
                    <i className='fa-brands fa-facebook-f'></i>
                  </a>
                </li>
                <li className={c.socialItem}>
                  <a href='/' className={c.socialLink}>
                    <i className='fa-brands fa-twitter'></i>
                  </a>
                </li>
                <li className={c.socialItem}>
                  <a href='/' className={c.socialLink}>
                    <i className='fa-brands fa-linkedin-in'></i>
                  </a>
                </li>
                <li className={c.socialItem}>
                  <a href='/' className={c.socialLink}>
                    <i className='fa-solid fa-link'></i>
                  </a>
                </li>
              </ul>
              <ul className={c.category}>
                <li className={c.categoryItem}>
                  <Link to={'/'} className={c.categoryLink}>
                    {post.category}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* End Post Content */}

          {/* Recent Post */}
          <div className={c.postRecent}>
            <div className={c.postRecentHeader}>
              <h2 className={c.postRecentTitle}>Recent Posts</h2>
              <Link className={c.postRecentLink} to={'/post'}>
                See All
              </Link>
            </div>
            <div className={c.postRecentContainer}>
              {recentPosts.map((item) => (
                <Post post={item} pc={c} key={item.id} />
              ))}
            </div>
          </div>
          {/* End Recent Post */}

          <Comment />
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default PostDetail;

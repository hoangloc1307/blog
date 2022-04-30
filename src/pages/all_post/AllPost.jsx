import React, { useEffect, useState } from 'react';
import { postList } from '../../assets/fake_data/post';
import Post from '../../components/post/Post';
import c from './AllPost.module.scss';
import { useLocation, useOutletContext } from 'react-router-dom';
import { StringCapitalize } from '../../services/functions/string';

function AllPost() {
  const keyword = useOutletContext();
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    //Get query string
    const queryString = new URLSearchParams(search);
    //Get category
    const category = queryString.get('category');
    //Set title
    document.title = `${category ? StringCapitalize(category) : 'All Post'} | 
    ${process.env.REACT_APP_BLOG_NAME}`;
    //Get posts
    const fetchPosts = async () => {
      const result = postList;
      if (category) {
        setPosts(result.filter((post) => post.category === category));
      } else {
        setPosts(result);
      }
    };
    fetchPosts();

    //Get posts by search
    if (queryString.get('search') !== null) {
      //Set title
      document.title = `Search: ${keyword} | Blog`;
      //Search post
      const searchPosts = async () => {
        const result = postList;
        if (keyword) {
          setPosts(
            result.filter(
              (post) => post.title.toLowerCase().indexOf(keyword) !== -1
            )
          );
        } else {
          setPosts(result);
        }
      };
      searchPosts();
    }
  }, [search]);

  return (
    <div className={c.posts}>
      {posts.map((post) => (
        <Post post={post} key={post.id} pc={c} />
      ))}
    </div>
  );
}

export default AllPost;

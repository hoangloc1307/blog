import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { postList } from '../../assets/fake_data/post';
import CategoryAndSearch from '../../components/category_and_search/CategoryAndSearch';
import Post from '../../components/post/Post';
import c from './AllPost.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';

function AllPost() {
  const [posts, setPosts] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const result = postList;
      if (category) {
        setPosts(result.filter((post) => post.category === category));
      } else {
        setPosts(result);
      }
    };
    fetchPosts();
    setKeyword('');
    setShowSearch(false);

    //Set title
    document.title = `${category ? category : 'All Post'} | Blog`;
  }, [category]);

  useEffect(() => {
    setCategory(new URLSearchParams(search).get('category'));
  }, [search]);

  //Show and hide search bar
  const handleSearchShow = (action) => {
    if (action === 'open') {
      setShowSearch(true);
    }
    if (action === 'close') {
      setShowSearch(false);
      setKeyword('');
    }
  };

  //Press enter to search
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      //Set title
      document.title = `Search: ${keyword} | Blog`;
      //Edit url
      navigate(`/post?search=${keyword}`, {});

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
  };

  //Two way binding
  const handleKeywordChange = (value) => {
    setKeyword(value);
  };

  return (
    <div className={clsx(c.allPost, 'container')}>
      <CategoryAndSearch
        showSearch={showSearch}
        keyword={keyword}
        onSearchShow={handleSearchShow}
        onSearch={handleSearch}
        onKeywordChange={handleKeywordChange}
      />
      <div className={c.posts}>
        {posts.map((post) => (
          <Post post={post} key={post.id} pc={c} />
        ))}
      </div>
    </div>
  );
}

export default AllPost;

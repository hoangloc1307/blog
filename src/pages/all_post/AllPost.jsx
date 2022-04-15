import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { postList } from "../../assets/fake_data/post";
import CategoryAndSearch from "../../components/category_and_search/CategoryAndSearch";
import Post from "../../components/post/Post";
import c from "./AllPost.module.scss";

function AllPost() {
  const [posts, setPosts] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [category, setCategory] = useState("all");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const result = postList;
      if (category === "all") {
        setPosts(result);
      } else {
        setPosts(result.filter((post) => post.category === category));
      }
    };
    fetchPosts();
  }, [category]);

  const handleSearchShow = (action) => {
    if (action === "open") {
      setShowSearch(true);
    }
    if (action === "close") {
      setShowSearch(false);
      setKeyword("");
    }
  };

  const handleCategoryChange = (categoryValue, e) => {
    e.preventDefault();
    setCategory(categoryValue);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const value = e.target.value.toLowerCase();
      const searchPosts = async () => {
        const result = postList;
        if (value) {
          setPosts(
            result.filter(
              (post) => post.title.toLowerCase().indexOf(value) !== -1
            )
          );
        } else {
          setPosts(result);
        }
      };
      searchPosts();
    }
  };

  return (
    <div className={clsx(c.allPost, "container")}>
      <CategoryAndSearch
        showSearch={showSearch}
        keyword={keyword}
        onSearchShow={handleSearchShow}
        onCategoryChange={handleCategoryChange}
        onSearch={handleSearch}
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

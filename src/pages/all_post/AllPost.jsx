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
    setShowSearch(action === "open");
  };

  const handleCategoryChange = (categoryValue, e) => {
    e.preventDefault();
    setCategory(categoryValue);
  };

  return (
    <div className={clsx(c.allPost, "container")}>
      <CategoryAndSearch
        showSearch={showSearch}
        onSearchShow={handleSearchShow}
        onCategoryChange={handleCategoryChange}
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

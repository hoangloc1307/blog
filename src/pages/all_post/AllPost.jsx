import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { postList } from "../../assets/fake_data/post";
import CategoryAndSearch from "../../components/category_and_search/CategoryAndSearch";
import Post from "../../components/post/Post";
import c from "./AllPost.module.scss";

function AllPost() {
  const [posts, setPosts] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const fetchPosts = () => {
      const result = postList;
      setPosts(result);
    };
    fetchPosts();
  }, []);

  const handleSearchShow = (value) => {
    setShowSearch(value === "open");
  };

  return (
    <div className={clsx(c.allPost, "container")}>
      <CategoryAndSearch
        showSearch={showSearch}
        onSearchShow={handleSearchShow}
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

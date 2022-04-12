import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { postList } from "../../assets/fake_data/post";
import Post from "../../components/post/Post";
import c from "./AllPost.module.scss";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      const result = postList;
      setPosts(result);
    };
    fetchPosts();
  }, []);

  return (
    <div className={clsx(c.posts, "container")}>
      {posts.map((post) => (
        <Post post={post} key={post.id} pc={c} />
      ))}
    </div>
  );
}

export default AllPost;

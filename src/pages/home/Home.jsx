import React, { useEffect, useState } from "react";

import "./home.scss";
import { postList } from "../../assets/fake_data/post";
import Hero from "../../components/hero/Hero";
import CategoryBox from "../../components/category_card/CategoryBox";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = () => {
      const result = postList;
      setPosts(result);
    };
    fetchPost();
  }, []);

  return (
    <div className="page">
      <Hero />
      <div className="container">
        <CategoryBox />
        <div className="home">
          <Posts posts={posts} />
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default Home;

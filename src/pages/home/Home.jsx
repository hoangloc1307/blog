import React, { useEffect, useState } from "react";

import "./home.scss";
import { postList } from "../../assets/fake_data/post";
import { slideList } from "../../assets/fake_data/slide";
import Hero from "../../components/hero/Hero";
import CategoryBox from "../../components/category_card/CategoryBox";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import Slider from "../../components/slider/Slider";

function Home() {
  const [posts, setPosts] = useState([]);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    //Set title
    document.title = "Blog";

    //Get posts
    const fetchPost = () => {
      const result = postList;
      setPosts(result);
    };
    fetchPost();

    //Get slides
    const fetchSlide = () => {
      const result = slideList;
      setSlides(result);
    };
    fetchSlide();
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
      <Slider slides={slides} show={4} />
    </div>
  );
}

export default Home;

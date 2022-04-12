import React, { useEffect, useState } from "react";

import c from "./Home.module.scss";
import { postList } from "../../assets/fake_data/post";
import { slideList } from "../../assets/fake_data/slide";
import Hero from "../../components/hero/Hero";
import CategoryCard from "../../components/category_card/CategoryCard";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import Slider from "../../components/slider/Slider";
import clsx from "clsx";

function Home() {
  const [posts, setPosts] = useState([]);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    //Set title
    document.title = "Blog";

    //Get posts
    const fetchPosts = () => {
      const result = postList.slice(0, 3);
      setPosts(result);
    };
    fetchPosts();

    //Get slides
    const fetchSlides = () => {
      const result = slideList;
      setSlides(result);
    };
    fetchSlides();
  }, []);

  return (
    <>
      <Hero />
      <CategoryCard />
      <div className={clsx(c.home, "container")}>
        <Posts posts={posts} pc={c} />
        <SideBar pc={c} />
      </div>
      <Slider slides={slides} show={4} />
    </>
  );
}

export default Home;

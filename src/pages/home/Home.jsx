import React from "react";

import "./home.scss";
import Hero from "../../components/hero/Hero";
import CategoryBox from "../../components/category_card/CategoryBox";
import PostBox from "../../components/post_card/PostBox";

function Home() {
  return (
    <>
      <Hero />
      <div className="container">
        <CategoryBox />
        <PostBox />
      </div>
    </>
  );
}

export default Home;

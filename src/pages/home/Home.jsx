import React from "react";
import "./home.scss";
import Hero from "../../components/hero/Hero";
import CategoryBox from "../../components/category_card/CategoryBox";

function Home() {
  return (
    <>
      <Hero />
      <CategoryBox />
    </>
  );
}

export default Home;

import React from "react";
import "./home.scss";
import Hero from "../../components/hero/Hero";
import CategoryCard from "../../components/category_card/CategoryCard";

function Home() {
  return (
    <>
      <Hero />
      <CategoryCard />
    </>
  );
}

export default Home;

import React from "react";
import "./hero.scss";
import heroImage from "../../assets/images/hero_img.jpg";

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__title">A Lifestyle Blog</h1>
      <p className="hero__description">Lovely Little Things</p>
      <img src={heroImage} className="hero__image" alt="Lovely Little Things" />
    </div>
  );
}

export default Hero;

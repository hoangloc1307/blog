import "./hero.scss";

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__tilte">A Lifestyle Blog</h1>
      <p className="hero__description">Lovely Little Things</p>
      <img
        src={require("../../assets/images/hero_img.jpg")}
        alt="Lovely Little Things"
      />
    </div>
  );
}

export default Hero;

import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  const backgroundImage = {
    backgroundImage: `url(${category.image})`,
  };
  return (
    <div className="category-card">
      <Link to={"/"} className="card">
        <div className="card__container" style={backgroundImage}>
          <div className="card__content">
            <h2 className="card__title">{category.title}</h2>
            <p className="card__description">{category.description}</p>
            <span className="card__line"></span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CategoryCard;

import clsx from "clsx";
import React, { memo, useContext } from "react";
import { Link } from "react-router-dom";

import c from "./CategoryCard.module.scss";
import { CategoryContext } from "../../App";

function CategoryCard() {
  const categories = useContext(CategoryContext);

  return (
    <div className={clsx(c.categoryCard, "container")}>
      {categories.map((category) => (
        //Category Card Item
        <Link to={`/${category.title}`} key={category.id} className={c.card}>
          <div
            className={c.cardContainer}
            style={{ backgroundImage: `url(${category.image})` }}
          >
            <div className={c.cardContent}>
              <h2 className={c.cardTitle}>{category.title}</h2>
              <p className={c.cardDescription}>{category.description}</p>
              <span className={c.cardLine}></span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default memo(CategoryCard);

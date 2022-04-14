import clsx from "clsx";
import React, { memo, useContext } from "react";
import { CategoryContext } from "../../App";
import c from "./CategoryAndSearch.module.scss";

function CategoryAndSearch({ showSearch, onSearchShow, onCategoryChange }) {
  const categories = useContext(CategoryContext);

  return (
    <div className={c.categoryAndSearch}>
      <ul className={c.category}>
        <li className={c.categoryItem}>
          <a
            href="/"
            onClick={(e) => onCategoryChange("all", e)}
            className={c.categoryLink}
          >
            All post
          </a>
        </li>
        {categories.map((category) => (
          <li key={category.id} className={c.categoryItem}>
            <a
              href="/"
              onClick={(e) => onCategoryChange(category.title.toLowerCase(), e)}
              className={c.categoryLink}
            >
              {category.title}
            </a>
          </li>
        ))}
      </ul>
      <div
        className={clsx(c.search, {
          [c.hide]: !showSearch,
        })}
      >
        <i
          className={clsx(c.searchGlass, "fa-solid fa-magnifying-glass")}
          onClick={() => onSearchShow("open")}
        ></i>
        <input
          type="text"
          className={clsx(c.searchInput)}
          placeholder="Seach"
        />
        <i
          className={clsx(c.searchClose, "fa-solid fa-xmark")}
          onClick={() => onSearchShow("close")}
        ></i>
      </div>
    </div>
  );
}

export default memo(CategoryAndSearch);

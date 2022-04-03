import React, { useState, useEffect } from "react";

import "./category_box.scss";
import { categoryList } from "../../assets/fake_data/category";
import CategoryCard from "./CategoryCard";

function CategoryBox() {
  const [categories, setCategories] = useState(categoryList);

  return (
    <div className="category-cards">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}

export default CategoryBox;

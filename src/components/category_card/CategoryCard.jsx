import React, { useState, useEffect } from "react";
import "./category_card.scss";
import lifestyleImage from "../../assets/images/category_lifestyle.jpg";
import familyImage from "../../assets/images/category_family.jpg";
import foodImage from "../../assets/images/category_food.jpg";
import Card from "./Card";

function CategoryCard() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const result = [
      {
        id: 1,
        title: "Lifestyle",
        description: "Click here to edit me",
        image: lifestyleImage,
      },
      {
        id: 2,
        title: "Family",
        description: "Click here to edit me",
        image: familyImage,
      },
      {
        id: 3,
        title: "Food",
        description: "Click here to edit me",
        image: foodImage,
      },
    ];
    setCategories(result);
  }, []);

  return (
    <div className="category-cards">
      <div className="container">
        <div className="category-card">
          {categories.map((category) => (
            <Card key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;

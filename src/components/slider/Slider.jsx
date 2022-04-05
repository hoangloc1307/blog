import React, { memo, useEffect } from "react";

import "./slider.scss";

function Slider({ slides }) {
  useEffect(() => {
    const slideContainer = document.querySelector(".slider__slide");
    slideContainer.style.width = `${slides.length * 275}px`;
  }, [slides]);

  return (
    <div className="slider">
      <div className="slider__slide">
        {slides.map((slide, index) => (
          <div className="slide" key={slide.id}>
            <img
              className="slide__image"
              src={slide.image}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>
      <div className="slider__control">
        <div className="slider__button">
          <div className="prev">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="next">
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Slider);

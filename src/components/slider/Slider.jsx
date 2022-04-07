import React, { memo, useEffect, useRef, useState } from "react";

import "./slider.scss";

function Slider({ slides, show }) {
  const [firstSlide, setfirstSlide] = useState(1);

  const prevBtn = useRef();
  const nextBtn = useRef();

  useEffect(() => {
    if (slides.length > 0) {
      const documentWidth = document.body.clientWidth;
      const slideWidth = documentWidth / show;
      const slideItems = document.querySelectorAll(".slider .slide__image");

      slideItems.forEach((item) => {
        item.style.width = `${slideWidth}px`;
        item.style.height = `${slideWidth}px`;
      });
    }
  }, [slides, show]);

  useEffect(() => {
    if (firstSlide === 1) {
      prevBtn.current.style.visibility = "hidden";
    } else if (firstSlide > slides.length - show) {
      nextBtn.current.style.visibility = "hidden";
    } else {
      prevBtn.current.style.visibility = "visible";
      nextBtn.current.style.visibility = "visible";
    }
  }, [firstSlide]);

  const handleControlClick = (direction) => {
    const slideContainer = document.querySelector(".slider .slider__slides");
    const slide = document.querySelector(".slider .slide__image");
    const slideWidth = slide.clientWidth;

    if (direction === "prev") {
      if (firstSlide > 1) {
        slideContainer.style.transform = `translate(-${
          slideWidth * firstSlide - 2 * slideWidth
        }px)`;
        setfirstSlide(firstSlide - 1);
      }
    }
    if (direction === "next") {
      if (firstSlide <= slides.length - show) {
        slideContainer.style.transform = `translate(-${
          slideWidth * firstSlide
        }px)`;

        setfirstSlide(firstSlide + 1);
      }
    }
  };

  return (
    <div className="slider">
      <div className="slider__slides">
        {slides.map((slide, index) => (
          <div className="slide" key={slide.id}>
            <img
              className="slide__image"
              src={slide.image}
              alt={`Slide ${index}`}
            />
            <div className="slide__content">{slide.content}</div>
          </div>
        ))}
      </div>
      <div className="slider__control">
        <div className="slider__buttons">
          <div
            ref={prevBtn}
            className="prev"
            onClick={() => handleControlClick("prev")}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div
            ref={nextBtn}
            className="next"
            onClick={() => handleControlClick("next")}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Slider);

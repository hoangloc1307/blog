import React, { memo, useEffect, useRef, useState } from "react";

import c from "./Slider.module.scss";

function Slider({ slides, show }) {
  //State
  const [firstSlide, setfirstSlide] = useState(1);
  //Ref
  const prevButtonRef = useRef();
  const nextButtonRef = useRef();
  const slidesRef = useRef();
  const slideImageRefs = useRef([]);

  useEffect(() => {
    if (slides.length > 0) {
      const documentWidth = document.body.clientWidth;
      const slideWidth = documentWidth / show;
      slideImageRefs.current.forEach((item) => {
        item.style.width = `${slideWidth}px`;
        item.style.height = `${slideWidth}px`;
      });
    }
  }, [slides, show]);

  useEffect(() => {
    if (firstSlide === 1) {
      prevButtonRef.current.style.visibility = "hidden";
    } else {
      prevButtonRef.current.style.visibility = "visible";
    }
    if (firstSlide > slides.length - show) {
      nextButtonRef.current.style.visibility = "hidden";
    } else {
      nextButtonRef.current.style.visibility = "visible";
    }
  }, [firstSlide, slides]);

  const handleControlClick = (direction) => {
    const slideWidth = slideImageRefs.current[0].clientWidth;
    //Click next button
    if (direction === "next" && firstSlide <= slides.length - show) {
      slidesRef.current.style.transform = `translate(-${
        slideWidth * firstSlide
      }px)`;
      setfirstSlide(firstSlide + 1);
    }
    //Click prev button
    if (direction === "prev" && firstSlide > 1) {
      slidesRef.current.style.transform = `translate(-${
        slideWidth * (firstSlide - 2)
      }px)`;
      setfirstSlide(firstSlide - 1);
    }
  };

  const addSlideImageRef = (e) => {
    if (e && !slideImageRefs.current.includes(e)) {
      slideImageRefs.current.push(e);
    }
  };

  return (
    <div className={c.slider}>
      {/* Slide Items*/}
      <div ref={slidesRef} className={c.slides}>
        {slides.map((slide, index) => (
          <div className={c.slide} key={slide.id}>
            <img
              ref={addSlideImageRef}
              className={c.slideImage}
              src={slide.image}
              alt={`Slide ${index + 1}`}
            />
            <div className={c.slideContent}>{slide.content}</div>
          </div>
        ))}
      </div>
      {/* End Slide Items */}
      {/* Slide Control */}
      <div className={c.controls}>
        <div className={c.buttons}>
          <div
            ref={prevButtonRef}
            className={c.prev}
            onClick={() => handleControlClick("prev")}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div
            ref={nextButtonRef}
            className={c.next}
            onClick={() => handleControlClick("next")}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </div>
      {/* End Slide Controls */}
    </div>
  );
}

export default memo(Slider);

import React, { useEffect, useState } from "react";

import "./go_to_top.scss";

function GoToTop() {
  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      setShow(window.scrollY >= 1000);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={"go-top " + (show ? "show" : "")} onClick={handleGoToTop}>
      <i className="fa-solid fa-chevron-up"></i>
    </div>
  );
}

export default GoToTop;

import clsx from "clsx";
import React, { useEffect, useState } from "react";

import c from "./ScrollTop.module.scss";

function ScrollTop() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY >= 1000);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={clsx(c.goTop, { [c.show]: show })}
      onClick={handleScrollTop}
    >
      <i className="fa-solid fa-chevron-up"></i>
    </div>
  );
}

export default ScrollTop;

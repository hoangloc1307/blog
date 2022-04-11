import React, { memo } from "react";
import { Link } from "react-router-dom";

import c from "./SideBar.module.scss";

function SideBar() {
  return (
    <>
      <Link to={"/about"}>
        <img
          src="https://static.wixstatic.com/media/f61af8_7c1e4605eefa400e90e8475c04651311~mv2_d_2120_1414_s_2.jpg/v1/fill/w_261,h_231,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f61af8_7c1e4605eefa400e90e8475c04651311~mv2_d_2120_1414_s_2.jpg"
          alt=""
          className={c.authorImage}
        />
      </Link>
      <div className={c.authorContent}>
        <Link to={"/about"}>
          <h3 className={c.authorTitle}>About Heather</h3>
        </Link>
        <p className={c.authorDescription}>
          I'm a paragraph. Click here to add your own text and edit me. I'm a
          great place for you to tell a story.
        </p>
        <a className={c.authorEmail} href="mailto:abc@gmail.com">
          Email: abc@gmail.com
        </a>
      </div>
    </>
  );
}

export default memo(SideBar);

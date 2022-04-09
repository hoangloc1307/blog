import React from "react";

import c from "./Footer.module.scss";

function Footer() {
  return (
    <div className={c.footer}>
      <h4 className={c.footerTiltle}>Join my mailing list</h4>
      <div className={c.footerForm}>
        <input
          type="text"
          className={c.footerInput}
          placeholder="Enter your email here..."
        />
        <button className={c.footerButton}>Subscribe</button>
      </div>
      <p className={c.footerCopyright}>
        © {new Date().getUTCFullYear()} by Lovely Little Things.
      </p>
    </div>
  );
}

export default Footer;

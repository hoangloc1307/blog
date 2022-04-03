import React from "react";

import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <h4 className="footer__tiltle">Join my mailing list</h4>
      <div className="footer__form">
        <input
          type="text"
          className="footer__input"
          placeholder="Enter your email here..."
        />
        <button className="footer__button">Subscribe</button>
      </div>
      <p className="footer__copyright">
        © {new Date().getUTCFullYear()} by Lovely Little Things.
      </p>
    </div>
  );
}

export default Footer;

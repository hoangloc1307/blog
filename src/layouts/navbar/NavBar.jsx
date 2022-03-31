import React from "react";
import "./navbar.scss";

function NavBar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-contain">
          <ul className="nav">
            <li className="nav__item">
              <a href="#" className="nav__link nav__link--active">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Lifestyle
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Family
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Food
              </a>
            </li>
          </ul>
          <ul className="social">
            <li className="social__item">
              <a href="#" className="social__link">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li className="social__item">
              <a href="#" className="social__link">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li className="social__item">
              <a href="#" className="social__link">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

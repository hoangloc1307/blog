import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.scss";

function NavBar() {
  const activeClass = ({ isActive }) =>
    isActive ? "nav__link nav__link--active" : "nav__link";

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-contain">
          <ul className="nav">
            <li className="nav__item">
              <NavLink to="/" className={activeClass}>
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="about" className={activeClass}>
                About
              </NavLink>
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

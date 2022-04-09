import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";
import c from "./NavBar.module.scss";

function NavBar() {
  const activeClass = ({ isActive }) =>
    clsx(c.navLink, { [c.active]: isActive });
  return (
    <div className={c.navbar}>
      <div className={clsx(c.navbarContainer, "container")}>
        <ul className={c.nav}>
          <li className={c.navItem}>
            <NavLink to="/" className={activeClass}>
              Home
            </NavLink>
          </li>
          <li className={c.navItem}>
            <NavLink to="/about" className={activeClass}>
              About
            </NavLink>
          </li>
          <li className={c.navItem}>
            <NavLink to={"/a"} className={activeClass}>
              Lifestyle
            </NavLink>
          </li>
          <li className={c.navItem}>
            <NavLink to={"/b"} className={activeClass}>
              Family
            </NavLink>
          </li>
          <li className={c.navItem}>
            <NavLink to={"/c"} className={activeClass}>
              Food
            </NavLink>
          </li>
        </ul>
        <ul className={c.social}>
          <li className={c.socialItem}>
            <a href="#" className={c.socialLink}>
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li className={c.socialItem}>
            <a href="#" className={c.socialLink}>
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className={c.socialItem}>
            <a href="#" className={c.socialLink}>
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

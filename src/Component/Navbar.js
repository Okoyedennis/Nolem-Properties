import React, { useState } from "react";
import { menuItems } from "./MenuItems";
import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "wrapper active" : "wrapper"}>
      <nav className="navbarItems container">
        <Link to="/" className={navbar ? "navbar-logo active" : "navbar-logo"}>
          <h2>
            No<span>lem</span>
          </h2>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <ClearIcon className={navbar ? "icons active" : "icons"} />
          ) : (
            <MenuIcon className={navbar ? "icons active" : "icons"} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  exact={true}
                  activeClassName={navbar ? "is-active active" : "is-active"}
                  className={navbar ? "nav-links active" : "nav-links"}
                  to={item.url}
                  onClick={closeMobileMenu}
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

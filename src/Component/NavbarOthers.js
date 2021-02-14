import React, { useState } from "react";
import { menuItems } from "./MenuItems";
import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <div className="wrapper__2 ">
      <nav className="navbarItems container">
        <Link to="/" className="navbar-logo ">
          <h2>
            No<span>lem</span>
          </h2>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <ClearIcon className="icons" />
          ) : (
            <MenuIcon className="icons" />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  exact={true}
                  activeClassName="is-active"
                  className="nav-links"
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

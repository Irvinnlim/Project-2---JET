/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.css";
import Logo from "../../Pictures/plane.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__menuItems">
        <Link to="/">
          <img src={Logo} alt="" width={25} />
        </Link>
        <Link to="/stocks">Stocks</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/news">News</Link>
        <Link to="/account">Account</Link>
      </div>
    </div>
  );
}

export default Header;

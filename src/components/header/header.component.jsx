import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "assets/images/crown.svg";

import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>

      <ul className="navigations">
        <li className="navigation">
          <Link to="/shop">shop</Link>
        </li>
        <li className="navigation">
          <Link to="/">contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

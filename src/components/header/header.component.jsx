import React from "react";
import { Link } from "react-router-dom";

import { auth } from "firebase/firebase.utils.js";

import { ReactComponent as Logo } from "assets/images/crown.svg";

import "./header.styles.scss";

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <button className="navigation" onClick={() => auth.signOut()}>
            sign out
          </button>
        ) : (
          <li className="navigation">
            <Link to="/authentication">sign in</Link>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;

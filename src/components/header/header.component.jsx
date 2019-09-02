import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CartIcon } from "components";

import { auth } from "firebase/firebase.utils.js";

import { ReactComponent as Logo } from "assets/images/crown.svg";

import "./header.styles.scss";

const Header = ({ currentUser }) => {
  let isUserLoggedIn = currentUser ? (
    <button className="navigation" onClick={() => auth.signOut()}>
      sign out
    </button>
  ) : (
    <li className="navigation">
      <Link to="/authentication">sign in</Link>
    </li>
  );

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
        {isUserLoggedIn}
        <CartIcon />
      </ul>
    </header>
  );
};

Header.propTypes = {
  currentUser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);

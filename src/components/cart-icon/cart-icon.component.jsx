import React from "react";
import "./cart-icon.styles.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CartDropdown } from "components";
import { createStructuredSelector } from "reselect";
import { toggleCartDropdown } from "redux/cart/cart.action";
import { selectCartItemsCount } from "redux/cart/cart.selectors";
import { selectShowCartDropdown } from "redux/cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "assets/images/shopping-bag.svg";

const CartIcon = ({ showCartDropdown, toggleCartDropdown, totalCartItems }) => {
  let viewCart = showCartDropdown && <CartDropdown />;

  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalCartItems}</span>
      {viewCart}
    </div>
  );
};

CartIcon.propTypes = {
  showCartDropdown: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  showCartDropdown: selectShowCartDropdown,
  totalCartItems: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  { toggleCartDropdown }
)(CartIcon);

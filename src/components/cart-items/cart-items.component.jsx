import React from "react";
import "./cart-items.styles.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CartItem } from "components";
import { selectCartItems } from "redux/cart/cart.selectors";

const CartItems = ({ cartItems }) => {
  const cartItemGroup = cartItems.map(cartItem => {
    return <CartItem key={cartItem.id} cartItem={cartItem} />;
  });

  return <div className="cart-items scrollbar-item">{cartItemGroup}</div>;
};

CartItems.propTypes = {
  cartItems: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartItems);

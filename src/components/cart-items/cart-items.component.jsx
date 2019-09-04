import React from "react";
import "./cart-items.styles.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CartItem } from "components";

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
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartItems);

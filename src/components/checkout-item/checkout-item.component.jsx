import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addToCart,
  decreaseFromCart
} from "redux/cart/cart.action";

const CheckoutItem = ({
  cartItem,
  clearItemFromCart,
  addToCart,
  decreaseFromCart
}) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-page__item">
      <div className="item-image">
        <img src={imageUrl} />
      </div>
      <div className="item-description">{name}</div>
      <div className="item-quantity">
        <button
          className="left-arrow"
          onClick={() => decreaseFromCart(cartItem)}
        >
          &#10094;
        </button>
        <span className="value">{quantity}</span>
        <button className="right-arrow" onClick={() => addToCart(cartItem)}>
          &#10095;
        </button>
      </div>
      <div className="item-price">{price}</div>
      <button
        className="item-remove"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </button>
    </div>
  );
};

export default connect(null, {
  clearItemFromCart,
  addToCart,
  decreaseFromCart
})(CheckoutItem);

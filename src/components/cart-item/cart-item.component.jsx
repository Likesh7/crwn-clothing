import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ cartItem: { imageUrl, name, price, quantity } }) => {
  return (
    <div className="cart-item scrollbar-item">
      <img className="cart-item__image" src={imageUrl} alt="" />
      <div className="cart-item__group">
        <div className="cart-item__name">{name}</div>
        <div className="cart-item__totalPrice">
          {quantity} x ${price}
        </div>
      </div>
    </div>
  );
};

export default CartItem;

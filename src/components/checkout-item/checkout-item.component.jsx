import React from "react";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem: { imageUrl, name, quantity, price } }) => {
  return (
    <div className="checkout-page__item">
      <div className="item-image">
        <img src={imageUrl} />
      </div>
      <div className="item-description">{name}</div>
      <div className="item-quantity">{quantity}</div>
      <div className="item-price">{price}</div>
      <button className="item-remove">&#10005;</button>
    </div>
  );
};

export default CheckoutItem;

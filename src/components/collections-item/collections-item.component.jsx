import React from "react";
import { connect } from "react-redux";
import "./collections-item.styles.scss";
import { CustomButton } from "components";
import { addToCart } from "redux/cart/cart.action";

const CollectionsItem = ({ item, addToCart }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className="collection-item">
      <img className="image" alt="item" src={imageUrl} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addToCart(item)} inverted>
        add to cart
      </CustomButton>
    </div>
  );
};

export default connect(
  null,
  { addToCart }
)(CollectionsItem);

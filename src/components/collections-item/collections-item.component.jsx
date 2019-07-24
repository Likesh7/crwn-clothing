import React from "react";
import "./collections-item.styles.scss";

const CollectionsItem = ({ imageUrl, name, price }) => {
  return (
    <div className="collection-item">
      <img className="image" src={imageUrl} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default CollectionsItem;

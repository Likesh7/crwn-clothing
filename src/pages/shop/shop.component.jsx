import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import { CollectionsPreview } from "components";
import "./shop.styles.scss";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        <h1 className="collections-title">collections</h1>
        {collections.map(({ id, title, items }) => (
          <CollectionsPreview key={id} title={title} items={items} />
        ))}
      </div>
    );
  }
}

export default Shop;

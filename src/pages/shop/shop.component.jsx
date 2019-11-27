import React from "react";
import { Collection } from "pages";
import { Route } from "react-router-dom";
import { CollectionsOverview } from "components";

import "./shop.styles.scss";

const Shop = ({ match }) => {
  console.log({ match });
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;

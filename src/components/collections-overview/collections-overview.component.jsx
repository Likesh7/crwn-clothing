import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CollectionsPreview } from "components";
import { selectCollectionsPreview } from "redux/shop/shop.selectors";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, title, items }) => (
        <CollectionsPreview key={id} title={title} items={items} />
      ))}
    </div>
  ); 
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsPreview
});

export default connect(mapStateToProps)(CollectionsOverview);

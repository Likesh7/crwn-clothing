import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "redux/shop/shop.selectors";
import { CollectionsItem } from "components";

import "./collection.styles.scss";

const Collection = ({ collection }) => {
  console.log({ collection });

  const { items, title } = collection;
  return (
    <div className="collection">
      <h1 className="title">{title}</h1>
      <div className="collection-item--all">
        {items.map(item => (
          <CollectionsItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);

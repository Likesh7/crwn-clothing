import React from "react";
import { CollectionsItem } from "components";
import "./collections-preview.styles.scss";

const CollectionsPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => {
            return <CollectionsItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default CollectionsPreview;

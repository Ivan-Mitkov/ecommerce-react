import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item";
const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map((item) => {
            return <CollectionItem key={item.id} {...item}></CollectionItem>;
          })}
      </div>
    </div>
  );
};

export default PreviewCollection;

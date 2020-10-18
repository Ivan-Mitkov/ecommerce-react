import React from "react";
import "./styles.scss";
import CollectionItem from "../../components/collection-item";

const Collection = ({ match,collections }) => {
  const REAL_PARAMS = new Set([
    "hats",
    "jackets",
    "sneakers",
    "mens",
    "womens",
  ]);
  let searched = "hats";
  if (REAL_PARAMS.has(match.params.collectionId)) {
    searched = match.params.collectionId;
  }
  const title = searched;
  return collections && (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {collections.map((item) => {
          return (
            <CollectionItem
              key={item.id}
              item={item}
              className="collection-item"
            />
          );
        })}
      </div>
    </div>
  ) 
};

export default Collection;

import React, { useContext } from "react";
import "./styles.scss";
import CollectionItem from "../../components/collection-item";
import CollectionContext from "../../context/collections/collectionContext";
const Collection = ({ match }) => {
  const collections = useContext(CollectionContext);
  // console.log(collections);
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
  // console.log(collections)
  const title = searched;
  const collection = collections[searched];
  return (
    collection && (
      <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
          {collection.items.map((item) => {
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
  );
};

export default Collection;

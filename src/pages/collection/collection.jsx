import React from "react";
import "./styles.scss";
import CollectionItem from "../../components/collection-item";
import CollectionContext from "../../context/collections/collectionContext";
const Collection = ({ match }) => {
  // console.log(match);
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
  return (
    <CollectionContext.Consumer>
      {(somethingWichIsInTheValueOfContext) => {
        const collection =
          somethingWichIsInTheValueOfContext[match.params.collectionId];
        const { items } = collection;
        return (
          <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
              {items.map((item) => {
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
        );
      }}
    </CollectionContext.Consumer>
  );
};

export default Collection;

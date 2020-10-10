import React from "react";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import "./styles.scss";
import CollectionItem from "../../components/collection-item";

const categorySelector = (urlParam) =>
  createSelector(
    (state) => state.shop,
    (shop) => shop.collections[urlParam].items
  );

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
  const collections = useSelector(categorySelector(searched));
  const title = searched;
  return (
    collections && (
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
  );
};

export default Collection;

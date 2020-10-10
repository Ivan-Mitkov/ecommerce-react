import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { createSelector } from "reselect";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";

const shopCollection = createSelector(
  (state) => state.shop,
  (shop) => Object.values(shop.collections)
);
const CollectionOverview = () => {
  const collections = useSelector(shopCollection, shallowEqual);
  // console.log(collections)
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...rest }) => {
        return <CollectionPreview key={id} {...rest}></CollectionPreview>;
      })}
    </div>
  );
};

export default CollectionOverview;

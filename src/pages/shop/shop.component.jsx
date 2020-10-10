import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { createSelector } from "reselect";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";

const shopCollection = createSelector(
  (state) => state.shop,
  (shop) => shop.collections
);
const Shop = () => {
  const collections = useSelector(shopCollection, shallowEqual);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...rest }) => {
        return <CollectionPreview key={id} {...rest}></CollectionPreview>;
      })}
    </div>
  );
};

export default Shop;

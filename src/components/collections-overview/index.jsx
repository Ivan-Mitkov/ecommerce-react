import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { createSelector } from "reselect";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelector";

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionsForPreview, shallowEqual);
  // console.log('col over',collections);
  return (
    <div className="collections-overview">
      {collections &&
        collections.map(({ id, ...rest }) => {
          return <CollectionPreview key={id} {...rest}></CollectionPreview>;
        })}
    </div>
  );
};

export default CollectionOverview;

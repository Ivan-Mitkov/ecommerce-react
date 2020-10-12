import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import "./styles.scss";
import CollectionItem from "../../components/collection-item";
import { selectCollection } from "../../redux/shop/shopSelector";

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
  const collections = useSelector(selectCollection(searched), shallowEqual);
  // console.log(collections)
  const title = searched;
  return collections && (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {collections.items.map((item) => {
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

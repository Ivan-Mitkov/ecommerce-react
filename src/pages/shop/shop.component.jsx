import React from "react";
import { SHOP_DATA } from "../../shopData";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";
const Shop = () => {
  const [collections, setCollections] = React.useState([]);
  React.useEffect(() => {
    setCollections(SHOP_DATA);
  }, []);
  return (
    <div className="shop-page">
      {collections
        
        .map(({ id, ...rest }) => {
          return <CollectionPreview key={id} {...rest}></CollectionPreview>;
        })}
    </div>
  );
};

export default Shop;

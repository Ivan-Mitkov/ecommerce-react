import React, { useContext } from "react";
import "./styles.scss";
import Button from "../button";
import { CartContext } from "../../providers/cart/CartProvider";

const CollectionItem = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const { imageUrl, name, price } = item;
  const handleClick = () => {
    // console.log(item)
    addItem(item);
  };
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button inverted onClick={handleClick} className="custom-button">
        Add to cart
      </Button>
    </div>
  );
};

export default(CollectionItem);

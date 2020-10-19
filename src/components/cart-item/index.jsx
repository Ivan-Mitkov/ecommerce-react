import React from "react";
import "./styles.scss";
const CartItem = ({ item }) => {
  const { imageUrl, name, price,quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name}></img>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
        {quantity} x ${price}
      </div>
    </div>
  );
};

export default React.memo(CartItem);

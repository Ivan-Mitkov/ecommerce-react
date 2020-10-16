import React, { useContext } from "react";
import "./styles.scss";

import { CartContext } from "../../providers/cart/CartProvider";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { removeItem, addItem, clearItemFromCards } = useContext(CartContext);

  const handleClick = () => {
    clearItemFromCards(cartItem);
  };
  const handleIncrease = () => {
    addItem(cartItem);
  };
  const handleDecrease = () => {
    removeItem(cartItem);
  };
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleDecrease}>
          &#10094;
        </div>
        <span className="value"> {quantity}</span>
        <div className="arrow" onClick={handleIncrease}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleClick}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

import React from "react";
import { useDispatch } from "react-redux";
import "./styles.scss";
import {
  removeItem,
  decreaseQuantity,
  addItem,
} from "../../redux/cart/cartActions";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;
  const handleClick = () => {
    dispatch(removeItem(cartItem));
  };
  const handleIncrease = () => {
    dispatch(addItem(cartItem));
  };
  const handleDecrease = () => {
    dispatch(decreaseQuantity(cartItem));
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

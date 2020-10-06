import React from "react";
import "./styles.scss";
import Button from "../button/";
const Cart = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <Button >Checkout</Button>
    </div>
  );
};

export default Cart;

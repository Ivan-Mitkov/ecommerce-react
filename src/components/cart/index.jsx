import React from "react";

import { withRouter } from "react-router-dom";

import "./styles.scss";
import CartItem from "../cart-item";
import Button from "../button";


const Cart = ({ items, history, toggleCartHidden }) => {
  const handleClick = () => {
    history.push("/checkout");
    toggleCartHidden();
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length > 0 ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={handleClick} inverted={true}>Checkout</Button>
    </div>
  );
};

export default withRouter(Cart);

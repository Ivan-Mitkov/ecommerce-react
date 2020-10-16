import React, { useContext } from "react";
import { withRouter } from "react-router-dom";

import "./styles.scss";
import CartItem from "../cart-item";
import Button from "../button";
import { CartContext } from "../../providers/cart/CartProvider";

const Cart = ({  history }) => {
  const { toggleHidden, cartItems } = useContext(CartContext);
  const handleClick = () => {
    history.push("/checkout");
    toggleHidden();
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={handleClick} inverted={true}>
        Checkout
      </Button>
    </div>
  );
};

export default withRouter(Cart);

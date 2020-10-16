import React, { useContext } from "react";
import "./styles.scss";

import CheckoutItem from "../../components/checkout-item/";
import StripeButton from "../../components/stripe-button";
import { CartContext } from "../../providers/cart/CartProvider";

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>
      <StripeButton price={total} />
      <div className="test-warning">
        <a href="https://stripe.com/docs/testing" target="_blank">
          {" "}
          *Testing cards numbers for stripe*
        </a>
      </div>
    </div>
  );
};

export default Checkout;

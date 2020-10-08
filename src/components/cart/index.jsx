import React from "react";
import { connect } from "react-redux";
import "./styles.scss";
import CartItem from "../cart-item";
import Button from "../button";
const Cart = ({ items }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button>Checkout</Button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { items: state.cart.cartItems };
};
export default connect(mapStateToProps)(Cart);

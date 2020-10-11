import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import "./styles.scss";
import CartItem from "../cart-item";
import Button from "../button";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { toggleCartHidden } from "../../redux/cart/cartActions";

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
const mapStateToProps = createStructuredSelector({
  // return { items: state.cart.cartItems };
  items: selectCartItems,
});
export default withRouter(connect(mapStateToProps, { toggleCartHidden })(Cart));

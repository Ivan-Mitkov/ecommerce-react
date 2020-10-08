import React from "react";
import { connect } from "react-redux";
import "./styles.scss";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cartActions";
const CartIcon = ({ toggleCartHidden, itemsCount }) => {
  const handleClick = () => {
    toggleCartHidden();
  };

  return (
    <div className="cart-icon" onClick={handleClick}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    itemsCount: state.cart.cartItems
      .map((item) => item.quantity)
      .reduce((a, b) => a + b, 0),
  };
};

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);

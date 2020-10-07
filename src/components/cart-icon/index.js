import React from "react";
import { connect } from "react-redux";
import "./styles.scss";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cartActions";
const CartIcon = ({toggleCartHidden}) => {
  const handleClick = () => {
    toggleCartHidden();
  };
  return (
    <div className="cart-icon" onClick={handleClick}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default connect(null, { toggleCartHidden })(CartIcon);

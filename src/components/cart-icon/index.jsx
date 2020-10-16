import React from "react";
import "./styles.scss";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../providers/cart/CartProvider";

const CartIcon = () => {
  const cart = React.useContext(CartContext);
  const { toggleHidden, cartItemsCount } = cart;
  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;

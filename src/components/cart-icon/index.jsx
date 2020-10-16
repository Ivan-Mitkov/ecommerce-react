import React from "react";
import { connect } from "react-redux";
import "./styles.scss";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";
import CartContext from "../../context/cart/cartContext";

const CartIcon = ({ itemsCount }) => { 
  const cart=React.useContext(CartContext)
  const{hidden,toggleHidden}=cart
  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log("Call mapStateToProps icon");
  return {
    itemsCount: selectCartItemsCount(state),
  };
  
};

export default connect(mapStateToProps )(CartIcon);

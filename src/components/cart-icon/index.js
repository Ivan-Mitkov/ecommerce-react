import React from "react";
import { connect } from "react-redux";
import "./styles.scss";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cartActions";
const CartIcon = ({toggleCartHidden,items}) => {
  const handleClick = () => {
    toggleCartHidden();
  };
  const numberOfItems=()=>{
    return items.map(item=>item.quantity).reduce((a,b)=>(a+b),0)
  }
  return (
    <div className="cart-icon" onClick={handleClick}>
      <ShoppingBag className="shopping-icon" />
  <span className="item-count">{numberOfItems()}</span>
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log(state)
  return { items: state.cart.cartItems };
};

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);

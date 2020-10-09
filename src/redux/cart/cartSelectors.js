//https://github.com/reduxjs/reselect
import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    // console.log("memoized?");
    return cartItems.map((item) => item.quantity).reduce((a, b) => a + b, 0);
  }
);
export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    // console.log("memoized?");
    return cartItems
      .map((item) => item.quantity * item.price)
      .reduce((a, b) => a + b, 0);
  }
);

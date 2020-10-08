//https://github.com/reduxjs/reselect
import { createSelector } from "reselect";

const selectCart = (state) => state.cart;
const selectUser = (state) => state.user;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    // console.log("memoized?");
    return cartItems.map((item) => item.quantity).reduce((a, b) => a + b, 0);
  }
);

import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_QUANTITY,
  CLEAR_CART,
} from "./types";
export const toggleCartHidden = () => {
  return { type: TOGGLE_CART_HIDDEN };
};
export const addItem = (item) => {
  return { type: ADD_ITEM, payload: item };
};
export const removeItem = (item) => {
  return { type: REMOVE_ITEM, payload: item };
};

export const decreaseQuantity = (item) => {
  return { type: DECREASE_QUANTITY, payload: item };
};
export const clearCart = () => {
  return { type: CLEAR_CART };
};

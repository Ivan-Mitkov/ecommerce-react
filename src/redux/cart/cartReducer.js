import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_QUANTITY,
  CLEAR_CART,
} from "./types";
// import { SIGN_OUT_SUCCESS } from "../user/types";
import { addItemToCart, removeItemFromCart, decreaseItems } from "./utils";
const initialState = { hidden: true, cartItems: [] };

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  // console.log(payload);
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: decreaseItems(state.cartItems, payload),
      };
    //clear the cart on singn out
    case CLEAR_CART:
    // case SIGN_OUT_SUCCESS:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;

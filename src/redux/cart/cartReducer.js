import { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM,DECREASE_QUANTITY,INCREASE_QUANTITY } from "./types";
import { addItemToCart,removeItemFromCart,increaseItems,decreaseItems } from "./utils";
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

    default:
      return state;
  }
};

export default cartReducer;

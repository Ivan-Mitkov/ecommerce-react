import React, { createContext, useState, useEffect } from "react";
import {
  addItemToCart,
  removeItemFromCart,
  decreaseItems,
  getCartItemsCount,
  cartTotal,
} from "./utils";

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCards: () => {},
  cartItemsCount: 0,
  total: 0,
});
const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setItemsCount] = useState(0);
  const [total, setTotal] = useState(0);
  const toggleHidden = () => {
    setHidden(!hidden);
  };
  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item) => setCartItems(decreaseItems(cartItems, item));
  const clearItemFromCards = (item) =>
    setCartItems(removeItemFromCart(cartItems, item));

  useEffect(() => {
    setItemsCount(getCartItemsCount(cartItems));
    setTotal(cartTotal(cartItems));
    console.log("Use effect cart provider");
  }, [cartItems]);
  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        addItem,
        cartItems,
        cartItemsCount,
        removeItem,
        clearItemFromCards,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

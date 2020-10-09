export const addItemToCart = (cartItems, newItem) => {
  const isAlreadyInTheCart = cartItems.find((item) => item.id === newItem.id);
  if (isAlreadyInTheCart) {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...newItem, quantity: 1 }];
};
export const removeItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};

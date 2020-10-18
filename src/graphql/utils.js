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

export const decreaseItems = (cartItems, itemToDecrease) => {
  if (itemToDecrease.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToDecrease.id);
  }
  return cartItems.map((item) => {
    if (item.id !== itemToDecrease.id) {
      return item;
    }

    return { ...item, quantity: item.quantity - 1 };
  });
};

export const getCartQuantity = (cartItems) => {
  // console.log("memoized?");
  return cartItems.map((item) => item.quantity).reduce((a, b) => a + b, 0);
};

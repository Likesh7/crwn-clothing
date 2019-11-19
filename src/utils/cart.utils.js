export const addItemToCart = (cartItems, cartItemToAdd) => {
  const cartItemExists = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (cartItemExists) {
    return cartItems.map(cartItem => {
      if (cartItem.id === cartItemToAdd.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      } else return cartItem;
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const decreaseItemFromCart = (cartItems, cartItemToDecrease) => {
  const cartItemExists = cartItems.find(
    cartItem => cartItem.id === cartItemToDecrease.id
  );

  if (cartItemExists.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToDecrease.id);
  }

  return cartItems.map(cartItem => {
    if (cartItem.id === cartItemToDecrease.id) {
      return { ...cartItem, quantity: cartItem.quantity - 1 };
    } else return cartItem;
  });
};

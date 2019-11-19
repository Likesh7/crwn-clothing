import { CartActionTypes } from "./cart.types";

export const toggleCartDropdown = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_DROPDOWN
  };
};

export const addToCart = item => {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload: item
  };
};

export const clearItemFromCart = item => {
  return {
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
  };
};

export const decreaseFromCart = item => {
  return {
    type: CartActionTypes.DECREASE_FROM_CART,
    payload: item
  };
};

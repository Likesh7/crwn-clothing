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

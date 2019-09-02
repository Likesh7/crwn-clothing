import { CartActionTypes } from "./cart.types";

const initialState = {
  showCartDropdown: false
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        showCartDropdown: !state.showCartDropdown
      };

    default:
      return state;
  }
};

export default cartReducer;

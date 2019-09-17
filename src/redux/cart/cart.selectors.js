import { createSelector } from "reselect";

export const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectShowCartDropdown = createSelector(
  [selectCart],
  cart => cart.showCartDropdown
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((totalItems, cartItem) => {
      return totalItems + cartItem.quantity;
    }, 0)
);

export const selectTotalPrice = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((totalItems, cartItem) => {
      return totalItems + cartItem.quantity * cartItem.price;
    }, 0)
);

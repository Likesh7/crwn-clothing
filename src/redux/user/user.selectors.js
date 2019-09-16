import { createSelector } from "reselect";

export const selectUser = state => state.cart;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

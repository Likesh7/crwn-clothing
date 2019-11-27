import { createSelector } from "reselect";

export const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(itemName => collections[itemName])
);

export const selectCollection = urlParam =>
  createSelector([selectCollections], collections => collections[urlParam]);

import { type StateSchema } from '@app/providers';

export const getCartItems = (state: StateSchema) => state.products.cartItems;

export const getAllProducts = (state: StateSchema) =>
  state.products.allProducts;

export const getCurrency = (state: StateSchema) => state.products.currency;

export const getProducts = (state: StateSchema) => state.products.allProducts;

export const getError = (state: StateSchema) => state.products.error;

export const getIsLoading = (state: StateSchema) => state.products.isLoading;

export const getPickedCategory = (state: StateSchema) =>
  state.products.pickedCategory;

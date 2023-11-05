import { type StateSchema } from '@app/providers';

export const getCartItems = (state: StateSchema) => state.products.cartItems;

export const getAllProducts = (state: StateSchema) =>
  state.products.allProducts;

export const getCurrency = (state: StateSchema) => state.products.currency;

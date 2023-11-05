import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  type ProductSchema,
  type Product,
  CartItem,
  Currency,
} from '../types/product';
import { lsController } from '@shared/lib';

const initialState: ProductSchema = {
  allProducts: [
    {
      id: 100,
      name: 'Товар 1',
      image:
        'https://images.unsplash.com/photo-1699088851470-4f0e05d4a485?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 500,
    },
    {
      id: 200,
      name: 'Товар 2',
      image:
        'https://images.unsplash.com/photo-1699088851470-4f0e05d4a485?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 500,
    },
    {
      id: 300,
      name: 'Товар 3',
      image:
        'https://images.unsplash.com/photo-1699088851470-4f0e05d4a485?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 500,
    },
    {
      id: 400,
      name: 'Товар 4',
      image:
        'https://images.unsplash.com/photo-1699088851470-4f0e05d4a485?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 500,
    },
    {
      id: 500,
      name: 'Товар 5',
      image:
        'https://images.unsplash.com/photo-1699088851470-4f0e05d4a485?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 500,
    },
    // {
    //   id: 600,
    //   name: 'Товар 6',
    //   image:
    //     'https://images.unsplash.com/photo-1699088851470-4f0e05d4a485?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //   price: 500,
    // },
  ],
  cartItems: lsController.getCartItems(),
  searchString: undefined,
  currency: Currency.RUB,
};

const changeCartItems = (items: CartItem[], id: number, diff: number) =>
  items.map((item) =>
    item.id === id ? { ...item, amount: item.amount + diff } : item,
  );

const filterItems = (items: CartItem[], id: number) =>
  items.filter((item) => item.id !== id);

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setAllProducts: (state, action: PayloadAction<Product[]>) => {
      state.allProducts = action.payload;
    },
    addToCart: (state, action: PayloadAction<number>) => {
      state.cartItems = changeCartItems(state.cartItems, action.payload, 1);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const targetItem = state.cartItems.find(
        (item) => item.id === action.payload,
      ) as CartItem;

      if (targetItem.amount - 1 === 0) {
        state.cartItems = filterItems(state.cartItems, targetItem.id);
        return;
      }
      state.cartItems = changeCartItems(state.cartItems, action.payload, -1);
    },
    clearItem: (state, action: PayloadAction<number>) => {
      state.cartItems = filterItems(state.cartItems, action.payload);
    },
  },
});

export const { actions: productsActions, reducer: productsReducer } =
  productSlice;

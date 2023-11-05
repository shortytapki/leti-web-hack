import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  type ProductSchema,
  type Product,
  CartItem,
  Currency,
} from '../types/product';
import { lsController } from '@shared/lib';
import { fetchProducts } from '../services/fetchProducts';

const initialState: ProductSchema = {
  allProducts: [],
  cartItems: lsController.getCartItems(),
  searchString: undefined,
  currency: Currency.RUB,
  error: undefined,
  isLoading: false,
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
  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.error = undefined;
          state.allProducts = action.payload;
        },
      )
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
        state.error = undefined;
      }),
});

export const { actions: productsActions, reducer: productsReducer } =
  productSlice;

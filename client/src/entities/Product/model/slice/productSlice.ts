import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  type ProductSchema,
  type Product,
  CartItem,
  Currency,
  CategoryId,
} from '../types/product';
import { lsController } from '@shared/lib';
import { fetchProducts } from '../services/fetchProducts';

const initialState: ProductSchema = {
  allProducts: [],
  cartItems: lsController.getCartItems(),
  currency: Currency.RUB,
  error: undefined,
  isLoading: false,
  pickedCategory: undefined,
};

const changeCartItems = (items: CartItem[], product: Product, diff: number) => {
  if (!items.find((item) => item.id === product.id))
    return items.concat([{ ...product, amount: 1 }]);
  return items.map((item) =>
    item.id === product.id ? { ...item, amount: item.amount + diff } : item,
  );
};

const filterItems = (items: CartItem[], id: number) =>
  items.filter((item) => item.id !== id);

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setAllProducts: (state, action: PayloadAction<Product[]>) => {
      state.allProducts = action.payload;
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cartItems = changeCartItems(state.cartItems, action.payload, 1);
    },
    removeItem: (state, action: PayloadAction<Product>) => {
      const targetItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
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
    setPickedCategory: (
      state,
      action: PayloadAction<CategoryId | undefined>,
    ) => {
      state.pickedCategory = action.payload;
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
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { actions: productsActions, reducer: productsReducer } =
  productSlice;

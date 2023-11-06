import { type ThunkConfig } from '@app/providers';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../types/product';

const productFetchError = 'Не удалось загрузить товары.';
export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  ThunkConfig<string>
>('products/fetchProducts', async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;
  try {
    const response = await extra.api.get<Product[]>(`/products/`);
    return response.data;
  } catch (e) {
    return rejectWithValue(productFetchError);
  }
});

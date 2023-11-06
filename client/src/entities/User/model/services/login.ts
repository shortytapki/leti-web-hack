import { type ThunkConfig } from '@app/providers';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../types/user';

const internalError = 'Ошибка на сервере. Попробуйте авторизоваться позже.';

export const login = createAsyncThunk<User, User, ThunkConfig<string>>(
  'user/login',
  async (user, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.post<User>(`auth/login`, user);
      return response.data;
    } catch (e) {
      return rejectWithValue(internalError);
    }
  },
);

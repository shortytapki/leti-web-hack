import { type ThunkConfig } from '@app/providers';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../types/user';

const internalError = 'Ошибка на сервере. Попробуйте авторизоваться позже.';

export const register = createAsyncThunk<User, User, ThunkConfig<string>>(
  'user/register',
  async (user, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.post<User>(`auth/register`, user);
      return response.data;
    } catch (e) {
      return rejectWithValue(internalError);
    }
  },
);

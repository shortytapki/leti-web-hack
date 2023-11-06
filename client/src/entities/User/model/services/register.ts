import { type ThunkConfig } from '@app/providers';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../types/user';
import { RoutePaths } from '@shared/config/RouteConfig';
import { lsController } from '@shared/lib';

const internalError = 'Ошибка на сервере. Попробуйте авторизоваться позже.';

export const register = createAsyncThunk<User, User, ThunkConfig<string>>(
  'user/register',
  async (user, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.post<User>(`auth/register`, user);
      extra.navigate(RoutePaths.main);
      lsController.setUser(response.data.username);
      return response.data;
    } catch (e) {
      return rejectWithValue(internalError);
    }
  },
);

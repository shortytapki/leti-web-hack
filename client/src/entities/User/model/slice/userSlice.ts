import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { UserSchema, User } from '../types/user';
import { login } from '../services/login';
import { register } from '../services/register';

const initialState: UserSchema = {
  authData: undefined,
  error: undefined,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.authData = undefined;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.error = undefined;
        state.authData = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.error = undefined;
        state.authData = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { actions: userActions, reducer: userReducer } = userSlice;

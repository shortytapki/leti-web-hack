import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productsReducer } from '@entities/Product';
import { userReducer } from '@entities/User';
import { api } from '@shared/api';

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api,
        },
      },
    }),
});

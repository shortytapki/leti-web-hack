import { productsReducer } from '@entities/Product';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from '@shared/api/api';
const rootReducer = combineReducers({
  products: productsReducer,
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

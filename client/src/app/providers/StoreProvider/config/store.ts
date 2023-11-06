import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productsReducer } from '@entities/Product';
import { userReducer } from '@entities/User';
import { api } from '@shared/api';
import { NavigateFunction } from 'react-router-dom';

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
});

export const createReduxStore = (navigate: NavigateFunction) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api,
            navigate,
          },
        },
      }),
  });

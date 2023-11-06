import { ProductSchema } from '@entities/Product/model/types/product';
import { UserSchema } from '@entities/User/model/types/user';
import { type AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router-dom';

export interface StateSchema {
  products: ProductSchema;
  user: UserSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate: NavigateFunction;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}

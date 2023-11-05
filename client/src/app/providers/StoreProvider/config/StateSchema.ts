import { ProductSchema } from '@entities/Product/model/types/product';
import { type AxiosInstance } from 'axios';

export interface StateSchema {
  products: ProductSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}

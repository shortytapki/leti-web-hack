export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

export enum Currency {
  RUB = '₽',
}

export interface Categories {
  id: number;
  name: string;
}

export interface CartItem extends Product {
  amount: number;
}

export interface ProductSchema {
  cartItems: CartItem[];
  allProducts: Product[];
  searchString: string | undefined;
  currency: Currency;
  isLoading: boolean;
  error: string | undefined;
}

export const categoriesList: Categories[] = [
  {
    id: 1,
    name: 'Мужская одежда',
  },
  {
    id: 2,
    name: 'Женская одежда',
  },
  {
    id: 3,
    name: 'Унисекс',
  },
  {
    id: 4,
    name: 'Аксессуары',
  },
  {
    id: 5,
    name: 'Другое',
  },
];

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: CategoryId;
}

export enum CategoryId {
  MAN = 1,
  WOMAN,
  UNISEX,
  ACCESORIES,
  OTHER,
}

export enum Currency {
  RUB = '₽',
}

export interface Category {
  id: CategoryId;
  name: string;
}

export interface CartItem extends Product {
  amount: number;
}

export interface ProductSchema {
  cartItems: CartItem[];
  allProducts: Product[];
  currency: Currency;
  isLoading: boolean;
  error: string | undefined;
  pickedCategory: CategoryId | undefined;
}

export const categoriesList: Category[] = [
  {
    id: CategoryId.MAN,
    name: 'Мужская одежда',
  },
  {
    id: CategoryId.WOMAN,
    name: 'Женская одежда',
  },
  {
    id: CategoryId.UNISEX,
    name: 'Унисекс',
  },
  {
    id: CategoryId.ACCESORIES,
    name: 'Аксессуары',
  },
  {
    id: CategoryId.OTHER,
    name: 'Другое',
  },
];

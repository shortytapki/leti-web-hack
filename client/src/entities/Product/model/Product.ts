export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Product extends Category {
  price: number;
}

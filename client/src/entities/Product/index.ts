export {
  type Product,
  type CartItem,
  Currency,
  categoriesList,
} from './model/types/product';

export {
  getCartItems,
  getAllProducts,
  getCurrency,
} from './model/selectors/productSelectors';

export { fetchProducts } from './model/services/fetchProducts';
export { productsActions, productsReducer } from './model/slice/productSlice';

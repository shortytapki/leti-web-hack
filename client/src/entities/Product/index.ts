export {
  type Product,
  type CartItem,
  Currency,
  categoriesList,
  CategoryId,
} from './model/types/product';

export {
  getCartItems,
  getAllProducts,
  getCurrency,
  getProducts,
  getIsLoading,
  getError,
  getPickedCategory,
} from './model/selectors/productSelectors';

export { fetchProducts } from './model/services/fetchProducts';
export { productsActions, productsReducer } from './model/slice/productSlice';

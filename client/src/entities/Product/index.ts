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

export { productsActions, productsReducer } from './model/slice/productSlice';

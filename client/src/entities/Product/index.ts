export { type Product, type CartItem } from './model/types/product';

export { getCartItems } from './model/selectors/productSelectors';

export { productsActions, productsReducer } from './model/slice/productSlice';

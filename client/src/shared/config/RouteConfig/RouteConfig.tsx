import {
  AboutPage,
  MainPage,
  CheckoutPage,
  ProductPage,
  Auth,
  AllProductsPage,
  NotFoundPage,
} from '@pages';
import { type RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PRODUCTS = 'products',
  PRODUCT = 'product',
  CHECKOUT = 'checkout',
  AUTH = 'auth',
  DEVS = 'devs',
  // не забываем not_found
  NOT_FOUND = 'not_found',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PRODUCTS]: '/products',
  [AppRoutes.PRODUCT]: '/product/:id', // + ID
  [AppRoutes.CHECKOUT]: '/checkout',
  [AppRoutes.AUTH]: '/auth',
  [AppRoutes.DEVS]: '/devs',
  [AppRoutes.NOT_FOUND]: '*',
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage />,
  },
  [AppRoutes.PRODUCTS]: {
    path: RoutePaths.products,
    element: <AllProductsPage />,
  },
  [AppRoutes.PRODUCT]: {
    path: RoutePaths.product,
    element: <ProductPage />,
  },
  [AppRoutes.CHECKOUT]: {
    path: RoutePaths.checkout,
    element: <CheckoutPage />,
  },
  [AppRoutes.AUTH]: {
    path: RoutePaths.auth,
    element: <Auth />,
  },
  [AppRoutes.DEVS]: {
    path: RoutePaths.devs,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
};

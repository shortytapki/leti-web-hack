import { RoutePaths } from '@shared/config/RouteConfig';

export interface NavbarItem {
  path: string;
  text: string;
}

export const NavbarItemsList: NavbarItem[] = [
  { path: RoutePaths.main, text: 'Главная' },
  { path: RoutePaths.about, text: 'О нас' },
  { path: RoutePaths.products, text: 'Товары' },
  { path: RoutePaths.checkout, text: 'Корзина' },
];

import { RoutePaths } from '@shared/config/RouteConfig';

export interface NavbarItem {
  path: string;
  text: string;
}

export const NavbarItemsList: NavbarItem[] = [
  { path: RoutePaths.main, text: 'Main' },
  { path: RoutePaths.about, text: 'About us' },
  { path: RoutePaths.products, text: 'Products' },
  { path: RoutePaths.auth, text: 'Login'},
];

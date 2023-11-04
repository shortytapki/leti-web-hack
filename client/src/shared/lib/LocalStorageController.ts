import { Theme } from '@app/providers';
import { type Product } from '@entities/Product';

export enum AppLocalStorageKeys {
  THEME = 'LETI_MERCH_SHOP_THEME',
  CART_ITEMS = 'LETI_MERCH_SHOP_CART_ITEMS',
}

interface PersistentController {
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  removeAllProducts: () => void;
  getTheme: () => Theme;
  setTheme: (theme: Theme) => void;
}

class LocalStorageController implements PersistentController {
  constructor() {
    localStorage.setItem(AppLocalStorageKeys.CART_ITEMS, JSON.stringify([]));
  }

  addProduct(product: Product) {
    const currentItemsJSONString = localStorage.getItem(
      AppLocalStorageKeys.CART_ITEMS,
    );
    // Подразумевается, что они не null, но
    // non-null-assertion не делаем.
    if (currentItemsJSONString) {
      localStorage.setItem(
        AppLocalStorageKeys.CART_ITEMS,
        JSON.stringify(JSON.parse(currentItemsJSONString).concat([product])),
      );
    }
  }
  removeProduct(id: number) {
    const currentItemsJSONString = localStorage.getItem(
      AppLocalStorageKeys.CART_ITEMS,
    );
    // Та же тема с
    // non-null-assertion.
    if (currentItemsJSONString) {
      const currentItems: Product[] = JSON.parse(currentItemsJSONString);

      localStorage.setItem(
        AppLocalStorageKeys.CART_ITEMS,
        JSON.stringify(currentItems.filter((p) => p.id !== id)),
      );
    }
  }

  removeAllProducts() {
    localStorage.setItem(AppLocalStorageKeys.CART_ITEMS, JSON.stringify([]));
  }

  getTheme() {
    const persistedTheme: string | null = localStorage.getItem(
      AppLocalStorageKeys.THEME,
    );
    if (persistedTheme) {
      return persistedTheme as Theme;
    }
    return Theme.LIGHT;
  }

  setTheme(theme: Theme) {
    localStorage.setItem(AppLocalStorageKeys.THEME, theme);
  }
}

export const lsController = new LocalStorageController();

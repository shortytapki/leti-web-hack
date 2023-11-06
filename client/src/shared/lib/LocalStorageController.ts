import { Theme } from '@app/providers';
import { CartItem, Product } from '@entities/Product';

export enum AppLocalStorageKeys {
  THEME = 'LETI_MERCH_SHOP_THEME',
  CART_ITEMS = 'LETI_MERCH_SHOP_CART_ITEMS',
}

interface PersistentController {
  getCartItems: () => CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  removeAllItems: () => void;
  clearItem: (id: number) => void;
  getTheme: () => Theme;
  setTheme: (theme: Theme) => void;
}

class LocalStorageController implements PersistentController {
  constructor() {
    if (!localStorage.getItem(AppLocalStorageKeys.CART_ITEMS)) {
      localStorage.setItem(AppLocalStorageKeys.CART_ITEMS, JSON.stringify([]));
    }
  }

  getCartItems() {
    const persistedItems = localStorage.getItem(AppLocalStorageKeys.CART_ITEMS);
    if (persistedItems) {
      const items: CartItem[] = JSON.parse(persistedItems);
      return items;
    }
    return [];
  }

  addItem(product: Product) {
    const currentItemsJSONString = localStorage.getItem(
      AppLocalStorageKeys.CART_ITEMS,
    );
    // Подразумевается, что они не null, но
    // non-null-assertion не делаем.
    if (currentItemsJSONString) {
      const currentItems: CartItem[] = JSON.parse(currentItemsJSONString);
      const editedItem = currentItems.find((item) => item.id === product.id);
      if (!editedItem) {
        localStorage.setItem(
          AppLocalStorageKeys.CART_ITEMS,
          JSON.stringify(currentItems.concat([{ ...product, amount: 1 }])),
        );
        return;
      }
      editedItem.amount += 1;
      localStorage.setItem(
        AppLocalStorageKeys.CART_ITEMS,
        JSON.stringify(currentItems),
      );
    }
  }
  removeItem(id: number) {
    const currentItemsJSONString = localStorage.getItem(
      AppLocalStorageKeys.CART_ITEMS,
    );
    // Та же тема с
    // non-null-assertion.
    if (currentItemsJSONString) {
      const currentItems: CartItem[] = JSON.parse(currentItemsJSONString);

      localStorage.setItem(
        AppLocalStorageKeys.CART_ITEMS,
        JSON.stringify(currentItems.filter((p) => p.id !== id)),
      );
    }
  }

  clearItem(id: number) {
    const currentItemsJSONString = localStorage.getItem(
      AppLocalStorageKeys.CART_ITEMS,
    );

    if (currentItemsJSONString) {
      const currentItems: CartItem[] = JSON.parse(currentItemsJSONString);
      const clearedItems = currentItems.filter((item) => item.id !== id);
      localStorage.setItem(
        AppLocalStorageKeys.CART_ITEMS,
        JSON.stringify(clearedItems),
      );
    }
  }

  removeAllItems() {
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

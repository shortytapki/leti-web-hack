import { lazy } from 'react';

export const AllProductsPageAsync = lazy(async () => {
  return await import('./AllProductsPage.tsx');
});

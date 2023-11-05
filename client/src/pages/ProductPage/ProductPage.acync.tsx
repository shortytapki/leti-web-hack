import { lazy } from 'react';

export const ProductPageAsync = lazy(async () => {
  const page = await import('./ProductPage');
  return page;
});

import { lazy } from 'react';

export const CheckoutPageAsync = lazy(async () => {
  const page = await import('./CheckoutPage');
  return page;
});

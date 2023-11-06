import { lazy } from 'react';

export const NotFoundPageAsync = lazy(async () => {
  const page = await import('./NotFoundPage.tsx');
  return page;
});

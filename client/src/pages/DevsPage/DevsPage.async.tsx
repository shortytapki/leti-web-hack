import { lazy } from 'react';

export const DevsPageAsync = lazy(async () => {
  const page = await import('./DevsPage.tsx');
  return page;
});

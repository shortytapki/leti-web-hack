import { lazy } from 'react';

export const AuthPageAsync = lazy(async () => {
  return await import('./AuthPage.tsx');
});

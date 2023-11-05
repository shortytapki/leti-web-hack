import { lazy } from 'react';

export const AboutPageAsync = lazy(async () => {
  const page = await import('./AboutPage');
  return page;
});

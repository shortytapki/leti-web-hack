import { RouteConfig } from '@shared/config/RouteConfig';
import { ReactNode, Suspense, memo } from 'react';
import { Route, Routes } from 'react-router-dom';

function AppRouter() {
  const getSuspenseElement = (page: ReactNode) => (
    <Suspense fallback={<p>Loading...</p>}>{page}</Suspense>
  );
  return (
    <Routes>
      {Object.values(RouteConfig).map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={getSuspenseElement(route.element)}
        />
      ))}
    </Routes>
  );
}

export default memo(AppRouter);

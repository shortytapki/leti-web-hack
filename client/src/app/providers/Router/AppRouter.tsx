import { RouteConfig } from '@shared/config/RouteConfig';
import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

function AppRouter() {
  return (
    <Routes>
      {Object.values(RouteConfig).map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default memo(AppRouter);

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Graphs } from '../Graphs';
import { LoginPage } from '../LoginPage';
import { ProfilePage } from '../ProfilePage';
import { FeaturedProducts, NewProducts } from '../DataPage';
import { NoMatchRoute } from './NoMatchRoute';
import { RequireAuth } from './RequireAuth.tsx';
const LazyDataPage = React.lazy(() => import('../DataPage/DataPage.tsx'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Graphs />} />
      <Route path="login" element={<LoginPage />} />
      <Route
        path="data"
        element={
          <React.Suspense fallback="Loading...">
            <RequireAuth>
              <LazyDataPage />
            </RequireAuth>
          </React.Suspense>
        }
      >
        <Route index element={<FeaturedProducts />} />
        <Route path="featured" element={<FeaturedProducts />} />
        <Route path="new" element={<NewProducts />} />
      </Route>
      <Route
        path="profile"
        element={
          <RequireAuth>
            <ProfilePage />
          </RequireAuth>
        }
      />

      <Route path="*" element={<NoMatchRoute />} />
    </Routes>
  );
};

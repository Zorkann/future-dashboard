import { Routes, Route } from 'react-router-dom';
import { Graphs } from '../Graphs';
import { LoginPage } from '../LoginPage';
import { ProfilePage } from '../ProfilePage';
import { DataPage, FeaturedProducts, NewProducts } from '../DataPage';
import { NoMatchRoute } from './NoMatchRoute';
import { RequireAuth } from './RequireAuth.tsx';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Graphs />} />
      <Route path="login" element={<LoginPage />} />
      <Route
        path="data"
        element={
          <RequireAuth>
            <DataPage />
          </RequireAuth>
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

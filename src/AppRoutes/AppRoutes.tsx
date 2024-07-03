import { Routes, Route } from 'react-router-dom';
import { Graphs } from '../Graphs';
import { LoginPage } from '../LoginPage';
import { DataPage, FeaturedProducts, NewProducts } from '../DataPage';
import { NoMatchRoute } from './NoMatchRoute';
import { AuthContextProvider } from '@features/themes';
export const AppRoutes = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Graphs />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="data" element={<DataPage />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="*" element={<NoMatchRoute />} />
      </Routes>
    </AuthContextProvider>
  );
};

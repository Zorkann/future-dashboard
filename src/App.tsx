import './App.css';
import { Header } from '@components/Header';
import { DashboardDrawer } from '@components/DashboardDrawer';
import { GraphsContextProvider } from '@features/themes';
import { Graphs } from './Graphs';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { DataPage } from './DataPage';
import { NoMatchRoute } from '@components/NoMatchRoute';
import { NewProducts } from './DataPage';
import { FeaturedProducts } from './DataPage';

function App() {
  return (
    <GraphsContextProvider>
      <div>
        <Header
          Drawer={({ onClose, open }) => (
            <DashboardDrawer onClose={onClose} open={open} />
          )}
        />
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
      </div>
    </GraphsContextProvider>
  );
}

export default App;

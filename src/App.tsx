import './App.css';
import { Header } from '@components/Header';
import { DashboardDrawer } from '@components/DashboardDrawer';
import { GraphsContextProvider } from '@features/themes';
import { AppRoutes } from './AppRoutes';
import { AuthContextProvider } from '@features/themes';
function App() {
  return (
    <AuthContextProvider>
      <GraphsContextProvider>
        <div>
          <Header
            Drawer={({ onClose, open }) => (
              <DashboardDrawer onClose={onClose} open={open} />
            )}
          />
          <AppRoutes />
        </div>
      </GraphsContextProvider>
    </AuthContextProvider>
  );
}

export default App;

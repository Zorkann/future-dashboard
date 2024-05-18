import './App.css';

import { Header } from '@components/Header';
import { DashboardDrawer } from '@components/DashboardDrawer';
import { GraphsContextProvider } from '@features/themes';
import { Graphs } from './Graphs';

function App() {
  return (
    <GraphsContextProvider>
      <div>
        <Header
          Drawer={({ onClose, open }) => (
            <DashboardDrawer onClose={onClose} open={open} />
          )}
        />
        <Graphs />
      </div>
    </GraphsContextProvider>
  );
}

export default App;

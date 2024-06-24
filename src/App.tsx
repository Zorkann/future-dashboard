import './App.css';
import { Header } from '@components/Header';
import { DashboardDrawer } from '@components/DashboardDrawer';
import { GraphsContextProvider } from '@features/themes';
import { Graphs } from './Graphs';
import { Routes, Route } from 'react-router-dom';
import { Page2 } from './Page2';

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
          <Route path="page2" element={<Page2 />} />
        </Routes>
      </div>
    </GraphsContextProvider>
  );
}

export default App;

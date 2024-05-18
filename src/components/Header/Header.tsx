import React, { useState } from 'react';
import Logo from '@assets/react.svg';
import { DrawerProps, Drawer as BaseDrawer } from '../Drawer';

type HeaderProps = {
  Drawer?: ({ onClose, open }: DrawerProps) => React.ReactNode;
};

export function Header({
  Drawer = ({ onClose, open }) => <BaseDrawer onClose={onClose} open={open} />,
}: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleOnClose() {
    setDrawerOpen(false);
  }

  function toggle() {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <header className="flex items-center w-full h-16 border-b border-secondary pl-[40px] pr-[40px] shadow-lg shadow-secondary/30 fixed bg-background z-10">
      <div>
        <img src={Logo} alt="React logo" />
      </div>
      <button className="ml-auto" onClick={toggle}>
        Toggler
      </button>

      {Drawer({
        onClose: handleOnClose,
        open: drawerOpen,
      })}
    </header>
  );
}

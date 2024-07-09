import React, { useState } from 'react';
import { DrawerProps, Drawer as BaseDrawer } from '../Drawer';
import { NavLink } from 'react-router-dom';
import { useAuth } from '@features/themes/';

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

  const auth = useAuth();

  return (
    <header className="flex items-center w-full h-16 border-b border-secondary pl-[40px] pr-[40px] shadow-lg shadow-secondary/30  bg-background z-10">
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'mr-5 text-secondary font-bold' : 'mr-5 text-gray-700'
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/data"
          className={({ isActive }) =>
            isActive ? 'mr-5 text-secondary font-bold' : 'mr-5 text-gray-700'
          }
        >
          Data
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? 'mr-5 text-secondary font-bold' : 'mr-5 text-gray-700'
          }
        >
          Profile
        </NavLink>
        {!auth.user && (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? 'mr-5 text-secondary font-bold' : 'mr-5 text-gray-700'
            }
          >
            Login
          </NavLink>
        )}
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

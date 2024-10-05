/* eslint-disable react/react-in-jsx-scope */

import { Header } from '@/components/header';
import { Outlet } from 'react-router-dom';
export function AppLayouts() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  );
}

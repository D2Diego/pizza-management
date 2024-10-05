/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from 'react-router-dom';
import { SignUp } from './pages/auth/sign-up';
import { SignIn } from './pages/auth/sign-in';
import { AppLayouts } from './pages/_layouts/app';
import { AuthLayouts } from './pages/_layouts/auth';
import { Orders } from './pages/app/orders/orders';
import { Dashboard } from './pages/app/dashboard/dashboard';
import { NotFound } from './pages/404';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayouts />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayouts />,
    children: [
      { path: '/sing-in', element: <SignIn /> },
      { path: '/sing-up', element: <SignUp /> },
    ],
  },
]);

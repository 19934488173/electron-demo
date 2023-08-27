import Contact from '@src/pages/Contact';
import ErrorPage from '@src/pages/ErrorPage';
import Home from '@src/pages/Home';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

/**
 *  路由控制
 */

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
      },
    ],
  },
]);

export default router;

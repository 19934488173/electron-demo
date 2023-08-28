import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '@src/pages/ErrorPage';
import Home from '@src/pages/Home';
import Resume from '@src/pages/Resume';

/**
 *  路由控制
 */

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'resume/:resumeId',
    element: <Resume />,
    errorElement: <ErrorPage />,
  },
]);

export default router;

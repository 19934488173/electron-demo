import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { SWRConfig } from 'swr';

import router from './router';

/** 为所有的 SWR hook 提供全局配置 */
const swrConfig: React.ComponentProps<typeof SWRConfig>['value'] = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  shouldRetryOnError: false,
  dedupingInterval: 3000,
};

const App = () => {
  return (
    <React.StrictMode>
      <SWRConfig value={swrConfig}>
        <RouterProvider router={router} />
      </SWRConfig>
    </React.StrictMode>
  );
};

export default App;

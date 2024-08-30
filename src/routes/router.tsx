/* eslint-disable react-refresh/only-export-components */
import { Outlet, createBrowserRouter } from 'react-router-dom';
import App from 'App';
import Home from 'pages/Home';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

export default router;

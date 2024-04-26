import HomePage from 'routes/homePage/homePage';

import Navbar from './Navbar/Navbar';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ListPage from 'routes/listPage/listPage';
import Layout from './layout/layout';
import SinglePage from './singlePage/singlePage';

export const App = () => {

  const router = createBrowserRouter([
    {
      path: "/react-estate-ui",
      element: (<Layout />),
      children: [
        {
          path: "/react-estate-ui",
          element:<HomePage/>
        },
        {
          path: "/react-estate-ui/list",
          element:<ListPage/>
        },
        {
          path: "/react-estate-ui/:id",
          element:<SinglePage/>
        }
      ]
    },

  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

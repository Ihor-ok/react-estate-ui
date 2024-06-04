import HomePage from 'routes/homePage/homePage';

import Navbar from './Navbar/Navbar';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ListPage from 'routes/listPage/listPage';
import Layout from '../routes/layout/layout';
import SinglePage from './singlePage/singlePage';
import ProfilePage from 'routes/profilePage/profilePage';

export const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Layout />),
      children: [
        {
          path: "/",
          element:<HomePage/>
        },
        {
          path: "/list",
          element:<ListPage/>
        },
        {
          path: "/:id",
          element:<SinglePage/>
        },
        {
          path: "/profile",
          element:<ProfilePage/>
        }
      ]
    },

  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

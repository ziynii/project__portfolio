import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import './scss/style.scss';
import HomeOutlet from './pages/HomeOutlet';
import Project from './pages/Project';
import Profile from './pages/Profile';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeOutlet />,

      children: [
        {
          path: '',
          element: <Navigate to="/profile" replace />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/project',
          element: <Project />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

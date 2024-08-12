import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './scss/style.scss';
import HomeOutlet from './pages/HomeOutlet';
import Project from './pages/Project';
import Profile from './pages/Profile';
import Contact from './pages/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeOutlet />,

      children: [
        {
          path: '',
          element: <Profile />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/project',
          element: <Project />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

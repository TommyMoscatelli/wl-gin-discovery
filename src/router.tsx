import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Step1 from './components/Discovery/Step1';
import Step2 from './components/Discovery/Step2';
import Step3 from './components/Discovery/Step3';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/discovery',
        element: <Step1 />,
      },
      {
        path: '/discovery/:category',
        element: <Step2 />,
      },
      {
        path: '/discovery/:category/:characteristic',
        element: <Step3 />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;

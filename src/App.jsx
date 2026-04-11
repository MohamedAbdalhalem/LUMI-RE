import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './pages/Layout';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import Products from './pages/Products';
import SkinQuiz from './pages/SkinQuiz';
import Orders from './pages/Orders';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'skin-quiz', element: <SkinQuiz /> },
      { path: 'orders', element: <Orders /> },
      { path: 'sign-in', element: <SignIn /> },
      { path: 'sign-up', element: <SignUp /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

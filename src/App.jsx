import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import SignIn from "./pages/SignIn";
import ProductDetials from "./pages/ProductDetials";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import Addresses from "./pages/Addresses";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";
import ProductsPage from "./pages/ProductsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <ProductsPage /> },
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
      { path: "products/:id", element: <ProductDetials /> },
      { path: "cart", element: <Cart /> },
      { path: "addresses", element: <Addresses /> },
      { path: "profile", element: <Profile /> },
      { path: "orders", element: <Orders /> },
      { path: "order-details/:id", element: <OrderDetail /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      <RouterProvider router={router} />;{" "}
    </QueryClientProvider>
  );
}

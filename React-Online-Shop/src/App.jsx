import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import ProductDetail from "./pages/ProductDetail";
import AddToCartPage from "./pages/AddToCartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/detail/:id",
        element: <ProductDetail />,
      },
      {
        path: "/add-to-cart",
        element: <AddToCartPage />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;

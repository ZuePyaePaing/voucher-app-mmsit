import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/components/Layout";
import PageNoteFound from "./src/pages/PageNoteFound";
import Dashboard from "./src/pages/Dashboard";
import VoucherPage from "./src/pages/VoucherPage";
import ProductPage from "./src/pages/ProductPage";
import SalePage from "./src/pages/SalePage";
import VoucherDetailPage from "./src/pages/VoucherDetailPage";
import EditProductForm from "./src/pages/EditProductForm";
import AddProductForm from "./src/pages/AddProductForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNoteFound />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "*", element: <PageNoteFound /> },
      { path: "/product", element: <ProductPage /> },
      { path: "/sale", element: <SalePage /> },
      { path: "/voucher", element: <VoucherPage /> },
      { path: "/voucher/:id", element: <VoucherDetailPage /> },
      { path: "/create-product", element: <AddProductForm /> },
      { path: "/edit/:id", element: <EditProductForm /> },
    ],
  },
]);

export default router;

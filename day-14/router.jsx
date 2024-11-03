import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/components/Layout";
import PageNoteFound from "./src/pages/PageNoteFound";
import DashboardPage from "./src/pages/DashboardPage.jsx";
import VoucherPage from "./src/pages/VoucherPage";
import ProductPage from "./src/pages/ProductPage";
import SalePage from "./src/pages/SalePage";
import VoucherDetailPage from "./src/pages/VoucherDetailPage";
import EditProductForm from "./src/pages/EditProductForm";
import AddProductForm from "./src/pages/AddProductForm";
import RegisterPage from "./src/pages/RegisterPage";
import UserProfilePage from "./src/pages/UserProfilePage";
import Loginpage from "./src/pages/LoginPage.jsx";
import UserProfielEditPage from "./src/pages/UserProfielEditPage.jsx";
import UserChangeNamePage from "./src/pages/UserChangeNamePage.jsx";
import UserPasswordChangePage from "./src/pages/UserPasswordChangePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <PageNoteFound />,
    children: [
      { index: true, element: <Loginpage /> },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/dashboard",
        element: <Layout />,
        // loader: isLoginLoader,
        children: [
          { index: true, element: <DashboardPage /> },
          { path: "*", element: <PageNoteFound /> },
          { path: "product", element: <ProductPage /> },
          { path: "sale", element: <SalePage /> },
          { path: "voucher", element: <VoucherPage /> },
          { path: "voucher/:id", element: <VoucherDetailPage /> },
          { path: "create-product", element: <AddProductForm /> },
          { path: "edit/:id", element: <EditProductForm /> },
          {
            path: "profile",
            children: [
              { index: true, element: <UserProfilePage /> },
              { path: "edit", element: <UserProfielEditPage /> },
              { path: "change-name", element: <UserChangeNamePage /> },
              { path: "change-image", element: <UserProfielEditPage /> },
              { path: "change-password", element: <UserPasswordChangePage /> },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;

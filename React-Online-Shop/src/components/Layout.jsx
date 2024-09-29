import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <main className=" w-full h-screen">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;

import React, { useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./ThemeProvider";
import useUserStore from "../stores/useUserStore";
import useCookie from "react-use-cookie";

const Layout = () => {
  const [userCookie] = useCookie("user");
  const { setUser } = useUserStore();
  useEffect(() => {
    setUser(JSON.parse(userCookie));
  }, []);
  return (
    <ThemeProvider>
      <main className=" dark:bg-black bg-white h-full">
        <Header />
        <Outlet />
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: "",
            duration: 3000,
            style: {
              background: "#363636",
              color: "#fff",
            },
            success: {
              duration: 2000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
      </main>
    </ThemeProvider>
  );
};

export default Layout;

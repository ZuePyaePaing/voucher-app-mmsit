import { Routes, Route } from "react-router-dom";
import Home from "@/pages/home-page";
import Sidebar from "@/components/side-bar";
import Navbar from "@/components/nav-bar";
import PageNotFound from "@/pages/404-not-found";
const LayoutPage = () => {
  return (
    <>
      <div className=" flex">
        <Sidebar />
        <div className="w-5/6 scrollbar-hide relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default LayoutPage;

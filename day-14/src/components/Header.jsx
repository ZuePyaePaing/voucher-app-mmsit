import React from "react";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
import { UserRoundPen } from "lucide-react";

import useUserStore from "../stores/useUserStore";

const Header = () => {
  // const [userCookie] = useCookie("user");
  // const { name, image, email } = JSON.parse(userCookie);
  const {user}=useUserStore()
  return (
    <header className=" dark:bg-black relative w-full md:w-[720px] lg:w-[1180px] mx-auto px-5 py-3 flex justify-between items-center">
      <Link to={"/dashboard"}>
        <h2 className="dark:text-white md:text-2xl text-xl font-bold">Voucher App</h2>
        <p className="dark:text-white text-sm text-gray-500 ">MMS Software</p>
      </Link>
      <div className=" flex items-center gap-3">
        <Link to="/dashboard/profile">
          {user.profile_image ? (
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={user.profile_image}
              alt="profile"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-200  flex justify-center items-center">
              <UserRoundPen size={24} />
            </div>
          )}
        </Link>
        <Link to="/dashboard/profile">
          <h1 className="text-sm text-gray-700 dark:text-white font-bold capitalize md:block hidden ">
            {user.name}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold md:block hidden ">{user.email}</p>
        </Link>

        <DarkMode />
      </div>
    </header>
  );
};

export default Header;

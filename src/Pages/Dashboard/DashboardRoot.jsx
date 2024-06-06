import { Outlet } from "react-router-dom";

import { FaArrowLeft, FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import UserDashboard from "./UserDashboard/UserDasboard";
import { AuthContext } from "../../Authentication/AuthProvider";

const DasboardRoot = () => {
    const {user}=useContext(AuthContext)
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="bg-[#85F4FA]">
      <div className="flex relative">
        <div className="absolute md:static lg:w-[18%] grid lg:grid-cols-[140px] top-0 gap-8 lg:gap-8  z-10">
        <div
          className={` bg-[#85F4FA] w-72 min-h-screen lg:fixed text-white  ${
            showSidebar ? "block" : "hidden"
          } md:block`}
        >
          <ul className="menu  text-center text-lg md:text-xl">
            {user?.email=== 'robiulislam29935@gmail.com' ? (
              <AdminDashboard></AdminDashboard>
            )  : <UserDashboard></UserDashboard>
            }

          </ul>
        </div>
          <div
            className="absolute right-0 top-0 text-right lg:hidden "
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <button className="bg-gradient-to-r from-[#1e1b4b] via-indigo-800 to-[#1e1b4b] text-white p-2 md:hidden">
              {showSidebar && <FaArrowLeft />}
            </button>
          </div>
        </div>
        <div className=" bg-[#85F4FA] min-h-screen rounded-lg w-7xl lg:w-[82%] lg:col-span-2">
          <Outlet></Outlet>
        </div>
      </div>

      <div
        className="absolute left-0 top-0 text-right lg:hidden "
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <button className="bg-gradient-to-r from-[#1201fc] via-indigo-800 to-[#fbfbff] text-white p-2">
          {showSidebar || <FaBars />}
        </button>
      </div>
    </div>
  );
};

export default DasboardRoot;

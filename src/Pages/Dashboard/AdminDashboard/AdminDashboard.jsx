

import { Link, NavLink } from "react-router-dom";
import {
  FaBlog,
  FaBlogger,
  FaBorderAll,
  FaEmpire,
  FaHome,
  FaUsers,
} from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { RxDashboard } from "react-icons/rx";
import { VscGraph } from "react-icons/vsc";
import { CgAdd } from "react-icons/cg";

const AdminDashboard = () => {
  return (
    <div className="overflow-y-scroll h-screen">
      <div className="w-[250px]">
      <h1 className="text-black font-bold">Mobarak-Shop</h1>
        <li className="bg-[#003A90] rounded-lg my-2">
          <Link
            to="/dashboard/admin/adminHome"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-[#04FAFF]" : ""
            }
          >
            <RxDashboard className="mr-2" />
            Admin Dashboard
          </Link>
        </li>
        <li className="bg-[#003A90] rounded-lg my-2">
          <Link
            to="/dashboard/admin/allUsers"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-[#04FAFF]" : ""
            }
          >
            <FaBorderAll className="mr-2" />
            All Users
          </Link>
        </li>
        <li className="bg-[#003A90] rounded-lg my-2">
          <Link
            to="/dashboard/admin/addProduct"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-[#04FAFF]" : ""
            }
          >
            <CgAdd className="mr-2" />
            Add Product
          </Link>
        </li>
        <li className="bg-[#003A90] rounded-lg my-2">
          <Link
            to="/dashboard/admin/allProducts"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-[#04FAFF]" : ""
            }
          >
            <CgAdd className="mr-2" />
            All Products
          </Link>
        </li>

        <li className="bg-[#003A90] rounded-lg my-2">
          <Link
            to="admin/addBlogs"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-[#04FAFF]" : ""
            }
          >
            <FaBlog />
            Add Blogs
          </Link>
        </li>
        <li className="bg-[#003A90] rounded-lg my-2">
          <Link
            to="admin/manageBlogs"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-[#04FAFF]" : ""
            }
          >
            <FaBlog />
            Manage Blogs
          </Link>
        </li>

        <li className="bg-[#003A90] rounded-lg my-2">
          <Link
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-[#04FAFF]" : ""
            }
          >
            <FaHome className="mr-2" />
            Go Home
          </Link>
        </li>
      </div>
    </div>
  );
};
export default AdminDashboard;


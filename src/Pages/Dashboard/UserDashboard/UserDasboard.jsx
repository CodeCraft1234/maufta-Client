import { Link } from "react-router-dom";
import {
  FaHome,
  FaRegCalendarAlt,
  FaUserShield,
  FaUsers,
} from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { FcSalesPerformance } from "react-icons/fc";
import { MdAccountBox } from "react-icons/md";
import { RiFundsBoxFill } from "react-icons/ri";
import { GiExpense } from "react-icons/gi";
const UserDashboard = () => {
  return (
    <div>
      <div className="w-[250px] border-r-2 pr-4 border-black">
      <h1>Mobarak-Shop</h1>
        <li className="bg-[#003A90] rounded-lg my-2">
          <Link
            to="dashboard/admin"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-[#04FAFF]" : ""
            }
          >
            <RxDashboard className="mr-2" />
            User Dashboard
          </Link>
        </li>
        <li className="bg-[#003A90] rounded-lg my-2">
          <Link
            to="dashboard/admin"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-[#04FAFF]" : ""
            }
          >
            <FaUsers className="mr-2" />
            Users
          </Link>
        </li>
        <li className="bg-[#003A90] rounded-lg my-2">
          <Link
            to="dashboard/admin"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-[#04FAFF]" : ""
            }
          >
            <FaUserShield className="mr-2" />
            Customers
          </Link>
        </li>
        <li className="bg-[#003A90] rounded-lg my-2">
          <Link
            to="dashboard/admin"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-[#04FAFF]" : ""
            }
          >
            <FcSalesPerformance/>
            Total sale
          </Link>
        </li>
        <li className="bg-[#003A90] rounded-lg my-2">
          <Link
            to="dashboard/admin"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-[#04FAFF]" : ""
            }
          >
            <MdAccountBox />
            Accounts
          </Link>
        </li>
        <li className="bg-[#003A90] rounded-lg my-2">
          <Link
            to="dashboard/admin"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-[#04FAFF]" : ""
            }
          >
            <RiFundsBoxFill />
            Founds
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

export default UserDashboard;

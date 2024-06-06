import { RiExchangeFundsFill } from "react-icons/ri";
import { LuUsers } from "react-icons/lu";
import { FiUserCheck } from "react-icons/fi";
import Charts from "./Chart/Charts";
import Piechart from "./Chart/Picharts";

const AdminHome = () => {
  return (
    <>
    <div className="px-10 ml-10 mt-20">
      <div className=" flex gap-6">
        <div className=" bg-[#006f47] w-[200px] p-5 flex items-center gap-3 rounded-lg">
          <div>
            <div className="w-12 h-12 bg-[#dd3fe0] rounded-full flex items-center justify-center">
              <RiExchangeFundsFill className="text-2xl text-white" />
            </div>
          </div>
          <div className=" text-white">
            <h2>1200</h2>
            <h3>Total Fund</h3>
          </div>
        </div>


        <div className=" bg-[#006f47] w-[220px] p-5 flex items-center gap-3 rounded-lg">
          <div>
            <div className="w-12 h-12 bg-[#51bcd3] rounded-full flex items-center justify-center">
              <LuUsers className="text-2xl text-white" />
            </div>
          </div>

          <div className=" text-white">
            <h2>550</h2>
            <h3>Total Customers</h3>
          </div>
        </div>


        <div className=" bg-[#006f47] w-[200px] p-5 flex items-center gap-3 rounded-lg">
          <div>
            <div className="w-12 h-12 bg-[#51dc78] rounded-full flex items-center justify-center">
            <FiUserCheck className="text-2xl text-white" />
            </div>
          </div>

          <div className=" text-white">
            <h2>120</h2>
            <h3>Users</h3>
          </div>
        </div>


        <div className=" bg-[#006f47] w-[200px] p-5 flex items-center gap-3 rounded-lg">
        <div>
            <div className="w-12 h-12 bg-[#dba336] rounded-full flex items-center justify-center">
            <FiUserCheck className="text-2xl text-white" />
            </div>
          </div>

          <div className=" text-white">
            <h2>1200</h2>
            <h3>Total Fund</h3>
          </div>
        </div>

        
      </div>
      <div className="flex gap-10 p-10 rounded-md">
      <div>
      <Charts/>
    </div>
    <div>
      <Piechart/>
    </div>
      </div>
    </div>

    </>
  );
};

export default AdminHome;

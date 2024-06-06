import { Outlet, useLocation } from "react-router-dom";
import Navber from "./Navber/Navber";
import Footer from "./Footer/Footer";
import ScrollTop from "./ScrollTop";
import { Toaster } from "react-hot-toast";



const Root = () => {
    const location = useLocation();
    const noheaderfooter = location.pathname.includes("dashboard");
    return (
        <div>
        <ScrollTop />
        {noheaderfooter || <Navber></Navber>}
        <div className="min-h-screen max-w-auto mx-auto">
          <Outlet></Outlet>
        </div>
        {noheaderfooter || <Footer></Footer>}
        <Toaster />
      </div>
    );
};

export default Root;
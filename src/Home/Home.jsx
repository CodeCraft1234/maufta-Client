import Products from "../Pages/Products/Products";
import Banner from "./Banner";
// import BestSelling from "./BestSelling";
import BlogPost from "./BlogPost";
import Brands from "./Brands";
// import Featured from "./Featured";
import LaptopStore from "./LaptopStore";
import Latest from "./Latest";
import MobileStore from "./MobileStore";
import StartingProducts from "./StartingProducts";
import TelevisionStore from "./TelevisionStore";
import Testimonial from "./Testimonial";
import WatchStore from "./WatchStore";

const Home = () => {
    return (
        <div className="container bg-base-100 px-3 text-black mx-auto">
            <Banner></Banner> 
            <StartingProducts></StartingProducts>
            <Products></Products>
            <MobileStore></MobileStore>
            <LaptopStore></LaptopStore>
            <TelevisionStore></TelevisionStore>
            <WatchStore></WatchStore>
            {/* <BestSelling></BestSelling> */}
            <Latest></Latest>
            {/* <Featured></Featured> */}
            <Brands></Brands>
            <Testimonial></Testimonial>
            <BlogPost></BlogPost>
        </div>
    );
};

export default Home;
import axios from "axios";
import { useEffect, useState } from "react";
import ProductsCard from "../Pages/Products/ProductsCard";
const Latest = () => {
    const [products,setProducts]=useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/products')
          .then(response => {
            const sortedPosts = response.data.sort((a, b) => new Date(b.currentTime) - new Date(a.currentTime));
            const posts=sortedPosts.slice(0,6)
            setProducts(posts);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
    return (
        <div>
            <h1 className="text-5xl font-bold ml-5 my-5">Latest Products</h1>
           <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-2 my-3">
           
          {
            products.map(item=><ProductsCard key={item._id} item={item}></ProductsCard>)
           }
          </div>
        </div>
    );
};

export default Latest;
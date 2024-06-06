import { useEffect, useState } from "react";
import useProducts from "../Hook/useProducts";
import ProductsCard from "../Pages/Products/ProductsCard";

const MobileStore = () => {
    // Fetch products using custom hook
    const [products] = useProducts();
    
    // State to hold filtered products
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Filter products to only include those in the "mobile" category
    useEffect(() => {
        const filtered = products.filter(product => product.category === 'mobile');
        setFilteredProducts(filtered);
    }, [products]); // Make sure to include products in the dependency array

    return (
        <div>
            <h1 className="text-5xl font-bold my-5">The Mobile Store</h1>
            <div className="grid lg:grid-cols-5 md:grid-cols-4 gap-2">
              {filteredProducts.map((item) => (
                <ProductsCard key={item._id} item={item}></ProductsCard>
              ))}
            </div>
        </div>
    );
};

export default MobileStore;

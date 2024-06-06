import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Axios/UseAxiosSecure";
const useProducts = () => {
    const AxiosSecure=UseAxiosSecure()
    const { refetch, data: products=[]}=useQuery({
        queryKey:['products'],
        queryFn: async () => {
            const res=await AxiosSecure.get(`/products`)
            return res.data
        }
    })
        console.log(products)
        return [products,refetch]
      
};
export default useProducts;
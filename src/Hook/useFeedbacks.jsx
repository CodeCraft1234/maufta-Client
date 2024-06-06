import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Axios/UseAxiosSecure";
const useFeedbacks = () => {
    const AxiosSecure=UseAxiosSecure()
    const { refetch, data: feedbacks=[]}=useQuery({
        queryKey:['feedbacks'],
        queryFn: async () => {
            const res=await AxiosSecure.get(`/feedbacks`)
            return res.data
        }
    })
        console.log(feedbacks)
        return [feedbacks,refetch]
      
};
export default useFeedbacks;
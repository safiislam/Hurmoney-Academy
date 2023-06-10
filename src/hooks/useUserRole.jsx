import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useUserRole = () => {
    const{user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data:userData=[],isLoading } = useQuery({
        queryKey: ['userRole',user?.email],
        queryFn: async () =>{
            const data = await axiosSecure.get(`/userRole?email=${user?.email}`)
            return data.data
        }
     })
    return [userData, isLoading]
};

export default useUserRole;
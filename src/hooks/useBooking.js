import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

import useAxiosSecure from "./useAxiosSecure";


const useBooking = () => {
    const [axiosSecure] =useAxiosSecure()
    const {user}= useContext(AuthContext)
    const {data:bookings=[],refetch} =useQuery({
        queryKey:['classBookings',user?.email],
        enabled:!!localStorage.getItem('access-token'),
        queryFn: async () =>{
            const res = await axiosSecure.get(`/classBookings?email=${user?.email}`)
            return res.data
        }
    })
    return [bookings,refetch]
};

export default useBooking;
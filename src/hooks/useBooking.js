import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";


const useBooking = () => {
    const {user}= useContext(AuthContext)
    const {data:bookings=[]} =useQuery({
        queryKey:['classBookings',user?.email],
        queryFn: async () =>{
            const res = await axios.get(`http://localhost:5000/classbookings?email=${user?.email}`)
            return res.data
        }
    })
    return [bookings]
};

export default useBooking;
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AllClasCard from "./AllClasCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import useUserRole from "../../hooks/useUserRole";
import useBooking from "../../hooks/useBooking";



const AllClassPage = () => {
    const { user } = useContext(AuthContext)
    const [bookings, refetch] = useBooking()
    const [classLoading, setClassLoading] = useState(false)
    const [axiosSecure] = useAxiosSecure()
    const [courseId, setCourseId] = useState([])
    const [userData] = useUserRole(user)
    // const[axiosSecure]= useAxiosSecure()
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const { data: transection = [] } = useQuery({
        queryKey: ['payment', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {

            const data = await axiosSecure.get(`/payment?email=${user?.email}`)
            const paymentArray = data.data.map(item => item?.classId)
            // const id = paymentArray[0]
            return paymentArray
            // return id
        }
    })
    const { data: allClass = [] } = useQuery({
        queryKey: ['allClass'],
        queryFn: async () => {
            setClassLoading(true)
            const data = await axios.get('https://summry-camp-school-server.vercel.app/allClass')
            setClassLoading(false)
            return data.data
        }
    })
    // const {data} = useQuery({
    //     queryKey:['isbooked',user?.email],
    //     queryFn: async ()=> {
    //         const data = await axios.get(`http://localhost:5000/`)
    //     }
    // })
    useEffect(() => {
        const courseArray = allClass.map(item => item._id);
        setCourseId(courseArray);
    }, [allClass]);
    console.log(transection)
    console.log(courseId)
    // useEffect(() => {
    //     // const hasMatchingId = transection.some(paymentArray => paymentArray.some(paymentId => courseId.some(classItems => classItems._id === paymentId)));
    //     const hasMatchingId = transection.some(paymentArray => paymentArray.some(paymentId => courseId.includes(paymentId)));
    //     // const hasMatchingId = transection.some(paymentArray => {
    //     //     return paymentArray.some(paymentId => courseId.includes(paymentId));
    //     //   });
    //     // const hasMatchingId = transection.some((paymentArray) => paymentArray.includes(cou);
    //     // });
    //     // const filteredCourses = allClass.filter((course) =>
    //     // transection.some((paymentArray) => paymentArray.includes(course._id))
    //     // );
    //     // const hasMatchingId = transection.some((classId) =>allClass.includes(classId)

    //     // );
    //     setIsButtonDisabled(hasMatchingId)
    // }, [transection, allClass])

    useEffect(() => {
        const isInstractor = userData.role == 'instructor'
        const isAdmin = userData.role == 'admin'
        if (isAdmin || isInstractor ) {
            setIsButtonDisabled(true)
        }
    }, [userData, ])
    useEffect(()=>{
        const isbookings = allClass.map(item=> item._id === bookings.map(item=>item._id))
       
        
        
    },[bookings])

    if (classLoading) {
        return <LoadingComponent />
    }
    return (
        <div>
            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    allClass.map(item => <AllClasCard isButtonDisabled={isButtonDisabled} key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default AllClassPage;
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AllClasCard from "./AllClasCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUserRole from "../../hooks/useUserRole";



const AllClassPage = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const [courseId, setCourseId] = useState([])
    const [userData] = useUserRole()
    // const[axiosSecure]= useAxiosSecure()
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const { data: transection = [] } = useQuery({
        queryKey: ['payment', user?.email],
        enabled:!! user?.email,
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
        // enabled: !! localStorage.getItem('access-token'),
        queryFn: async () => {
            const data = await axios.get('https://summry-camp-school-server.vercel.app/allClass')
            // const courseArray = data.data.map(item => item._id)

            return data.data
        }
    })
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
        if (isAdmin || isInstractor) {
            setIsButtonDisabled(true)
        }
    }, [userData])


    return (
        <div>
            <div className="mt-24 grid grid-cols-3 gap-8">
                {
                    allClass.map(item => <AllClasCard isButtonDisabled={isButtonDisabled} key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default AllClassPage;
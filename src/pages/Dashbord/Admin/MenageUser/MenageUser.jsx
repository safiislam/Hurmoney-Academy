import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import LoadingComponent from "../../../../components/LoadingComponent/LoadingComponent";



const MenageUser = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch,isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const data = await axiosSecure.get('/users')
            return data.data
        }
    })

    const handleInstructor = (id) => {
        axios.patch(`https://summry-camp-school-server.vercel.app/users/instructor/${id}`)
            .then(data => {
                if (data.data.modifiedCount) {
                    refetch()
                }
            })
    }
    const handleMakeAdmin = (id) => {
        if (id) {
            axios.patch(`https://summry-camp-school-server-r844ersxp-safiislam.vercel.app/users/admin/${id}`)
            // axios.patch(`http://localhost:5000/users/admin/${id}`)
                .then(data => {
                    console.log(data)
                    // if (data?.data?.modifiedCount) {
                    //     // alert('make admin')
                    //     refetch()
                    // }
                    if (data) {
                        refetch()
                    }
                })
        }

    }
    if(isLoading){
        return <LoadingComponent />
    }
    return (
        <div>
            <div className="px-8 ">
                <table className="w-full ">
                    <thead className="border-2 border-black">
                        <tr className="text-center">
                            <th className="border-2 border-black">#</th>
                            <th className="border-2 border-black">Name</th>
                            <th className="border-2 border-black">email</th>
                            <th className="border-2 border-black">Make admin</th>
                            <th className="border-2 border-black">Make Instructor</th>
                            <th className="border-2 border-black">User Role</th>
                            <th className="border-2 border-black">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            users.map((user, index) => <tr key={user._id} className="bg-base-200">
                                <th className="border-2 border-black">{index + 1}</th>
                                <td className="border-2 border-black">{user.name}</td>
                                <td className="border-2 border-black">{user.email}</td>
                                <td className="cursor-pointer border-2 border-black">{user?.role === 'admin' ? <button disabled className="border-2 p-2 rounded-full  border-blue-500">Make admin</button> : <button onClick={() => handleMakeAdmin(user._id)} className="bg-blue-500 px-2 py-2 rounded-lg text-white ">Make admin</button>}</td>
                                <td className="cursor-pointer border-2 border-black">{user?.role === 'instructor' ? <button disabled className="btn btn-primary btn-xs">Make Instructor</button> : <button onClick={() => handleInstructor(user._id)} className="bg-orange-500 p-2 text-white rounded-lg">Make Instructor</button>}</td>
                                <td className="border-2 border-black">{user?.role ? <p>{user.role}</p> : 'student'}</td>
                                <td className="border-2 border-black" ><button className="bg-red-500   text-white px-4 py-3 rounded"><FaTrashAlt size={25} /></button></td>


                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MenageUser;
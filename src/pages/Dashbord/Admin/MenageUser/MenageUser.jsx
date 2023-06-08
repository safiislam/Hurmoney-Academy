import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";



const MenageUser = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const data = await axios.get('https://summry-camp-school-server.vercel.app/users')
            return data.data
        }
    })
    const handleMakeAdmin = (id) => {
        axios.patch(`https://summry-camp-school-server.vercel.app/users/admin/${id}`)
        .then(data=>{
            console.log(data.data)
            if(data.data.modifiedCount){
                refetch()
            }
        })

    }
    const handleInstructor = (id)=>{
        axios.patch(`https://summry-camp-school-server.vercel.app/users/instructor/${id}`)
        .then(data=>{
            if(data.data.modifiedCount){
                refetch()
            }
        })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Make admin</th>
                            <th>Make Instructor</th>
                            <th>User Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td onClick={() => handleMakeAdmin(user._id)} className="cursor-pointer">Make admin</td>
                                <td onClick={() => handleInstructor(user._id)} className="cursor-pointer">Make Instructor</td>
                                <td>{user?.role ? <p>{user.role}</p> : 'student' }</td>
                                <td><button className="bg-red-500  text-white px-4 py-3 rounded"><FaTrashAlt size={25} /></button></td>


                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MenageUser;
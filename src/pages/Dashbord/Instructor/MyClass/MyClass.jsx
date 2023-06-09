import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import axios from "axios";


const MyClass = () => {
    const { user } = useContext(AuthContext)
    const { data: instructorClass = [], refetch } = useQuery({
        queryKey: ['course', user?.email],
        queryFn: async () => {
            const res = await axios.get(`https://summry-camp-school-server.vercel.app/courses?email=${user?.email}`)
            return res.data
        }
    })
    
    return (
        <div>
            <p className="text-center text-4xl font-bold mt-5" >My class</p>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Name</th>
                                <th>Email</th>
                                <th>Total Enroll</th>
                                <th>Status</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                instructorClass.map((item,index) => <tr key={item._id} className="bg-base-200">
                                    <th>{index + 1 }</th>
                                    <td>{item.courseName}</td>
                                    <td>{item.instractorEmail}</td>
                                    <td>{item.totalEnroll}</td>
                                    <td>{item.status}</td>
                                    <td><button onClick={()=>updateClass(item._id)} className="btn btn-secondary">Update</button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClass;
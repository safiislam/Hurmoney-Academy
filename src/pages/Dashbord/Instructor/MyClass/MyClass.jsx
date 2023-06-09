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
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="bg-base-200">
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClass;
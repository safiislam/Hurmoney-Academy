import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const PaymentHistory = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure]= useAxiosSecure()

    const { data: transection = [] } = useQuery({
        queryKey: ['payment', user?.email],
        queryFn: async () => {
            const data = await axiosSecure.get(`https://summry-camp-school-server.vercel.app/payment?email=${user?.email}`)
            return data.data
        }
    })
    return (
        <div>
           <p>{transection.length}</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>enroll courses</th>
                            <th>price</th>
                            <th>Transecton id</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            transection.map((item,index) => <tr key={item._id} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item?.className?.map((i,index)=> <p key={index} > {index+1} {i}</p>)}</td>
                                <td>{item.price}</td>
                                <td>{item.transectionId}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
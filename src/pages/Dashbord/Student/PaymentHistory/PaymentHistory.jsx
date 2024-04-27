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
            <div className="">
                <table className="w-full">
                    {/* head */}
                    <thead>
                        <tr className="border-2 border-y-black" >
                            <th className="border-2 border-black">#</th>
                            <th className="border-2 border-black">Name</th>
                            <th className="border-2 border-black">enroll courses</th>
                            <th className="border-2 border-black">price</th>
                            <th className="border-2 border-black">Transecton id</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            transection.map(({name,_id,className,price,transectionId},index) => <tr key={_id} className="bg-base-200">
                                <th className="border-2 border-black">{index + 1}</th>
                                <td className="border-2 border-black">{name}</td>
                                <td className="border-2 border-black">{className?.map((i,index)=> <p key={index} > {index+1} {i}</p>)}</td>
                                <td className="border-2 border-black">{price}</td>
                                <td className="border-2 border-black">{transectionId}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
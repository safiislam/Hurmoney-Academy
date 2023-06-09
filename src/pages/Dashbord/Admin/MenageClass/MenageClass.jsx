import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";


const MenageClass = () => {
    const [id,setId]=useState('')
    const { data: pandingData = [], refetch } = useQuery({
        queryKey: ['isPanding'],
        queryFn: async () => {
            const data = await axios.get('https://summry-camp-school-server.vercel.app/isPanding')
            return data.data
        }
    })

    const handleApprove = id => {
        axios.patch(`https://summry-camp-school-server.vercel.app/approve/${id}`)
            .then(res => {
                console.log(res.data)
            })
    }
    const handleSendFeedBack = (event) =>{
        
        const feedback = event.target.text.value
        console.log(event.target.text.value)
        
        axios.patch(`http://localhost:5000/deny/${id}`,{feedback})
    }

    useEffect(() => {
        const intervel = setInterval(() => {
            refetch()
        }, 5000)
        return () => {
            clearInterval(intervel)
        }
    }, [refetch])

    return (
        <div>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#
                            </th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instruction information</th>
                            <th>Available seats</th>
                            <th>price</th>
                            <th>Status</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            pandingData.map((item, index) => <tr key={index}>
                                <th>{index + 1}</th>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.courseImg} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <th>{item.courseName}</th>
                                <td>
                                    {item.instractorName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{item.instractorEmail}</span>
                                </td>
                                <td>{item.availableSeats}</td>
                                <td>{item.price}</td>
                                <td>{item.status}</td>
                                <th>
                                    <div className="space-y-2 flex flex-col">
                                        <button onClick={() => handleApprove(item._id)} className="btn btn-ghost btn-xs">approve</button>
                                        {/* <button className="btn btn-ghost btn-xs">Deny</button> */}
                                        {/* Open the modal using ID.showModal() method */}
                                        <button className="btn btn-ghost btn-xs" onClick={() => window.my_modal_1.showModal()}>Deny</button>
                                        <dialog id="my_modal_1" className="modal">
                                            <form onSubmit={handleSendFeedBack} method="dialog" className="modal-box">
                                                <h3 className="font-bold text-lg">Write some Feed back for Class!</h3>
                                                <div className="form-control">
                                                   
                                                    <textarea className="textarea textarea-bordered h-24" name="text" placeholder="Write feedback"></textarea>
                                                    
                                                </div>
                                                <div className="modal-action">
                                                    <input type="submit" onClick={()=>setId(item._id)} className='btn btn-primary' value="Send Feedback" />
                                                    <button className="btn">Close</button>
                                                </div>
                                            </form>
                                        </dialog>
                                    </div>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MenageClass;
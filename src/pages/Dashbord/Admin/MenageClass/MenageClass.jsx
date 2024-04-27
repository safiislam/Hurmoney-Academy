import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState, Fragment } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Dialog, Transition } from '@headlessui/react'
import { MdCancel } from "react-icons/md";




const MenageClass = () => {
    const [id, setId] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [feedBack, setFeedBack] = useState('')
    const [axiosSecure] = useAxiosSecure()
    const { data: pandingData = [], refetch } = useQuery({
        queryKey: ['isPanding'],
        queryFn: async () => {
            const data = await axiosSecure.get('/isPanding')
            return data.data
        }
    })

    const handleApprove = id => {
        axios.patch(`https://summry-camp-school-server.vercel.app/approve/${id}`)
            .then(res => {
                console.log(res.data)
                refetch()
            })
    }
    const handleSendFeedBack = (ids) => {
        axios.patch(`https://summry-camp-school-server-5d15zlx4l-safiislam.vercel.app/deny/${ids}`, { feedBack })
        .then(res=>{
            if(res.data){
                refetch()
            }
        })
        // axios.patch(`http://localhost:5000/deny/${ids}`, { feedBack })
        setIsOpen(false)

    }
    console.log(pandingData);

    useEffect(() => {
        const intervel = setInterval(() => {
            refetch()
        }, 5000)
        return () => {
            clearInterval(intervel)
        }
    }, [refetch])
    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = (id) => {
        setIsOpen(true)
        setId(id)
    }

    return (
        <div>
            <div className=" ">
                <table className="w-full">
                    {/* head */}
                    <thead>
                        <tr className="border-2 border-black">
                            <th className="border-2 border-black">#
                            </th>
                            <th className="border-2 border-black">Image</th>
                            <th className="border-2 border-black">Class Name</th>
                            <th className="border-2 border-black">Instruction information</th>
                            <th className="border-2 border-black">Available seats</th>
                            <th className="border-2 border-black">price</th>
                            <th className="border-2 border-black">Status</th>
                            <th className="border-2 border-black">action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            pandingData.map((item, index) => <tr key={index}>
                                <th className="border-2 border-black">{index + 1}</th>

                                <td className="border-2 border-black">
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.courseImg} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <th className="border-2 border-black">{item.courseName}</th>
                                <td className="border-2 border-black">
                                    {item.instractorName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{item.instractorEmail}</span>
                                </td>
                                <td className="border-2 border-black">{item.availableSeats}</td>
                                <td className="border-2 border-black">{item.price}</td>
                                <td className="border-2 border-black">{item.status}</td>
                                <th className="border-2 border-black">
                                    <div className="space-y-2 flex flex-col">
                                        <button onClick={() => handleApprove(item._id)} className="btn btn-ghost btn-xs">approve</button>
                                        {/* <button className="btn btn-ghost btn-xs">Deny</button> */}
                                        {/* Open the modal using ID.showModal() method */}
                                        <button
                                            type="button"
                                            onClick={() => openModal(item._id)}
                                            className={` rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                                        >
                                            FeedBack
                                        </button>

                                    </div>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>Feed Back</span>
                                            <span onClick={closeModal} className="cursor-pointer" ><MdCancel className="text-xl text-red-400" /></span>
                                        </div>
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <textarea defaultValue={feedBack} onChange={(e) => setFeedBack(e.target.value)} name="text" placeholder={'Enter Your Feed Back'} className="w-full ps-2 border-2 border-black" rows={5} ></textarea>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="submit"
                                            className={`${feedBack == '' ? 'hidden' : ''}  justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                                            onClick={() => handleSendFeedBack(id)}
                                        >
                                            Send Feed Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </div>
    );
};

export default MenageClass;
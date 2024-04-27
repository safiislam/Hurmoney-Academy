import { Link } from "react-router-dom";
import useInstractorClass from "../../../../hooks/useInstractorClass";
import { useEffect, Fragment, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { MdCancel } from "react-icons/md";



const MyClass = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [feedBackData, setFeedBackData] = useState({})
    const [instructorClass, refetch] = useInstractorClass()
    console.log(feedBackData);
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

    const openModal = (data) => {
        setIsOpen(true)
        setFeedBackData(data)
    }


    return (
        <div>
            <p className="text-center text-4xl font-bold mt-5" >My class</p>
            <div>
                <div className="">
                    <table className="w-full text-center">

                        <thead>
                            <tr className="border-2 border-black">
                                <th className="border-2 border-black">#</th>
                                <th className="border-2 border-black">Class Name</th>
                                <th className="border-2 border-black">Email</th>
                                <th className="border-2 border-black">Total Enroll</th>
                                <th className="border-2 border-black">Status</th>
                                <th className="border-2 border-black">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                instructorClass.map((item, index) => <tr key={item._id} className="bg-base-200">
                                    <th className="border-2 border-black" >{index + 1}</th>
                                    <td className="border-2 border-black">{item.courseName}</td>
                                    <td className="border-2 border-black">{item.instractorEmail}</td>
                                    <td className="border-2 border-black">{item.totalEnroll}</td>
                                    <td className="flex flex-col gap-3 items-center border-b-2 border-black"><span>{item.status}</span> {item.status === 'deny' && <><button
                                        type="button"
                                        onClick={() => openModal(item)}
                                        className={` rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                                    >
                                        FeedBack
                                    </button>
                                        <dialog id="my_modal_1" className="modal">
                                            <form method="dialog" className="modal-box">
                                                <h3 className="font-bold text-lg">See Feedback</h3>
                                                <p className="py-4">{item.feedback}</p>
                                                <div className="modal-action">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn">Close</button>
                                                </div>
                                            </form>
                                        </dialog>
                                    </>} </td>
                                    <td className="border-2 border-black"><Link to={`/dashbord/updateClass/${item._id}`}><button className="btn btn-secondary">Update</button></Link></td>
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
                                            FeedBack:{feedBackData?.feedback}
                                        </div>

                                        
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </div>
    );
};

export default MyClass;
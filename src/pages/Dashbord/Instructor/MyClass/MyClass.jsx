import { Link } from "react-router-dom";
import useInstractorClass from "../../../../hooks/useInstractorClass";
import { useEffect } from "react";




const MyClass = () => {

    const [instructorClass, refetch] = useInstractorClass()
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
                                instructorClass.map((item, index) => <tr key={item._id} className="bg-base-200">
                                    <th>{index + 1}</th>
                                    <td>{item.courseName}</td>
                                    <td>{item.instractorEmail}</td>
                                    <td>{item.totalEnroll}</td>
                                    <td className="flex flex-col gap-3 items-center"><span>{item.status}</span> {item.status === 'deny' && <><button className="btn btn-error btn-xs" onClick={() => window.my_modal_1.showModal()}>feedback</button>
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
                                    <td><Link to={`/dashbord/updateClass/${item._id}`}><button className="btn btn-secondary">Update</button></Link></td>
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
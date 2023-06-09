import { FaTrashAlt } from "react-icons/fa";
import useBooking from "../../../../hooks/useBooking";
import axios from "axios";
import Swal from "sweetalert2";



const MyBookings = () => {
    const [bookings, refetch] = useBooking()
    const total = bookings.reduce((sum, item) => sum + item.price, 0)
    const handleDelate = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://summry-camp-school-server.vercel.app/classBookings/${id}`)
                    .then(data => {
                        console.log(data.data)
                        if (data.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                        }

                    })
                
            }
        })

        
    }
    return (
        <div className="mt-10 px-5">
            <div className="flex justify-between">
                <p className="text-3xl font-bold">Total Books:{bookings.length}  </p>
                <p className="text-xl font-bold">Total price: {total}  </p>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-base-300">
                        <tr>
                            <th>#</th>
                            <th> Course Name</th>
                            <th>price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.courseName}</td>
                                <td>{item.price}</td>
                                <td><button onClick={() => handleDelate(item._id)} className="btn bg-red-500"><FaTrashAlt size={20} /></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;
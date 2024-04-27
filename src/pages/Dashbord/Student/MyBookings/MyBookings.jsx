import { FaTrashAlt } from "react-icons/fa";
import useBooking from "../../../../hooks/useBooking";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const MyBookings = () => {
    const [bookings, refetch] = useBooking()
   
    console.log(bookings)
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
                <Link to='/dashbord/payment'><button  className="px-6 py-2 text-sm transition-colors duration-300  shadow-xl text-violet-100 bg-violet-500 hover:bg-violet-600 shadow-violet-400" >payment</button></Link>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    {/* head */}
                    <thead className="border-2 border-black">
                        <tr>
                            <th className="border-2 border-black">#</th>
                            <th className="border-2 border-black"> Course Name</th>
                            <th className="border-2 border-black">price</th>
                            <th className="border-2 border-black">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(({_id,courseName,price}, index) => <tr key={_id}>
                                <th className="border-2 border-black">{index + 1}</th>
                                <td className="border-2 border-black text-center">{courseName}</td>
                                <td className="border-2 border-black text-center">{price}</td>
                                <td className="border-2 border-black text-center"><button onClick={() => handleDelate(_id)} className="text-white px-3 rounded-md  py-3 bg-red-500"><FaTrashAlt size={20} /></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;
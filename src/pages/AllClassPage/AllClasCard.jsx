/* eslint-disable react/prop-types */

import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";



const AllClasCard = ({ item,isButtonDisabled }) => {
    const { user } = useContext(AuthContext)
   
    const { courseImg, courseName, availableSeats, totalEnroll, price, instractorName, instractorEmail, _id } = item


    const handleEnrole = () => {

        const date = new Date()
        const bookingData = { name: user?.displayName, email: user?.email, courseId: _id, price, courseName, date }
        axios.post('https://summry-camp-school-server.vercel.app/classBookings', bookingData)
            .then(date => {

                if (date.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'your course booked successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }


            })
    }
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <div className="relative">
                    <p className="bg-black text-white inline-block absolute px-3 rounded">price: {price}</p>
                    <figure><img className="h-[300px] w-full rounded-b" src={courseImg} alt="class img" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{courseName}</h2>

                    <div className="flex ">
                        <p>Avilabele {availableSeats}</p>
                        <p>Enroll : {totalEnroll}</p>
                    </div>
                    <div>
                        <p>Instractior : {instractorName}</p>
                        <p>Instractior Email: {instractorEmail} </p>
                    </div>

                    <div className="card-actions justify-end">
                        <button disabled={isButtonDisabled} onClick={handleEnrole} className="btn btn-primary">Enroll</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllClasCard;
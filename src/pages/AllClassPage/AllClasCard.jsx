/* eslint-disable react/prop-types */

import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";



const AllClasCard = ({ item, isButtonDisabled }) => {
    const [axiosSecure] = useAxiosSecure()
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    const { courseImg, courseName, availableSeats, totalEnroll, price, instractorName, instractorEmail, _id } = item


    const handleEnrole = () => {

        if (user) {
            const date = new Date()
            const bookingData = { name: user?.displayName, email: user?.email, courseId: _id, price, courseName, date }
            axiosSecure.post('https://summry-camp-school-server-b6uo21w9s-safiislam.vercel.app/classBookings', bookingData)
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
        else {
            Swal.fire({
                title: "Go To Login page",
                // text: "Are you Login ",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            });
        }
    }
    return (
        <div>

            <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                {/* <h3 className="mb-3 text-xl font-bold text-indigo-600">Beginner Friendly</h3> */}
                <div className="relative">
                    <img className="w-full rounded-xl h-72" src={courseImg} alt="Colors" />
                    <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">${price}</p>
                </div>
                <div className="flex gap-2 my-3 border-b-2 pb-2 ">
                    <p className="bg-slate-300 py-1 px-2 rounded-md" >Enroll: {totalEnroll}</p>
                    <p className="bg-slate-300 py-1 px-2 rounded-md">Available: {availableSeats} </p>
                </div>
                <h1 className="text-gray-800 text-2xl font-bold cursor-pointer">{courseName}</h1>
                <div className="my-4">
                    <div>
                        <p>Instractor Name : {instractorName}</p>
                    </div>
                    {
                        isButtonDisabled ? <span></span> : <button onClick={handleEnrole} className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Enroll</button>
                    }
                </div>
            </div>

        </div>
    );
};

export default AllClasCard;
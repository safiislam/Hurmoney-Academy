/* eslint-disable react/prop-types */

import { useContext } from "react";
import { DarkModeContext } from "../AuthProvider/DarkModeProvider";


const Card = ({ itmes }) => {
    const {darkMode}= useContext(DarkModeContext)
    const { courseImg, courseName, availableSeats, totalEnroll, price } = itmes
    return (
        <div >
            <div className={`card w-full ${darkMode ?'bg-black text-white border rounded border-white': 'bg-base-100 text-black' }  shadow-xl`}>
                <div className="card-body">
                    <h2 className="card-title">{courseName}</h2>
                    <div className="flex ">
                        <p>Avilabele {availableSeats}</p>
                        <p>Enroll : {totalEnroll}</p>
                    </div>
                </div>
                <div className="relative">
                    <p className="bg-black text-white inline-block absolute px-3 rounded">price: {price}</p>
                    <figure><img className="h-[300px] w-full rounded-b" src={courseImg} alt="Shoes" /></figure>

                </div>
            </div>
        </div>
    );
};

export default Card;
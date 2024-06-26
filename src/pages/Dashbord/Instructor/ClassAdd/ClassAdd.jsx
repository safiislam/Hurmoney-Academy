import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";



const ClassAdd = () => {
    const { user } = useContext(AuthContext)
    const url = `https://api.imgbb.com/1/upload?&key=${import.meta.env.VITE_IMG_API_KEY}`
    const { register, handleSubmit,reset  } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        console.log(data.image[0])
        
        console.log(data)
        const date =new Date()
        const formData = new FormData()
        formData.append('image', data.image[0])
        const response = await axios.post(url,formData)
        console.log(response);
        if(response.data.success){
            const imageUrl = response.data.data.display_url
            const {courseName,instractorName,instractorEmail,price,availableSeats}=data
            const itemData = {courseName,instractorName,instractorEmail,price,availableSeats: parseInt(availableSeats),totalEnroll : 0,courseImg:imageUrl,status:'pending',date }
            console.log(itemData)
            axios.post('https://summry-camp-school-server.vercel.app/course',itemData)
            .then(data=>{
                console.log(data.data)
                if(data.data.insertedId){
                    reset()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Class is Add',
                        showConfirmButton: false,
                        timer: 1500
                      })

                }
            })
            

        }
        
    };


    return (
        <div className="px-16 mt-10">
            <p className="text-center font-bold text-4xl">Add Class</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full  ">
                    <label className="text-sm font-semibold text-gray-600">
                        <span className="label-text">Class Name</span>
                    </label>
                    <input type="text" placeholder="Type here" {...register("courseName")} className="w-full px-3 py-2 mt-1 border-2 border-gray-500 rounded-md focus:outline-none focus:border-black "/>

                </div>
                <div className="form-control w-full ">
                    <label className="text-sm font-semibold text-gray-600">
                        <span className="label-text">Instructor Name</span>
                    </label>
                    <input type="text" placeholder="Type here" value={user?.displayName} {...register("instractorName")} className="w-full px-3 py-2 mt-1 border-2 border-gray-500 rounded-md focus:outline-none focus:border-black " />

                </div>
                <div className="form-control w-full ">
                    <label className="text-sm font-semibold text-gray-600">
                        <span className="label-text">Instructor Email</span>
                    </label>
                    <input type="text" placeholder="Type here" value={user?.email} {...register("instractorEmail")} className="w-full px-3 py-2 mt-1 border-2 border-gray-500 rounded-md focus:outline-none focus:border-black "/>

                </div>
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="form-control w-full ">
                        <label className="text-sm font-semibold text-gray-600">
                            <span className="label-text">Available seats</span>
                        </label>
                        <input type="number" placeholder="Type here" {...register("availableSeats")} className="w-full px-3 py-2 mt-1 border-2 border-gray-500 rounded-md focus:outline-none focus:border-black "/>

                    </div>
                    <div className="form-control w-full ">
                        <label className="text-sm font-semibold text-gray-600">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="Type here" {...register("price")} className="w-full px-3 py-2 mt-1 border-2 border-gray-500 rounded-md focus:outline-none focus:border-black "/>

                    </div>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="text-sm font-semibold text-gray-600">
                        <span className="label-text">Class Image</span>
                    </label>
                    <input type="file" {...register("image")} className="file-input file-input-bordered w-full max-w-xs" />

                </div>
                <div className="text-center">
                    <input className="bg-[#7B3AED] px-3 py-2 font-semibold rounded-md text-white cursor-pointer" type="submit" value="Add Class" />
                </div>
            </form>

        </div>
    );
};

export default ClassAdd;
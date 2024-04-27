import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash, } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialMediaLogin from "../../components/SocialMediaLogin";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import AnimationImg from "../../Shared/AnimationImg";

const Login = () => {
    const { logIn,user } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    useEffect(()=>{
        if(user){
            navigate(from)
        }
    },[from,navigate,user])
    const onSubmit = data => {
        logIn(data.email, data.password)
            .then(result => {
                // const users = result.user
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err)
            })
    };
    return (
        <div>
            <div className="min-h-screen mt-24">
                <div className="grid grid-cols-2 place-items-center">
                    <div className="">
                        <AnimationImg />
                    </div>
                    <div className="relative  sm:max-w-xl sm:mx-auto">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                        </div>
                        <div className="relative px-16  bg-white shadow-lg sm:rounded-3xl  py-8">
                            <div className="max-w-md mx-auto">

                                <div className=" divide-gray-200">
                                    <div className="  text-base  text-gray-700 sm:text-lg">
                                        {/* <div> */}
                                        {/* </div> */}
                                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                            <h1 className="text-2xl font-semibold">Login Form </h1>
                                            <div className="relative">
                                                <input type="Email" required {...register("email")} className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                                <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                            </div>
                                            <div className="relative">
                                                <input id="password" type={show ? 'password' : 'text'} {...register("password")} required className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                                <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                                <button className="absolute top-1 right-3" onClick={() => setShow(!show)}>{!show ? <FaRegEye size={25} /> : <FaRegEyeSlash size={25} />}</button>
                                            </div>
                                            <div className="relative text-center pt-3">
                                                <button href="#_" className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
                                                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                                    <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Login Here</span>
                                                </button>
                                            </div>
                                            <div className="pt-4 text-center">
                                                <div>
                                                    New here? <Link to='/register' className="underline">Create a New Account</Link>
                                                </div>
                                                <div className="divider">Or sign in with</div>
                                                <SocialMediaLogin />
                                            </div>
                                        </form>
                                        <div className="-pt-20">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
{/* <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" required {...register("email")} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={show ? 'password' : 'text'} {...register("password")} required placeholder="password" className="input input-bordered w-full flex-grow" />
                                    <button className="absolute top-3 right-3" onClick={() => setShow(!show)}>{!show ? <FaRegEye size={25} /> : <FaRegEyeSlash size={25} />}</button>
                                </div>

                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <div>
                                <div>
                                    New here? <Link to='/register' className="underline">Create a New Account</Link>
                                </div>
                                <div className="divider">Or sign in with</div>
                                <SocialMediaLogin />
                            </div>
                        </form> */}
import { useForm } from "react-hook-form";
import SocialMediaLogin from "../../components/SocialMediaLogin";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import AnimationImg from "../../Shared/AnimationImg";
import { LuEye, LuEyeOff } from "react-icons/lu";
import getImageIlink from "../../utils/getImageIlink";

const Register = () => {
    const { signIn, updatePro } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = data => {

        const { email, password, url } = data

        signIn(email, password)
            .then(result => {
                const user = result.user
                if (user) {
                    getImageIlink(url)
                        .then(link => {

                            axios.post('https://summry-camp-school-server.vercel.app/users', { name: data.name, email: email, url: link })
                            updatePro({ name: data.name, url: link })
                                .then(() => {
                                    navigate('/')
                                })
                                .catch(err => console.log(err))
                        })
                }
            })
            .catch(err => {
                console.log(err)
            })
    };
    return (
        <div>
            <div className=" min-h-screen">
                <div className=" grid grid-cols-2 place-items-center  ">
                    <div className="">
                        {/* <h1 className="text-5xl font-bold">Registation now!</h1> */}
                        <AnimationImg />
                    </div>
                    <div className="  w-full" >
                        <form onSubmit={handleSubmit(onSubmit)} className="  rounded-lg p-8  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                            <div className="">
                                <label className="mb-3">
                                    <span className="text-black text-lg font-semibold ">Name</span>
                                </label>
                                <input type="text" placeholder="Name" required {...register("name")} className=" w-full rounded-lg ps-2 border-2 border-black shadow-md focus:outline-2 focus:outline-dotted   focus:border-none h-[35px]" />
                            </div>
                            <div className="">
                                <label className="text-black text-lg font-semibold  my-3">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" required {...register("email")} className="w-full rounded-lg ps-2 border-2 border-black shadow-md focus:outline-2 focus:outline-dotted   focus:border-none h-[35px]" />
                            </div>
                            <div >
                                <label className="text-black text-lg font-semibold  my-3">
                                    <span className="label-text">Password</span>
                                </label>

                                <div className="relative">
                                    <input type={isOpen ? "text" : 'password'} required placeholder="password" {...register("password", {
                                        required: true, minLength: {
                                            value: 6,
                                            message: "Password should be at least 6 characters long."
                                        },
                                        pattern: {
                                            value: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*[!@#$%^&*]).*$/,
                                            message: "Password must contain at least 1 UpperCase letter and 1 number and at least one special character. "
                                        }

                                    })} className="w-full rounded-lg ps-2 border-2 border-black shadow-md focus:outline-2 focus:outline-dotted   focus:border-none h-[35px]" />
                                    <span onClick={() => setIsOpen(!isOpen)} className="absolute top-[9px] text-xl cursor-pointer right-2">
                                        {
                                            isOpen ? <LuEye /> : <LuEyeOff />
                                        }
                                    </span>
                                </div>
                                {errors.password && <span className="text-red-600">{errors.password.message}</span>}


                            </div>
                            <div className="">
                                <label className="text-black text-lg font-semibold  my-3">
                                    <span className="label-text">Confirm Password</span>
                                </label>

                                <input type='password' {...register('confirmPassword', { validate: value => value === password.current || 'password do not match' })} required placeholder="Confirm Password" className=" w-full rounded-lg ps-2 border-2 border-black shadow-md focus:outline-2 focus:outline-dotted   focus:border-none h-[35px]" />
                                {errors.confirmPassword && <span className="text-red-600">{errors.confirmPassword.message}</span>}

                            </div>
                            <div className="">
                                <label className="text-black text-lg font-semibold  my-3">
                                    <span className="label-text">photo</span>
                                </label>
                                <input type="file" placeholder="photoUrl" required {...register("url")} className="input input-bordered" />
                            </div>
                            <div className=" text-center mt-6">

                                <button href="#_" className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
                                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                    <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Login Here</span>
                                </button>
                            </div>
                            <div className="text-center">
                                <div className="py-3">
                                    Already registered? <Link to='/login' className="underline"> Go to log in</Link>
                                </div>
                                <div className="pb-3 ">Or sign in with</div>
                                <SocialMediaLogin />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
{/* <form onSubmit={handleSubmit(onSubmit)} className="card-body">
    <div className="form-control">
        <label className="label">
            <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="name" required {...register("name")} className="" />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Email</span>
        </label>
        <input type="text" placeholder="email" required {...register("email")} className="input input-bordered" />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Password</span>
        </label>

        <input type='password' required placeholder="password" {...register("password", {
            required: true, minLength: {
                value: 6,
                message: "Password should be at least 6 characters long."
            },
            pattern: {
                value: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*[!@#$%^&*]).*$/,
                message: "Password must contain at least 1 UpperCase letter and 1 number and at least one special character. "
            }

        })} className="input input-bordered w-full flex-grow" />
        {errors.password && <span className="text-error">{errors.password.message}</span>}


    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Confirm Password</span>
        </label>

        <input type='password' {...register('confirmPassword', { validate: value => value === password.current || 'password do not match' })} required placeholder="password" className="input input-bordered w-full flex-grow" />
        {errors.confirmPassword && <span className="text-error">{errors.confirmPassword.message}</span>}

    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">photo url</span>
        </label>
        <input type="text" placeholder="photoUrl" required {...register("url")} className="input input-bordered" />
    </div>
    <div className="form-control mt-6">

        <input className="btn btn-primary" type="submit" value="Login" />
    </div>
    <div>
        <div>
            Already registered? <Link to='/login' className="underline"> Go to log in</Link>
        </div>
        <div className="divider">Or sign in with</div>
        <SocialMediaLogin />
    </div>
</form> */}
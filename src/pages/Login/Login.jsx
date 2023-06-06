import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash,  } from "react-icons/fa";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [show,setShow] = useState(false)
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                                <div className="flex gap-2">
                                    <input type={show ? 'password' : 'text'} required placeholder="password" className="input input-bordered flex-grow" />
                                    <button onClick={()=>setShow(!show)}>{ !show ? <FaRegEye size={25} /> : <FaRegEyeSlash size={25} />}</button>
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
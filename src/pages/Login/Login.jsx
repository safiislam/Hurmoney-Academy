import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash, } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialMediaLogin from "../../components/SocialMediaLogin";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const {logIn} = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const onSubmit = data => {
        logIn(data.email,data.password)
        .then(result=>{
            const user= result.user
            navigate(from, { replace: true }); 
        })
        .catch(err=>{
            console.log(err)
        })
    };
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
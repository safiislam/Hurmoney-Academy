import { useForm } from "react-hook-form";
import SocialMediaLogin from "../../components/SocialMediaLogin";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Registation now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" required {...register("email")} className="input input-bordered" />
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
                                        value:/^(?=.*?[a-z])(?=.*?[0-9]).*$/,
                                        message: "Password must contain at least 1 lowercase letter and 1 number."
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
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <div>
                                <div>
                                    New here? <Link to='/login' className="underline">Create a New Account</Link>
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

export default Register;
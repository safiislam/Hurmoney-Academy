/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { FaGooglePlusG } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const SocialMediaLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user
                const userData = { name: user.displayName, email: user.email, url: user.photoURL }
                axios.post('https://summry-camp-school-server.vercel.app/users', userData)

                navigate(from, { replace: true })
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="text-center">
            {/* <button  className="btn btn-circle btn-outline">
                <FaGooglePlusG size={25} />
            </button> */}
            <button onClick={handleGoogleSignIn} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                <div className="relative flex items-center space-x-10 justify-center">
                    <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                </div>
            </button>

        </div>
    );
};

export default SocialMediaLogin;
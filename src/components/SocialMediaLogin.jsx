/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { FaGooglePlusG } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialMediaLogin = () => {
    const {googleSignIn}= useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then((result)=>{
            const user =  result.user 
            navigate(from,{replace:true})
        })
        .catch(err=>console.log(err))
    }
    return (
        <div className="text-center">
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                <FaGooglePlusG size={25}/>
            </button>

        </div>
    );
};

export default SocialMediaLogin;
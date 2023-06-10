/* eslint-disable react/prop-types */
import { useContext } from "react";
import useUserRole from "../hooks/useUserRole";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const InstructorRoutes = ({children}) => {
    const [userData,isLoading] = useUserRole()
    const {user,loader} = useContext(AuthContext)
    const location = useLocation()
    const isInstractor = userData.role === 'instructor'
    const isAdmin = userData.role === 'admin'
    if(loader || isLoading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user || isInstractor || isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from :location }} replace/>
};

export default InstructorRoutes;
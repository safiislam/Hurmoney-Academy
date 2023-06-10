/* eslint-disable react/prop-types */
import { useContext } from "react";
import useUserRole from "../hooks/useUserRole";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoutes = ({children}) => {
    const [userData,isLoading] = useUserRole()
    const {user,loader} = useContext(AuthContext)
    const location = useLocation()
    const isAdmin = userData.role === 'admin'
    if(loader || isLoading){
        return <div className="h-screen absolute top-1/2 left-1/2 " > <span className="  loading loading-bars loading-lg"></span></div>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from : location}} replace />
};

export default AdminRoutes;
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoutes = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    const location = useLocation()
    if(loader){
        return <span className="loading loading-bars loading-lg"></span>
    } 
    if(user){
        return children
    }
    return <Navigate to={'/login'} state={{from:location}} replace />

};

export default PrivetRoutes;
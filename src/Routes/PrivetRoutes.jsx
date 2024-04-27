/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingComponent from "../components/LoadingComponent/LoadingComponent";


const PrivetRoutes = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    console.log(loader)
    const location = useLocation()
    if(loader){
        return <LoadingComponent />
    } 
    if(user){
        return children
    }
    return <Navigate to={'/login'} state={{from:location}} replace />

};

export default PrivetRoutes;
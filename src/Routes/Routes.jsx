import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";



export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayOut />,
        children:[
            {
                path:'/',
                element: <Home />
            },
            
        ]
    },
    {
        path:'/login',
        element:<Login />
    }
])
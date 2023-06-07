import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";



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
    },
    {
        path:'/register',
        element:<Register />
    }
])
import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashbordLayout from "../Layout/DashbordLayout";
import MenageClass from "../pages/Dashbord/Admin/MenageClass/MenageClass";
import MenageUser from "../pages/Dashbord/Admin/MenageUser/MenageUser";
import ClassAdd from "../pages/Dashbord/Instructor/ClassAdd/ClassAdd";
import MyClass from "../pages/Dashbord/Instructor/MyClass/MyClass";
import UpdateClass from "../pages/Dashbord/Instructor/MyClass/UpdateClass";
import AllClassPage from "../pages/AllClassPage/AllClassPage";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path:'allClass',
                element: <AllClassPage />
            }

        ]
    },
    {
        path: 'dashbord',
        element: <DashbordLayout />,
        children: [
            // instructor 
            {
                path:'addClass',
                element: <ClassAdd />
            },
            {
                path:'myClass',
                element: <MyClass />
            },
            {
                path:'updateClass/:id',
                element: <UpdateClass />
            },

            // admnin
            {
                path:'menageClass',
                element: <MenageClass />
            },
            {
                path:'menageUser',
                element: <MenageUser />
            }
        ]
    }
])
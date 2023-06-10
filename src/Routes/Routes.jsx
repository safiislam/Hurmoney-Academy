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
import MyBookings from "../pages/Dashbord/Student/MyBookings/MyBookings";
import Payment from "../pages/Dashbord/Student/Payment/Payment";
import PaymentHistory from "../pages/Dashbord/Student/PaymentHistory/PaymentHistory";
import InstructorPage from "../pages/InstructorPage/InstructorPage";
import Dashbord from "../pages/Dashbord/Dashbord";
import PrivetRoutes from "./PrivetRoutes";
import AdminRoutes from "./AdminRoutes";
import InstructorRoutes from "./InstructorRoutes";



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
            },
            {
                path:'instructor',
                element: <InstructorPage />
            }

        ]
    },
    {
        path: '/dashbord',
        element: <PrivetRoutes><DashbordLayout /></PrivetRoutes>,
        children: [
            // sutdent deshbord 
            {
                path:"all",
                element: <PrivetRoutes><Dashbord /></PrivetRoutes>
            },
            {
                path:'myBooking',
                element:<PrivetRoutes><MyBookings /></PrivetRoutes>
            },
            {
                path:'payment',
                element: <PrivetRoutes><Payment /></PrivetRoutes>
            },
            {
                path:'paymentHistory',
                element:<PrivetRoutes><PaymentHistory /></PrivetRoutes>
            },
            // instructor 
            {
                path:'addClass',
                element: <InstructorRoutes><ClassAdd /></InstructorRoutes>
            },
            {
                path:'myClass',
                element: <InstructorRoutes><MyClass /></InstructorRoutes>
            },
            {
                path:'updateClass/:id',
                element: <InstructorRoutes><UpdateClass /></InstructorRoutes>
            },

            // admnin
            {
                path:'menageClass',
                element: <AdminRoutes><MenageClass /></AdminRoutes>
            },
            {
                path:'menageUser',
                element: <AdminRoutes><MenageUser /></AdminRoutes>
            }
        ]
    }
])
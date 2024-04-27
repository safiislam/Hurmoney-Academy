import { NavLink, Outlet } from "react-router-dom";
import { RiAdminLine } from 'react-icons/ri'
import { FaBook, FaHome, FaSchool } from "react-icons/fa";
import useUserRole from "../hooks/useUserRole";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const DashbordLayout = () => {
    const { user } = useContext(AuthContext)
    const [userData] = useUserRole(user)
    const homeRouter = [
        {
            id: '1',
            path: "/",
            title: "Home",
            logo: FaHome
        },
        {
            id: '2',
            path: "/allClass",
            title: "All Class",
            logo: FaBook
        },
        {
            id: '3',
            path: "/instructor",
            title: "All instructor",
            logo: FaSchool
        },
    ]
    return (
        <div className="flex">
            <div className="w-[25%] relative bg-yellow-500 rounded-e-lg  h-screen ">
                <ul className=" text-center pt-5">
                    {/* Sidebar content here */}
                    {
                        userData.role === 'admin' ? (
                            <>
                                <p className="text-xl font-bold  items-center justify-center gap-2 flex mb-10"> <RiAdminLine size={30} /> <span>Admin Dashbord</span></p>
                                <li><NavLink className={({ isActive }) =>
                                    isActive
                                        ? "text-white"
                                        : ""
                                }
                                    to='/dashbord/menageClass'>Menage Classes</NavLink></li>
                                <li><NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-white"
                                            : ""
                                    }
                                    to='/dashbord/menageUser'>Manage Users</NavLink></li>
                            </>
                        ) :
                            userData.role === 'instructor' ? (
                                <>
                                    <p className="text-xl font-bold  items-center justify-center gap-2 flex mb-10"> <RiAdminLine size={30} /> <span>Instructor Dashbord</span></p>
                                    <li><NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-white"
                                                : ""
                                        }
                                        to='/dashbord/addClass'>Add Class</NavLink></li>
                                    <li><NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-white"
                                                : ""
                                        }
                                        to='/dashbord/myClass'>My Class</NavLink></li>
                                </>
                            ) :
                                <>
                                    <p className="text-xl font-bold  items-center justify-center gap-2 flex mb-10"> <RiAdminLine size={30} /> <span>Student Dashbord</span></p>
                                    <li><NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-white"
                                                : ""
                                        }
                                        to='/dashbord/myBooking'>My bookings class</NavLink></li>
                                    <li><NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-white"
                                                : ""
                                        }
                                        to='/dashbord/paymentHistory'>payment History</NavLink></li>
                                </>


                    }
                    {/* <li ><NavLink to='/' className="flex items-center justify-center"><FaHome /> <span>Home</span></NavLink></li>
                    <li><NavLink to={'/allClass'} className="flex items-center justify-center" > <FaBook /> All Class</NavLink></li>
                    <li><NavLink to={'/instructor'}><FaSchool /> All instructor</NavLink></li> */}

                </ul>
                <div className="absolute bottom-5 ps-10 ">
                    <li className="list-none">
                        {
                            homeRouter.map(({ path, title, logo: NavLogo }, index) => <NavLink className="flex items-center  gap-4" key={index} to={path}> <NavLogo /> {title}  </NavLink>)
                        }
                    </li>
                </div>
            </div>
            <div className="w-[75%]">
                <Outlet />
            </div>
        </div>
    );
};

export default DashbordLayout;
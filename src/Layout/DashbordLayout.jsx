import { NavLink, Outlet } from "react-router-dom";
import Container from "../components/Container";
import { RiAdminLine } from 'react-icons/ri'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const DashbordLayout = () => {
    const{user} = useContext(AuthContext)
    const { data:userData=[] } = useQuery({
        queryKey: ['userRole',user?.email],
        queryFn: async () =>{
            const data = await axios.get(`https://summry-camp-school-server.vercel.app/userRole?email=${user?.email}`)
            return data.data
        }
     })
     console.log(userData)
     console.log(user?.email)
    return (
        <Container>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  w-full">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu navLinks p-4 w-80 h-full  text-base-content bg-blue-400 ">
                        {/* Sidebar content here */}
                        {
                            userData.role === 'admin' ? (
                                <>
                                    <p className="text-xl font-bold  items-center justify-center gap-2 flex mb-10"> <RiAdminLine size={30} /> <span>Admin Dashbord</span></p>
                                    <li><NavLink to='/dashbord/menageClass'>Menage Classes</NavLink></li>
                                    <li><NavLink to='/dashbord/menageUser'>Manage Users</NavLink></li>
                                </>
                            ) :
                                userData.role === 'instructor' ? (
                                    <>
                                        <p className="text-xl font-bold  items-center justify-center gap-2 flex mb-10"> <RiAdminLine size={30} /> <span>Instructor Dashbord</span></p>
                                        <li><NavLink to='/dashbord/addClass'>Add Class</NavLink></li>
                                        <li><NavLink to='/dashbord/myClass'>My Class</NavLink></li>
                                    </>
                                ) :
                                    <>
                                        <p className="text-xl font-bold  items-center justify-center gap-2 flex mb-10"> <RiAdminLine size={30} /> <span>Student Dashbord</span></p>
                                        <li><NavLink to='/dashbord/myBooking'>My bookings class</NavLink></li>
                                        <li><NavLink to='/dashbord/paymentHistory'>payment History</NavLink></li>
                                    </>


                        }
                    </ul>

                </div>
            </div>
        </Container>
    );
};

export default DashbordLayout;
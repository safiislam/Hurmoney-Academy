import { NavLink, Outlet } from "react-router-dom";
import Container from "../components/Container";
import { RiAdminLine } from 'react-icons/ri'

const DashbordLayout = () => {
    const isAdmin = false
    const isInstructor = false

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
                            isAdmin ? (
                                <>
                                    <p className="text-xl font-bold  items-center justify-center gap-2 flex mb-10"> <RiAdminLine size={30} /> <span>Admin Dashbord</span></p>
                                    <li><NavLink to='/dashbord/menageClass'>Menage Classes</NavLink></li>
                                    <li><NavLink to='/dashbord/menageUser'>Manage Users</NavLink></li>
                                </>
                            ) :
                                isInstructor ? (
                                    <>
                                        <p className="text-xl font-bold  items-center justify-center gap-2 flex mb-10"> <RiAdminLine size={30} /> <span>Instructor Dashbord</span></p>
                                        <li><NavLink to='/dashbord/addClass'>Add Class</NavLink></li>
                                        <li><NavLink to='/dashbord/myClass'>My Class</NavLink></li>
                                    </>
                                ) :
                                    <>
                                        <p className="text-xl font-bold  items-center justify-center gap-2 flex mb-10"> <RiAdminLine size={30} /> <span>Student Dashbord</span></p>
                                        <li><NavLink to='/dashbord/myBooking'>My bookings class</NavLink></li>
                                    </>


                        }
                    </ul>

                </div>
            </div>
        </Container>
    );
};

export default DashbordLayout;
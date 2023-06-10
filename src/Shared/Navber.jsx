import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navber = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
    }
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to={'/allClass'}>All Class</Link></li>
        <li><Link to={'/instructor'}>All instructor</Link></li>
        {user && <li><Link to={'/dashbord/all'}>Dasbord</Link></li>}

    </>
    return (
        <div className='fixed top-0 z-10 max-w-[1223px] rounded-b  rounded w-full '>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><img className='h-[60px] rounded-full' src="https://t4.ftcdn.net/jpg/04/02/26/27/240_F_402262750_MnKfNsSiAuVmSHxiKEKR0jXfn6tRZsLl.jpg" alt="" />
                    <span>Harmony Academy</span> </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="  navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}

                                    <img src={user?.photoURL} alt="prfile Photo" />


                                </div>
                            </label>

                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li className='py-2 pl-3 text-green-500'>Email: {user?.email}</li>
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>

                                {
                                    user ? <li onClick={handleLogOut} ><Link>logOut</Link></li> : <li><Link to='/login'>login</Link></li>
                                }
                            </ul>
                            

                        </div>
                        : <Link className='btn' to='/login'>login</Link>

                    }

                </div>
            </div>
        </div>
    );
};

export default Navber;
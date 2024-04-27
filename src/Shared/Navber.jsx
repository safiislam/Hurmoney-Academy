import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import DarkChackBox from '../components/DarkChackBox';
import { DarkModeContext } from '../AuthProvider/DarkModeProvider';
import { FaRegUserCircle } from "react-icons/fa"
import useUserRole from '../hooks/useUserRole';



const Navber = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)
    // const [makeDark, setMakeDark] = useState(false)
    // const { darkMode } = useContext(DarkModeContext)
    const [userData] = useUserRole(user)
    console.log(userData)
    const handleLogOut = () => {
        logOut()
        setIsOpen(false)
    }

    const navItems = [
        {
            path: '/',
            title: 'Home'
        },
        {
            path: '/allClass',
            title: 'All Class'
        },
        {
            path: '/instructor',
            title: 'All instructor'
        },
        {
            path: `/dashbord/${userData?.role === 'admin' ? "menageClass" : userData?.role === 'instructor' ? 'addClass' : 'myBooking'}`,
            title: `${user ? 'Dasbord' : ''}`
        },
    ]
    // const navItems = <>
    //     <li><Link to='/'>Home</Link></li>
    //     <li><Link to={'/allClass'}>All Class</Link></li>
    //     <li><Link to={'/instructor'}>All instructor</Link></li>
    //     {user && <li><Link to={'/dashbord/all'}>Dasbord</Link></li>}
    //     <DarkChackBox />
    //     {/* <input type="checkbox" checked={makeDark} className="toggle" onChange={() => setMakeDark(!makeDark)} /> */}


    // </>
    return (

        <div className='relative'>
            <div className='py-4 px-8  fixed top-0 right-0 z-10 bg-white w-full overflow-hidden   shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]' >
                <nav className='flex justify-between items-center' >
                    <span>logo</span>
                    <ul className='flex gap-5'>
                        {
                            navItems.map(({ path, title }, index) => <li key={index}><NavLink to={path} className={({ isActive }) =>
                                isActive
                                    ? "text-blue-400"
                                    : ""
                            }
                            > {title}</NavLink></li>)
                        }
                    </ul>
                    <div>
                        <span>
                            {
                                user ? <img onClick={() => setIsOpen(!isOpen)} className='w-10 h-10 rounded-full border-2 border-slate-500 cursor-pointer' src={user?.photoURL} alt="" />
                                    : <Link to={'/login'}><FaRegUserCircle className='text-4xl text-slate-700' /> </Link>
                            }
                        </span>

                    </div>
                </nav >

            </div >
            {
                isOpen &&
                <div className='fixed z-50 p-3  top-20 right-5 rounded-md  border-t-2 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-white'>
                    <p>Email : {user?.email}</p>
                    <p>Name : {user?.displayName}</p>
                    <div className='text-center mt-3'>
                        <button onClick={handleLogOut} className='bg-blue-600 font-semibold text-white px-4 py-2'>Logout</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Navber;



// <div>
//     <div className='fixed top-0 z-10 max-w-[1223px] rounded-b  rounded w-full '>
//         <div className={`navbar ${darkMode ? 'bg-black text-white':'bg-base-100 text-black' } `}>
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </label>
//                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
//                         {navItems}
//                     </ul>
//                 </div>
//                 <a className="btn btn-ghost normal-case text-xl"><img className='h-[60px] rounded-full' src="https://t4.ftcdn.net/jpg/04/02/26/27/240_F_402262750_MnKfNsSiAuVmSHxiKEKR0jXfn6tRZsLl.jpg" alt="" />
//                     <span>Harmony Academy</span> </a>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {navItems}
//                 </ul>
//             </div>
//             <div className="  navbar-end">
//                 {
//                     user ? <div className="dropdown dropdown-end">
//                         <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//                             <div className="w-10 rounded-full">
//                                 {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}

//                                 <img src={user?.photoURL} alt="prfile Photo" />


//                             </div>
//                         </label>

//                         <ul tabIndex={0} className={`mt-3 p-2 shadow menu menu-sm dropdown-content ${darkMode ? 'bg-black text-white' : 'bg-base-100 text-black'} rounded-box w-52`}>
//                             <li className='py-2 pl-3 text-green-500'>Email: {user?.email}</li>
//                             <li>
//                                 <a className="justify-between">
//                                     Profile
//                                     <span className="badge">New</span>
//                                 </a>
//                             </li>
//                             <li><a>Settings</a></li>

//                             {
//                                 user ? <li onClick={handleLogOut} ><Link>logOut</Link></li> : <li><Link to='/login'>login</Link></li>
//                             }
//                         </ul>


//                     </div>
//                         : <Link className='btn' to='/login'>login</Link>

//                 }

//             </div>
//         </div>
//     </div>
// </div>
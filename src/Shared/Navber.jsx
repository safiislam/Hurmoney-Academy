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
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };
    // const [makeDark, setMakeDark] = useState(false)
    // const { darkMode } = useContext(DarkModeContext)
    const [userData] = useUserRole(user)
    const handleLogOut = () => {
        logOut()
        setNav(false)
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
        <div className='bg-black'>
            <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
                {/* Logo */}
                <div className='md:flex justify-between items-center w-[65%]'>
                    <Link to={'/'}>
                        <span className='hidden md:flex cursor-pointer'>
                            <svg className='w-8 text-cyan-500 hover:text-cyan-600' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"></path>
                            </svg>
                            <span className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  hover:to-purple-400 hover:from-pink-600 '>Music</span>
                        </span>
                    </Link>
                    <div className='md:hidden block' onClick={handleNav}>
                        {
                            nav ? <svg className='w-8' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                            </svg>
                                :
                                <svg className='w-8' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                                </svg>
                        }
                    </div>
                    {/* Desktop Navigation */}
                    <ul className='hidden md:flex  gap-9'>
                        {navItems.map(item => (

                            <li key={item.path}><NavLink to={item.path} className={({ isActive }) => (` ${isActive
                                ? "text-blue-400 font-semibold"
                                : ""}`)
                            }
                            > {item.title}</NavLink></li>)

                        )}
                    </ul>
                </div>
                <span>
                    {
                        user ? <img onClick={() => setIsOpen(!isOpen)} className='w-10 h-10 rounded-full border-2 border-slate-500 cursor-pointer' src={user?.photoURL} alt="" />
                            : <Link to={'/login'}><FaRegUserCircle className='text-4xl text-slate-700' /> </Link>
                    }
                </span>


                {/* Mobile Navigation Icon */}
                {/* <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <svg className='w-8 cursor-pointer' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                    </svg> :
                        <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                        </svg>
                    }
                </div> */}
                {
                    isOpen &&
                    <div className='fixed z-50 p-3 text-black  top-20 right-5 rounded-md  border-t-2 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-white'>
                        <p>Email : {user?.email}</p>
                        <p>Name : {user?.displayName}</p>
                        <div className='text-center mt-3'>
                            <button onClick={handleLogOut} className='bg-blue-600 font-semibold text-white px-4 py-2'>Logout</button>
                        </div>
                    </div>
                }

                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? ' z-40 fixed md:hidden right-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                            : ' z-40 ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 right-[-100%]'
                    }
                >
                    {/* Mobile Logo */}
                    <Link className='' to={'/'}>
                        <span className='ps-3 pt-4  flex gap-1 cursor-pointer'>
                            <svg className='w-8 text-cyan-500 hover:text-cyan-600' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"></path>
                            </svg>
                            <span className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  hover:to-purple-400 hover:from-pink-600 '>Music</span>
                        </span>
                    </Link>

                    {/* Mobile Navigation Items */}
                    <div className='pt-8'>
                        {navItems.map(item => (
                            // <li
                            //     key={item.id}
                            //     className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
                            // >
                            //     {item.title}
                            // </li>

                            <li className='p-4 border-b rounded-xl hover:bg-[#182924] duration-300 hover:text-black cursor-pointer border-gray-600' key={item.path}><NavLink to={item.path} className={({ isActive }) => (` ${isActive
                                ? "text-blue-400 font-semibold"
                                : ""}`)
                            }
                            > {item.title}</NavLink></li>)

                        )}
                    </div>
                </ul>
            </div >
        </div >


        // <div className='relative'>
        //     <div className='py-4 px-8  fixed top-0 right-0 z-10  w-full bg-white overflow-hidden   shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]' >
        //         <nav className='flex relative justify-between items-center' >
        //             <div>
        //                 <Link to={'/'}>
        //                     <span className='hidden md:flex cursor-pointer'>
        //                         <svg className='w-8 text-cyan-500 hover:text-cyan-600' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        //                             <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"></path>
        //                         </svg>
        //                         <span className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  hover:to-purple-400 hover:from-pink-600 '>Music</span>
        //                     </span>
        //                 </Link>
        //                 <span className='md:hidden block'  >
        //                     <svg className='w-8 cursor-pointer' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        //                         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
        //                     </svg>
        //                 </span>
        //             </div>
        //             <div className='hidden md:block '>
        //                 <ul className=' flex md:flex-row flex-col gap-5'>
        //                     {
        //                         navItems.map(({ path, title }, index) => <li key={index}><NavLink to={path} className={({ isActive }) =>
        //                             isActive
        //                                 ? "text-blue-400 font-semibold"
        //                                 : ""
        //                         }
        //                         > {title}</NavLink></li>)
        //                     }
        //                 </ul>
        //             </div>
        //             <div>
        //                 <span>
        //                     {
        //                         user ? <img onClick={() => setIsOpen(!isOpen)} className='w-10 h-10 rounded-full border-2 border-slate-500 cursor-pointer' src={user?.photoURL} alt="" />
        //                             : <Link to={'/login'}><FaRegUserCircle className='text-4xl text-slate-700' /> </Link>
        //                     }
        //                 </span>

        //             </div>

        //         </nav >


        //     </div >
        //     {
        //         isOpen &&
        //         <div className='fixed z-50 p-3  top-20 right-5 rounded-md  border-t-2 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-white'>
        //             <p>Email : {user?.email}</p>
        //             <p>Name : {user?.displayName}</p>
        //             <div className='text-center mt-3'>
        //                 <button onClick={handleLogOut} className='bg-blue-600 font-semibold text-white px-4 py-2'>Logout</button>
        //             </div>
        //         </div>
        //     }
        //     <div className='absolute top-0 right-0 h-screen bg-white md:hidden z-50'>
        //         <ul className=' flex md:flex-row flex-col gap-5'>
        //             {
        //                 navItems.map(({ path, title }, index) => <li key={index}><NavLink to={path} className={({ isActive }) =>
        //                     isActive
        //                         ? "text-blue-400 font-semibold"
        //                         : ""
        //                 }
        //                 > {title}</NavLink></li>)
        //             }
        //         </ul>
        //     </div>

        // </div>
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
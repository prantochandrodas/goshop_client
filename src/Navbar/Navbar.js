import logo from '../assets/Logo2.png';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    const menu=<>
        <li className='px-4 text-xl font-bold cursor-pointer'><Link to='/'>Home</Link></li>
        <li className='px-4 text-xl font-bold cursor-pointer'><Link to='/Login'>Login</Link></li>
        <li className='px-4 text-xl font-bold cursor-pointer'><Link to='/signup'>SignUp</Link></li>
    </>
    return (
        <div className='nav-background'>
            <div className="navbar flex lg:justify-between justify-between sticky top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                           {menu}
                        </ul>
                    </div>
                    <Link to="/"><img src={logo} className="w-[130px]" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {menu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
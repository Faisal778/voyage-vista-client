import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import AllTouristSpots from '../pages/AllTouristSpots';
import UseAuth from '../hooks/UseAuth';

const Navbar = () => {
    const navLinks = <>

        <li><NavLink to = '/'>Home</NavLink></li>
        <li><NavLink to = '/allTouristSpots'>All Tourist Spots</NavLink></li>
        <li><NavLink to = '/addTouristSpot'>Add Tourist Spots</NavLink></li>
        <li><NavLink to = '/myList'>My List</NavLink></li>

    </>

     const {logout, user} = UseAuth();
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><NavLink to='/' className='text-green-500 font-bold '>Voyage Vista</NavLink> </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLinks}
          </ul>
        </div>
        

<div className="navbar-end">
  {
    user?.email ?
    <div className='dropdown dropdown-end'>
      <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
        <div className='w-10 rounded-full'>
          <img src="https/image" alt="profile image" />
        </div>
      </label>

      <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
        <li>
          <button className='btn btn-sm btn-ghost'>name</button>
        </li>
        <li>
          <button
          onClick={logout}
          className='btn btn-sm btn-ghost'>Logout </button>
        </li>
      </ul>
    </div>
    :
      <div>
 <Link to="/login">
      <button className='btn btn-sm btn-ghost'>Login</button>
    </Link>
    <Link to="/register">
      <button className='btn btn-sm btn-ghost'>Register</button>
    </Link>

        </div>

    
  }
</div>

      </div>
    );
};

export default Navbar;
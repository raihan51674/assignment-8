import React from 'react';
import ImgLogo from "../../assets/logo.png";
import { NavLink } from 'react-router';

 //Navbar section Design
 
const Navbar = () => {
  return (
    <div className='flex justify-between p-5 bg-amber-50 text-center'>
      <div className='flex flex-row text-center'>
        <img className='w-8 h-8 object-contain' src={ImgLogo} alt="logo" />
        <h1 className='font-extrabold text-2xl text-black'>Law.BD</h1>
      </div>
      <div className='flex gap-4 flex-row text-center text-[#0F0F0F]'>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/booking">My Bookings</NavLink>
         <NavLink to='/blog'>Blogs</NavLink>
         <NavLink to="/contact" >Contact</NavLink>
      </div>
      <div className=' bg-green-700 px-3 py-1 rounded-2xl text-center'>
       <h1 className='font-semibold  text-[16px]'> Contact Now</h1>
      </div>
    </div>
  );
};

export default Navbar;
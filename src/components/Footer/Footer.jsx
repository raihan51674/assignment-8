import React from 'react';
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router';
import ImgLogo from "../../assets/logo.png";
  
//Footer section design
const Footer = () => {
  return (
    <footer className='flex flex-col gap-10 items-center py-10 bg-gray-900 text-white'>
      <div className='flex flex-row items-center gap-2'>
        <img className='w-8 h-8 object-contain text-white' src={ImgLogo} alt="logo" />
        <h1 className='font-extrabold text-2xl'>Law.BD</h1>
      </div>


        {/* //Navbar all link add */}
      <div className='flex gap-4 flex-row text-center text-white'>
         <Link to="/">Home</Link>
        <Link to="/booking">My Bookings</Link>
        <Link to='/blog'>Blogs</Link>
        <Link to="/sdfre" >Contact</Link>
      </div>

      <div className='w-full border-t border-white border-dashed'></div>
        
        {/* //Social media All Link */}
      <div className='flex flex-row gap-x-6 text-blue-600 text-2xl'>
        <a href="https://www.facebook.com/rayyan.islam.2025" aria-label="Facebook">
          <FaFacebookSquare />
        </a>
        <a href="https://x.com/mdraihan5167" aria-label="Twitter">
          <FaXTwitter />
        </a>
        <a href="https://www.linkedin.com/in/md-raihan-islam-b64aab274/" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

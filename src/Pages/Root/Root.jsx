import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Outlet, useNavigate } from 'react-router';
import Loader from '../../components/Loading/Loader';

const Root = () => {
  const navigation =useNavigate();
  const isNavigation =Boolean(navigation.location)
  return (
    <div className='max-w-screen-xl mx-auto bg-white text-black'>
      <Navbar></Navbar>
      {isNavigation && <Loader/>}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
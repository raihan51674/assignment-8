import React from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
  return (
    <div>
      <div>
      <h1 className='text-3xl text-center font-extrabold'>We Provide Best Law Services</h1>
      <p className='text-center text-[14px] text-gray-400 pt-3'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
    </div>
    <ServiceCard></ServiceCard>
    </div>
  );
};

export default Service;
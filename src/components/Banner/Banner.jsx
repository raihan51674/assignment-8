import React from 'react';
import BackgrounImg from "../../assets/banner-img-1.png";
  
    //Hero section
const Banner = () => {
  return (
     //Background Image add
    <div
      className="w-full rounded-md opacity-95 h-130 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${BackgrounImg})` }}
    >
     <div>
     <h1 className="text-white text-center text-4xl font-bold bg-opacity-50 p-4 rounded-xl">
     It avoids subjective claims or <br/> exaggeration that might raise red <br/> flags legally
      </h1>
      <p className='text-[16px] text-indigo-100 text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br/>routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
     </div>
      </div>
    
  );
};

export default Banner;
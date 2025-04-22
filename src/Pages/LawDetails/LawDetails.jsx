import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import BookNow from './BookNow';
import LawyerProfile from './LawyerProfile';

 
const LawDetails = () => {
  const {id} = useParams()
  const LawyerId =parseInt(id);
  const data =useLoaderData()

  //data finding
  const SingleLaywer = data.find(lawyer=>lawyer.id === LawyerId)
  // console.log(id,data);
  console.log(SingleLaywer);
  
  const {image,name,experience,speciality,licenseNumber,availability,fee}=SingleLaywer
  
  return (

    //card details data show individual
    <div className='py-8'>
      <LawyerProfile></LawyerProfile>
      <div className='pt-10'>
      
      <div className=" flex border p-4 rounded-lg shadow-lg">
      
      <div className="w-1/3">
        <img src={image} alt={name} className="w-75 h-75 object-cover rounded-lg" />
      </div>

      <div className=" pl-4 flex flex-col gap-y-5  justify-center">
      
        <div className="flex flex-col items-start">
          <span className="text-blue-500 pb-3 py-1 px-3 bg-blue-200 rounded-full font-normal text-[15px]">{experience}</span>
          <h2 className="text-2xl font-bold">{name}</h2>
        </div>

       
        <div className="flex flex-row gap-x-6 text-center">
          <span className="text-xs text-gray-600">{speciality}</span>
          <span className="text-xs text-gray-500"> Ⓡ License: {licenseNumber}</span>
        </div>

        
        <div className=" flex gap-x-3">
        Availability {availability.map((day) => (
            <span key={day} className="bg-yellow-100 text-yellow-500 py-1 px-3 rounded-full text-xs">
               {day}
            </span>
          ))}
        </div>

       
        <div className=" text-lg font-semibold text-gray-800">Consultation Fee : <span className='text-[#0EA106]'>Taka: {fee}</span></div>
      </div>
    </div>
    </div>

    <div className='py-15'>
    <BookNow id={id} ></BookNow>
    </div>
    
    </div>
  
  );
};

export default LawDetails;
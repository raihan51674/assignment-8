import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { ToastContainer, toast } from 'react-toastify';
import { AddToStoredDB } from '../../Utility/AddToDB';
const MySwal = withReactContent(Swal)

const BookNow = ({id}) => {

  const handleMarkAsRead=id=>{

    //sweet Alart use
    Swal.fire({
      title: "Book Appointment!",
      text: "You clicked the button!",
      icon: "success"
    });

    toast("Booked!")

    //localstorage data save
    AddToStoredDB(id)

  }





  return (

    
    //Card crate all
    <div className='flex flex-col gap-y-3 border-1 border-gray-300 p-5 rounded-md'>
       <ToastContainer />
     <h1 className='font-bold text-[24px] text-center'>Book an Appointment</h1>
     <hr className="border-dashed border-gray-300" />
     <div className='flex justify-between px-5'>
      <h1 className='font-bold text-[17px]'>Availability</h1>
      <p className='font-normal text-[#09982F]'>Lawyer  Available Today</p>

     </div>
     <hr className="border-solid border-gray-300" />
     <p className='text-[#FFA000] bg-yellow-100 rounded-md px-12 p-1 font-normal text-[11px] text-center'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
    
    <div className='text-center'>
     <button onClick={()=>handleMarkAsRead(id)} className='bg-[#0EA106] px-17 py-1.5 rounded-full'>Book Appointment Now</button>
     </div>
    
    </div>
  );
};

export default BookNow;
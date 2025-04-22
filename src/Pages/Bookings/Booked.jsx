import { ToastContainer, toast } from "react-toastify";


  //i fetched data from another component using props
 const Booked = ({Booked,handleCancel}) => {

  //Notification show that use toast
  const notify = () => toast("Book Cancel!");

  if (!Booked) {
    return <div>Loading...</div>; 
  }

    // distructure data usING ES-6
   const {name, speciality,fee,id}=Booked;
 
  return (
    
    //Show Booking card
   <div className='m-8'>
     <div className='p-6 border-1 border-gray-300 rounded-md flex flex-col gap-y-4'>
      <h1 className='font-bold text-[20px]'>{name}</h1>
      
      <div className='flex flex-row justify-between text-[16px] font-normal text-gray-500'>
        <h1>{speciality}</h1>
        <p>Appointment Fee :  {fee} taka</p>
      </div>
      <hr className="border-dashed border-gray-300" />
      <div className='cursor-pointer px-10 py-1 border-1 border-red-600 text-center rounded-full'>
       
        <button  onClick={() => {handleCancel(id); notify()}} className= 'text-red-500 cursor-pointer font-semibold text-[16px]'>Cancel Appointment</button>
        <ToastContainer/>
      </div>
    </div>
   </div>
  );
};

export default Booked;
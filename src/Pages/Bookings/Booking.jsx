import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { DeleteFromStoredDB, GetStoreBook } from '../../Utility/AddToDB';
import Booked from './Booked';
import FeeChart from './FeeChart';


const Booking = () => {
  const [Readlist, setReadlist] = useState([]);

  //Data fetched from router component using loaderData
  const data = useLoaderData();
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {

    // Call localstorage data
    const storedBookData = GetStoreBook();
    const ConvertStoreBooks = storedBookData.map(id => parseInt(id));
    setShowChart(true); 
    
     // indivitual data filtering
    if (Array.isArray(data)) {
      const myReadList = data.filter(book => ConvertStoreBooks.includes(book.id));
      setReadlist(myReadList);
      
    } else {
      console.error("Expected array from useLoaderData, but got:", data);
    }
  }, []);

  //fuction crate the data will be called will show that data
  const handleCancel = (id) => {
    DeleteFromStoredDB(id);
    setReadlist((prevReadlist) => prevReadlist.filter(book => book.id !== id));
    
  };

  return (
    
    // show all data in the pages
    <div>
      <div className='flex py-8 items-center justify-center'>
      {showChart && <FeeChart Readlist={Readlist} />}
    
      </div>

      <div>
        <h1 className='font-extrabold text-4xl text-center pt-10'>My Today Appointments</h1>
        <p className='font-normal text-[15px] text-center pt-3 pb-10 text-gray-500'>
          Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
        </p>
      </div>

      <div>
        {
          Readlist.map(b => (
            <Booked
              key={b.id}
              Booked={b}
              handleCancel={handleCancel}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Booking;
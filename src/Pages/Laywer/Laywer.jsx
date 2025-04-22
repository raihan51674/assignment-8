import React, { Suspense, useState } from 'react';
import LaywerCard from './LaywerCard';

const Lawyer = ({ data }) => {
  const [ShowMore, setShowMore] = useState(false);

  //how much product show in display
  const DisplayProducts = Array.isArray(data)
    ? (ShowMore ? data.slice(0, 12) : data.slice(0, 6))
    : [];

  return (
    <div>
      <div className='p-15'>
        <h1 className='font-extrabold text-3xl text-center text-black'>Our Best Lawyers</h1>
        <p className='text-[#0F0F0F] text-[15px] text-center pt-4'>
          Our platform connects you with verified, experienced lawyers across various specialties — all at your convenience.
          Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
        </p>
      </div>
    
    {/* Home page card show design */}
      <div>
        <Suspense fallback={<span>Loading...</span>}>
          <div className='grid grid-cols-2 gap-4'>
            {
              DisplayProducts.map((singleLaywer) => (
                <LaywerCard key={singleLaywer.id} singleLaywer={singleLaywer} />
              ))
            }
          </div>
        </Suspense>
      </div>

      <div>
        {!ShowMore && Array.isArray(data) && data.length > 6 && (
          <div className='text-center py-10'>
            <button
              onClick={() => setShowMore(true)}
              className='bg-[#0EA106] px-4 py-2 cursor-pointer rounded-full text-white font-semibold text-1xl'
            >
              Show All Lawyer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lawyer;

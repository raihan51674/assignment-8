import { Link } from 'react-router';

//Using props get data another component
const LaywerCard = ({ singleLaywer }) => {
 
  if (!singleLaywer) {
    return <div>Loading...</div>; 
  }

  //distructure data using feature ES-6
  const { image,id, name, speciality, experience, licenseNumber, status } = singleLaywer;

  return (

    //products card details page componenet
    <Link to={`/LawDetails/${id}`}>
    <div className="flex gap-10 border-1 border-gray-300 bg-white shadow-md rounded-lg p-4 my-4">
      <div className="w-1/3">
        <img src={image} alt={name} className="w-full h-auto rounded-lg" />
      </div>
      
      <div className="w-2/3 pl-20">
        <div className="flex gap-x-5 items-center">
          <span className="text-green-500 font-semibold bg-green-100 py-1.4 px-2 rounded-md">{status}</span>
          <span className="text-[#176AE5] bg-blue-100 rounded-full py-1.4 px-2 ">{experience}</span>
        </div>
        <h3 className="text-xl font-bold mt-2">{name}</h3>
        <p className="text-gray-600 mt-1">{speciality}</p>
        <p className="text-gray-500 mt-1">License No:{licenseNumber}</p>
        
        <button className="mt-4 inline-block text-blue-500 rounded-full py-1.4 px-12 border-1 text-center hover:text-blue-700">
          View Details
        </button>
      </div>
    </div>
    
    </Link>
  );
};

export default LaywerCard;

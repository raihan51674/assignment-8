import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Doctor from "../../assets/success-doctor.png";
import Pation from "../../assets/success-patients.png";
import Review from "../../assets/success-review.png";
import Staff from "../../assets/success-staffs.png";

const ServiceCard = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2,     
  });

  const cardData = [
    { id: 1, img: Doctor, end: 199, label: "Total Lawyers" },
    { id: 2, img: Review, end: 667, label: "Total Reviews" },
    { id: 3, img: Pation, end: 1900, label: "Total Pation" },
    { id: 4, img: Staff, end: 300, label: "Total Staffs" },
  ];

  return (
    <div ref={ref} className="flex justify-evenly flex-row gap-3 m-5 flex-wrap pb-10">
      {cardData.map((item) => (
        <div
          key={item.id}
          className="w-[170px] h-[170px] border border-gray-400 flex flex-col justify-start gap-y-3 rounded-md bg-gray-200 p-7 transition-transform hover:scale-105 shadow-md"
        >
          <img className="w-10 h-8 object-center" src={item.img} alt={item.label} />
          <h1 className="text-2xl font-extrabold text-black">
            {inView ? <CountUp start={0} end={item.end} duration={2} /> : item.end} +
          </h1>
          <p className="text-gray-600 font-medium text-sm">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;

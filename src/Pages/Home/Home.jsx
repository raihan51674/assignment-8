import React from 'react';
import { useLoaderData } from 'react-router';
import Banner from '../../components/Banner/Banner';
import Laywer from '../Laywer/Laywer';
import Service from '../Services/Service';

const Home = () => {
  const data = useLoaderData()
  

  //website home componenet which data show
  return (
    <div>
      <Banner></Banner>
      <Laywer data={data}></Laywer>
      <Service></Service>

    </div>
  );
};

export default Home;
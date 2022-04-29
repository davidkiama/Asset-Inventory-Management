import React from 'react'
import '../../App.css' /*Importing global css*/
import HeroSection from '../HeroSection';  /**/
import Cards from '../Cards';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
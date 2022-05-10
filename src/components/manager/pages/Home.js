import React from "react";
// import './App.css' /*Importing global css*/
import HeroSection from "../HeroSection"; /**/
import Cards from "../Cards";

import Footer from "../Footer";

function Home() {
  const userRole = localStorage.getItem("userRole");
  return (
    <>
      <HeroSection />

      {userRole === "Employee" ? <Cards /> : <></>}

      <Footer />
    </>
  );
}

export default Home;

// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Navbar from './components/manager/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/manager/pages/Home';
import Asset from './components/manager/pages/Asset';
import Assetrequest from './components/manager/pages/Assetrequest';
import AssetList from './components/manager/pages/AssetList';
import SignUp from './components/manager/pages/SignUp';
import "./App.css";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
           {/* <Route path='/' exact component = {Home} /> */}
                           {/* Cauncelled this coz the new version 6 uses elements instead */}
          <Route path="/" element={<Home/>} exact />
          <Route path="/Asset" element={<Asset/>} exact />
          <Route path="/Assetrequest" element={<Assetrequest/>} exact />
          <Route path="/AssetList" element={<AssetList/>} exact />
          <Route path="/sign-up" element={<SignUp/>} exact />
        </Routes>
      </Router>
    </>
  );
}
export default App;

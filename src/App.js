// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Manager from './components/pages/Manager';
import Employee from './components/pages/Employee';
import SignUp from './components/pages/SignUp';
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
          <Route path="/manager" element={<Manager/>} exact />
          <Route path="/employee" element={<Employee/>} exact />
          <Route path="/sign-up" element={<SignUp/>} exact />
        </Routes>
      </Router>
    </>
  );
}
export default App;

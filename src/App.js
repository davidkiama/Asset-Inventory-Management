// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Manager from "./components/pages/Manager";
import Employee from "./components/pages/Employee";
import EmployeeDashboard from "./components/pages/EmployeeDashboard";

import SignUp from "./components/pages/SignUp";
import "./App.css";
import Register from "./components/Form/Register";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path='/' exact component = {Home} /> */}
          {/* Cauncelled this coz the new version 6 uses elements instead */}
          <Route path="/" element={<Home />} exact />
          <Route path="/manager" element={<Manager />} exact />
          <Route path="/employee" element={<Employee />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} exact />
          <Route path="/register" element={<SignUp />} exact />
        </Routes>
      </Router>
    </>
  );
}
export default App;

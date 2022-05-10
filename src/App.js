import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Manager from "./components/pages/Manager";
import Employee from "./components/pages/Employee";
import SignUp from "./components/manager/pages/SignUp";
import Login from "./components/pages/Login";
// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Navbar from "./components/manager/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/manager/pages/Home";
import Asset from "./components/manager/pages/Asset";
import Assetrequest from "./components/manager/pages/Assetrequest";
import AssetList from "./components/manager/pages/AssetList";
import EmployeeDashboard from "./components/pages/EmployeeDashboard";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/manager" element={<Manager />} exact />
          <Route path="/employee" element={<Employee />} exact />
          <Route path="/employee/dashboard" element={<EmployeeDashboard />} exact />
          <Route path="/sign-up" element={<SignUp />} exact />
          <Route path="/sign-in" element={<Login />} />

          <Route path="/Asset" element={<Asset />} exact />
          <Route path="/Assetrequest" element={<Assetrequest />} exact />
          <Route path="/AssetList" element={<AssetList />} exact />
        </Routes>
      </Router>
    </>
  );
}
export default App;

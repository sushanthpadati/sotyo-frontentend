import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from "./Components/layout/Header";
import Sidebar from "./Components/layout/Sidebar";
import Footer from "./Components/layout/Footer";
import DeashBoard from "./Components/Pages/DeashBoard";
import Addpatient from "./Components/Pages/Addpatient";
import Patientlist from './Components/Pages/Patientlist';
import Report from './Components/Pages/Report';
import Searchpatient from './Components/Pages/Searchpatient';
import Myaccount from './Components/Pages/Myaccount';
function Dashadmin() {
  return (
    <BrowserRouter>
    <div className="wrapper">
      {/* ========== Left Sidebar Start ========== */}
      <Sidebar />
      {/* Left Sidebar End */}
      {/* ============================================================== */}
      {/* Start Page Content here */}
      {/* ============================================================== */}
      <div className="content-page">
        <div className="content">
          {/* Topbar Start */}
          <Header />
          {/* end Topbar */}
          {/* Start Content*/}
          
          <Routes>
            <Route path="/" element={<DeashBoard />} />
            <Route path="/addpateint" element={<Addpatient />} />
            <Route path="/patientlist" element={<Patientlist />} />
            <Route path="/report/:patientID" element={<Report />} />
            <Route path="/searchpatient" element={<Searchpatient />} />
            <Route path="/my-profile" element={<Myaccount />} />
            
            {/* Add more routes as needed */}
            </Routes>
          {/* container */}
        </div>
        {/* content */}
        {/* Footer Start */}
        <Footer />
        {/* end Footer */}
      </div>
      {/* ============================================================== */}
      {/* End Page content */}
      {/* ============================================================== */}
    </div>
    </BrowserRouter>
  );
}

export default Dashadmin;

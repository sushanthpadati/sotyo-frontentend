import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import Login from './Components/Pages/Login';
import Homepage from './Components/Pages/Homepage';
import DiseaseSelection from './Components/layout/DiseaseSelection';

function App() {
  // State to track authentication status
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div className="wrapper">
        {/* Show sidebar, footer, and header only if authenticated */}
        {isAuthenticated && (
          <>
            {/* ========== Left Sidebar Start ========== */}
            <Sidebar />
            {/* Left Sidebar End */}
            {/* ============================================================== */}
            {/* Start Page Content here */}
            {/* ============================================================== */}
            <div className="content-page">
              <div className="content">
                {/* Top bar Start */}
                <Header setAuthenticated={setAuthenticated}/>
                {/* end Top bar */}
                {/* Start Content*/}
                <Routes>
                  <Route path="/select-disease" element={<DiseaseSelection />} />
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
          </>
        )}

        {/* Render the Login component only if not authenticated */}
        {!isAuthenticated && (
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
            {/* Add more routes as needed */}
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;

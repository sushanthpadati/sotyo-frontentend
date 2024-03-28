// MainLayout.js
import React from 'react';
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';
import Footer from './layout/Footer';

const MainLayout = ({ children }) => {
  return (
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
          <Header />
          {/* end Top bar */}
          {/* Start Content*/}
          {children}
        </div>
      </div>
      {/* ============================================================== */}
      {/* End Page content */}
      {/* ============================================================== */}
      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;

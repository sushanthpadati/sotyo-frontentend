import React from "react";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      {/* ========== Left Sidebar Start ========== */}
      <div className="leftside-menu" style={{backgroundColor:'#893487'}} >
        {/* LOGO */}
        <Link href="/" className="logo text-center logo-light"  style={{textDecoration:'none'}}>
          <span className="logo-lg" style={{backgroundColor:'#893487',textDecoration:'none'}}>
            <p className="rtsp" style={{fontSize:'2rem',color:'#fff',fontWeight:'600',textDecoration:'none'}}>Sotyo</p>
          </span>
          <span className="logo-sm" style={{backgroundColor:'#893487'}}>
            {/* <img src="assets/images/logo_sm.png" alt height={16} /> */}
            <p className="rtsp" style={{fontSize:'2rem',color:'#fff',fontWeight:'600',textDecoration:'none',marginBottom:'0px'}}>S.</p>
          </span>
        </Link>
        {/* LOGO */}
        <a href="/" className="logo text-center logo-dark">
          <span className="logo-lg">
            <img src="assets/images/logo-dark.png" alt height={16} />
          </span>
          <span className="logo-sm">
            <img src="assets/images/logo_sm_dark.png" alt height={16} />
          </span>
        </a>
        <div className="h-100 " style={{backgroundColor:'#893487'}} id="leftside-menu-container" data-simplebar>
          {/*- Sidemenu */}
          <ul className="side-nav" >
            <li className="side-nav-title side-nav-item">ADMIN PANEL</li>
            <li className="side-nav-item">
              <Link to="/"
                className="side-nav-link" style={{backgroundColor:'#893487'}}>
                <i className="uil-home-alt" />
                <span> Dashboards </span>
              </Link>
              
            </li>
            <li className="side-nav-title side-nav-item">PATIENT</li>
            <li className="side-nav-item">
              <Link to="/addpateint" className="side-nav-link" style={{backgroundColor:'#893487'}}>
                <i className="uil-user-plus" />
                <span> Add Patient </span>
              </Link>
            </li>
            <li className="side-nav-item">
              <Link to="/patientlist" className="side-nav-link" style={{backgroundColor:'#893487'}}>
                <i className="uil-list-ul" />
                <span> Patient List </span>
              </Link>
            </li>
            <li className="side-nav-item">
              <Link to="/searchpatient" className="side-nav-link" style={{backgroundColor:'#893487'}}>
                <i className="uil-search" />
                <span> Search Patient </span>
              </Link>
            </li>
            <li className="side-nav-title side-nav-item">DOCTOR</li>
            <li className="side-nav-item">
              <a href="#" className="side-nav-link" style={{backgroundColor:'#893487'}}>
                <i className="uil-file-medical-alt" />
                <span> See Report </span>
              </a>
            </li>
            
            <li className="side-nav-title side-nav-item">SETTING</li>
            <li className="side-nav-item">
              <a href="#" className="side-nav-link" style={{backgroundColor:'#893487'}}>
              <i className="dripicons-gear noti-icon" />
                <span> Software Setting </span>
              </a>
            </li>
            <li className="side-nav-item" >
              <a href="#" className="side-nav-link" style={{backgroundColor:'#893487'}}>
                <i className="uil-plus" />
                <span> Add Login User</span>
              </a>
            </li>
            
          </ul>
          
          {/* End Sidebar */}
          <div className="clearfix" />
        </div>
        {/* Sidebar -left */}
      </div>
      {/* Left Sidebar End */}
    </>
  );
};

export default Sidebar;

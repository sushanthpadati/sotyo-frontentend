import React from "react";
import { Link,useLocation, Navigate, user  } from 'react-router-dom';
const Header = ({ setAuthenticated }) => {
  const location = useLocation();
  const { user } = location.state || {};
  const handleLogout = () => {
    // Perform any necessary cleanup or logout actions here
    // For example, clear user data, reset authentication status, etc.
    localStorage.removeItem('modalShown');
    // Update the authentication status to false
    setAuthenticated(false);

    // Redirect to the login page after logout
    return <Navigate to="/login" />;
  };

  return (
    <>
      {/* Topbar Start */}
      <div className="navbar-custom">
        <ul className="list-unstyled topbar-menu float-end mb-0">
          <li className="dropdown d-none d-lg-block">
          <div className="app-search dropdown d-none d-lg-block">
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control dropdown-toggle"
                placeholder="Search..."
                id="top-search"
              />
              <span className="mdi mdi-magnify search-icon" />
              <button className="input-group-text btn" style={{backgroundColor:'#893487',color:'#fff'}} type="submit">
                Search
              </button>
            </div>
          </form>
          
        </div>&nbsp;&nbsp;&nbsp;
            </li>
          <li className="dropdown notification-list d-lg-none">
            <a
              className="nav-link dropdown-toggle arrow-none"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false">
              <i className="dripicons-search noti-icon" />
            </a>
            <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
              <form className="p-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search ..."
                  aria-label="Recipient's username"
                />
              </form>
            </div>
          </li>
          <li className="dropdown notification-list topbar-dropdown">
            <a
              className="nav-link dropdown-toggle arrow-none"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false">
              
              <span className="align-middle d-none d-sm-inline-block">
                English
              </span>{" "}
              <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle" />
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu">
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item">
                {" "}
                <span className="align-middle">Hindi</span>
              </a>
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item">
               {" "}
                <span className="align-middle">Telgu</span>
              </a>
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item">
                {" "}
                <span className="align-middle">Tamil</span>
              </a>
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item">
                {" "}
                <span className="align-middle">Russian</span>
              </a>
            </div>
          </li>
       
          
         
          <li className="dropdown notification-list">
            <a
              className="nav-link dropdown-toggle nav-user arrow-none me-0"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false">
              <span className="account-user-avatar">
                <img
                  src="assets/images/users/doctor.png"
                  alt="user-image"
                  className="rounded-circle"
                />
              </span>
              {user && (
              <span>
                <span className="account-user-name">{user.name}</span>
                <span className="account-position">{user.profession}</span>
              </span>
              )}
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
              {/* item*/}
              <div className=" dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome !</h6>
              </div>
              {/* item*/}
              <Link
                to="/my-profile"
                className="dropdown-item notify-item">
                <i className="mdi mdi-account-circle me-1" />
                <span>My Account</span>
              </Link>
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item">
                <i className="uil uil-history me-1" />
                <span>Login History</span>
              </a>
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item">
                <i className="mdi mdi-account-edit me-1" />
                <span>Settings</span>
              </a>
             
              <a href=""
                className="dropdown-item notify-item" onClick={handleLogout}>
                <i className="mdi mdi-logout me-1" />
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
        <button className="button-menu-mobile open-left">
        <i style={{ color: '#893487' }} className="mdi mdi-menu" />
      </button>
      <Link to="/" className="d-none d-lg-block mt-2" style={{ fontSize: '1rem', fontWeight: '580', color: '#893487', textDecoration: 'none' }}>
        <span className="rtsp mt-2" style={{ fontSize: '2rem', fontWeight: '600', textDecoration: 'none' }}>Sotyo</span> | Branding Hospital Name
      </Link>
      <h7 className="d-lg-none mt-4">
        <span className="rtsp mt-4" style={{ fontSize: '1.8rem', fontWeight: '600', color: '#893487' }}>Sotyo</span>
      </h7>
        
      </div>
      {/* end Topbar */}
    </>
  );
};

export default Header;

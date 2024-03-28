import React from 'react'
import { Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar shadow-sm navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
            <a className="navbar-brand ms-4"  href="#">Sotyo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-4 ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">HOW IT WORKS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-disabled="true">IMPACT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-disabled="true">CONTACT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-disabled="true">BOOK A DEMO</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login" aria-disabled="true">LOGIN</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar

import React from 'react';

const Foot = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted" style={{backgroundColor:'#f8f9fa'}}>
      {/* Section: Social media */}
      <hr />
      <section className="d-flex justify-content-center justify-content-lg-between p-2 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span style={{ color: '#893487', fontWeight: 700 }}>Get connected with us on social networks:</span>
        </div>
        {/* Left */}
  
        {/* Right */}
        <div>
          <a href="#" className="me-4 text-reset">
            <i style={{ color: '#893487' }} className="fa fa-facebook-f"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i style={{ color: '#893487' }} className="fa fa-twitter"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i style={{ color: '#893487' }} className="fa fa-google"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i style={{ color: '#893487' }} className="fa fa-instagram"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i style={{ color: '#893487' }} className="fa fa-linkedin"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i style={{ color: '#893487' }} className="fa fa-github"></i>
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
  
      {/* Section: Links  */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3  d-flex align-items-center col-lg-4 col-xl-3 mx-auto mb-4">
              <div className="container">
                {/* Content */}
                <h6 style={{ color: '#893487', fontSize: '2rem' }} className=" fw-bold mb-4">
                  Sotyo Care
                </h6>
                <p>
                  Transforming Treatment Globally
                </p>
              </div>
            </div>
            {/* Grid column */}
  
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 style={{ color: '#893487' }} className="text-uppercase fw-bold mb-4">
                Useful Links
              </h6>
              <p>
                <a href="#" className="text-reset">About</a>
              </p>
              <p>
                <a href="#" className="text-reset">How it works</a>
              </p>
              <p>
                <a href="#" className="text-reset">Impact</a>
              </p>
            </div>
            {/* Grid column */}
  
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 style={{ color: '#893487' }} className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i style={{ color: '#893487' }} className="fa fa-home me-3"></i>Ramamurthy Nagar, Bengaluru</p>
              <p>
                <i style={{ color: '#893487' }} className="fa fa-envelope me-3"></i>
                sujit@sotyo.care
              </p>
              <p><i style={{ color: '#893487' }} className="fa fa-phone me-3"></i> +91 6304520540</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
  
      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: '#893487', color: '#fff' }}>
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="#"> sotyo.care</a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Foot;

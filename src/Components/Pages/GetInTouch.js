import React, { useState } from 'react';
import cx from './cx.png';
const GetInTouch = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobileno: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form Submitted:', formData);
  };

  return (
    <section>
      <br /><br /><br />
      <div className="container">
        <center>
          <h3 className="underline-heading" style={{ color: 'black', fontSize: '2rem', fontWeight: 600 }}><b>GET IN TOUCH</b></h3>
        </center>
        <div className="row">
          <div className="col-md-6 justify-content-center align-items-center">
            <img src={cx} className="img-fluid custom-images imgs" alt="Contact" />
          </div>
          <div className="col-md-6 p-4 justify-content-center align-items-center">
            <br /><br /><br />
            <form id="myForm" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label className="form-label" htmlFor="form3Example1"><b>First name:</b></label>
                    <input
                      type="text"
                      name="firstname"
                      id="form3Example1"
                      className="form-control"
                      placeholder="Enter First Name"
                      onChange={handleChange}
                      value={formData.firstname}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label className="form-label" htmlFor="form3Example2"><b>Last name:</b></label>
                    <input
                      type="text"
                      name="lastname"
                      id="form3Example2"
                      className="form-control"
                      placeholder="Enter Last Name"
                      onChange={handleChange}
                      value={formData.lastname}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="form3Example3"><b>Email:</b></label>
                <input
                  type="email"
                  name="email"
                  id="form3Example3"
                  className="form-control"
                  placeholder="Enter Email"
                  required
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="form3Example4"><b>Mobile No:</b></label>
                <input
                  type="text"
                  name="mobileno"
                  id="form3Example4"
                  className="form-control"
                  placeholder="Enter Mobile No"
                  required
                  onChange={handleChange}
                  value={formData.mobileno}
                />
              </div>
              <div className="form-group">
                <label className="form-label"><b>Message:</b></label>
                <textarea
                  className="form-control"
                  name="message"
                  id="blogContent"
                  rows="5"
                  placeholder="Write a message to us......"
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
              </div>
              <button type="submit" style={{ width: '100%', backgroundColor: '#893487', color: '#fff' }} className="btn" id="submitButton" disabled={false}>
                <b>Send</b> <i className="fa fa-paper-plane-o"></i>
              </button>
            </form><br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

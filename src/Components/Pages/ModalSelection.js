import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CustomPopup from './CustomPopup';

function ModalSelection({ onDiseaseSelect, onClose }) {
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [showModal, setShowModal] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
    onClose();
  };

  const handleCancerSelection = () => {
    showAlert('Coming LIVE SOON');
     // Close the modal
  };
  const [showPopup, setShowPopup] = useState(false);
const popupMessage = 'Cancer, Coming Live Soon!';

const showAlert = () => {
  setShowPopup(true);
};

  useEffect(() => {
    const modalShown = localStorage.getItem('modalShown');

    if (!modalShown) {
      handleShow(fullscreen);
      localStorage.setItem('modalShown', 'true');
    }
  }, [fullscreen]);

  return (

<>
<CustomPopup show={showPopup} onClose={() => setShowPopup(false)} message={popupMessage} />
    <Modal show={showModal} fullscreen={fullscreen} onHide={handleClose} centered>
    <Modal.Header style={{ backgroundColor: '#893487', color: 'white' }}>
      <Modal.Title>Choose Disease</Modal.Title>
    </Modal.Header>
    <Modal.Body style={{ textAlign: 'center' }}>
      <h2 style={{ color: 'black' }}>Select Disease</h2>
      <div className="container  mt-4 d-flex justify-content-center align-items-center">
  <div className="col-md-3">
    <Link to="/">
      <button className="btn btn-lg btn-warning" onClick={handleClose}>
        Tuberculosis
      </button>
    </Link>
  </div>
  <div className="col-md-3">
    <button className="btn btn-lg btn-warning" onClick={handleCancerSelection}>
      Cancer
    </button>
  </div>
</div>

      
    </Modal.Body>
  </Modal>
  </>
  );
}

export default ModalSelection;

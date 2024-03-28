import React, { useState, useEffect } from 'react';
import './ImageModal.css'; // Create a CSS file for styling the modal
import sotyopopup from './sotyopopup.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ImageModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // Show the modal when the component mounts
    handleShow();
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Collaboration</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={sotyopopup} className='d-block w-100' alt='Modal Image' />
      </Modal.Body>
      
    </Modal>
  );
};

export default ImageModal;

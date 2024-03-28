import React, { useState } from 'react';
import './homepage.css';
import Topnav from './Topnav';
import Navbar from './Navbar';
import CenterPage from './CenterPage';
import WhyChooseSotyo from './WhyChooseSotyo';
import Mission from './Mission';
import HowItWorks from './HowItWorks';
import GetInTouch from './GetInTouch';
import Foot from './Foot';
import ImageModal from './ImageModal.js'; // Import the ImageModal component

const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Topnav />
      <Navbar />
      <CenterPage />
      <WhyChooseSotyo />
      <Mission />
      <HowItWorks />
      <GetInTouch />
      <Foot />
      {isModalOpen && <ImageModal closeModal={closeModal} />}
    </>
  );
};

export default Homepage;

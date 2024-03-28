import React, { useState } from 'react';
// import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';
import './App.css';
// import Navbar from './Navbar';
import Personaldetails from './Personaldetails';
import OrganDetails from './Organdetails';
import ThirdBlock from './Thirdblock';
import FourthBlock from './Fourthblock';
import FifthBlock from './Fifthblock';
import Success from './Success';
import Currentmedicationblock from './Currentmedicationblock';
// import Sidebar from './Sidebar';

function Addpatient() {
  const [selectedOrgan, setSelectedOrgan] = useState('');
  const [selectedpatientID, setSelectedpatientID] = useState('');
  const [showOrganDetails, setShowOrganDetails] = useState(false);
  const [showThirdBlock, setShowThirdBlock] = useState(false);
  const [showFourthBlock, setShowFourthBlock] = useState(false);
  const [showFifthBlock, setShowFifthBlock] = useState(false);
  const [selectedPastMedicalHistory, setSelectedPastMedicalHistory] = useState([]);
  const [selectedChiefOptions, setSelectedChiefOptions] = useState([]);
  const [selectedLungOptions, setSelectedLungOptions] = useState([]);
  const [selectedLaterality, setSelectedLaterality] = useState('');
  const [selectedBreathSoundOptions, setSelectedBreathSoundOptions] = useState('');
  const [selectedLateralityOptionsopt, setSelectedLateralityOptionsopt] = useState('');
  const [selectedImagingOptions, setSelectedImagingOptions] = useState('');
  const [selectedDiagnosisOptions, setSelectedDiagnosisOptions] = useState([]);
  const [selectedConfirmedDiagnosisOptions, setSelectedConfirmedDiagnosisOptions] = useState([]);
  const [selectedRelapseOption, setSelectedRelapseOption] = useState([]);
  const [selectedPastSurgicalHistory, setSelectedPastSurgicalHistory] = useState([]);
  const [selectedRespiratorySystem, setSelectedRespiratorySystem] = useState([]);
  const [selectedCardiovascularSystem, setSelectedCardiovascularSystem] = useState([]);
  const [selectedRenalSystem, setSelectedRenalSystem] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCurrentmedication, setShowCurrentmedication] = useState(false);
  const [loadingBarProgress, setLoadingBarProgress] = useState(0);
  const [showLoadingPage, setShowLoadingPage] = useState(false);
  const [progress, setProgress] = useState(0);



  // Function to set the patientId
  const handlePersonalDetailsSubmit = (organ, patientid) => {
    setLoadingBarProgress(40); // Set the loading bar progress to a value between 0 and 100
    setSelectedOrgan(organ);
    setSelectedpatientID(patientid);
  
    // Simulate a delay before showing OrganDetails
    setTimeout(() => {
      setShowOrganDetails(true);
      setLoadingBarProgress(100); // Set the loading bar progress to 100 when the transition is complete
    }, 2000); // Adjust the duration as needed
  };
  


  const handleOrganDetailsSubmit = (pastMedicalHistory, chiefOptions, lungOptions) => {
    setLoadingBarProgress(40); // Set the loading bar progress to indicate loading
  
    // Simulate data processing with a delay
    setTimeout(() => {
      // Your data processing code here
  
      // After data processing is complete, update the progress to 100
      setLoadingBarProgress(100);
  
      // Trigger the next step of your application
      setSelectedPastMedicalHistory(pastMedicalHistory);
      setSelectedChiefOptions(chiefOptions);
      setSelectedLungOptions(lungOptions);
      setShowThirdBlock(true);
    }, 2000); // Adjust the duration (in milliseconds) as needed
  };
  
  const handleThirdblockNext = (laterality, breathSoundOptions, lateralityOptionsopt, imagingOptions, diagnosisOptions, confirmedDiagnosisOptions, relapseOption) => {
    setLoadingBarProgress(40); // Set the loading bar progress to indicate loading
  
    // Simulate data processing with a delay
    setTimeout(() => {
      setSelectedLaterality(laterality);
      setSelectedBreathSoundOptions(breathSoundOptions);
      setSelectedLateralityOptionsopt(lateralityOptionsopt);
      setSelectedImagingOptions(imagingOptions);
      setSelectedDiagnosisOptions(diagnosisOptions);
      setSelectedConfirmedDiagnosisOptions(confirmedDiagnosisOptions);
      setSelectedRelapseOption(relapseOption);
      setShowFourthBlock(true);
      
      // After data processing is complete, update the progress to 100
      setLoadingBarProgress(100);
    }, 2000); // Adjust the duration (in milliseconds) as needed
  };
  
  const handleFourthblockNext = (selectedPastSurgicalHistory, selectedRespiratorySystem, selectedCardiovascularSystem, selectedRenalSystem) => {
    setLoadingBarProgress(40); // Set the loading bar progress to indicate loading
  
    // Simulate data processing with a delay
    setTimeout(() => {
      setSelectedPastSurgicalHistory(selectedPastSurgicalHistory);
      setSelectedRespiratorySystem(selectedRespiratorySystem);
      setSelectedCardiovascularSystem(selectedCardiovascularSystem);
      setSelectedRenalSystem(selectedRenalSystem);
      setShowCurrentmedication(true);
      
      // After data processing is complete, update the progress to 100
      setLoadingBarProgress(100);
    }, 2000); // Adjust the duration (in milliseconds) as needed
  };
  
  const handleCurrentMedicationblockNext = () => {
    setLoadingBarProgress(40); // Set the loading bar progress to indicate loading
  
    // Simulate data processing with a delay
    setTimeout(() => {
      setShowFifthBlock(true);
      
      // After data processing is complete, update the progress to 100
      setLoadingBarProgress(100);
    }, 2000); // Adjust the duration (in milliseconds) as needed
  };
  
  const handleFifthblockNext = () => {
    setShowLoadingPage(true); // Show the loading page
    setProgress(0); // Initialize the progress to 0
  
    const increment = 5; // Adjust the increment value as needed
    const totalDuration = 2000; // Total duration for the progress (in milliseconds)
  
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + increment); // Use the function form of setProgress
      }
    }, (totalDuration / 100) * increment);
  
    // After the totalDuration, hide the loading page and show the Success component
    setTimeout(() => {
      clearInterval(interval);
      setShowLoadingPage(false);
      setShowSuccess(true);
    }, totalDuration);
  };


  
  
  return (
    <>
    <LoadingBar
      color="#893487"
      progress={loadingBarProgress}
      style={{ height: '5px' }} // Set the loading progress
    />

      {/* <Navbar /> */}
      <ToastContainer />
      
      {showLoadingPage ? (
      <div className="loading-page">
      <div className="loading-content">
        <p>Please wait, generating the best treatment plan for you...</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
    ) : showSuccess ? (
        <Success
          selectedpatientID={selectedpatientID}
        />
      ) : showFifthBlock ? (
        <FifthBlock
          selectedPastSurgicalHistory={selectedPastSurgicalHistory}
          selectedpatientID={selectedpatientID}
          onSubmit={handleFifthblockNext} 
        />
      ): showCurrentmedication ? (
        <Currentmedicationblock 
          selectedOrgan={selectedOrgan}
          selectedPastSurgicalHistory={selectedPastSurgicalHistory}
          selectedRespiratorySystem={selectedRespiratorySystem}
          selectedCardiovascularSystem={selectedCardiovascularSystem}
          selectedRenalSystem={selectedRenalSystem}
          selectedPastMedicalHistory={selectedPastMedicalHistory}
          selectedChiefOptions={selectedChiefOptions}
          selectedLungOptions={selectedLungOptions}
          selectedLaterality={selectedLaterality}
          selectedBreathSoundOptions={selectedBreathSoundOptions}
          selectedLateralityOptionsopt={selectedLateralityOptionsopt}
          selectedImagingOptions={selectedImagingOptions}
          selectedDiagnosisOptions={selectedDiagnosisOptions}
          selectedConfirmedDiagnosisOptions={selectedConfirmedDiagnosisOptions}
          selectedRelapseOption={selectedRelapseOption}
          selectedpatientID={selectedpatientID}
          onSubmit={handleCurrentMedicationblockNext}
        />
      ) : showFourthBlock ? (
        <FourthBlock
          selectedOrgan={selectedOrgan}
          selectedPastMedicalHistory={selectedPastMedicalHistory}
          selectedChiefOptions={selectedChiefOptions}
          selectedLungOptions={selectedLungOptions}
          selectedLaterality={selectedLaterality}
          selectedBreathSoundOptions={selectedBreathSoundOptions}
          selectedLateralityOptionsopt={selectedLateralityOptionsopt}
          selectedImagingOptions={selectedImagingOptions}
          selectedDiagnosisOptions={selectedDiagnosisOptions}
          selectedpatientID={selectedpatientID}
          selectedConfirmedDiagnosisOptions={selectedConfirmedDiagnosisOptions}
          selectedRelapseOption={selectedRelapseOption}
          onSubmit={handleFourthblockNext}
        />
      ) : showThirdBlock ? (
        <ThirdBlock
          selectedOrgan={selectedOrgan}
          selectedPastMedicalHistory={selectedPastMedicalHistory}
          selectedChiefOptions={selectedChiefOptions}
          selectedpatientID={selectedpatientID}
          selectedLungOptions={selectedLungOptions}
          onSubmit={handleThirdblockNext}
        />
      ) : showOrganDetails ? (
        <OrganDetails
          selectedOrgan={selectedOrgan}
          selectedpatientID={selectedpatientID}
          onSubmit={handleOrganDetailsSubmit}
        />
      ) : (
        
        <Personaldetails onSubmit={handlePersonalDetailsSubmit}/>
      )}
     
    </>
  );
}

export default Addpatient;

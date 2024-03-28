import React, { useState } from 'react';
import { FaPlusCircle, FaTimesCircle  } from 'react-icons/fa';

function FourthBlock({
  selectedOrgan,
  selectedPastMedicalHistory,
  selectedChiefOptions,
  selectedLungOptions,
  selectedLaterality,
  selectedBreathSoundOptions,
  selectedLateralityOptionsopt,
  selectedImagingOptions,
  selectedDiagnosisOptions,
  selectedConfirmedDiagnosisOptions,
  selectedpatientID,
  selectedRelapseOption,
  onSubmit,
  onBack
}) {
  const [selectedPastSurgicalHistory, setSelectedPastSurgicalHistory] = useState([]);
 
  

  const [showpastsurgicalhistoryTextField, setShowpastsurgicalhistoryTextField] = useState(false);

  const handleAddpastsurgicalhistoryFreeTextClick = () => {
    setShowpastsurgicalhistoryTextField(!showpastsurgicalhistoryTextField);
  };

  const [showRespiratorySystemTextField, setShowRespiratorySystemTextField] = useState(false);

  const handleAddRespiratorySystemFreeTextClick = () => {
    setShowRespiratorySystemTextField(!showRespiratorySystemTextField);
  };

  const [showCardiovascularSystemTextField, setShowCardiovascularSystemTextField] = useState(false);

  const handleAddCardiovascularSystemFreeTextClick = () => {
    setShowCardiovascularSystemTextField(!showCardiovascularSystemTextField);
  };

  const [showRenalSystemTextField, setShowRenalSystemTextField] = useState(false);

  const handleAddRenalSystemFreeTextClick = () => {
    setShowRenalSystemTextField(!showRenalSystemTextField);
  };

    // Function to handle options selection for Past Surgical History
    const handlePastSurgicalHistoryOptionChange = (option) => {
      if (selectedPastSurgicalHistory.includes(option)) {
        setSelectedPastSurgicalHistory((prevSelected) =>
          prevSelected.filter((item) => item !== option)
        );
      } else {
        setSelectedPastSurgicalHistory((prevSelected) => [...prevSelected, option]);
      }
    };
    const [selectedRespiratorySystem , setselectedRespiratorySystem] = useState([]);
  // const [showRespiratorySystemOptions, setShowRespiratorySystemOptions] = useState(false);
  // // const handleRespiratorySystemChange = (isChecked) => {
  // //   setShowRespiratorySystemOptions(isChecked);
  // // };

    // Function to handle options selection for Respiratory System
  const handleRespiratorySystemOptionChange = (option) => {
    if (selectedRespiratorySystem.includes(option)) {
      setselectedRespiratorySystem((prevSelected) =>
        prevSelected.filter((item) => item !== option)
      );
    } else {
      setselectedRespiratorySystem((prevSelected) => [...prevSelected, option]);
    }
  };
  const [selectedCardiovascularSystem, setSelectedCardiovascularSystem] = useState([]);
 
   // Function to handle options selection for Cardiovascular System
   const handleCardiovascularSystemOptionChange = (option) => {
    if (selectedCardiovascularSystem.includes(option)) {
      setSelectedCardiovascularSystem((prevSelected) =>
        prevSelected.filter((item) => item !== option)
      );
    } else {
      setSelectedCardiovascularSystem((prevSelected) => [...prevSelected, option]);
    }
  };

  const [selectedRenalSystem, setSelectedRenalSystem] = useState([]);
  
   // Function to handle options selection for Renal System
   const handleRenalSystemOptionChange = (option) => {
    if (selectedRenalSystem.includes(option)) {
      setSelectedRenalSystem((prevSelected) =>
        prevSelected.filter((item) => item !== option)
      );
    } else {
      setSelectedRenalSystem((prevSelected) => [...prevSelected, option]);
    }
  };
  

  
 

  

  const handleFourthblockNext = () => {
    onSubmit(selectedPastSurgicalHistory,selectedRespiratorySystem,selectedCardiovascularSystem,selectedRenalSystem);
  };
  const [formData, setFormData] = useState({
    patientId: '', // Include patientId directly from the state
    pastSurgicalHistoryOption: '',
    respiratorySystemOption: '',
    cardiovascularSystemOption:'',
    renalSystemOption:''
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Join the selected options into a comma-separated string
      const pastSurgicalHistoryOption = selectedPastSurgicalHistory.length > 0 ? selectedPastSurgicalHistory.join(','): 'No Past Surgical History';
      // const lateralityOption = selectedLateralityOptions.join(',');
      const respiratorySystemOption = selectedRespiratorySystem.join(',') ;
      const cardiovascularSystemOption = selectedCardiovascularSystem.join(',');
      const renalSystemOption = selectedRenalSystem.join(',');
      // const relapseChoice = selectedRelapseOption.join(',') ;
      // const substanceAbuseOption = selectedsubstanceAOptions.length > 0 ? selectedsubstanceAOptions.join(',') : 'NOT SELECTED'; 
      const freePastSurgicalHistoryInput = document.querySelector('input[name="freepastsurgicalhistory"]');
      const freeRespiratorySystemInput = document.querySelector('input[name="freerespiratorysystem"]');
      const freeCardiovascularSystemInput = document.querySelector('input[name="freecardiovascularsystem"]');
      const freeRenalSystemInput = document.querySelector('input[name="freerenalsystem"]');

      // Get the values from the input elements
      const freePastSurgicalHistory = freePastSurgicalHistoryInput ? freePastSurgicalHistoryInput.value : '';
      const freeRespiratorySystem = freeRespiratorySystemInput ? freeRespiratorySystemInput.value : '';
      const freeCardiovascularSystem = freeCardiovascularSystemInput ? freeCardiovascularSystemInput.value : '';
      const freeRenalSystem = freeRenalSystemInput ? freeRenalSystemInput.value : '';
  
      const dataToSend = { patientId: formData.patientId, pastSurgicalHistoryOption, respiratorySystemOption, cardiovascularSystemOption, renalSystemOption, freePastSurgicalHistory, freeRespiratorySystem, freeCardiovascularSystem, freeRenalSystem};
  
      console.log('Form Data:', dataToSend);
  
      const response = await fetch('http://3.16.11.52:5000/fourth_block_option', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
  
      if (response.ok) {
        const data = await response.json();
        
        console.log('Data saved successfully:', data);
        // Redirect to the next page if needed
      } else {
        console.error('Error:', response.status, response.statusText);
        // Handle the error response here
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="container mt-4">
      <form onSubmit={handleSubmit} />
        {/* past surgical history started */}
        <div className="container">
        <div className='patientid col-md-12'>
      <div style={{textAlign: 'center'}}>
        <h3 className='pathed p-2' type='text'
    value={formData.patientId = selectedpatientID}
    onChange={handleInputChange} name="patientid"
     disabled >
          <b>Patient ID:</b> {selectedpatientID}
        </h3>
      </div>
    </div>
          <div className="row mt-4">
            <div className="col-md-2 d-flex align-items-center">
              <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>Past Surgical History</b>
              </h1>
              {/* <div className="form-check form-switch ml-2" style={{ marginLeft: '15%' }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  checked={showPastSurgicalHistoryOptions}
                  onChange={(e) => handlePastSurgicalHistoryChange(e.target.checked)}
                  style={{ fontSize: '1rem', transform: 'scale(1.2)' }}
                />
              </div> */}
            </div>

            <div className="col-md-6 ms-4">
              {/* Additional options for Breath Sound */}
              {selectedOrgan && (
               
               <div className="rah">
               <div className="marital d-flex align-items-center">
                 {/* Content for Past Surgical History Options */}
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedPastSurgicalHistory.includes('Appendectomy') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="pastSurgicalHistoryOption"
                     value="Appendectomy"
                     style={{ visibility: 'hidden' }}
                     checked={selectedPastSurgicalHistory.includes('Appendectomy')}
                     onChange={() => handlePastSurgicalHistoryOptionChange('Appendectomy')}
                   />
                   Appendectomy &nbsp;&nbsp;
                 </label>
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedPastSurgicalHistory.includes('Cholecystectomy') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="pastSurgicalHistoryOption"
                     value="Cholecystectomy"
                     style={{ visibility: 'hidden' }}
                     checked={selectedPastSurgicalHistory.includes('Cholecystectomy')}
                     onChange={() => handlePastSurgicalHistoryOptionChange('Cholecystectomy')}
                   />
                   Cholecystectomy &nbsp;&nbsp;
                 </label>
                 </div>
                 <div className="marital d-flex align-items-center">
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedPastSurgicalHistory.includes('Coronary Artery Bypass') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="pastSurgicalHistoryOption"
                     value="Coronary Artery Bypass"
                     style={{ visibility: 'hidden' }}
                     checked={selectedPastSurgicalHistory.includes('Coronary Artery Bypass')}
                     onChange={() => handlePastSurgicalHistoryOptionChange('Coronary Artery Bypass')}
                   />
                   Coronary Artery Bypass &nbsp;&nbsp;
                 </label>
                 
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedPastSurgicalHistory.includes('Hysterectomy') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="pastSurgicalHistoryOption"
                     value="Hysterectomy"
                     style={{ visibility: 'hidden' }}
                     checked={selectedPastSurgicalHistory.includes('Hysterectomy')}
                     onChange={() => handlePastSurgicalHistoryOptionChange('Hysterectomy')}
                   />
                   Hysterectomy &nbsp;&nbsp;
                 </label>
                 </div>
                 <div className="marital d-flex align-items-center">
                 <label
                  className={`maritalcircle p-2 m-3 ${selectedPastSurgicalHistory.includes('Inguinal Hernia Repair') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="pastSurgicalHistoryOption"
                    value="Inguinal Hernia Repair"
                    style={{ visibility: 'hidden' }}
                    checked={selectedPastSurgicalHistory.includes('Inguinal Hernia Repair')}
                    onChange={() => handlePastSurgicalHistoryOptionChange('Inguinal Hernia Repair')}
                  />
                  Inguinal Hernia Repair &nbsp;&nbsp;
                </label>
               
                <label
                  className={`maritalcircle p-2 m-3 ${selectedPastSurgicalHistory.includes('Oophorectomy') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="pastSurgicalHistoryOption"
                    value="Oophorectomy"
                    style={{ visibility: 'hidden' }}
                    checked={selectedPastSurgicalHistory.includes('Oophorectomy')}
                    onChange={() => handlePastSurgicalHistoryOptionChange('Oophorectomy')}
                  />
                  Oophorectomy &nbsp;&nbsp;
                </label>
                </div>
                 <div className="marital d-flex align-items-center">
                {/* Add more cloned options as needed */}
                <label
                  className={`maritalcircle p-2 m-3 ${selectedPastSurgicalHistory.includes('Vasectomy') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="pastSurgicalHistoryOption"
                    value="Vasectomy"
                    style={{ visibility: 'hidden' }}
                    checked={selectedPastSurgicalHistory.includes('Vasectomy')}
                    onChange={() => handlePastSurgicalHistoryOptionChange('Vasectomy')}
                  />
                  Vasectomy &nbsp;&nbsp;
                </label>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedPastSurgicalHistory.includes('Whipple Surgery') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="pastSurgicalHistoryOption"
                    value="Whipple Surgery"
                    style={{ visibility: 'hidden' }}
                    checked={selectedPastSurgicalHistory.includes('Whipple Surgery')}
                    onChange={() => handlePastSurgicalHistoryOptionChange('Whipple Surgery')}
                  />
                  Whipple Surgery &nbsp;&nbsp;
                </label>
               </div>
             </div>

              )}
            </div>

            <div className="col-md-3 ms-auto text-align-right">
              <div className="row">
                <div className="col-md-12" style={{ marginLeft: '20%' }}>
                  <button className="btn" style={{ color: '#fff' }} onClick={handleAddpastsurgicalhistoryFreeTextClick}>
                    <div className="pulser">
                    {showpastsurgicalhistoryTextField ? (
                <FaTimesCircle /> // Display close button when input is shown
              ) : (
                <FaPlusCircle /> // Display plus icon when input is hidden
              )}
                    </div>
                  </button>
                </div>
              </div>
              {showpastsurgicalhistoryTextField && (
                <div className="row mt-3">
                  <div className="col-md-12 offset-md-2">
                    <input
                      type="text"
                      style={{ border: '1px solid #000', borderRadius: '10px' }}
                      className="form-control"
                      name='freepastsurgicalhistory'
                      placeholder="Enter Past Surgical History Option"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* past surgical history ended */}
      
        {/* repiratory option started */}
          {Array.isArray(selectedPastMedicalHistory) && selectedPastMedicalHistory.includes('Respiratory') && (

              <div className="container mt-4">
                <hr/>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
              <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>Respiratory System</b>
              </h1>
              </div>
              <div className="col-md-6 ms-4">
              {/* Additional options for Breath Sound */}
              {selectedOrgan && (
                <div className="ddd">
                            <div className="marital d-flex align-items-center">
                              {/* Content for Respiratory System Options */}
                              <label
                                className={`maritalcircle p-2 m-3 ${selectedRespiratorySystem.includes('Asthma') ? 'active' : ''}`}
                              >
                                <input
                                  type="checkbox"
                                  name="respiratorySystemOption"
                                  value="Asthma"
                                  style={{ visibility: 'hidden' }}
                                  checked={selectedRespiratorySystem.includes('Asthma')}
                                  onChange={() => handleRespiratorySystemOptionChange('Asthma')}
                                />
                                Asthma &nbsp;&nbsp;
                              </label>
                              <label
                                className={`maritalcircle p-2 m-3 ${selectedRespiratorySystem.includes('Bronchiectasis') ? 'active' : ''}`}
                              >
                                <input
                                  type="checkbox"
                                  name="respiratorySystemOption"
                                  value="Bronchiectasis"
                                  style={{ visibility: 'hidden' }}
                                  checked={selectedRespiratorySystem.includes('Bronchiectasis')}
                                  onChange={() => handleRespiratorySystemOptionChange('Bronchiectasis')}
                                />
                                Bronchiectasis &nbsp;&nbsp;
                              </label>
                              {/* Add more cloned options as needed */}
                              <label
                                className={`maritalcircle p-2 m-3 ${selectedRespiratorySystem.includes('Covid-19') ? 'active' : ''}`}
                              >
                                <input
                                  type="checkbox"
                                  name="respiratorySystemOption"
                                  value="Covid-19"
                                  style={{ visibility: 'hidden' }}
                                  checked={selectedRespiratorySystem.includes('Covid-19')}
                                  onChange={() => handleRespiratorySystemOptionChange('Covid-19')}
                                />
                                Covid - 19 &nbsp;&nbsp;
                              </label>
                              </div>
                              <div className="marital d-flex align-items-center" >
                              <label
                                className={`maritalcircle p-2 m-3 ${selectedRespiratorySystem.includes('Chronic Obstructive Pulmonary Disease') ? 'active' : ''}`}
                              >
                                <input
                                  type="checkbox"
                                  name="respiratorySystemOption"
                                  value="Chronic Obstructive Pulmonary Disease"
                                  style={{ visibility: 'hidden' }}
                                  checked={selectedRespiratorySystem.includes('Chronic Obstructive Pulmonary Disease')}
                                  onChange={() => handleRespiratorySystemOptionChange('Chronic Obstructive Pulmonary Disease')}
                                />
                                Chronic Obstructive Pulmonary Disease (COPD) &nbsp;&nbsp;
                              </label>
                              </div>
                              <div className="marital d-flex align-items-center" >
                              <label
                                className={`maritalcircle p-2 m-3 ${selectedRespiratorySystem.includes('Cystic Fibrosis') ? 'active' : ''}`}
                              >
                                <input
                                  type="checkbox"
                                  name="respiratorySystemOption"
                                  value="Cystic Fibrosis"
                                  style={{ visibility: 'hidden' }}
                                  checked={selectedRespiratorySystem.includes('Cystic Fibrosis')}
                                  onChange={() => handleRespiratorySystemOptionChange('Cystic Fibrosis')}
                                />
                                Cystic Fibrosis &nbsp;&nbsp;
                              </label>
                              <label
                                className={`maritalcircle p-2 m-3 ${selectedRespiratorySystem.includes('Interstitial Lung Disease') ? 'active' : ''}`}
                              >
                                <input
                                  type="checkbox"
                                  name="respiratorySystemOption"
                                  value="Interstitial Lung Disease"
                                  style={{ visibility: 'hidden' }}
                                  checked={selectedRespiratorySystem.includes('Interstitial Lung Disease')}
                                  onChange={() => handleRespiratorySystemOptionChange('Interstitial Lung Disease')}
                                />
                                Interstitial Lung Disease (ILD) &nbsp;&nbsp;
                              </label>
                              </div>
                              <div className="marital d-flex align-items-center" >
                              <label
                                className={`maritalcircle p-2 m-3 ${selectedRespiratorySystem.includes('Lung Fibrosis') ? 'active' : ''}`}
                              >
                                <input
                                  type="checkbox"
                                  name="respiratorySystemOption"
                                  value="Lung Fibrosis"
                                  style={{ visibility: 'hidden' }}
                                  checked={selectedRespiratorySystem.includes('Lung Fibrosis')}
                                  onChange={() => handleRespiratorySystemOptionChange('Lung Fibrosis')}
                                />
                                Lung Fibrosis &nbsp;&nbsp;
                              </label>
                              <label
                                className={`maritalcircle p-2 m-3 ${selectedRespiratorySystem.includes('Pleural Effusion') ? 'active' : ''}`}
                              >
                                <input
                                  type="checkbox"
                                  name="respiratorySystemOption"
                                  value="Pleural Effusion"
                                  style={{ visibility: 'hidden' }}
                                  checked={selectedRespiratorySystem.includes('Pleural Effusion')}
                                  onChange={() => handleRespiratorySystemOptionChange('Pleural Effusion')}
                                />
                                Pleural Effusion &nbsp;&nbsp;
                              </label>
                              <label
                                className={`maritalcircle p-2 m-3 ${selectedRespiratorySystem.includes('Pneumonia') ? 'active' : ''}`}
                              >
                                <input
                                  type="checkbox"
                                  name="respiratorySystemOption"
                                  value="Pneumonia"
                                  style={{ visibility: 'hidden' }}
                                  checked={selectedRespiratorySystem.includes('Pneumonia')}
                                  onChange={() => handleRespiratorySystemOptionChange('Pneumonia')}
                                />
                                Pneumonia &nbsp;&nbsp;
                              </label>
                              </div>
                              <div className="marital d-flex align-items-center" >
                              <label
                                className={`maritalcircle p-2 m-3 ${selectedRespiratorySystem.includes('Pulmonary Embolism') ? 'active' : ''}`}
                              >
                                <input
                                  type="checkbox"
                                  name="respiratorySystemOption"
                                  value="Pulmonary Embolism"
                                  style={{ visibility: 'hidden' }}
                                  checked={selectedRespiratorySystem.includes('Pulmonary Embolism')}
                                  onChange={() => handleRespiratorySystemOptionChange('Pulmonary Embolism')}
                                />
                                Pulmonary Embolism &nbsp;&nbsp;
                              </label>
                            </div>
                          </div>
                
              )}
              </div>


              <div className="col-md-3 ms-auto text-align-right">
                            <div className="row">
                              <div className="col-md-12" style={{ marginLeft: '20%' }}>
                                <button className="btn" style={{ color: '#fff' }} onClick={handleAddRespiratorySystemFreeTextClick}>
                                  <div className="pulser">
                                  {showRespiratorySystemTextField ? (
                <FaTimesCircle /> // Display close button when input is shown
              ) : (
                <FaPlusCircle /> // Display plus icon when input is hidden
              )}
                                  </div>
                                </button>
                              </div>
                            </div>
                            {showRespiratorySystemTextField && (
                              <div className="row mt-3">
                                <div className="col-md-12 offset-md-2">
                                  <input
                                    type="text"
                                    style={{ border: '1px solid #000', borderRadius: '10px' }}
                                    className="form-control"
                                    name='freerespiratorysystem'
                                    placeholder="Enter Respiratory Option"
                                  />
                                </div>
                              </div>
                            )}
                          </div>

              </div>
              </div>
          )}
          
        {/* respiratory option ended */}
         {/* Cardiovascular option started */}
         {selectedPastMedicalHistory.includes('Cardiovascular') && (

<div className="container mt-4">
  <hr/>
<div className="row">
<div className="col-md-2 d-flex align-items-center">
<h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
  <b>Cardiovascular System</b>
</h1>

</div>

<div className="col-md-6 ms-4">
{selectedOrgan && (
 <div className="dsd">
 <div className="marital d-flex align-items-center">
   {/* Content for Cardiovascular System Options */}
   <label
     className={`maritalcircle p-2 m-3 ${selectedCardiovascularSystem.includes('Coronary Artery Disease') ? 'active' : ''}`}
   >
     <input
       type="checkbox"
       name="cardiovascularSystemOption"
       value="Coronary Artery Disease"
       style={{ visibility: 'hidden' }}
       checked={selectedCardiovascularSystem.includes('Coronary Artery Disease')}
       onChange={() => handleCardiovascularSystemOptionChange('Coronary Artery Disease')}
     />
     Coronary Artery Disease &nbsp;&nbsp;
   </label>
   {/* <label
     className={`maritalcircle p-2 m-3 ${selectedCardiovascularSystem.includes('Hypertension') ? 'active' : ''}`}
   >
     <input
       type="checkbox"
       name="cardiovascularSystemOption"
       value="Hypertension"
       style={{ visibility: 'hidden' }}
       checked={selectedCardiovascularSystem.includes('Hypertension')}
       onChange={() => handleCardiovascularSystemOptionChange('Hypertension')}
     />
     Hypertension &nbsp;&nbsp;
   </label> */}
   </div>
   <div className="marital d-flex align-items-center">
   <label
     className={`maritalcircle p-2 m-3 ${selectedCardiovascularSystem.includes('Myocardial Infarction') ? 'active' : ''}`}
   >
     <input
       type="checkbox"
       name="cardiovascularSystemOption"
       value="Myocardial Infarction"
       style={{ visibility: 'hidden' }}
       checked={selectedCardiovascularSystem.includes('Myocardial Infarction')}
       onChange={() => handleCardiovascularSystemOptionChange('Myocardial Infarction')}
     />
     Myocardial Infarction (Heart Attack) &nbsp;&nbsp;
   </label>
   </div>
   <div className="marital d-flex align-items-center">
   <label
                  className={`maritalcircle p-2 m-3 ${selectedCardiovascularSystem.includes('Peripheral Artery Disease') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="cardiovascularSystemOption"
                    value="Peripheral Artery Disease"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCardiovascularSystem.includes('Peripheral Artery Disease')}
                    onChange={() => handleCardiovascularSystemOptionChange('Peripheral Artery Disease')}
                  />
                  Peripheral Artery Disease (PAD) &nbsp;&nbsp;
                </label>
                </div>
   <div className="marital d-flex align-items-center">
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCardiovascularSystem.includes('Rheumatic Heart Disease') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="cardiovascularSystemOption"
                    value="Rheumatic Heart Disease"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCardiovascularSystem.includes('Rheumatic Heart Disease')}
                    onChange={() => handleCardiovascularSystemOptionChange('Rheumatic Heart Disease')}
                  />
                  Rheumatic Heart Disease &nbsp;&nbsp;
                </label>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCardiovascularSystem.includes('Valvular Heart Disease') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="cardiovascularSystemOption"
                    value="Valvular Heart Disease"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCardiovascularSystem.includes('Valvular Heart Disease')}
                    onChange={() => handleCardiovascularSystemOptionChange('Valvular Heart Disease')}
                  />
                  Valvular Heart Disease &nbsp;&nbsp;
                </label>
            
   {/* Add more cloned options as needed */}
 </div>
</div>
  
)}


</div>
<div className="col-md-3 ms-auto text-align-right">
              <div className="row">
                <div className="col-md-12" style={{ marginLeft: '20%' }}>
                  <button className="btn" style={{ color: '#fff' }} onClick={handleAddCardiovascularSystemFreeTextClick}>
                    <div className="pulser">
                    {showCardiovascularSystemTextField ? (
                <FaTimesCircle /> // Display close button when input is shown
              ) : (
                <FaPlusCircle /> // Display plus icon when input is hidden
              )}
                    </div>
                  </button>
                </div>
              </div>
              {showCardiovascularSystemTextField && (
                <div className="row mt-3">
                  <div className="col-md-12 offset-md-2">
                    <input
                      type="text"
                      style={{ border: '1px solid #000', borderRadius: '10px' }}
                      className="form-control"
                      name='freecardiovascularsystem'
                      placeholder="Enter Cardiovascular Option"
                    />
                  </div>
                </div>
              )}
            </div>

</div>
</div>
          )}
       
        
       
        {/* Cardiovascular option ended */}
        {/* Renal option started */}
        {selectedPastMedicalHistory.includes('Renal') && (

<div className="container mt-4">
  <hr/>
<div className="row">
<div className="col-md-2 d-flex align-items-center">
<h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
  <b>Renal System</b>
</h1>
</div>

<div className="col-md-6 ms-4">
{selectedOrgan && (
 <div className="jsj">
 <div className="marital d-flex align-items-center">
   {/* Content for Renal System Options */}
   <label
     className={`maritalcircle p-2 m-3 ${selectedRenalSystem.includes('Acute Kidney Injury') ? 'active' : ''}`}
   >
     <input
       type="checkbox"
       name="renalSystemOption"
       value="Acute Kidney Injury"
       style={{ visibility: 'hidden' }}
       checked={selectedRenalSystem.includes('Acute Kidney Injury')}
       onChange={() => handleRenalSystemOptionChange('Acute Kidney Injury')}
     />
     Acute Kidney Injury (AKI) &nbsp;&nbsp;
   </label>
   <label
     className={`maritalcircle p-2 m-3 ${selectedRenalSystem.includes('Chronic Kidney Disease') ? 'active' : ''}`}
   >
     <input
       type="checkbox"
       name="renalSystemOption"
       value="Chronic Kidney Disease"
       style={{ visibility: 'hidden' }}
       checked={selectedRenalSystem.includes('Chronic Kidney Disease')}
       onChange={() => handleRenalSystemOptionChange('Chronic Kidney Disease')}
     />
     Chronic Kidney Disease&nbsp;&nbsp;
   </label>
   </div>
 <div className="marital d-flex align-items-center" >
   <label
     className={`maritalcircle p-2 m-3 ${selectedRenalSystem.includes('Cystitis') ? 'active' : ''}`}
   >
     <input
       type="checkbox"
       name="renalSystemOption"
       value="Cystitis"
       style={{ visibility: 'hidden' }}
       checked={selectedRenalSystem.includes('Cystitis')}
       onChange={() => handleRenalSystemOptionChange('Cystitis')}
     />
     Cystitis &nbsp;&nbsp;
   </label>
   
   <label
                  className={`maritalcircle p-2 m-3 ${selectedRenalSystem.includes('Diabetic Nephropathy') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="renalSystemOption"
                    value="Diabetic Nephropathy"
                    style={{ visibility: 'hidden' }}
                    checked={selectedRenalSystem.includes('Diabetic Nephropathy')}
                    onChange={() => handleRenalSystemOptionChange('Diabetic Nephropathy')}
                  />
                  Diabetic Nephropathy &nbsp;&nbsp;
                </label>
                </div>
 <div className="marital d-flex align-items-center">
                <label
                  className={`maritalcircle p-2 m-3 ${selectedRenalSystem.includes('Glomerulonephritis') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="renalSystemOption"
                    value="Glomerulonephritis"
                    style={{ visibility: 'hidden' }}
                    checked={selectedRenalSystem.includes('Glomerulonephritis')}
                    onChange={() => handleRenalSystemOptionChange('Glomerulonephritis')}
                  />
                  Glomerulonephritis &nbsp;&nbsp;
                </label>
                
                <label
                  className={`maritalcircle p-2 m-3 ${selectedRenalSystem.includes('Hypertensive Nephropathy') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="renalSystemOption"
                    value="Hypertensive Nephropathy"
                    style={{ visibility: 'hidden' }}
                    checked={selectedRenalSystem.includes('Hypertensive Nephropathy')}
                    onChange={() => handleRenalSystemOptionChange('Hypertensive Nephropathy')}
                  />
                  Hypertensive Nephropathy &nbsp;&nbsp;
                </label>

                </div>
 <div className="marital d-flex align-items-center" >
                <label
                  className={`maritalcircle p-2 m-3 ${selectedRenalSystem.includes('Kidney Stones') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="renalSystemOption"
                    value="Kidney Stones"
                    style={{ visibility: 'hidden' }}
                    checked={selectedRenalSystem.includes('Kidney Stones')}
                    onChange={() => handleRenalSystemOptionChange('Kidney Stones')}
                  />
                  Kidney Stones &nbsp;&nbsp;
                </label>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedRenalSystem.includes('Nephrotic Syndrome') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="renalSystemOption"
                    value="Nephrotic Syndrome"
                    style={{ visibility: 'hidden' }}
                    checked={selectedRenalSystem.includes('Nephrotic Syndrome')}
                    onChange={() => handleRenalSystemOptionChange('Nephrotic Syndrome')}
                  />
                  Nephrotic Syndrome &nbsp;&nbsp;
                </label>
                </div>
 <div className="marital d-flex align-items-center">
                <label
                  className={`maritalcircle p-2 m-3 ${selectedRenalSystem.includes('Polycystic Kidney Disease') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="renalSystemOption"
                    value="Polycystic Kidney Disease"
                    style={{ visibility: 'hidden' }}
                    checked={selectedRenalSystem.includes('Polycystic Kidney Disease')}
                    onChange={() => handleRenalSystemOptionChange('Polycystic Kidney Disease')}
                  />
                  Polycystic Kidney Disease &nbsp;&nbsp;
                </label>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedRenalSystem.includes('Pyelonephritis') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="renalSystemOption"
                    value="Pyelonephritis"
                    style={{ visibility: 'hidden' }}
                    checked={selectedRenalSystem.includes('Pyelonephritis')}
                    onChange={() => handleRenalSystemOptionChange('Pyelonephritis')}
                  />
                  Pyelonephritis &nbsp;&nbsp;
                </label>
                </div>
 <div className="marital d-flex align-items-center">
                <label
                  className={`maritalcircle p-2 m-3 ${selectedRenalSystem.includes('Urinary Tract Infections') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="renalSystemOption"
                    value="Urinary Tract Infections"
                    style={{ visibility: 'hidden' }}
                    checked={selectedRenalSystem.includes('Urinary Tract Infections')}
                    onChange={() => handleRenalSystemOptionChange('Urinary Tract Infections')}
                  />
                  Urinary Tract Infections (UTIs) &nbsp;&nbsp;
                </label>
   {/* Add more cloned options as needed */}
 </div>
</div>
  
)}
</div>
<div className="col-md-3 ms-auto text-align-right">
              <div className="row">
                <div className="col-md-12" style={{ marginLeft: '20%' }}>
                  <button className="btn" style={{ color: '#fff' }} onClick={handleAddRenalSystemFreeTextClick}>
                    <div className="pulser">
                    {showRenalSystemTextField ? (
                <FaTimesCircle /> // Display close button when input is shown
              ) : (
                <FaPlusCircle /> // Display plus icon when input is hidden
              )}
                    </div>
                  </button>
                </div>
              </div>
              {showRenalSystemTextField && (
                <div className="row mt-3">
                  <div className="col-md-12 offset-md-2">
                    <input
                      type="text"
                      style={{ border: '1px solid #000', borderRadius: '10px' }}
                      className="form-control"
                      name='freerenalsystem'
                      placeholder="Enter Renal System Option"
                    />
                  </div>
                </div>
              )}
            </div>

</div>
</div>
          )}

         
        {/* Renal option ended */}
       
 <div className=" mt-4 mb-4">
     <div className="row">
       <div className="col-md-6"> {/* Left column */}
         <button
           className="btn btn-primary btn-lg megha"
           onClick={onBack}
         >
           &nbsp;&nbsp; Back &nbsp;&nbsp;
         </button>
       </div>
       <div className="col-md-6 text-end"> {/* Right column */}
       <button className="btn btn-primary btn-lg" onClick={(e) => {
  handleFourthblockNext(); 
  handleSubmit(e);
}}
  style={{ backgroundColor: '#795CED', color: '#fff' }}>
  &nbsp;&nbsp; Next &nbsp;&nbsp;
</button>
       </div>
     </div>
   </div>

      </div>
    </>
  );
}

export default FourthBlock;

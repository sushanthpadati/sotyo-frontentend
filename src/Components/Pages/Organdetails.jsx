import React, {useState} from 'react';
import { FaPlusCircle, FaTimesCircle } from 'react-icons/fa';


function OrganDetails({ selectedOrgan, onSubmit,onBack, selectedpatientID} ) {
  const [selectedLungOptions, setSelectedLungOptions] = useState([]); // Initialize selectedLungOptions as an array

  const handleLungOptionChange = (value) => {
    const updatedOptions = [...selectedLungOptions];
    const index = updatedOptions.indexOf(value);

    if (index === -1) {
      // If the value is not in the selected options array, add it
      updatedOptions.push(value);
    } else {
      // If the value is already in the selected options array, remove it
      updatedOptions.splice(index, 1);
    }

    setSelectedLungOptions(updatedOptions);
  };
  const [showCheifComplaintsTextField, setShowCheifComplaintsTextField] = useState(false);

  const handleToggleCheifComplaintsTextField = () => {
    setShowCheifComplaintsTextField(!showCheifComplaintsTextField);
  };
  const [selectedHiv, setSelectedHiv] = useState(''); // Initialize with an empty string or a default value

  const handleHivChange = (value) => {
    setSelectedHiv(value);
  };

  const [showpastmedicalhistoryTextField, setShowpastmedicalhistoryTextField] = useState(false);

  const handleTogglepastmedicalhistoryTextField = () => {
    setShowpastmedicalhistoryTextField(!showpastmedicalhistoryTextField);
  };

  const [showSubstanceAbuseTextField, setShowSubstanceAbuseTextField] = useState(false);

  const handleAddSubstanceAbuseFreeTextClick = () => {
    setShowSubstanceAbuseTextField(!showSubstanceAbuseTextField);
  };

  
  const [selectedChiefOptions, setSelectedChiefOptions] = useState([]);
  const handleChiefOptionChange = (value) => {
    const updatedOptions = [...selectedChiefOptions];
    const index = updatedOptions.indexOf(value);

    if (index === -1) {
      // If the value is not in the selected options array, add it
      updatedOptions.push(value);
    } else {
      // If the value is already in the selected options array, remove it
      updatedOptions.splice(index, 1);
    }

    setSelectedChiefOptions(updatedOptions);
  };
  const [selectedPastMedicalHistory, setSelectedPastMedicalHistory] = useState([]);

  // Function to handle changes in the Past Medical History checkboxes
  const handlePastMedicalHistoryChange = (option) => {
    // Check if the option is already in the selectedPastMedicalHistory array
    if (selectedPastMedicalHistory.includes(option)) {
      // If it is, remove it from the array (uncheck)
      setSelectedPastMedicalHistory(selectedPastMedicalHistory.filter((item) => item !== option));
    } else {
      // If it's not, add it to the array (check)
      setSelectedPastMedicalHistory([...selectedPastMedicalHistory, option]);
    }
  };


  // const [showSubstanceAbuseOptions, setShowSubstanceAbuseOptions] = useState(false);

  // const handleSubstanceAbuseChange = (isChecked) => {
  //   setShowSubstanceAbuseOptions(isChecked);
  // };
  const [selectedsubstanceAOptions, setselectedsubstanceAOptions] = useState([]);

  // Function to handle changes in the Past Medical History checkboxes
  const handlesabuseOptionChange = (option) => {
    // Check if the option is already in the selectedPastMedicalHistory array
    if (selectedsubstanceAOptions.includes(option)) {
      // If it is, remove it from the array (uncheck)
      setselectedsubstanceAOptions(selectedsubstanceAOptions.filter((item) => item !== option));
    } else {
      // If it's not, add it to the array (check)
      setselectedsubstanceAOptions([...selectedsubstanceAOptions, option]);
    }
  };

  const handleOrganDetailsNext = () => {
    onSubmit(selectedPastMedicalHistory, selectedChiefOptions, selectedLungOptions);
  };


  // Define organ-specific details here
  let organDetails = '';
  let organName= '';

  switch (selectedOrgan) {
    case 'Brain':
      organName = 'Brain';
      break;
    case 'Lungs':
      organName = 'Lungs';
      break;
    // Add more cases for other organs as needed

    default:
      organDetails = 'LIVE SOON';
  }
  const [formData, setFormData] = useState({
    patientId: '',
    lungOption: '',
    HivOption: '',
    chiefOption: '',
    pastMedicalHistoryOption:'',
    substanceAbuseOption:'' // Include patientId directly from the state
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Join the selected options into a comma-separated string
      const lungOption = selectedLungOptions.join(',');
      const chiefOption = selectedChiefOptions.join(',');
      const pastMedicalHistoryOption = selectedPastMedicalHistory.length >0 ? selectedPastMedicalHistory.join(',') : 'No Past medical History' ;
      const substanceAbuseOption = selectedsubstanceAOptions.length > 0 ? selectedsubstanceAOptions.join(',') : 'No History of substance abuse use'; 
// Get the textarea elements
// Select the input elements
const freeChiefComplaintsInput = document.querySelector('input[name="freechiefcomplaints"]');
const freePastMedicalHistoryInput = document.querySelector('input[name="freepastmedicalhistory"]');
const freeSubstanceAbuseInput = document.querySelector('input[name="freesubstanceabuse"]');

// Get the values from the input elements
const freeChiefComplaints = freeChiefComplaintsInput ? freeChiefComplaintsInput.value : '';
const freePastMedicalHistory = freePastMedicalHistoryInput ? freePastMedicalHistoryInput.value : '';
const freeSubstanceAbuse = freeSubstanceAbuseInput ? freeSubstanceAbuseInput.value : '';



// Send the data using fetch


      const dataToSend = { patientId: formData.patientId, HivOption:selectedHiv, lungOption, chiefOption, pastMedicalHistoryOption , substanceAbuseOption, freeChiefComplaints, freePastMedicalHistory, freeSubstanceAbuse};
  
      console.log('Form Data:', dataToSend);
  
      const response = await fetch('http://3.16.11.52:5000/add_lung_options', {
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
    
    <div className='container mt-4'>
      <form onSubmit={handleSubmit} />
      {/* Lung Options  started*/}
    
      {selectedOrgan === 'Lungs' && (
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
    <br/>
        <div className="row">
        
          <div className="col-md-2 d-flex align-items-center">
          <h2 style={{ fontWeight: '600', fontSize: '1.1rem' }} className='titl'>{organName}</h2>
          </div>
          <div className="col-md-6 ms-4">
          {selectedOrgan === 'Lungs' && (
          <div className="row ">
            
            <div className="row">
              <div className="col-md-3 marital d-flex align-items-center">
                {/* Content for Lung Block */}
                {/* <label
  className={`maritalcircle p-2 m-3 ${selectedLungOptions.includes('Asthma') ? 'active' : ''}`}
>
  <input
    type="checkbox"
    name="lungOption"
    value="Asthma"
    style={{ visibility: 'hidden' }}
    checked={selectedLungOptions.includes('Asthma')}
    onChange={() => handleLungOptionChange('Asthma')}
  />
  Asthma &nbsp;&nbsp;
</label>

                <label
                  className={`maritalcircle p-2 m-3 ${selectedLungOptions.includes('Bronchiectasis') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="lungOption"
                    value="Bronchiectasis"
                    style={{ visibility: 'hidden' }}
                    checked={formData.selectedLungOptions===selectedLungOptions.includes('Bronchiectasis')}
                    onChange={() => handleLungOptionChange('Bronchiectasis')}
                  />
                  Bronchiectasis &nbsp;&nbsp;
                </label>
                </div>
                <div className="col-md-3 marital  d-flex align-items-center">
                <label
                  className={`maritalcircle p-2 m-3 ${selectedLungOptions.includes('Chronic Obstructive Pulmonary Disease (COPD)') ? 'active' : ''}`} 
                >
                  <input
                    type="checkbox"
                    name="lungOption"
                    value="Chronic Obstructive Pulmonary Disease (COPD)"
                    style={{ visibility: 'hidden' }}
                    checked={selectedLungOptions.includes('Chronic Obstructive Pulmonary Disease (COPD)')}
                    onChange={() => handleLungOptionChange('Chronic Obstructive Pulmonary Disease (COPD)')}
                    
                  />
                  Chronic Obstructive Pulmonary Disease (COPD) &nbsp;&nbsp;
                </label>
                </div>
                <div className="col-md-3 marital  d-flex align-items-center"> 
                <label
                  className={`maritalcircle p-2 m-3 ${selectedLungOptions.includes('Cystic Fibrosis') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="lungOption"
                    value="Cystic Fibrosis"
                    style={{ visibility: 'hidden' }}
                    checked={selectedLungOptions.includes('Cystic Fibrosis')}
                    onChange={() => handleLungOptionChange('Cystic Fibrosis')}
                  />
                  Cystic Fibrosis &nbsp;&nbsp;
                </label>
                
                
                <label
                  className={`maritalcircle p-2 m-3 ${selectedLungOptions.includes('Intersitial Lung Disease (ILD)') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="lungOption"
                    value="Intersitial Lung Disease (ILD)"
                    style={{ visibility: 'hidden' }}
                    checked={selectedLungOptions.includes('Intersitial Lung Disease (ILD)')}
                    onChange={() => handleLungOptionChange('Intersitial Lung Disease (ILD)')}
                  />
                  Intersitial Lung Disease (ILD)  &nbsp;&nbsp;  
                </label>
                 </div>
                <div className="col-md-3 marital d-flex align-items-center">
                <label
                  className={`maritalcircle p-2 m-3 ${selectedLungOptions.includes('Pulmonary Embolism') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="lungOption"
                    value="Pulmonary Embolism"
                    style={{ visibility: 'hidden' }}
                    checked={selectedLungOptions.includes('Pulmonary Embolism')}
                    onChange={() => handleLungOptionChange('Pulmonary Embolism')}
                  />
                  Pulmonary Embolism &nbsp;&nbsp;
                </label>
                
                <label
                  className={`maritalcircle p-2 m-3 ${selectedLungOptions.includes('Penumonia') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="lungOption"
                    value="Penumonia"
                    style={{ visibility: 'hidden' }}
                    checked={selectedLungOptions.includes('Penumonia')}
                    onChange={() => handleLungOptionChange('Penumonia')}
                  />
                  Penumonia &nbsp;&nbsp;
                </label>
              
                <label
                  className={`maritalcircle p-2 m-3 ${selectedLungOptions.includes('Pleural Effusion') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="lungOption"
                    value="Pleural Effusion"
                    style={{ visibility: 'hidden' }}
                    checked={selectedLungOptions.includes('Pleural Effusion')}
                    onChange={() => handleLungOptionChange('Pleural Effusion')}
                  />
                  Pleural Effusion &nbsp;&nbsp;
                </label>
                </div>
                <div className="col-md-3 marital d-flex align-items-center">
                 */}
                <label
                  className={`maritalcircle p-2 m-3 ${selectedLungOptions.includes('Tuberculosis') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="lungOption"
                    value="Tuberculosis"
                    style={{ visibility: 'hidden' }}
                    checked={selectedLungOptions.includes('Tuberculosis')}
                    onChange={() => handleLungOptionChange('Tuberculosis')}
                  />
                  Tuberculosis &nbsp;&nbsp;
                </label>
                {/* Add more options for Lung Block here */}
              </div>
            </div>
          </div>
        )}
          </div>
        </div>
      </div>)}
      {/* Lung Options ended */}
<hr></hr>
<div className="container mt-4">
<div className="row">
  <div className="col-md-2 d-flex align-items-center">
    <h1 className="titl" style={{ fontWeight: '600', fontSize: '1.1rem' }}> HIV </h1>
  </div>
  <div className="col-md-8 ms-3">
  <div className="col-md-8">
    <div className="marital d-flex align-items-center">
      {/* Radio button for HIV Reactive */}
      <label
        className={`maritalcircle p-2 m-3  ${selectedHiv === 'Reactive' ? 'active' : ''}`}
        onClick={() => handleHivChange('Reactive')}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          name="HivOption"
          value="Reactive"
          style={{ visibility: 'hidden' }}
          checked={formData.selectedHiv === 'Reactive'}
        />
        Reactive &nbsp;&nbsp;&nbsp;&nbsp;
      </label>
      
      {/* Radio button for HIV Non-reactive */}
      <label
        className={`maritalcircle p-2 m-3  ${selectedHiv === 'Non-reactive' ? 'active' : ''}`}
        onClick={() => handleHivChange('Non-reactive')}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          name="HivOption"
          value="Non-reactive"
          style={{ visibility: 'hidden' }}
          checked={formData.selectedHiv === 'Non-reactive'}
        />
        Non-reactive&nbsp;&nbsp;&nbsp;&nbsp;
      </label>

      {/* Radio button for HIV Not Tested */}
      <label
        className={`maritalcircle p-2 m-3  ${selectedHiv === 'NOT_TESTED' ? 'active' : ''}`}
        onClick={() => handleHivChange('NOT_TESTED')}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          name="HivOption"
          value="NOT_TESTED"
          style={{ visibility: 'hidden' }}
          checked={formData.selectedHiv === 'NOT_TESTED'}
        />
        Not Tested&nbsp;&nbsp;&nbsp;&nbsp;
      </label>
      
      {/* Additional Cardiac options can be added here */}
    </div>
  </div>
</div>

  {/* Free text input can be added here */}
</div>
</div>
<hr></hr>
{/* Chief Complaints started */}
{selectedOrgan === 'Lungs' && (
  

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-2 d-flex align-items-center">
          <h2 style={{ fontWeight: '600', fontSize: '1.1rem' }} className='titl'>Chief Complaints</h2>
          </div>
          <div className="col-md-6 ms-4">
          {selectedOrgan === 'Lungs' && (
          <div className="row mt-3">
            <div className="row">
                <div className="col-md-3 marital  d-flex align-items-center">
                {/* Content for Chief Complaints */}
                <label
                  className={`maritalcircle p-2 m-3 ${selectedChiefOptions.includes('Chest Pain') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="chiefOption"
                    value="Chest Pain"
                    style={{ visibility: 'hidden' }}
                    checked={selectedChiefOptions.includes('Chest Pain')}
                    onChange={() => handleChiefOptionChange('Chest Pain')}
                  />
                  Chest Pain &nbsp;&nbsp;
                </label>
                {/* <label
                  className={`maritalcircle p-2 m-3 ${selectedChiefOptions.includes('Cough') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="chiefOption"
                    value="Cough"
                    style={{ visibility: 'hidden' }}
                    checked={selectedChiefOptions.includes('Cough')}
                    onChange={() => handleChiefOptionChange('Cough')}
                  />
                  Cough &nbsp;&nbsp;
                </label> */}
                
               
                <label
                  className={`maritalcircle p-2 m-3 ${selectedChiefOptions.includes('Coughing up Blood') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="chiefOption"
                    value="Coughing up Blood"
                    style={{ visibility: 'hidden' }}
                    checked={selectedChiefOptions.includes('Coughing up Blood')}
                    onChange={() => handleChiefOptionChange('Coughing up Blood')}
                  />
                  Coughing up Blood &nbsp;&nbsp;
                </label>
                </div>
                <div className="col-md-3 marital d-flex align-items-center">
                <label
                  className={`maritalcircle p-2 m-3 ${selectedChiefOptions.includes('Current Cough') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="chiefOption"
                    value="Current Cough"
                    style={{ visibility: 'hidden' }}
                    checked={selectedChiefOptions.includes('Current Cough')}
                    onChange={() => handleChiefOptionChange('Current Cough')}
                  />
                  Current Cough &nbsp;&nbsp;
                </label>
                
                <label
                  className={`maritalcircle p-2 m-3 ${selectedChiefOptions.includes('Fatigue') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="chiefOption"
                    value="Fatigue"
                    style={{ visibility: 'hidden' }}
                    checked={selectedChiefOptions.includes('Fatigue')}
                    onChange={() => handleChiefOptionChange('Fatigue')}
                  />
                  Fatigue &nbsp;&nbsp;
                </label>
                
                <label
                  className={`maritalcircle p-2 m-3 ${selectedChiefOptions.includes('Fever') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="chiefOption"
                    value="Fever"
                    style={{ visibility: 'hidden' }}
                    checked={selectedChiefOptions.includes('Fever')}
                    onChange={() => handleChiefOptionChange('Fever')}
                  />
                  Fever  &nbsp;&nbsp;
                </label>
                </div>
                <div className="col-md-3 marital d-flex align-items-center">
                
                <label
                  className={`maritalcircle p-2 m-3 ${selectedChiefOptions.includes('Night Sweats') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="chiefOption"
                    value="Night Sweats"
                    style={{ visibility: 'hidden' }}
                    checked={selectedChiefOptions.includes('Night Sweats')}
                    onChange={() => handleChiefOptionChange('Night Sweats')}
                  />
                  Night Sweats &nbsp;&nbsp;
                </label>
                
                <label
                  className={`maritalcircle p-2 m-3 ${selectedChiefOptions.includes('Shortness of Breath') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="chiefOption"
                    value="Shortness of Breath"
                    style={{ visibility: 'hidden' }}
                    checked={selectedChiefOptions.includes('Shortness of Breath')}
                    onChange={() => handleChiefOptionChange('Shortness of Breath')}
                  />
                  Shortness of Breath &nbsp;&nbsp;
                </label>
                </div>
                <div className="col-md-3 marital  d-flex align-items-center">
                <label
                  className={`maritalcircle p-2 m-3 ${selectedChiefOptions.includes('Swelling of Lymph Nodes') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="chiefOption"
                    value="Swelling of Lymph Nodes"
                    style={{ visibility: 'hidden' }}
                    checked={selectedChiefOptions.includes('Swelling of Lymph Nodes')}
                    onChange={() => handleChiefOptionChange('Swelling of Lymph Nodes')}
                  />
                  Swelling of Lymph Nodes &nbsp;&nbsp;
                </label>
                
                <label
                  className={`maritalcircle p-2 m-3 ${selectedChiefOptions.includes('Tachypnea') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="chiefOption"
                    value="Tachypnea"
                    style={{ visibility: 'hidden' }}
                    checked={selectedChiefOptions.includes('Tachypnea')}
                    onChange={() => handleChiefOptionChange('Tachypnea')}
                  />
                  Tachypnea &nbsp;&nbsp;
                </label>
                </div>
                <div className="col-md-3 marital  d-flex align-items-center">
                <label
                  className={`maritalcircle p-2 m-3 ${selectedChiefOptions.includes('Tingling Sensations') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="chiefOption"
                    value="Tingling Sensations"
                    style={{ visibility: 'hidden' }}
                    checked={selectedChiefOptions.includes('Tingling Sensations')}
                    onChange={() => handleChiefOptionChange('Tingling Sensations')}
                  />
                  Tingling Sensations &nbsp;&nbsp;
                </label>
                
                <label
                  className={`maritalcircle p-2 m-3 ${selectedChiefOptions.includes('Weight Loss') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="chiefOption"
                    value="Weight Loss"
                    style={{ visibility: 'hidden' }}
                    checked={selectedChiefOptions.includes('Weight Loss')}
                    onChange={() => handleChiefOptionChange('Weight Loss')}
                  />
                  Weight Loss &nbsp;&nbsp;
                </label>
                {/* Add more options for Chief Complaints here */}
              </div>
            </div>
          </div>
        )}
          </div>
          <div className="col-md-3 ms-auto text-align-right">
      <div className="row">
        <div className="col-md-12" style={{ marginLeft: '20%' }}>
          <button
            className="btn"
            style={{ color: '#fff' }}
            onClick={handleToggleCheifComplaintsTextField}
          >
            <div className="pulser">
              {showCheifComplaintsTextField ? (
                <FaTimesCircle /> // Display close button when input is shown
              ) : (
                <FaPlusCircle /> // Display plus icon when input is hidden
              )}
            </div>
          </button>
        </div>
      </div>
      {showCheifComplaintsTextField && (
        <div className="row mt-3">
          <div className="col-md-12 offset-md-2">
            <input
              type="text"
              style={{ border: '1px solid #000', borderRadius: '10px' }}
              className="form-control"
              name='freechiefcomplaints'
              placeholder="Enter Chief Complaints"
            />
          </div>
        </div>
      )}
    </div>

        </div>
      </div>
)}
{/* Chief Complaints ended */}
<hr></hr>
{/* Past Medical History started */}
{selectedOrgan === 'Lungs' && (
  <div className="container mt-4">
    <div className="row">
      <div className="col-md-2 d-flex align-items-center">
        <h2 style={{ fontWeight: '600', fontSize: '1.1rem' }} className='titl'>Past Medical History</h2>
      </div>
      <div className="col-md-6 ms-4">
        <div className="col-md-12">
          <div className="marital d-flex align-items-center">
            {/* Content for Past Medical History Options */}
            <label
              className={`maritalcircle p-2 m-3 ${selectedPastMedicalHistory.includes('Any Psychiatric illness') ? 'active' : ''}`}
            >
              <input
                type="checkbox"
                name="pastMedicalHistoryOption"
                value="Any Psychiatric illness"
                style={{ visibility: 'hidden' }}
                checked={selectedPastMedicalHistory.includes('Any Psychiatric illness')}
                onChange={() => handlePastMedicalHistoryChange('Any Psychiatric illness')}
              />
              Any Psychiatric illness &nbsp;&nbsp;
            </label>
            <label
              className={`maritalcircle p-2 m-3 ${selectedPastMedicalHistory.includes('Diabetes') ? 'active' : ''}`}
            >
              <input
                type="checkbox"
                name="pastMedicalHistoryOption"
                value="Diabetes"
                style={{ visibility: 'hidden' }}
                checked={selectedPastMedicalHistory.includes('Diabetes')}
                onChange={() => handlePastMedicalHistoryChange('Diabetes')}
              />
              Diabetes &nbsp;&nbsp;
            </label>
            </div>
            <div className="marital d-flex align-items-center">
            <label
              className={`maritalcircle p-2 m-3 ${selectedPastMedicalHistory.includes('Epilepsy') ? 'active' : ''}`}
            >
              <input
                type="checkbox"
                name="pastMedicalHistoryOption"
                value="Epilepsy"
                style={{ visibility: 'hidden' }}
                checked={selectedPastMedicalHistory.includes('Epilepsy')}
                onChange={() => handlePastMedicalHistoryChange('Epilepsy')}
              />
              Epilepsy &nbsp;&nbsp;
            </label>
            <label
              className={`maritalcircle p-2 m-3 ${selectedPastMedicalHistory.includes('Hypersenstivity') ? 'active' : ''}`}
            >
              <input
                type="checkbox"
                name="pastMedicalHistoryOption"
                value="Hypersenstivity"
                style={{ visibility: 'hidden' }}
                checked={selectedPastMedicalHistory.includes('Hypersenstivity')}
                onChange={() => handlePastMedicalHistoryChange('Hypersenstivity')}
              />
              Hypersenstivity &nbsp;&nbsp;
            </label>
            <label
              className={`maritalcircle p-2 m-3 ${selectedPastMedicalHistory.includes('Hypothyroid') ? 'active' : ''}`}
            >
              <input
                type="checkbox"
                name="pastMedicalHistoryOption"
                value="Hypothyroid"
                style={{ visibility: 'hidden' }}
                checked={selectedPastMedicalHistory.includes('Hypothyroid')}
                onChange={() => handlePastMedicalHistoryChange('Hypothyroid')}
              />
              Hypothyroid &nbsp;&nbsp;
            </label>
            </div>
            <div className="marital d-flex align-items-center">
            <label
              className={`maritalcircle p-2 m-3 ${selectedPastMedicalHistory.includes('Hyperthyroid') ? 'active' : ''}`}
            >
              <input
                type="checkbox"
                name="pastMedicalHistoryOption"
                value="Hyperthyroid"
                style={{ visibility: 'hidden' }}
                checked={selectedPastMedicalHistory.includes('Hyperthyroid')}
                onChange={() => handlePastMedicalHistoryChange('Hyperthyroid')}
              />
              Hyperthyroid &nbsp;&nbsp;
            </label>
            <label
              className={`maritalcircle p-2 m-3 ${selectedPastMedicalHistory.includes('Hypertension') ? 'active' : ''}`}
            >
              <input
                type="checkbox"
                name="pastMedicalHistoryOption"
                value="Hypertension"
                style={{ visibility: 'hidden' }}
                checked={selectedPastMedicalHistory.includes('Hypertension')}
                onChange={() => handlePastMedicalHistoryChange('Hypertension')}
              />
              Hypertension &nbsp;&nbsp;
            </label>
            
            <label
              className={`maritalcircle p-2 m-3 ${selectedPastMedicalHistory.includes('Respiratory') ? 'active' : ''}`}
            >
              <input
                type="checkbox"
                name="pastMedicalHistoryOption"
                value="Respiratory"
                style={{ visibility: 'hidden' }}
                checked={selectedPastMedicalHistory.includes('Respiratory')}
                onChange={() => handlePastMedicalHistoryChange('Respiratory')}
              />
              Respiratory &nbsp;&nbsp;
            </label>
            </div>
            <div className="marital d-flex align-items-center">
            <label
              className={`maritalcircle p-2 m-3 ${selectedPastMedicalHistory.includes('Cardiovascular') ? 'active' : ''}`}
            >
              <input
                type="checkbox"
                name="pastMedicalHistoryOption"
                value="Cardiovascular"
                style={{ visibility: 'hidden' }}
                checked={selectedPastMedicalHistory.includes('Cardiovascular')}
                onChange={() => handlePastMedicalHistoryChange('Cardiovascular')}
                readOnly
              />
              Cardiovascular &nbsp;&nbsp;
            </label>
            <label
              className={`maritalcircle p-2 m-3 ${selectedPastMedicalHistory.includes('Renal') ? 'active' : ''}`}
            >
              <input
                type="checkbox"
                name="pastMedicalHistoryOption"
                value="Renal"
                style={{ visibility: 'hidden' }}
                checked={selectedPastMedicalHistory.includes('Renal')}
                onChange={() => handlePastMedicalHistoryChange('Renal')}
              />
              Renal &nbsp;&nbsp;
            </label>
            {/* Add more options for Past Medical History here */}
          </div>
        </div>
      </div>
      <div className="col-md-3 ms-auto text-align-right">
      <div className="row">
        <div className="col-md-12" style={{ marginLeft: '20%' }}>
          <button
            className="btn"
            style={{ color: '#fff' }}
            onClick={handleTogglepastmedicalhistoryTextField}
          >
            <div className="pulser">
              {showpastmedicalhistoryTextField ? (
                <FaTimesCircle /> // Display close button when input is shown
              ) : (
                <FaPlusCircle /> // Display plus icon when input is hidden
              )}
            </div>
          </button>
        </div>
      </div>
      {showpastmedicalhistoryTextField && (
        <div className="row mt-3">
          <div className="col-md-12 offset-md-2">
            <input
              type="text"
              style={{ border: '1px solid #000', borderRadius: '10px' }}
              className="form-control"
              name='freepastmedicalhistory'
              placeholder="Enter Past medical history"
            />
          </div>
        </div>
      )}
    </div>
    </div>
  </div>
)}

{/* Past Medical History  ended*/}
<hr></hr>
{/* Substance Abuse started */}
{selectedOrgan === 'Lungs' && (
      <div className="container mt-4">
        <div className="row">
        <div className="col-md-2 d-flex align-items-center">
  <h1 className="titl" style={{ fontWeight: '600', fontSize: '1.1rem' }}>
    <b>Substance Abuse</b>
  </h1>
  {/* <div className="form-check form-switch ml-2"  style={{ marginLeft: '15%' }}>  */}
  {/* Add ml-2 class for spacing */}
    {/* <input
      className="form-check-input"
      type="checkbox"
      id="flexSwitchCheckDefault"
      checked={showSubstanceAbuseOptions}
      onChange={(e) => handleSubstanceAbuseChange(e.target.checked)}
      style={{ fontSize: '1rem', transform: 'scale(1.2)',}}
    /> */}
  {/* </div> */}
</div>


          <div className="col-md-6 ms-4">
         
        {/* Additional options for Past Medical History */}
        {selectedOrgan && (
          <div className="row mt-3">
            <div className="col-md-12">
              <div className="marital d-flex align-items-center">
                {/* Content for Past Medical History Options */}
                <label
                  className={`maritalcircle p-2 m-3 ${selectedsubstanceAOptions.includes('Alcohol') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="substanceAbuseOption"
                    value="Alcohol"
                    style={{ visibility: 'hidden' }}
                    checked={selectedsubstanceAOptions.includes('Alcohol')}
                    onChange={() => handlesabuseOptionChange('Alcohol')}
                  />
                  Alcohol &nbsp;&nbsp;
                </label>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedsubstanceAOptions.includes('Marijuana') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="substanceAbuseOption"
                    value="Marijuana"
                    style={{ visibility: 'hidden' }}
                    checked={selectedsubstanceAOptions.includes('Marijuana')}
                    onChange={() => handlesabuseOptionChange('Marijuana')}
                  />
                  Marijuana &nbsp;&nbsp;
                </label>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedsubstanceAOptions.includes('Paan') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="substanceAbuseOption"
                    value="Paan"
                    style={{ visibility: 'hidden' }}
                    checked={selectedsubstanceAOptions.includes('Paan')}
                    onChange={() => handlesabuseOptionChange('Paan')}
                  />
                  Paan &nbsp;&nbsp;
                </label>
                </div>
                <div className="marital d-flex align-items-center">
                <label
                  className={`maritalcircle p-2 m-3 ${selectedsubstanceAOptions.includes('Smoking') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="substanceAbuseOption"
                    value="Smoking"
                    style={{ visibility: 'hidden' }}
                    checked={selectedsubstanceAOptions.includes('Smoking')}
                    onChange={() => handlesabuseOptionChange('Smoking')}
                  />
                  Smoking &nbsp;&nbsp;
                </label>
                
                <label
                  className={`maritalcircle p-2 m-3 ${selectedsubstanceAOptions.includes('Tobaco') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="substanceAbuseOption"
                    value="Tobaco"
                    style={{ visibility: 'hidden' }}
                    checked={selectedsubstanceAOptions.includes('Tobaco')}
                    onChange={() => handlesabuseOptionChange('Tobaco')}
                  />
                  Tobaco &nbsp;&nbsp;
                </label>
                </div>
                <div className="marital d-flex align-items-center">
                <label
                  className={`maritalcircle p-2 m-3 ${selectedsubstanceAOptions.includes('Other Recreational drug') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="substanceAbuseOption"
                    value="Other Recreational drug"
                    style={{ visibility: 'hidden' }}
                    checked={selectedsubstanceAOptions.includes('Other Recreational drug')}
                    onChange={() => handlesabuseOptionChange('Other Recreational drug')}
                  />
                  Other Recreational drug &nbsp;&nbsp;
                </label>
              
                {/* Add more options for Substance Abuse here */}
              </div>
            </div>
          </div>
        )}
          </div>
          <div className="col-md-3 ms-auto text-align-right">
      <div className="row">
        <div className="col-md-12" style={{ marginLeft: '20%' }}>
          <button
            className="btn"
            style={{ color: '#fff' }}
            onClick={handleAddSubstanceAbuseFreeTextClick}
          >
            <div className="pulser">
              {showSubstanceAbuseTextField ? (
                <FaTimesCircle /> // Display close button when input is shown
              ) : (
                <FaPlusCircle /> // Display plus icon when input is hidden
              )}
            </div>
          </button>
        </div>
      </div>
      {showSubstanceAbuseTextField && (
        <div className="row mt-3">
          <div className="col-md-12 offset-md-2">
            <input
              type="text"
              style={{ border: '1px solid #000', borderRadius: '10px' }}
              className="form-control"
              name='freesubstanceabuse'
              placeholder="Enter Substance Abuse"
            />
          </div>
        </div>
      )}
    </div>
        </div>
      </div>
)}
{/* Substance Abuse ended */}

{/* {selectedOrgan === 'Lungs' && selectedPastMedicalHistory.includes('Hyperthyroid') && selectedChiefOptions.includes('Chest Pain') && (
  <div className="container mt-4">
    <p>hii this is the test</p>
  </div>
)} */}
 {selectedOrgan === 'Lungs' && (
     <div className=" mt-4">
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
         <button
           className="btn btn-primary btn-lg"
           onClick={(e) => {
             handleSubmit(e);
             handleOrganDetailsNext();
           }}
           style={{ backgroundColor: '#795CED', color: '#fff' }}
           type="submit"
         >
           &nbsp;&nbsp; Next &nbsp;&nbsp;
         </button>
       </div>
     </div>
   </div>
   
   
   
        )}


     
      <p style={{color:'red'}}>{organDetails}</p>
    </div>

       
  );
}

export default OrganDetails;

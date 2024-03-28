import React, { useState } from 'react';

function Currentmedicationblock({selectedOrgan,
  selectedPastMedicalHistory,
  selectedChiefOptions,
  selectedLungOptions,
  selectedLaterality,
  selectedBreathSoundOptions,
  selectedLateralityOptionsopt,
  selectedImagingOptions,
  selectedDiagnosisOptions,
  selectedConfirmedDiagnosisOptions,selectedPastSurgicalHistory,selectedRespiratorySystem,selectedCardiovascularSystem,selectedRenalSystem,
  selectedpatientID,
  selectedRelapseOption,
  onSubmit,
  onBack}) {

    const [selectedCurrentMedications, setSelectedCurrentMedications] = useState([]);

   // Function to handle options selection for Current Medications
   const handleCurrentMedicationsOptionChange = (option) => {
    if (selectedCurrentMedications.includes(option)) {
      setSelectedCurrentMedications((prevSelected) =>
        prevSelected.filter((item) => item !== option)
      );
    } else {
      setSelectedCurrentMedications((prevSelected) => [...prevSelected, option]);
    }
  };

  const handleFifthblockNext = () => {
    onSubmit(selectedCurrentMedications);
  };

  const [formData, setFormData] = useState({
    patientId: '', // Include patientId directly from the state
    CurrentMedicationsOption:''
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Join the selected options into a comma-separated string
      
      const CurrentMedicationsOption = selectedCurrentMedications.join(',') ;
  
      const dataToSend = { patientId: formData.patientId, CurrentMedicationsOption};
  
      console.log('Form Data:', dataToSend);
  
      const response = await fetch('http://3.16.11.52:5000/currentmedication_block_option', {
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
        <div className='patientid col-md-12'>
          <div style={{textAlign: 'center'}}>
            <h3 className='pathed p-2' type='text'  value={formData.patientId = selectedpatientID} onChange={handleInputChange}  name="patientid" disabled > <b>Patient ID:</b> {selectedpatientID}</h3>
          </div>
        </div>
        <div className="col-sm-4 mt-4">
          <h1 className="tagorgan">
            <b>Current Medication</b>
          </h1>
        </div>
        {/* Current Medication Started */}
        {(selectedCardiovascularSystem.includes('Coronary Artery Disease') || selectedCardiovascularSystem.includes('Myocardial Infarction') || selectedCardiovascularSystem.includes('Valvular Heart Disease'))  &&(
          <div className="container">
            <br/>
            <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem'}}>
                  <b>Antiarrhythmics: </b>
                </h1>
              </div>
              <div className="col-md-10">
                <div className="marital d-flex align-items-center">
                  {/* Content for CurrentMedications Options */}
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Disopyramide') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Disopyramide"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Disopyramide')}
                      onChange={() => handleCurrentMedicationsOptionChange('Disopyramide')}
                    />
                    Disopyramide &nbsp;&nbsp;
                  </label>
                <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Mexiletine') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Mexiletine"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Mexiletine')}
                      onChange={() => handleCurrentMedicationsOptionChange('Mexiletine')}
                    />
                    Mexiletine &nbsp;&nbsp;
                  </label>
                <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Quinidine') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Quinidine"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Quinidine')}
                      onChange={() => handleCurrentMedicationsOptionChange('Quinidine')}
                    />
                    Quinidine &nbsp;&nbsp;
                  </label>
                  
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Tocainide') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Tocainide"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Tocainide')}
                      onChange={() => handleCurrentMedicationsOptionChange('Tocainide')}
                    />
                    Tocainide &nbsp;&nbsp;
                  </label>
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('None of the above1') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="None of the above"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('None of the above1')}
                      onChange={() => handleCurrentMedicationsOptionChange('None of the above1')}
                    />
                    None of the above &nbsp;&nbsp;
                  </label>
                  {/* Add more CurrentMedications options as needed */}
                </div>
              </div>
            </div>
          </div>
        )}
        {(selectedRespiratorySystem.includes('Bronchiectasis') || selectedRespiratorySystem.includes('Cystic Fibrosis') || selectedRenalSystem.includes('Urinary Tract Infections') || selectedRenalSystem.includes('Pyelonephritis') || selectedRenalSystem.includes('Cystitis')) && (
          <div className="container">
            <br/>
            <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem'}}>
                  <b>Antibiotics: </b>
                </h1>
              </div>
              <div className="col-md-10">
                <div className="marital d-flex align-items-center">
                  {/* Content for CurrentMedications Options */}
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Chloramphenicol') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Chloramphenicol"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Chloramphenicol')}
                      onChange={() => handleCurrentMedicationsOptionChange('Chloramphenicol')}
                    />
                    Chloramphenicol &nbsp;&nbsp;
                  </label>
                <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Clarithromycin') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Clarithromycin"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Clarithromycin')}
                      onChange={() => handleCurrentMedicationsOptionChange('Clarithromycin')}
                    />
                    Clarithromycin &nbsp;&nbsp;
                  </label>
                <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Dapsone') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Dapsone"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Dapsone')}
                      onChange={() => handleCurrentMedicationsOptionChange('Dapsone')}
                    />
                    Dapsone &nbsp;&nbsp;
                  </label>
                  
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Doxycycline') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Doxycycline"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Doxycycline')}
                      onChange={() => handleCurrentMedicationsOptionChange('Doxycycline')}
                    />
                    Doxycycline &nbsp;&nbsp;
                  </label>
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Fluoroquinolones') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Fluoroquinolones"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Fluoroquinolones')}
                      onChange={() => handleCurrentMedicationsOptionChange('Fluoroquinolones')}
                    />
                    Fluoroquinolones &nbsp;&nbsp;
                  </label>
                  </div>
                  <div className="marital d-flex align-items-center">
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('None of the above2') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="None of the above"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('None of the above2')}
                      onChange={() => handleCurrentMedicationsOptionChange('None of the above2')}
                    />
                    None of the above &nbsp;&nbsp;
                  </label>
                  {/* Add more CurrentMedications options as needed */}
                </div>
              </div>
            </div>
          </div>
        )}
        {(selectedCardiovascularSystem.includes('Coronary Artery Disease') || selectedCardiovascularSystem.includes('Myocardial Infarction') || selectedCardiovascularSystem.includes('Valvular Heart Disease') || selectedLungOptions.includes('Pulmonary Embolism') || selectedPastSurgicalHistory.includes('Coronary Artery Bypass') ) &&(
          <div className="container">
            <br/>
            <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem'}}>
                  <b>Anticoagulants: </b>
                </h1>
              </div>
              <div className="col-md-10">
                <div className="marital d-flex align-items-center">
                  {/* Content for Anticoagulants Options */}
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Warfarin') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Warfarin"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Warfarin')}
                      onChange={() => handleCurrentMedicationsOptionChange('Warfarin')}
                    />
                    Warfarin &nbsp;&nbsp;
                  </label>
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('None of the above3') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="None of the above"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('None of the above3')}
                      onChange={() => handleCurrentMedicationsOptionChange('None of the above3')}
                    />
                    None of the above &nbsp;&nbsp;
                  </label>
                  {/* Add more CurrentMedications options as needed */}
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedPastMedicalHistory.includes('Epilepsy') && (
          <div className="container">
            <br/>
            <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem'}}>
                  <b>Anticonvulsants: </b>
                </h1>
              </div>
              <div className="col-md-10">
                <div className="marital d-flex align-items-center">
                  {/* Content for Anticonvulsants Options */}
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Phenytoin') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Phenytoin"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Phenytoin')}
                      onChange={() => handleCurrentMedicationsOptionChange('Phenytoin')}
                    />
                    Phenytoin &nbsp;&nbsp;
                  </label>
                <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Carbamazepine') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Carbamazepine"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Carbamazepine')}
                      onChange={() => handleCurrentMedicationsOptionChange('Carbamazepine')}
                    />
                    Carbamazepine &nbsp;&nbsp;
                  </label>
                <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Primidone') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Primidone"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Primidone')}
                      onChange={() => handleCurrentMedicationsOptionChange('Primidone')}
                    />
                    Primidone &nbsp;&nbsp;
                  </label>
                  
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Valproic acid') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Valproic acid"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Valproic acid')}
                      onChange={() => handleCurrentMedicationsOptionChange('Valproic acid')}
                    />
                    Valproic acid &nbsp;&nbsp;
                  </label>
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('None of the above4') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="None of the above"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('None of the above4')}
                      onChange={() => handleCurrentMedicationsOptionChange('None of the above4')}
                    />
                    None of the above &nbsp;&nbsp;
                  </label>
                  {/* Add more CurrentMedications options as needed */}
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedPastMedicalHistory.includes('Any Psychiatric illness') &&(
          <div className="container">
            <br/>
            <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem'}}>
                  <b>Antidepressants: </b>
                </h1>
              </div>
              <div className="col-md-10">
                <div className="marital d-flex align-items-center">
                  {/* Content for Antidepressants Options */}
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes(' Amitriptyline/ nortriptyline ') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value=" Amitriptyline/ nortriptyline "
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes(' Amitriptyline/ nortriptyline ')}
                      onChange={() => handleCurrentMedicationsOptionChange(' Amitriptyline/ nortriptyline ')}
                    />
                    Amitriptyline/ nortriptyline  &nbsp;&nbsp;
                  </label>
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('None of the above5') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="None of the above"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('None of the above5')}
                      onChange={() => handleCurrentMedicationsOptionChange('None of the above5')}
                    />
                    None of the above &nbsp;&nbsp;
                  </label>
                  {/* Add more CurrentMedications options as needed */}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-2 d-flex align-items-center">
              <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem'}}>
                <b>Antimalarials: </b>
              </h1>
            </div>
            <div className="col-md-10">
              <div className="marital d-flex align-items-center">
                
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes(' Halofantrine ') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="CurrentMedicationsOption"
                    value="Halofantrine "
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Halofantrine')}
                    onChange={() => handleCurrentMedicationsOptionChange('Halofantrine')}
                  />
                  Halofantrine &nbsp;&nbsp;
                </label>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Quinine') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="CurrentMedicationsOption"
                    value="Quinine"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Quinine')}
                    onChange={() => handleCurrentMedicationsOptionChange('Quinine')}
                  />
                  Quinine &nbsp;&nbsp;
                </label>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('None of the above') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="CurrentMedicationsOption"
                    value="None of the above"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('None of the above')}
                    onChange={() => handleCurrentMedicationsOptionChange('None of the above')}
                  />
                  None of the above &nbsp;&nbsp;
                </label>
              </div>
            </div>
          </div>
        </div> */}

        {selectedPastMedicalHistory.includes('Any Psychiatric illness')&&(
          <div className="container">
            <br/>
            <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem'}}>
                  <b>Antipsychotics: </b>
                </h1>
              </div>
              <div className="col-md-10">
                <div className="marital d-flex align-items-center">
                  {/* Content for Antipsychotics Options */}
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Haloperidol') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Haloperidol"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Haloperidol')}
                      onChange={() => handleCurrentMedicationsOptionChange('Haloperidol')}
                    />
                    Haloperidol  &nbsp;&nbsp;
                  </label>
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('None of the above6') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="None of the above"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('None of the above6')}
                      onChange={() => handleCurrentMedicationsOptionChange('None of the above6')}
                    />
                    None of the above &nbsp;&nbsp;
                  </label>
                  {/* Add more CurrentMedications options as needed */}
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedRespiratorySystem.includes('Covid-19') && (
          <div className="container">
            <br/>
            <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem'}}>
                  <b>Antivirals: </b>
                </h1>
              </div>
              <div className="col-md-10">
                <div className="marital d-flex align-items-center">
                  {/* Content for Antivirals Options */}
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes(' Ritonavir (ARV)') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value=" Ritonavir (ARV)"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes(' Ritonavir (ARV)')}
                      onChange={() => handleCurrentMedicationsOptionChange(' Ritonavir (ARV)')}
                    />
                    Ritonavir (ARV) &nbsp;&nbsp;
                  </label>
                <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Efavirenz') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Efavirenz"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Efavirenz')}
                      onChange={() => handleCurrentMedicationsOptionChange('Efavirenz')}
                    />
                    Efavirenz &nbsp;&nbsp;
                  </label>
                <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('PI') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="PI"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('PI')}
                      onChange={() => handleCurrentMedicationsOptionChange('PI')}
                    />
                    PI &nbsp;&nbsp;
                  </label>
                  
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('INSTI') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="INSTI"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('INSTI')}
                      onChange={() => handleCurrentMedicationsOptionChange('INSTI')}
                    />
                    INSTI &nbsp;&nbsp;
                  </label>
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Nevirapine') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Nevirapine"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Nevirapine')}
                      onChange={() => handleCurrentMedicationsOptionChange('Nevirapine')}
                    />
                    Nevirapine &nbsp;&nbsp;
                  </label>
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('None of the above7') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="None of the above"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('None of the above7')}
                      onChange={() => handleCurrentMedicationsOptionChange('None of the above7')}
                    />
                    None of the above &nbsp;&nbsp;
                  </label>
                  {/* Add more CurrentMedications options as needed */}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-2 d-flex align-items-center">
              <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem'}}>
                <b>Azole antifungals: </b>
              </h1>
            </div>
            <div className="col-md-10">
              <div className="marital d-flex align-items-center">
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Fluconazole') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="CurrentMedicationsOption"
                    value="Fluconazole"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Fluconazole')}
                    onChange={() => handleCurrentMedicationsOptionChange('Fluconazole')}
                  />
                  Fluconazole &nbsp;&nbsp;
                </label>
               <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Itraconazole') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="CurrentMedicationsOption"
                    value="Itraconazole"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Itraconazole')}
                    onChange={() => handleCurrentMedicationsOptionChange('Itraconazole')}
                  />
                  Itraconazole &nbsp;&nbsp;
                </label>
              <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Ketoconazole') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="CurrentMedicationsOption"
                    value="Ketoconazole"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Ketoconazole')}
                    onChange={() => handleCurrentMedicationsOptionChange('Ketoconazole')}
                  />
                  Ketoconazole &nbsp;&nbsp;
                </label>
                
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('None of the above') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="CurrentMedicationsOption"
                    value="None of the above"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('None of the above')}
                    onChange={() => handleCurrentMedicationsOptionChange('None of the above')}
                  />
                  None of the above &nbsp;&nbsp;
                </label>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-2 d-flex align-items-center">
              <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem'}}>
                <b>Barbiturates: </b>
              </h1>
            </div>
            <div className="col-md-10">
              <div className="marital d-flex align-items-center">
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Phenobarbital') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="CurrentMedicationsOption"
                    value="Phenobarbital"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Phenobarbital')}
                    onChange={() => handleCurrentMedicationsOptionChange('Phenobarbital')}
                  />
                  Phenobarbital  &nbsp;&nbsp;
                </label>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('None of the above') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="CurrentMedicationsOption"
                    value="None of the above"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('None of the above')}
                    onChange={() => handleCurrentMedicationsOptionChange('None of the above')}
                  />
                  None of the above &nbsp;&nbsp;
                </label>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-2 d-flex align-items-center">
              <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem'}}>
                <b>Benzodiazepines: </b>
              </h1>
            </div>
            <div className="col-md-10">
              <div className="marital d-flex align-items-center">
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Diazepam') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="CurrentMedicationsOption"
                    value="Diazepam"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Diazepam')}
                    onChange={() => handleCurrentMedicationsOptionChange('Diazepam')}
                  />
                  Diazepam  &nbsp;&nbsp;
                </label>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Triazolam') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="CurrentMedicationsOption"
                    value="Triazolam"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Triazolam')}
                    onChange={() => handleCurrentMedicationsOptionChange('Triazolam')}
                  />
                  Triazolam  &nbsp;&nbsp;
                </label>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('None of the above') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="CurrentMedicationsOption"
                    value="None of the above"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('None of the above')}
                    onChange={() => handleCurrentMedicationsOptionChange('None of the above')}
                  />
                  None of the above &nbsp;&nbsp;
                </label>
              </div>
            </div>
          </div>
        </div> */}

        {(selectedCardiovascularSystem.includes('Coronary Artery Disease') || selectedCardiovascularSystem.includes('Myocardial Infarction') || selectedCardiovascularSystem.includes('Hypertension') || selectedRespiratorySystem.includes('Asthma') )&&(
          <div className="container">
            <br/>
            <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem'}}>
                  <b>Beta-blockers: </b>
                </h1>
              </div>
              <div className="col-md-10">
                <div className="marital d-flex align-items-center">
                  {/* Content for Beta-blockers Options */}
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Propranolol') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Propranolol"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Propranolol')}
                      onChange={() => handleCurrentMedicationsOptionChange('Propranolol')}
                    />
                    Propranolol  &nbsp;&nbsp;
                  </label>
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('None of the above8') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="None of the above"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('None of the above8')}
                      onChange={() => handleCurrentMedicationsOptionChange('None of the above8')}
                    />
                    None of the above &nbsp;&nbsp;
                  </label>
                  {/* Add more CurrentMedications options as needed */}
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedCardiovascularSystem.includes('Coronary Artery Disease') && (
          <div className="container">
            <br/>
            <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem'}}>
                  <b>Cardiac glycoside preparations: </b>
                </h1>
              </div>
              <div className="col-md-10">
                <div className="marital d-flex align-items-center">
                  {/* Content for Cardiac glycoside preparations Options */}
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Digoxin') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Digoxin"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Digoxin')}
                      onChange={() => handleCurrentMedicationsOptionChange('Digoxin')}
                    />
                    Digoxin  &nbsp;&nbsp;
                  </label>
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('None of the above9') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="None of the above"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('None of the above9')}
                      onChange={() => handleCurrentMedicationsOptionChange('None of the above9')}
                    />
                    None of the above &nbsp;&nbsp;
                  </label>
                  {/* Add more CurrentMedications options as needed */}
                </div>
              </div>
            </div>
          </div>
        )}
        {(selectedRespiratorySystem.includes('Asthma') || selectedRespiratorySystem.includes('Bronchiectasis') || selectedRespiratorySystem.includes('Covid-19') || selectedRespiratorySystem.includes('Chronic Obstructive Pulmonary Disease') || selectedLungOptions.includes('Intersitial Lung Disease (ILD)') || selectedRenalSystem.includes('Acute Kidney Injury') || selectedRenalSystem.includes('Nephrotic Syndrome')) && (
          <div className="container">
            <br/>
            <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem'}}>
                  <b>Corticosteroids : </b>
                </h1>
              </div>
              <div className="col-md-10">
                <div className="marital d-flex align-items-center">
                  {/* Content for Corticosteroids  Options */}
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Prednisone') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Prednisone"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Prednisone')}
                      onChange={() => handleCurrentMedicationsOptionChange('Prednisone')}
                    />
                    Prednisone &nbsp;&nbsp;
                  </label>
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('None of the above10') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="None of the above"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('None of the above10')}
                      onChange={() => handleCurrentMedicationsOptionChange('None of the above10')}
                    />
                    None of the above &nbsp;&nbsp;
                  </label>
                  {/* Add more CurrentMedications options as needed */}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-2 d-flex align-items-center">
              <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem'}}>
                <b>Fibrates: </b>
              </h1>
            </div>
            <div className="col-md-10">
              <div className="marital d-flex align-items-center">
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Clofibrate') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="CurrentMedicationsOption"
                    value="Clofibrate"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Clofibrate')}
                    onChange={() => handleCurrentMedicationsOptionChange('Clofibrate')}
                  />
                  Clofibrate &nbsp;&nbsp;
                </label>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('None of the above') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="CurrentMedicationsOption"
                    value="None of the above"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('None of the above')}
                    onChange={() => handleCurrentMedicationsOptionChange('None of the above')}
                  />
                  None of the above &nbsp;&nbsp;
                </label>
              </div>
            </div>
          </div>
        </div> */}

        { (selectedPastMedicalHistory.includes('Diabetes') || selectedRenalSystem.includes('Diabetic Nephropathy') ) && (
          <div className="container">
            <br/>
            <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem'}}>
                  <b>Oral hypoglycaemic agents: </b>
                </h1>
              </div>
              <div className="col-md-10">
                <div className="marital d-flex align-items-center">
                  {/* Content for Oral hypoglycaemic agents Options */}
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Sulfonylureas') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Sulfonylureas"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Sulfonylureas')}
                      onChange={() => handleCurrentMedicationsOptionChange('Sulfonylureas')}
                    />
                    Sulfonylureas &nbsp;&nbsp;
                  </label>
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('None of the above11') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="None of the above"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('None of the above11')}
                      onChange={() => handleCurrentMedicationsOptionChange('None of the above11')}
                    />
                    None of the above &nbsp;&nbsp;
                  </label>
                  {/* Add more CurrentMedications options as needed */}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-2 d-flex align-items-center">
              <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem'}}>
                <b>Hormonal contraceptives/progestins:</b>
              </h1>
            </div>
            <div className="col-md-10">
              <div className="marital d-flex align-items-center">
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Ethinyl oestradiol / levonorgestrel') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="CurrentMedicationsOption"
                    value="Ethinyl oestradiol / levonorgestrel"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Ethinyl oestradiol / levonorgestrel')}
                    onChange={() => handleCurrentMedicationsOptionChange('Ethinyl oestradiol / levonorgestrel')}
                  />
                  Ethinyl oestradiol / levonorgestrel &nbsp;&nbsp;
                </label>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('None of the above') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="CurrentMedicationsOption"
                    value="None of the above"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('None of the above')}
                    onChange={() => handleCurrentMedicationsOptionChange('None of the above')}
                  />
                  None of the above &nbsp;&nbsp;
                </label>
              </div>
            </div>
          </div>
        </div> */}

        {(selectedLungOptions.includes('Intersitial Lung Disease (ILD)') || selectedRenalSystem.includes('Chronic Kidney Disease') ) && (
          <div className="container">
            <br/>
            <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem'}}>
                  <b>Immunosuppressants :</b>
                </h1>
              </div>
              <div className="col-md-10">
                <div className="marital d-flex align-items-center">
                  {/* Content for immunosuppressants  Options */}
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Cyclosporine/ tacrolimus') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Cyclosporine/ tacrolimus"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Cyclosporine/ tacrolimus')}
                      onChange={() => handleCurrentMedicationsOptionChange('Cyclosporine/ tacrolimus')}
                    />
                    Cyclosporine/ tacrolimus &nbsp;&nbsp;
                  </label>
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('None of the above12') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="None of the above"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('None of the above12')}
                      onChange={() => handleCurrentMedicationsOptionChange('None of the above12')}
                    />
                    None of the above &nbsp;&nbsp;
                  </label>
                  {/* Add more CurrentMedications options as needed */}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-2 d-flex align-items-center">
              <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem'}}>
                <b>Methylxanthines :</b>
              </h1>
            </div>
            <div className="col-md-10">
              <div className="marital d-flex align-items-center">
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Theophylline') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="CurrentMedicationsOption"
                    value="Theophylline"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Theophylline')}
                    onChange={() => handleCurrentMedicationsOptionChange('Theophylline')}
                  />
                  Theophylline &nbsp;&nbsp;
                </label>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('None of the above') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="CurrentMedicationsOption"
                    value="None of the above"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('None of the above')}
                    onChange={() => handleCurrentMedicationsOptionChange('None of the above')}
                  />
                  None of the above &nbsp;&nbsp;
                </label>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-2 d-flex align-items-center">
              <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem'}}>
                <b>Narcotic analgesics :</b>
              </h1>
            </div>
            <div className="col-md-10">
              <div className="marital d-flex align-items-center">
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Methadone/Levomethyldate acetate') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="CurrentMedicationsOption"
                    value="Methadone/Levomethyldate acetate"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Methadone/Levomethyldate acetate')}
                    onChange={() => handleCurrentMedicationsOptionChange('Methadone/Levomethyldate acetate')}
                  />
                  Methadone/Levomethyldate acetate &nbsp;&nbsp;
                </label>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('None of the above') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="CurrentMedicationsOption"
                    value="None of the above"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('None of the above')}
                    onChange={() => handleCurrentMedicationsOptionChange('None of the above')}
                  />
                  None of the above &nbsp;&nbsp;
                </label>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-2 d-flex align-items-center">
              <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem'}}>
                <b>Phosphodiesterase-5 (PDE-5) Inhibitors:</b>
              </h1>
            </div>
            <div className="col-md-10">
              <div className="marital d-flex align-items-center">
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Sildenafil') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="CurrentMedicationsOption"
                    value="Sildenafil"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Sildenafil')}
                    onChange={() => handleCurrentMedicationsOptionChange('Sildenafil')}
                  />
                  Sildenafil &nbsp;&nbsp;
                </label>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('None of the above') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="CurrentMedicationsOption"
                    value="None of the above"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('None of the above')}
                    onChange={() => handleCurrentMedicationsOptionChange('None of the above')}
                  />
                  None of the above &nbsp;&nbsp;
                </label>
              </div>
            </div>
          </div>
        </div> */}
        {(selectedPastMedicalHistory.includes('Hyperthyroid') || selectedPastMedicalHistory.includes('Hypothyroid') ) && (
          <div className="container">
            <br/>
            <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem'}}>
                  <b>Thyroid preparations:</b>
                </h1>
              </div>
              <div className="col-md-10">
                <div className="marital d-flex align-items-center">
                  {/* Content for Thyroid preparations Options */}
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Levothyroxine') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="Levothyroxine"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('Levothyroxine')}
                      onChange={() => handleCurrentMedicationsOptionChange('Levothyroxine')}
                    />
                    Levothyroxine &nbsp;&nbsp;
                  </label>
                  <label
                    className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('None of the above13') ? 'active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="CurrentMedicationsOption"
                      value="None of the above"
                      style={{ visibility: 'hidden' }}
                      checked={selectedCurrentMedications.includes('None of the above13')}
                      onChange={() => handleCurrentMedicationsOptionChange('None of the above13')}
                    />
                    None of the above &nbsp;&nbsp;
                  </label>
                  {/* Add more CurrentMedications options as needed */}
                </div>
              </div>
            </div>
          </div>
        )}
 {/* Current Medication ended */}
 

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
  handleFifthblockNext(); 
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
  )
}

export default Currentmedicationblock
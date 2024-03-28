import React, { useState } from 'react';
import { FaPlusCircle, FaTimesCircle } from 'react-icons/fa';

function Fifthblock({selectedPastSurgicalHistory,selectedpatientID, onSubmit,}){
  const [showadversereactionTextField, setShowadversereactionTextField] = useState(false);

  const handleAddadversereactionFreeTextClick = () => {
    setShowadversereactionTextField(!showadversereactionTextField);
  };

  const [showcardiacECGTextField, setShowcardiacECGTextField] = useState(false);

  const handlecardiacECGFreeTextClick = () => {
    setShowcardiacECGTextField(!showcardiacECGTextField);
  };
  
  const [showcardiacECHOTextField, setShowcardiacECHOTextField] = useState(false);

  const handlecardiacECHOFreeTextClick = () => {
    setShowcardiacECHOTextField(!showcardiacECHOTextField);
  };

  const [showcardiacEFTextField, setShowcardiacEFTextField] = useState(false);

  const handlecardiacEFFreeTextClick = () => {
    setShowcardiacEFTextField(!showcardiacEFTextField);
  };

    const [selectedCbc, setSelectedCbc] = useState(''); // Initialize with an empty string or a default value

  const handleCbcChange = (value) => {
    setSelectedCbc(value);
  };
  const [selectedGlucose, setSelectedGlucose] = useState(''); // Initialize with an empty string or a default value

  const handleGlucoseChange = (value) => {
    setSelectedGlucose(value);
  };
  const [selectedLft, setSelectedLft] = useState(''); // Initialize with an empty string or a default value

  const handleLftChange = (value) => {
    setSelectedLft(value);
  };
  const [selectedKft, setSelectedKft] = useState(''); // Initialize with an empty string or a default value

  const handleKftChange = (value) => {
    setSelectedKft(value);
  };
  const [selectedThyroid, setSelectedThyroid] = useState(''); // Initialize with an empty string or a default value

  const handleThyroidChange = (value) => {
    setSelectedThyroid(value);
  };
  const [selectedViralMarkers, setSelectedViralMarkers] = useState(''); // Initialize with an empty string or a default value

  const handleViralMarkersChange = (value) => {
    setSelectedViralMarkers(value);
  };
  const [selectedCardiac, setSelectedCardiac] = useState(''); // Initialize with an empty string or a default value

  const handleCardiacChange = (value) => {
    setSelectedCardiac(value);
  };
  const [selectedadversese, setSelectedadversese] = useState(''); // Initialize with an empty string or a default value

  const handleadverseseChange = (value) => {
    setSelectedadversese(value);
  };
  const [selectedWbc, setSelectedWbc] = useState(''); // Initialize with an empty string or a default value

  const handleWbcChange = (value) => {
    setSelectedWbc(value);
  };
  const [selectedRbc, setSelectedRbc] = useState(''); // Initialize with an empty string or a default value

  const handleRbcChange = (value) => {
    setSelectedRbc(value);
  };
  const [selectedHemoglobin, setSelectedHemoglobin] = useState(''); // Initialize with an empty string or a default value

  const handleHemoglobinChange = (value) => {
    setSelectedHemoglobin(value);
  };

  const [selectedHematocrit, setSelectedHematocrit] = useState(''); // Initialize with an empty string or a default value

  const handleHematocritChange = (value) => {
    setSelectedHematocrit(value);
  };
  const [selectedMcv, setSelectedMcv] = useState(''); // Initialize with an empty string or a default value

  const handleMcvChange = (value) => {
    setSelectedMcv(value);
  };
  const [selectedMchc, setSelectedMchc] = useState(''); // Initialize with an empty string or a default value

  const handleMchcChange = (value) => {
    setSelectedMchc(value);
  };
  const [selectedEsr, setSelectedEsr] = useState(''); // Initialize with an empty string or a default value

  const handleEsrChange = (value) => {
    setSelectedEsr(value);
  };
  const [selectedCrp, setSelectedCrp] = useState(''); // Initialize with an empty string or a default value

  const handleCrpChange = (value) => {
    setSelectedCrp(value);
  };
  const [selectedHba, setSelectedHba] = useState(''); // Initialize with an empty string or a default value

  const handleHbaChange = (value) => {
    setSelectedHba(value);
  };
  const [selectedAlt, setSelectedAlt] = useState(''); // Initialize with an empty string or a default value

  const handleAltChange = (value) => {
    setSelectedAlt(value);
  };
  const [selectedAst, setSelectedAst] = useState(''); // Initialize with an empty string or a default value

  const handleAstChange = (value) => {
    setSelectedAst(value);
  };  
  const [selectedAsp, setSelectedAsp] = useState(''); // Initialize with an empty string or a default value

  const handleAspChange = (value) => {
    setSelectedAsp(value);
  }; 
  const [selectedTotalBilirubin, setSelectedTotalBilirubin] = useState(''); // Initialize with an empty string or a default value

  const handleTotalBilirubinChange = (value) => {
    setSelectedTotalBilirubin(value);
  }; 
  const [selectedDirectBilirubin, setSelectedDirectBilirubin] = useState(''); // Initialize with an empty string or a default value

  const handleDirectBilirubinChange = (value) => {
    setSelectedDirectBilirubin(value);
  }; 
  const [selectedIndirectBilirubin, setSelectedIndirectBilirubin] = useState(''); // Initialize with an empty string or a default value

  const handleIndirectBilirubinChange = (value) => {
    setSelectedIndirectBilirubin(value);
  };  
  const [selectedSalbumin, setSelectedSalbumin] = useState(''); // Initialize with an empty string or a default value

  const handleSalbuminChange = (value) => {
    setSelectedSalbumin(value);
  };
  const [selectedSglobulin, setSelectedSglobulin] = useState(''); // Initialize with an empty string or a default value

  const handleSglobulinChange = (value) => {
    setSelectedSglobulin(value);
  };
  const [selectedAgRation, setSelectedAgRation] = useState(''); // Initialize with an empty string or a default value

  const handleAgRationChange = (value) => {
    setSelectedAgRation(value);
  };
  const [selectedBloodUrea, setSelectedBloodUrea] = useState(''); // Initialize with an empty string or a default value

  const handleBloodUreaChange = (value) => {
    setSelectedBloodUrea(value);
  };
  const [selectedScreatine, setSelectedScreatine] = useState(''); // Initialize with an empty string or a default value

  const handleScreatineChange = (value) => {
    setSelectedScreatine(value);
  };
  const [selectedNaPlus, setSelectedNaPlus] = useState(''); // Initialize with an empty string or a default value

  const handleNaPlusChange = (value) => {
    setSelectedNaPlus(value);
  };
  const [selectedKplus, setSelectedKplus] = useState(''); // Initialize with an empty string or a default value

  const handleKplusChange = (value) => {
    setSelectedKplus(value);
  };
  const [selectedChlorine, setSelectedChlorine] = useState(''); // Initialize with an empty string or a default value

  const handleChlorineChange = (value) => {
    setSelectedChlorine(value);
  };
  const [selectedFtThree, setSelectedFtThree] = useState(''); // Initialize with an empty string or a default value

  const handleFtThreeChange = (value) => {
    setSelectedFtThree(value);
  };
  const [selectedFtFour, setSelectedFtFour] = useState(''); // Initialize with an empty string or a default value

  const handleFtFourChange = (value) => {
    setSelectedFtFour(value);
  };
  const [selectedTsh, setSelectedTsh] = useState(''); // Initialize with an empty string or a default value

  const handleTshChange = (value) => {
    setSelectedTsh(value);
  };
  const [selectedTpo, setSelectedTpo] = useState(''); // Initialize with an empty string or a default value

  const handleTpoChange = (value) => {
    setSelectedTpo(value);
  };
  const [selectedIctc, setSelectedIctc] = useState(''); // Initialize with an empty string or a default value

  const handleIctcChange = (value) => {
    setSelectedIctc(value);
  };
  const [selectedHbsag, setSelectedHbsag] = useState(''); // Initialize with an empty string or a default value

  const handleHbsagChange = (value) => {
    setSelectedHbsag(value);
  };
  const [selectedHcv, setSelectedHcv] = useState(''); // Initialize with an empty string or a default value

  const handleHcvChange = (value) => {
    setSelectedHcv(value);
  };
  const [selectedCardiacsOptions, setSelectedCardiacsOptions] = useState([]);

// Function to handle Cardiacs option changes
const handleCardiacsOptionChange = (selectedOption) => {
  setSelectedCardiacsOptions(selectedOption);
};
const [selectedAdverseReactions, setSelectedAdverseReactions] = useState([]);

const handleAdverseReactionChange = (value) => {
  const updatedAdverseReactions = [...selectedAdverseReactions];
  if (updatedAdverseReactions.includes(value)) {
    updatedAdverseReactions.splice(updatedAdverseReactions.indexOf(value), 1);
  } else {
    updatedAdverseReactions.push(value);
  }
  setSelectedAdverseReactions(updatedAdverseReactions);
};

const handleFifthblockNext = () => {
  onSubmit();
};
const [formData, setFormData] = useState({
  patientId: '', // Include patientId directly from the state
  adverseReactionOption:''
});

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Join the selected options into a comma-separated string
    const adverseReactionOption = selectedAdverseReactions.join(',');
    // const lateralityOption = selectedLateralityOptions.join(',');
    // const respiratorySystemOption = selectedRespiratorySystem.length > 0 ? selectedRespiratorySystem.join(','): 'YES' ;
    // const cardiovascularSystemOption = selectedCardiovascularSystem.length > 0 ? selectedCardiovascularSystem.join(','): 'YES';
    // const renalSystemOption = selectedRenalSystem.length >0 ? selectedRenalSystem.join(','): 'YES' ;
    // const currentMedicationsOption = selectedCurrentMedications.join(',');
    // const relapseChoice = selectedRelapseOption.join(',') ;
    // const substanceAbuseOption = selectedsubstanceAOptions.length > 0 ? selectedsubstanceAOptions.join(',') : 'NOT SELECTED'; 
    const freeECGInput = document.querySelector('input[name="freeECG"]');
    const freeECHOInput = document.querySelector('input[name="freeECHO"]');
    const freeEFInput = document.querySelector('input[name="freeEF"]');
    const freeAdverseReactionInput = document.querySelector('input[name="freeAdverseReaction"]');

      // Get the values from the input elements
    const freeECG = freeECGInput ? freeECGInput.value : '';
    const freeECHO = freeECHOInput ? freeECHOInput.value : '';
    const freeEF = freeEFInput ? freeEFInput.value : '';
    const freeAdverseReaction = freeAdverseReactionInput ? freeAdverseReactionInput.value : '';

    const freeWBCInput = document.querySelector('input[name="freeWBC"]');
const freeRBCInput = document.querySelector('input[name="freeRBC"]');
const freeHemoglobinInput = document.querySelector('input[name="freeHemoglobin"]');
const freeHematocritInput = document.querySelector('input[name="freeHematocrit"]');
const freeMCVInput = document.querySelector('input[name="freeMCV"]');
const freeMCHCInput = document.querySelector('input[name="freeMCHC"]');
const freeESRInput = document.querySelector('input[name="freeESR"]');
const freeCRPInput = document.querySelector('input[name="freeCRP"]');
const freeRBSInput = document.querySelector('input[name="freeRBS"]');
const freeGRBSInput = document.querySelector('input[name="freeGRBS"]');
const freeHBA1CInput = document.querySelector('input[name="freeHBA1C"]');
const freeALTInput = document.querySelector('input[name="freeALT"]');
const freeASTInput = document.querySelector('input[name="freeAST"]');
const freeASPInput = document.querySelector('input[name="freeASP"]');
const freeTotalBilirubinInput = document.querySelector('input[name="freeTotalBilirubin"]');
const freeDirectBilirubinInput = document.querySelector('input[name="freeDirectBilirubin"]');
const freeIndirectBilirubinInput = document.querySelector('input[name="freeIndirectBilirubin"]');
const freeSalbuminInput = document.querySelector('input[name="freeSalbumin"]');
const freeSGlobulinInput = document.querySelector('input[name="freeSGlobulin"]');
const freeAGRATIOInput = document.querySelector('input[name="freeAGRATIO"]');
const freeBloodUreaInput = document.querySelector('input[name="freeBloodUrea"]');
const freeScreatineInput = document.querySelector('input[name="freeScreatine"]');
const freeNaPlusInput = document.querySelector('input[name="freeNaPlus"]');
const freeKPlusInput = document.querySelector('input[name="freeKPlus"]');
const freeChorineInput = document.querySelector('input[name="freeChorine"]');
const freeTThreeInput = document.querySelector('input[name="freeTThree"]');
const freeTFourInput = document.querySelector('input[name="freeTFour"]');
const freeTSHInput = document.querySelector('input[name="freeTSH"]');
const freeTPOInput = document.querySelector('input[name="freeTPO"]');

// Get the values from the input elements
const freeWBC = freeWBCInput ? freeWBCInput.value : '';
const freeRBC = freeRBCInput ? freeRBCInput.value : '';
const freeHemoglobin = freeHemoglobinInput ? freeHemoglobinInput.value : '';
const freeHematocrit = freeHematocritInput ? freeHematocritInput.value : '';
const freeMCV = freeMCVInput ? freeMCVInput.value : '';
const freeMCHC = freeMCHCInput ? freeMCHCInput.value : '';
const freeESR = freeESRInput ? freeESRInput.value : '';
const freeCRP = freeCRPInput ? freeCRPInput.value : '';
const freeRBS = freeRBSInput ? freeRBSInput.value : '';
const freeGRBS = freeGRBSInput ? freeGRBSInput.value : '';
const freeHBA1C = freeHBA1CInput ? freeHBA1CInput.value : '';
const freeALT = freeALTInput ? freeALTInput.value : '';
const freeAST = freeASTInput ? freeASTInput.value : '';
const freeASP = freeASPInput ? freeASPInput.value : '';
const freeTotalBilirubin = freeTotalBilirubinInput ? freeTotalBilirubinInput.value : '';
const freeDirectBilirubin = freeDirectBilirubinInput ? freeDirectBilirubinInput.value : '';
const freeIndirectBilirubin = freeIndirectBilirubinInput ? freeIndirectBilirubinInput.value : '';
const freeSalbumin = freeSalbuminInput ? freeSalbuminInput.value : '';
const freeSGlobulin = freeSGlobulinInput ? freeSGlobulinInput.value : '';
const freeAGRATIO = freeAGRATIOInput ? freeAGRATIOInput.value : '';
const freeBloodUrea = freeBloodUreaInput ? freeBloodUreaInput.value : '';
const freeScreatine = freeScreatineInput ? freeScreatineInput.value : '';
const freeNaPlus = freeNaPlusInput ? freeNaPlusInput.value : '';
const freeKPlus = freeKPlusInput ? freeKPlusInput.value : '';
const freeChorine = freeChorineInput ? freeChorineInput.value : '';
const freeTThree = freeTThreeInput ? freeTThreeInput.value : '';
const freeTFour = freeTFourInput ? freeTFourInput.value : '';
const freeTSH = freeTSHInput ? freeTSHInput.value : '';
const freeTPO = freeTPOInput ? freeTPOInput.value : '';

const dataToSend = { patientId: formData.patientId, adverseReactionOption, freeECG, freeECHO, freeEF, freeAdverseReaction, freeWBC, freeRBC, freeHemoglobin, freeHematocrit, freeMCV, freeMCHC, freeESR, freeCRP, freeRBS, freeGRBS, freeHBA1C, freeALT, freeAST, freeASP, freeAST, freeTotalBilirubin, freeDirectBilirubin, freeIndirectBilirubin, freeSalbumin, freeSGlobulin, freeAGRATIO, freeBloodUrea, freeScreatine, freeNaPlus, freeKPlus, freeChorine, freeTThree, freeTFour, freeTSH, freeTPO};

    console.log('Form Data:', dataToSend);

    const response = await fetch('http://3.16.11.52:5000/fifth_block_option', {
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
  return(
        <>
        <div className="container mt-4">
        <form onSubmit={handleSubmit} />
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
            <div className="row">
                <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>CBC :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedCbc === 'YES' ? 'active' : ''}`}
                       onClick={() => handleCbcChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="CbcOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedCbc === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedCbc === 'NO' ? 'active' : ''}`}
                       onClick={() => handleCbcChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="CbcOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedCbc === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                {/* for free text */}
                
            </div>
            
        </div>
        {/* cbc options started */}
        {selectedCbc === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>WBC :</b>
              </h1>
                </div>
                <div className="col-md-5 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedWbc === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleWbcChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="WbcOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedWbc === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedWbc === 'NO' ? 'active' : ''}`}
                       onClick={() => handleWbcChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="WbcOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedWbc === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeWBC' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter WBC Value"/>
                      <span className="input-group-text">Cells/cmm</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCbc === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>RBC :</b>
              </h1>
                </div>
                <div className="col-md-5 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedRbc === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleRbcChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="RbcOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedRbc === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedRbc === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleRbcChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="RbcOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedRbc === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeRBC' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter RBC Value"/>
                      <span className="input-group-text">millions/cmm</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCbc === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>Hemoglobin :</b>
              </h1>
                </div>
                <div className="col-md-5 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedHemoglobin === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleHemoglobinChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="HemoglobinOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedHemoglobin === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedHemoglobin === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleHemoglobinChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="HemoglobinOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedHemoglobin === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeHemoglobin' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter Hemoglobin Value"/>
                      <span className="input-group-text">gm/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCbc === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>Hematocrit :</b>
              </h1>
                </div>
                <div className="col-md-5 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedHematocrit === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleHematocritChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="HematocritOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedHematocrit === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedHematocrit === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleHematocritChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="HematocritOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedHematocrit === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeHematocrit' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter Hematocrit Value"/>
                      <span className="input-group-text">%</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCbc === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>MCV :</b>
              </h1>
                </div>
                <div className="col-md-5 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedMcv === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleMcvChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="McvOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedMcv === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedMcv === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleMcvChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="McvOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedMcv === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeMCV' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter MCV Value"/>
                      <span className="input-group-text">fl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCbc === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>MCHC :</b>
              </h1>
                </div>
                <div className="col-md-5 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedMchc === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleMchcChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="MchcOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedMchc === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedMchc === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleMchcChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="MchcOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedMchc === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeMCHC' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter MCHC Value"/>
                      <span className="input-group-text">gm/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCbc === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>ESR :</b>
              </h1>
                </div>
                <div className="col-md-5 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedEsr === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleEsrChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="EsrOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedEsr === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedEsr === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleEsrChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="EsrOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedEsr === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeESR' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter ESR Value"/>
                      <span className="input-group-text">gm/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        {selectedCbc === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>CRP :</b>
              </h1>
                </div>
                <div className="col-md-5 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedCrp === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleCrpChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="CrpOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedCrp === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedCrp === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleCrpChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="CrpOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedCrp === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeCRP' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter CRP Value"/>
                      <span className="input-group-text">mg/l</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        {/* cbc option ended */}

        {/* Glucose pART Started */}
         <div className="container">
            <div className="row">
              <hr />
                    <div className="col-md-2 d-flex align-items-center">
                    <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                    <b>Glucose Levels :</b>
                  </h1>
                    </div>
                    <div className="col-md-4 ms-4">
                    <div className="col-md-8">
                      <div className="marital d-flex m-3 align-items-center">
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedGlucose === 'YES' ? 'active' : ''}`}
                          onClick={() => handleGlucoseChange('YES')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="GlucoseOption"
                            value="YES"
                            style={{ visibility: 'hidden' }}
                            checked={selectedGlucose === 'YES'}
                          />
                          YES &nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedGlucose === 'NO' ? 'active' : ''}`}
                          onClick={() => handleGlucoseChange('NO')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="GlucoseOption"
                            value="NO"
                            style={{ visibility: 'hidden' }}
                            checked={selectedGlucose === 'NO'}
                          />
                          NO&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        {/* Add more Cardiacs options here */}
                      </div>
                    </div>
                    </div>
                    {/* for free text */}
                    
            </div>
         </div>

         {selectedGlucose === 'YES' && (
          <div className="container" style={{marginLeft:'10%'}}>
          <div className="row">
          <div className="col-md-2 d-flex align-items-center">
            <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
            <b>RBS :</b>
          </h1>
            </div>
            <div className="col-md-4 ms-4">
              <div className="input-group mb-3 p-2 m-3">
                  <input type="text" name='freeRBS' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter RBS Value"/>
                  <span className="input-group-text">mg/dl</span>
              </div>
            </div>
          </div>
        </div>
         )}

         {selectedGlucose === 'YES' && (
          <div className="container" style={{marginLeft:'10%'}}>
          <div className="row">
          <div className="col-md-2 d-flex align-items-center">
            <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
            <b>GRBS :</b>
          </h1>
            </div>
            <div className="col-md-4 ms-4">
              <div className="input-group mb-3 p-2 m-3">
                  <input type="text" name='freeGRBS' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter GRBS Value"/>
                  <span className="input-group-text">mg/dl</span>
              </div>
            </div>
          </div>
        </div>
         )}

          {selectedGlucose === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>HbA1c :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedHba === 'YES' ? 'active' : ''}`}
                       onClick={() => handleHbaChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="HbaOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedHba === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedHba === 'NO' ? 'active' : ''}`}
                       onClick={() => handleHbaChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="HbaOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedHba === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeHBA1C' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter HbA1c Value"/>
                      <span className="input-group-text">%</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        {/* Glucose part ender */}

        {/* Liver Function Test */}
        <div className="container">
            <div className="row">
              <hr />
                    <div className="col-md-2 d-flex align-items-center">
                    <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                    <b>Liver Function Test :</b>
                  </h1>
                    </div>
                    <div className="col-md-4 ms-4">
                    <div className="col-md-8">
                      <div className="marital d-flex m-3 align-items-center">
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedLft === 'YES' ? 'active' : ''}`}
                          onClick={() => handleLftChange('YES')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="LftOption"
                            value="YES"
                            style={{ visibility: 'hidden' }}
                            checked={selectedLft === 'YES'}
                          />
                          YES &nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedLft === 'NO' ? 'active' : ''}`}
                          onClick={() => handleLftChange('NO')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="LftOption"
                            value="NO"
                            style={{ visibility: 'hidden' }}
                            checked={selectedLft === 'NO'}
                          />
                          NO&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        {/* Add more Cardiacs options here */}
                      </div>
                    </div>
                    </div>
                    {/* for free text */}
                    
            </div>
         </div>

         {selectedLft === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>ALT :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedAlt === 'YES' ? 'active' : ''}`}
                       onClick={() => handleAltChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="AltOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedAlt === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedAlt === 'NO' ? 'active' : ''}`}
                       onClick={() => handleAltChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="AltOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedAlt === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeALT' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter ALT Value"/>
                      <span className="input-group-text">lu/l</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedLft === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>AST :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedAst === 'YES' ? 'active' : ''}`}
                       onClick={() => handleAstChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="AstOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedAst === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedAst === 'NO' ? 'active' : ''}`}
                       onClick={() => handleAstChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="AstOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedAst === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeAST' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter AST Value"/>
                      <span className="input-group-text">lu/l</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedLft === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>ASP :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedAsp === 'YES' ? 'active' : ''}`}
                       onClick={() => handleAspChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="AspOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedAsp === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedAsp === 'NO' ? 'active' : ''}`}
                       onClick={() => handleAspChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="AspOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedAsp === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeASP' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter Asp Value"/>
                      <span className="input-group-text">lu/l</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedLft === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>Total Bilirubin :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedTotalBilirubin === 'YES' ? 'active' : ''}`}
                       onClick={() => handleTotalBilirubinChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="TotalBilirubinOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedTotalBilirubin === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedTotalBilirubin === 'NO' ? 'active' : ''}`}
                       onClick={() => handleTotalBilirubinChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="TotalBilirubinOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedTotalBilirubin === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeTotalBilirubin' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter Total Bilirubin Value"/>
                      <span className="input-group-text">mg/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedLft === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>Direct Bilirubin :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedDirectBilirubin === 'YES' ? 'active' : ''}`}
                       onClick={() => handleDirectBilirubinChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="DirectBilirubinOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedDirectBilirubin === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedDirectBilirubin === 'NO' ? 'active' : ''}`}
                       onClick={() => handleDirectBilirubinChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="DirectBilirubinOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedDirectBilirubin === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeDirectBilirubin' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter Direct Bilirubin Value"/>
                      <span className="input-group-text">mg/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedLft === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>Indirect Bilirubin :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedIndirectBilirubin === 'YES' ? 'active' : ''}`}
                       onClick={() => handleIndirectBilirubinChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="IndirectBilirubinOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedIndirectBilirubin === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedIndirectBilirubin === 'NO' ? 'active' : ''}`}
                       onClick={() => handleIndirectBilirubinChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="IndirectBilirubinOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedIndirectBilirubin === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeIndirectBilirubin' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter Indirect Bilirubin Value"/>
                      <span className="input-group-text">mg/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedLft === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>S.Albumin :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedSalbumin === 'YES' ? 'active' : ''}`}
                       onClick={() => handleSalbuminChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="SalbuminOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedSalbumin === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedSalbumin === 'NO' ? 'active' : ''}`}
                       onClick={() => handleSalbuminChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="SalbuminOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedSalbumin === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeSalbumin' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter S.Albumin Value"/>
                      <span className="input-group-text">gm/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedLft === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>S.Globulin :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedSglobulin === 'YES' ? 'active' : ''}`}
                       onClick={() => handleSglobulinChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="SglobulinOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedSglobulin === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedSglobulin === 'NO' ? 'active' : ''}`}
                       onClick={() => handleSglobulinChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="SglobulinOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedSglobulin === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeSGlobulin' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter S.Globulin Value"/>
                      <span className="input-group-text">gm/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedLft === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>A/G Ratio:</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedAgRation === 'YES' ? 'active' : ''}`}
                       onClick={() => handleAgRationChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="AgRationOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedAgRation === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedAgRation === 'NO' ? 'active' : ''}`}
                       onClick={() => handleAgRationChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="AgRationOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedAgRation === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeAGRATIO' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter A/G Ratio Value"/>
                      <span className="input-group-text">gm/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        {/* Liver Function Ended */}

        {/* Kidney Function Test Stat */}
        <div className="container">
            <div className="row">
              <hr />
                    <div className="col-md-2 d-flex align-items-center">
                    <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                    <b>Kidney Function Test :</b>
                  </h1>
                    </div>
                    <div className="col-md-4 ms-4">
                    <div className="col-md-8">
                      <div className="marital d-flex m-3 align-items-center">
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedKft === 'YES' ? 'active' : ''}`}
                          onClick={() => handleKftChange('YES')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="KftOption"
                            value="YES"
                            style={{ visibility: 'hidden' }}
                            checked={selectedKft === 'YES'}
                          />
                          YES &nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedKft === 'NO' ? 'active' : ''}`}
                          onClick={() => handleKftChange('NO')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="KftOption"
                            value="NO"
                            style={{ visibility: 'hidden' }}
                            checked={selectedKft === 'NO'}
                          />
                          NO&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        {/* Add more Cardiacs options here */}
                      </div>
                    </div>
                    </div>
                    {/* for free text */}
                    
            </div>
         </div>

         {selectedKft === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>Blood Urea :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedBloodUrea === 'YES' ? 'active' : ''}`}
                       onClick={() => handleBloodUreaChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="BloodUreaOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedBloodUrea === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedBloodUrea === 'NO' ? 'active' : ''}`}
                       onClick={() => handleBloodUreaChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="BloodUreaOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedBloodUrea === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeBloodUrea' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter Blood Urea Value"/>
                      <span className="input-group-text">mg/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedKft === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>S.Creatine :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedScreatine === 'YES' ? 'active' : ''}`}
                       onClick={() => handleScreatineChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="ScreatineOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedScreatine === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedScreatine === 'NO' ? 'active' : ''}`}
                       onClick={() => handleScreatineChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="ScreatineOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedScreatine === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeScreatine' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter S.Creatine Value"/>
                      <span className="input-group-text">mg/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedKft === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>Na<sup>+ :</sup></b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedNaPlus === 'YES' ? 'active' : ''}`}
                       onClick={() => handleNaPlusChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="NaPlusOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedNaPlus === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedNaPlus === 'NO' ? 'active' : ''}`}
                       onClick={() => handleNaPlusChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="NaPlusOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedNaPlus === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeNaPlus' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter Na+ Value"/>
                      <span className="input-group-text">mWq/l</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedKft === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>K<sup>+ :</sup></b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedKplus === 'YES' ? 'active' : ''}`}
                       onClick={() => handleKplusChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="KplusOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedKplus === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedKplus === 'NO' ? 'active' : ''}`}
                       onClick={() => handleKplusChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="KplusOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedKplus === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeKPlus' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter K+ Value"/>
                      <span className="input-group-text">mWq/l</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedKft === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>Chlorine :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedChlorine === 'YES' ? 'active' : ''}`}
                       onClick={() => handleChlorineChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="ChlorineOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedChlorine === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedChlorine === 'NO' ? 'active' : ''}`}
                       onClick={() => handleChlorineChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="ChlorineOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedChlorine === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeChorine' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter K+ Value"/>
                      <span className="input-group-text">mWq/l</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        {/* Kidney Function Test Stat */}

        {/* Thyroid start */}
        <div className="container">
            <div className="row">
              <hr />
                    <div className="col-md-2 d-flex align-items-center">
                    <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                    <b>Thyroid :</b>
                  </h1>
                    </div>
                    <div className="col-md-4 ms-4">
                    <div className="col-md-8">
                      <div className="marital d-flex m-3 align-items-center">
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedThyroid === 'YES' ? 'active' : ''}`}
                          onClick={() => handleThyroidChange('YES')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="ThyroidOption"
                            value="YES"
                            style={{ visibility: 'hidden' }}
                            checked={selectedThyroid === 'YES'}
                          />
                          YES &nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedThyroid === 'NO' ? 'active' : ''}`}
                          onClick={() => handleThyroidChange('NO')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="ThyroidOption"
                            value="NO"
                            style={{ visibility: 'hidden' }}
                            checked={selectedThyroid === 'NO'}
                          />
                          NO&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        {/* Add more Cardiacs options here */}
                      </div>
                    </div>
                    </div>
                    {/* for free text */}
                    
            </div>
         </div>

         {selectedThyroid === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>T3 :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedFtThree === 'YES' ? 'active' : ''}`}
                       onClick={() => handleFtThreeChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="FtThreeOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedFtThree === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedFtThree === 'NO' ? 'active' : ''}`}
                       onClick={() => handleFtThreeChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="FtThreeOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedFtThree === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeTThree' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter T3 Value"/>
                      <span className="input-group-text">ng/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedThyroid === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>T4 :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedFtFour === 'YES' ? 'active' : ''}`}
                       onClick={() => handleFtFourChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="FtFourOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedFtFour === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedFtFour === 'NO' ? 'active' : ''}`}
                       onClick={() => handleFtFourChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="FtFourOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedFtFour === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeTFour' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter T4 Value"/>
                      <span className="input-group-text">ng/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedThyroid === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>TSH :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedTsh === 'YES' ? 'active' : ''}`}
                       onClick={() => handleTshChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="TshOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedTsh === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedTsh === 'NO' ? 'active' : ''}`}
                       onClick={() => handleTshChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="TshOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedTsh === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeTSH' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter TSH Value"/>
                      <span className="input-group-text">ug/dl(u=microgram)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedThyroid === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>TPO :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedTpo === 'YES' ? 'active' : ''}`}
                       onClick={() => handleTpoChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="TpoOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedTpo === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedTpo === 'NO' ? 'active' : ''}`}
                       onClick={() => handleTpoChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="TpoOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedTpo === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" name='freeTPO' className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter TPO Value"/>
                      <span className="input-group-text">uU/ml(u=microgram)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

         {/* Thyroid start */}

         {/* Viral Markers Started */}
         <div className="container">
            <div className="row">
              <hr />
                    <div className="col-md-2 d-flex align-items-center">
                    <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                    <b>Viral Markers :</b>
                  </h1>
                    </div>
                    <div className="col-md-4 ms-4">
                    <div className="col-md-8">
                      <div className="marital d-flex m-3 align-items-center">
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedViralMarkers === 'YES' ? 'active' : ''}`}
                          onClick={() => handleViralMarkersChange('YES')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="ViralMarkersOption"
                            value="YES"
                            style={{ visibility: 'hidden' }}
                            checked={selectedViralMarkers === 'YES'}
                          />
                          YES &nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedViralMarkers === 'NO' ? 'active' : ''}`}
                          onClick={() => handleViralMarkersChange('NO')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="ViralMarkersOption"
                            value="NO"
                            style={{ visibility: 'hidden' }}
                            checked={selectedViralMarkers === 'NO'}
                          />
                          NO&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        {/* Add more Cardiacs options here */}
                      </div>
                    </div>
                    </div>
                    {/* for free text */}
                    
            </div>
         </div>

         {selectedViralMarkers === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>ICTC :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedIctc === 'YES' ? 'active' : ''}`}
                       onClick={() => handleIctcChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="IctcOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedIctc === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedIctc === 'NO' ? 'active' : ''}`}
                       onClick={() => handleIctcChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="IctcOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedIctc === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
              </div>
            </div>
          )}

          {selectedViralMarkers === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>HBsAg :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedHbsag === 'YES' ? 'active' : ''}`}
                       onClick={() => handleHbsagChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="HbsagOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedHbsag === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedHbsag === 'NO' ? 'active' : ''}`}
                       onClick={() => handleHbsagChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="HbsagOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedHbsag === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
              </div>
            </div>
          )}

          {selectedViralMarkers === 'YES' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>HCV :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedHcv === 'YES' ? 'active' : ''}`}
                       onClick={() => handleHcvChange('YES')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="HcvOption"
                         value="YES"
                         style={{ visibility: 'hidden' }}
                         checked={selectedHcv === 'YES'}
                       />
                       YES &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedHcv === 'NO' ? 'active' : ''}`}
                       onClick={() => handleHcvChange('NO')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="HcvOption"
                         value="NO"
                         style={{ visibility: 'hidden' }}
                         checked={selectedHcv === 'NO'}
                       />
                       NO&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
              </div>
            </div>
          )}
         {/* Viral Markers Ended */}

         {/* cardiac started */}
         <div className="container">
            <div className="row">
              <hr />
                    <div className="col-md-2 d-flex align-items-center">
                    <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                    <b>Cardiac :</b>
                  </h1>
                    </div>
                    <div className="col-md-4 ms-4">
                    <div className="col-md-8">
                      <div className="marital d-flex m-3 align-items-center">
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedCardiac === 'YES' ? 'active' : ''}`}
                          onClick={() => handleCardiacChange('YES')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="CardiacOption"
                            value="YES"
                            style={{ visibility: 'hidden' }}
                            checked={selectedCardiac === 'YES'}
                          />
                          YES &nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedCardiac === 'NO' ? 'active' : ''}`}
                          onClick={() => handleCardiacChange('NO')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="CardiacOption"
                            value="NO"
                            style={{ visibility: 'hidden' }}
                            checked={selectedCardiac === 'NO'}
                          />
                          NO&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        {/* Add more Cardiacs options here */}
                      </div>
                    </div>
                    </div>
                    {/* for free text */}
                    
            </div>
         </div>

         {selectedCardiac === 'YES' && (
           <div className="container">
            <div className="row">
              <div className="col-md-2">

              </div>
            <div className="col-md-10 ms-4">
                <div className="marital m-3 d-flex align-items-center"  style={{marginLeft:'90%'}}>
             <label
            className={`maritalcircle p-2 m-3 ${selectedCardiacsOptions === 'ECG' ? 'active' : ''}`}
          >
            <input
              type="radio"
              name="CardiacsOption"
              value="ECG"
              style={{ visibility: 'hidden' }}
              checked={selectedCardiacsOptions === 'ECG'}
              onChange={() => handleCardiacsOptionChange('ECG')}
            />
            ECG &nbsp;&nbsp;
          </label>
          <div className="col-md-3 ms-auto text-align-right">
              <div className="row">
                <div className="col-md-12" style={{ marginLeft: '20%' }}>
                  <button className="btn" style={{ color: '#fff' }} onClick={handlecardiacECGFreeTextClick}>
                    <div className="pulser">
                    {showcardiacECGTextField ? (
                <FaTimesCircle /> // Display close button when input is shown
              ) : (
                <FaPlusCircle /> // Display plus icon when input is hidden
              )}
                    </div>
                  </button>
                </div>
              </div>
              {showcardiacECGTextField && (
                <div className="row mt-3">
                  <div className="col-md-12 offset-md-2">
                    <input
                      type="text"
                      style={{ border: '1px solid #000', borderRadius: '10px' }}
                      className="form-control"
                      name='freeECG'
                      placeholder="Enter ECG Option"
                    />
                  </div>
                </div>
              )}
            </div>
          
          </div>
          <div className="marital m-3 d-flex align-items-center"  style={{marginLeft:'90%'}}>
          <label
            className={`maritalcircle p-2 m-3 ${selectedCardiacsOptions === 'ECHO' ? 'active' : ''}`}
          >
            <input
              type="radio"
              name="CardiacsOption"
              value="ECHO"
              style={{ visibility: 'hidden' }}
              checked={selectedCardiacsOptions === 'ECHO'}
              onChange={() => handleCardiacsOptionChange('ECHO')}
            />
            ECHO &nbsp;&nbsp;
          </label>
          <div className="col-md-3 ms-auto text-align-right">
              <div className="row">
                <div className="col-md-12" style={{ marginLeft: '20%' }}>
                  <button className="btn" style={{ color: '#fff' }} onClick={handlecardiacECHOFreeTextClick}>
                    <div className="pulser">
                    {showcardiacECHOTextField ? (
                <FaTimesCircle /> // Display close button when input is shown
              ) : (
                <FaPlusCircle /> // Display plus icon when input is hidden
              )}
                    </div>
                  </button>
                </div>
              </div>
              {showcardiacECHOTextField && (
                <div className="row mt-3">
                  <div className="col-md-12 offset-md-2">
                    <input
                      type="text"
                      style={{ border: '1px solid #000', borderRadius: '10px' }}
                      className="form-control"
                      name='freeECHO'
                      placeholder="Enter ECHO Option"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="marital m-3 d-flex align-items-center"  style={{marginLeft:'90%'}}>
          <label
            className={`maritalcircle p-2 m-3 ${selectedCardiacsOptions === 'EF%' ? 'active' : ''}`}
          >
            <input
              type="radio"
              name="CardiacsOption"
              value="EF%"
              style={{ visibility: 'hidden' }}
              checked={selectedCardiacsOptions === 'EF%'}
              onChange={() => handleCardiacsOptionChange('EF%')}
            />
            EF% &nbsp;&nbsp;
          </label>
          <div className="col-md-3 ms-auto text-align-right">
              <div className="row">
                <div className="col-md-12" style={{ marginLeft: '20%' }}>
                  <button className="btn" style={{ color: '#fff' }} onClick={handlecardiacEFFreeTextClick}>
                    <div className="pulser">
                    {showcardiacEFTextField ? (
                <FaTimesCircle /> // Display close button when input is shown
              ) : (
                <FaPlusCircle /> // Display plus icon when input is hidden
              )}
                    </div>
                  </button>
                </div>
              </div>
              {showcardiacEFTextField && (
                <div className="row mt-3">
                  <div className="col-md-12 offset-md-2">
                    <input
                      type="text"
                      style={{ border: '1px solid #000', borderRadius: '10px' }}
                      className="form-control"
                      name='freeEF'
                      placeholder="Enter EF% Option"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          </div>

         
            
          </div>
           </div>
          )}
         {/* cardiac ended*/}

         {/* Adverse Reactions started */}
         <div className="container mt-4">
      <hr />
      <div className="row">
        <div className="col-md-2 d-flex align-items-center">
          <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
            <b>Adverse Reactions:</b>
          </h1>
        </div>
        <div className="col-md-4 ms-4">
                    <div className="col-md-8">
                      <div className="marital d-flex m-3 align-items-center">
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedadversese === 'YES' ? 'active' : ''}`}
                          onClick={() => handleadverseseChange('YES')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="adverseseOption"
                            value="YES"
                            style={{ visibility: 'hidden' }}
                            checked={selectedadversese === 'YES'}
                          />
                          YES &nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedadversese === 'NO' ? 'active' : ''}`}
                          onClick={() => handleadverseseChange('NO')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="adverseseOption"
                            value="NO"
                            style={{ visibility: 'hidden' }}
                            checked={selectedadversese === 'NO'}
                          />
                          NO &nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        {/* Add more Cardiacs options here */}
                      </div>
                    </div>
                    </div>



       
        <div className="col-md-3 ms-auto text-align-right">
          <div className="row">
            <div className="col-md-12" style={{ marginLeft: '20%' }}>
              <button className="btn" style={{ color: '#fff' }} onClick={handleAddadversereactionFreeTextClick}>
                <div className="pulser">
                {showadversereactionTextField ? (
                <FaTimesCircle /> // Display close button when input is shown
              ) : (
                <FaPlusCircle /> // Display plus icon when input is hidden
              )}
                </div>
              </button>
            </div>
          </div>
          {showadversereactionTextField && (
            <div className="row mt-3">
              <div className="col-md-12 offset-md-2">
                <input
                  type="text"
                  style={{ border: '1px solid #000', borderRadius: '10px' }}
                  className="form-control"
                  name='freeAdverseReaction'
                  placeholder="Enter Adverse Reaction Option"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

    {selectedadversese === 'YES' && (
           <div className="col-md-12 ms-4">
           <div className="rss ms-4">
               <div className="col-md-12 marital m-3 d-flex align-items-center">
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('QT prolongation') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="adverseReactionOption"
                     value="QT prolongation"
                     style={{ visibility: 'hidden' }}
                     checked={selectedAdverseReactions.includes('QT prolongation')}
                     onChange={() => handleAdverseReactionChange('QT prolongation')}
                   />
                   QT prolongation &nbsp;&nbsp;
                 </label>
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Seizures') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="adverseReactionOption"
                     value="Seizures"
                     style={{ visibility: 'hidden' }}
                     checked={selectedAdverseReactions.includes('Seizures')}
                     onChange={() => handleAdverseReactionChange('Seizures')}
                   />
                   Seizures &nbsp;&nbsp;
                 </label>
                 
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Diarrhea /flatulence') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="adverseReactionOption"
                     value="Diarrhea /flatulence"
                     style={{ visibility: 'hidden' }}
                     checked={selectedAdverseReactions.includes('Diarrhea /flatulence')}
                     onChange={() => handleAdverseReactionChange('Diarrhea /flatulence')}
                   />
                   Diarrhea /flatulence &nbsp;&nbsp;
                 </label>
                 </div>
                 <div className="col-md-12 marital m-3 d-flex align-items-center">
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Psychotic symptoms') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="adverseReactionOption"
                     value="Psychotic symptoms"
                     style={{ visibility: 'hidden' }}
                     checked={selectedAdverseReactions.includes('Psychotic symptoms')}
                     onChange={() => handleAdverseReactionChange('Psychotic symptoms')}
                   />
                   Psychotic symptoms &nbsp;&nbsp;
                 </label>
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Suicidal ideation') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="adverseReactionOption"
                     value="Suicidal ideation"
                     style={{ visibility: 'hidden' }}
                     checked={selectedAdverseReactions.includes('Suicidal ideation')}
                     onChange={() => handleAdverseReactionChange('Suicidal ideation')}
                   />
                   Suicidal ideation &nbsp;&nbsp;
                 </label>
                 
                 
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Gastrointestinal symptoms') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="adverseReactionOption"
                     value="Gastrointestinal symptoms"
                     style={{ visibility: 'hidden' }}
                     checked={selectedAdverseReactions.includes('Gastrointestinal symptoms')}
                     onChange={() => handleAdverseReactionChange('Gastrointestinal symptoms')}
                   />
                   Gastrointestinal symptoms &nbsp;&nbsp;
                 </label>
                 </div>
                 <div className="col-md-12 marital m-3 d-flex align-items-center">
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Tendonitis and tendon rupture') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="adverseReactionOption"
                     value="Tendonitis and tendon rupture"
                     style={{ visibility: 'hidden' }}
                     checked={selectedAdverseReactions.includes('Tendonitis and tendon rupture')}
                     onChange={() => handleAdverseReactionChange('Tendonitis and tendon rupture')}
                   />
                   Tendonitis and tendon rupture &nbsp;&nbsp;
                 </label>
                 
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Hepatitis') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="adverseReactionOption"
                     value="Hepatitis"
                     style={{ visibility: 'hidden' }}
                     checked={selectedAdverseReactions.includes('Hepatitis')}
                     onChange={() => handleAdverseReactionChange('Hepatitis')}
                   />
                   Hepatitis &nbsp;&nbsp;
                 </label>
                 </div>
                 <div className="col-md-12 marital m-3 d-flex align-items-center">
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Metallic taste') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="adverseReactionOption"
                     value="Metallic taste"
                     style={{ visibility: 'hidden' }}
                     checked={selectedAdverseReactions.includes('Metallic taste')}
                     onChange={() => handleAdverseReactionChange('Metallic taste')}
                   />
                   Metallic taste &nbsp;&nbsp;
                 </label>
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Optic neuritis') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="adverseReactionOption"
                     value="Optic neuritis"
                     style={{ visibility: 'hidden' }}
                     checked={selectedAdverseReactions.includes('Optic neuritis')}
                     onChange={() => handleAdverseReactionChange('Optic neuritis')}
                   />
                   Optic neuritis &nbsp;&nbsp;
                 </label>
                 
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Hypothyroidism') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="adverseReactionOption"
                     value="Hypothyroidism"
                     style={{ visibility: 'hidden' }}
                     checked={selectedAdverseReactions.includes('Hypothyroidism')}
                     onChange={() => handleAdverseReactionChange('Hypothyroidism')}
                   />
                   Hypothyroidism &nbsp;&nbsp;
                 </label>
                 </div>
                 <div className="col-md-12 marital m-3 d-flex align-items-center">
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Arthralgia') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="adverseReactionOption"
                     value="Arthralgia"
                     style={{ visibility: 'hidden' }}
                     checked={selectedAdverseReactions.includes('Arthralgia')}
                     onChange={() => handleAdverseReactionChange('Arthralgia')}
                   />
                   Arthralgia &nbsp;&nbsp;
                 </label>
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Peripheral neuropathy') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="adverseReactionOption"
                     value="Peripheral neuropathy"
                     style={{ visibility: 'hidden' }}
                     checked={selectedAdverseReactions.includes('Peripheral neuropathy')}
                     onChange={() => handleAdverseReactionChange('Peripheral neuropathy')}
                   />
                   Peripheral neuropathy &nbsp;&nbsp;
                 </label>
               
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Alopecia') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="adverseReactionOption"
                     value="Alopecia"
                     style={{ visibility: 'hidden' }}
                     checked={selectedAdverseReactions.includes('Alopecia')}
                     onChange={() => handleAdverseReactionChange('Alopecia')}
                   />
                   Alopecia &nbsp;&nbsp;
                 </label>
                 </div>
                 <div className="col-md-12 marital m-3 d-flex align-items-center">
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Headache') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="adverseReactionOption"
                     value="Headache"
                     style={{ visibility: 'hidden' }}
                     checked={selectedAdverseReactions.includes('Headache')}
                     onChange={() => handleAdverseReactionChange('Headache')}
                   />
                   Headache &nbsp;&nbsp;
                 </label>
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Superficial fungal Infection and thrush') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="adverseReactionOption"
                     value="Superficial fungal Infection and thrush"
                     style={{ visibility: 'hidden' }}
                     checked={selectedAdverseReactions.includes('Superficial fungal Infection and thrush')}
                     onChange={() => handleAdverseReactionChange('Superficial fungal Infection and thrush')}
                   />
                   Superficial fungal Infection and thrush &nbsp;&nbsp;
                 </label>
                 </div>
               <div className="col-md-12 marital m-3 d-flex align-items-center">
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Depression') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="adverseReactionOption"
                     value="Depression"
                     style={{ visibility: 'hidden' }}
                     checked={selectedAdverseReactions.includes('Depression')}
                     onChange={() => handleAdverseReactionChange('Depression')}
                   />
                   Depression &nbsp;&nbsp;
                 </label>
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Dysglycemia and hyperglycemia') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="adverseReactionOption"
                     value="Dysglycemia and hyperglycemia"
                     style={{ visibility: 'hidden' }}
                     checked={selectedAdverseReactions.includes('Dysglycemia and hyperglycemia')}
                     onChange={() => handleAdverseReactionChange('Dysglycemia and hyperglycemia')}
                   />
                   Dysglycemia and hyperglycemia &nbsp;&nbsp;
                 </label>
                 {/* Add more adverse reactions here */}
               </div>
             </div>
           </div>
   
    )}
         {/* Adverse Reactions ended */}
         <div className="text-center  mb-4" style={{paddingLeft:'80%'}}> {/* Use text-right class here */}

<button className="btn btn-primary btn-lg" onClick={(e) => {
  handleFifthblockNext();
handleSubmit(e);
}}  style={{ backgroundColor: '#795CED', color: '#fff' }}>
  &nbsp;&nbsp; Submit &nbsp;&nbsp;
</button>

</div>
        </>
    )
}

export default Fifthblock;
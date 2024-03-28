import React, { useState } from "react";
import { FaPlusCircle, FaTimesCircle } from "react-icons/fa";

function Thirdblock({
  selectedOrgan,
  selectedPastMedicalHistory,
  selectedChiefOptions,
  selectedLungOptions,
  selectedpatientID,
  onSubmit,
  onBack,
}) {
  const [showcnfdiagnosisTextField, setShowcnfdiagnosisTextField] =
    useState(false);

  const handleAddcnfdiagnosisFreeTextClick = () => {
    setShowcnfdiagnosisTextField(!showcnfdiagnosisTextField);
  };
  const [showdiagnosisTextField, setShowdiagnosisTextField] = useState(false);

  const handleAdddiagnosisFreeTextClick = () => {
    setShowdiagnosisTextField(!showdiagnosisTextField);
  };
  const [showchestimageTextField, setShowchestimageTextField] = useState(false);

  const handleAddchestimageFreeTextClick = () => {
    setShowchestimageTextField(!showchestimageTextField);
  };

  // const [showbreathsoundTextField, setShowbreathsoundTextField] = useState(false);

  // const handleAddbreathsoundFreeTextClick = () => {
  //   setShowbreathsoundTextField(!showbreathsoundTextField);
  // };

  const [selectedBreathSoundOptions, setSelectedBreathSoundOptions] = useState(
    []
  );

  const handleBreathSoundOptionChange = (value) => {
    const updatedOptions = [...selectedBreathSoundOptions];
    const index = updatedOptions.indexOf(value);

    if (index === -1) {
      // If the value is not in the selected options array, add it
      updatedOptions.push(value);
    } else {
      // If the value is already in the selected options array, remove it
      updatedOptions.splice(index, 1);
    }

    setSelectedBreathSoundOptions(updatedOptions);
  };

  // for Bbslaterality
  const [selectedBbsLaterality, setSelectedBbsLaterality] = useState([]);

  const handleBbsLateralityChange = (value) => {
    if (selectedBbsLaterality.includes(value)) {
      setSelectedBbsLaterality(
        selectedBbsLaterality.filter((item) => item !== value)
      );
    } else {
      setSelectedBbsLaterality([...selectedBbsLaterality, value]);
    }
  };

  // Function to handle laterality option changes
  const [selectedBbsLateralityOptionsopt, setSelectedBbsLateralityOptionsopt] =
    useState([]);
  const handleBbsLateralityOptionoptChange = (value) => {
    if (selectedBbsLateralityOptionsopt.includes(value)) {
      setSelectedBbsLateralityOptionsopt(
        selectedBbsLateralityOptionsopt.filter((item) => item !== value)
      );
    } else {
      setSelectedBbsLateralityOptionsopt([
        ...selectedBbsLateralityOptionsopt,
        value,
      ]);
    }
  };

  // for dbslaterality
  const [selectedDbsLaterality, setSelectedDbsLaterality] = useState([]);

  const handleDbsLateralityChange = (value) => {
    if (selectedDbsLaterality.includes(value)) {
      setSelectedDbsLaterality(
        selectedDbsLaterality.filter((item) => item !== value)
      );
    } else {
      setSelectedDbsLaterality([...selectedDbsLaterality, value]);
    }
  };

  // Function to handle laterality option changes
  const [selectedDbsLateralityOptionsopt, setSelectedDbsLateralityOptionsopt] =
    useState([]);
  const handleDbsLateralityOptionoptChange = (value) => {
    if (selectedDbsLateralityOptionsopt.includes(value)) {
      setSelectedDbsLateralityOptionsopt(
        selectedDbsLateralityOptionsopt.filter((item) => item !== value)
      );
    } else {
      setSelectedDbsLateralityOptionsopt([
        ...selectedDbsLateralityOptionsopt,
        value,
      ]);
    }
  };

  // for Crackleslaterality
  const [selectedCracklesLaterality, setSelectedCracklesLaterality] = useState(
    []
  );

  const handleCracklesLateralityChange = (value) => {
    if (selectedCracklesLaterality.includes(value)) {
      setSelectedCracklesLaterality(
        selectedCracklesLaterality.filter((item) => item !== value)
      );
    } else {
      setSelectedCracklesLaterality([...selectedCracklesLaterality, value]);
    }
  };

  // Function to handle laterality option changes

  const [
    selectedCracklesLateralityOptionsopt,
    setSelectedCracklesLateralityOptionsopt,
  ] = useState([]);

  const handleCracklesLateralityOptionoptChange = (value) => {
    if (selectedCracklesLateralityOptionsopt.includes(value)) {
      setSelectedCracklesLateralityOptionsopt(
        selectedCracklesLateralityOptionsopt.filter((item) => item !== value)
      );
    } else {
      setSelectedCracklesLateralityOptionsopt([
        ...selectedCracklesLateralityOptionsopt,
        value,
      ]);
    }
  };

  // for Prlaterality
  const [selectedPrLaterality, setSelectedPrLaterality] = useState([]);

  const handlePrLateralityChange = (value) => {
    if (selectedPrLaterality.includes(value)) {
      setSelectedPrLaterality(
        selectedPrLaterality.filter((item) => item !== value)
      );
    } else {
      setSelectedPrLaterality([...selectedPrLaterality, value]);
    }
  };

  // Function to handle laterality option changes

  const [selectedPrLateralityOptionsopt, setSelectedPrLateralityOptionsopt] =
    useState([]);

  const handlePrLateralityOptionoptChange = (value) => {
    if (selectedPrLateralityOptionsopt.includes(value)) {
      setSelectedPrLateralityOptionsopt(
        selectedPrLateralityOptionsopt.filter((item) => item !== value)
      );
    } else {
      setSelectedPrLateralityOptionsopt([
        ...selectedPrLateralityOptionsopt,
        value,
      ]);
    }
  };

  // for Rhonchilaterality
  const [selectedRhonchiLaterality, setSelectedRhonchiLaterality] = useState(
    []
  );

  const handleRhonchiLateralityChange = (value) => {
    if (selectedRhonchiLaterality.includes(value)) {
      setSelectedRhonchiLaterality(
        selectedRhonchiLaterality.filter((item) => item !== value)
      );
    } else {
      setSelectedRhonchiLaterality([...selectedRhonchiLaterality, value]);
    }
  };

  // Function to handle laterality option changes

  const [
    selectedRhonchiLateralityOptionsopt,
    setSelectedRhonchiLateralityOptionsopt,
  ] = useState([]);

  const handleRhonchiLateralityOptionoptChange = (value) => {
    if (selectedRhonchiLateralityOptionsopt.includes(value)) {
      setSelectedRhonchiLateralityOptionsopt(
        selectedRhonchiLateralityOptionsopt.filter((item) => item !== value)
      );
    } else {
      setSelectedRhonchiLateralityOptionsopt([
        ...selectedRhonchiLateralityOptionsopt,
        value,
      ]);
    }
  };

  // for Stridorlaterality
  const [selectedStridorLaterality, setSelectedStridorLaterality] = useState(
    []
  );

  const handleStridorLateralityChange = (value) => {
    if (selectedStridorLaterality.includes(value)) {
      setSelectedStridorLaterality(
        selectedStridorLaterality.filter((item) => item !== value)
      );
    } else {
      setSelectedStridorLaterality([...selectedStridorLaterality, value]);
    }
  };

  // Function to handle laterality option changes

  const [
    selectedStridorLateralityOptionsopt,
    setSelectedStridorLateralityOptionsopt,
  ] = useState([]);

  const handleStridorLateralityOptionoptChange = (value) => {
    if (selectedStridorLateralityOptionsopt.includes(value)) {
      setSelectedStridorLateralityOptionsopt(
        selectedStridorLateralityOptionsopt.filter((item) => item !== value)
      );
    } else {
      setSelectedStridorLateralityOptionsopt([
        ...selectedStridorLateralityOptionsopt,
        value,
      ]);
    }
  };

  // for Wheezinglaterality
  const [selectedWheezingLaterality, setSelectedWheezingLaterality] = useState(
    []
  );

  const handleWheezingLateralityChange = (value) => {
    if (selectedWheezingLaterality.includes(value)) {
      setSelectedWheezingLaterality(
        selectedWheezingLaterality.filter((item) => item !== value)
      );
    } else {
      setSelectedWheezingLaterality([...selectedWheezingLaterality, value]);
    }
  };

  // Function to handle laterality option changes

  const [
    selectedWheezingLateralityOptionsopt,
    setSelectedWheezingLateralityOptionsopt,
  ] = useState([]);

  const handleWheezingLateralityOptionoptChange = (value) => {
    if (selectedWheezingLateralityOptionsopt.includes(value)) {
      setSelectedWheezingLateralityOptionsopt(
        selectedWheezingLateralityOptionsopt.filter((item) => item !== value)
      );
    } else {
      setSelectedWheezingLateralityOptionsopt([
        ...selectedWheezingLateralityOptionsopt,
        value,
      ]);
    }
  };

  const [selectedImagingOptions, setSelectedImagingOptions] = useState([]);

  const handleImagingOptionChange = (option) => {
    // Check if the option is already selected
    const isOptionSelected = selectedImagingOptions.includes(option);

    if (isOptionSelected) {
      // If the option is already selected, remove it from the array
      const updatedOptions = selectedImagingOptions.filter(
        (selectedOption) => selectedOption !== option
      );
      setSelectedImagingOptions(updatedOptions);
    } else {
      // If the option is not selected, add it to the array
      setSelectedImagingOptions([...selectedImagingOptions, option]);
    }
  };

  const [selectedDiagnosisOption, setSelectedDiagnosisOption] = useState(null);
  const [selectedResistanceTB, setSelectedResistanceTB] = useState(null);
  const [selectedMdrXdr, setSelectedMdrXdr] = useState(null);

  // Function to handle the selection of the main diagnosis option
  const handleDiagnosisOptionChange = (option) => {
    setSelectedDiagnosisOption(option);
    // Reset the selectedResistanceTB when changing the main option
    setSelectedResistanceTB(null);
  };
  const handleMdrXdrChange = (option) => {
    setSelectedMdrXdr(option);
  };

  // Function to handle the selection of the resistance TB sub-options
  // const handleResistanceTBChange = (option) => {
  //   setSelectedResistanceTB(option);
  // };

  // State to store selected confirmed diagnosis options
  const [
    selectedConfirmedDiagnosisOptions,
    setSelectedConfirmedDiagnosisOptions,
  ] = useState([]);

  // Function to handle the selection of confirmed diagnosis options
  const handleConfirmedDiagnosisOptionChange = (option) => {
    if (selectedConfirmedDiagnosisOptions.includes(option)) {
      setSelectedConfirmedDiagnosisOptions(
        selectedConfirmedDiagnosisOptions.filter((item) => item !== option)
      );
    } else {
      setSelectedConfirmedDiagnosisOptions([
        ...selectedConfirmedDiagnosisOptions,
        option,
      ]);
    }
  };

  const [showRelapseOptions, setShowRelapseOptions] = useState(false);

  const handleRelapseChange = (isChecked) => {
    setShowRelapseOptions(isChecked);
  };

  // State to store selected relapse option
  const [selectedRelapseOption, setSelectedRelapseOption] = useState("");

  // Function to handle the selection of relapse options
  const handleRelapseChoice = (option) => {
    setSelectedRelapseOption(option);
  };
  const handleThirdblockNext = () => {
    onSubmit(
      selectedBreathSoundOptions,
      selectedImagingOptions,
      selectedDiagnosisOption,
      selectedConfirmedDiagnosisOptions,
      selectedRelapseOption
    );
  };
  const [formData, setFormData] = useState({
    patientId: "",
    breathSoundOption: "",
    DbslateralityOption: "",
    BbslateralityOption: "",
    CrackleslateralityOption: "",
    DbslateralityOptionopt: "",
    BbslateralityOptionopt: "",
    CrackleslateralityOptionopt: "",
    PrlateralityOption: "",
    PrlateralityOptionopt: "",
    RhonchilateralityOption: "",
    RhonchilateralityOptionopt: "",
    StridorlateralityOption: "",
    StridorlateralityOptionopt: "",
    WheezinglateralityOption: "",
    WheezinglateralityOptionopt: "",
    imagingOption: "",
    diagnosisOption: "",
    resistancetb: "",
    mdrxdrtb: "",
    cnfdiagnosisOption: "",
    relapseChoice: "", // Include patientId directly from the state
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Join the selected options into a comma-separated string
      const breathSoundOption = selectedBreathSoundOptions.join(",");
      // const lateralityOption = selectedLateralityOptions.join(',');
      const imagingOption =
        selectedImagingOptions.length > 0
          ? selectedImagingOptions.join(",")
          : "No Chest Imaging";
      const cnfdiagnosisOption = selectedConfirmedDiagnosisOptions.join(",");
      const DbslateralityOption = selectedDbsLaterality.join(",");
      const DbslateralityOptionopt = selectedDbsLateralityOptionsopt.join(",");
      const BbslateralityOption = selectedBbsLaterality.join(",");
      const BbslateralityOptionopt = selectedBbsLateralityOptionsopt.join(",");
      const CrackleslateralityOption = selectedCracklesLaterality.join(",");
      const CrackleslateralityOptionopt =
        selectedCracklesLateralityOptionsopt.join(",");
      const PrlateralityOption = selectedPrLaterality.join(",");
      const PrlateralityOptionopt = selectedPrLateralityOptionsopt.join(",");
      const RhonchilateralityOption = selectedRhonchiLaterality.join(",");
      const RhonchilateralityOptionopt =
        selectedRhonchiLateralityOptionsopt.join(",");
      const StridorlateralityOption = selectedStridorLaterality.join(",");
      const StridorlateralityOptionopt =
        selectedStridorLateralityOptionsopt.join(",");
      const WheezinglateralityOption = selectedWheezingLaterality.join(",");
      const WheezinglateralityOptionopt =
        selectedWheezingLateralityOptionsopt.join(",");
      const freeChestImagingInput = document.querySelector(
        'input[name="freechestimaging"]'
      );
      const freeDiagnosisInput = document.querySelector(
        'input[name="freediagnosis"]'
      );
      const freeCnfDiagnosisInput = document.querySelector(
        'input[name="freecnfdiagnosis"]'
      );

      // Get the values from the input elements
      const freeChestImaging = freeChestImagingInput
        ? freeChestImagingInput.value
        : "";
      const freeDiagnosis = freeDiagnosisInput ? freeDiagnosisInput.value : "";
      const freeCnfDiagnosis = freeCnfDiagnosisInput
        ? freeCnfDiagnosisInput.value
        : "";

      // const relapseChoice = selectedRelapseOption.join(',') ;
      // const substanceAbuseOption = selectedsubstanceAOptions.length > 0 ? selectedsubstanceAOptions.join(',') : 'NOT SELECTED';

      const dataToSend = {
        patientId: formData.patientId,
        breathSoundOption,
        StridorlateralityOption,
        StridorlateralityOptionopt,
        WheezinglateralityOption,
        WheezinglateralityOptionopt,
        BbslateralityOption,
        BbslateralityOptionopt,
        DbslateralityOption,
        DbslateralityOptionopt,
        CrackleslateralityOption,
        CrackleslateralityOptionopt,
        PrlateralityOption,
        PrlateralityOptionopt,
        RhonchilateralityOption,
        RhonchilateralityOptionopt,
        imagingOption,
        diagnosisOption: formData.diagnosisOption,
        resistancetb: formData.resistancetb,
        mdrxdrtb: formData.mdrxdrtb,
        cnfdiagnosisOption,
        freeChestImaging,
        freeDiagnosis,
        freeCnfDiagnosis,
      };

      console.log("Form Data:", dataToSend);

      const response = await fetch("http://3.16.11.52:5000/third_block_option", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        const data = await response.json();

        console.log("Data saved successfully:", data);
        // Redirect to the next page if needed
      } else {
        console.error("Error:", response.status, response.statusText);
        // Handle the error response here
      }
    } catch (error) {
      console.error("Error:", error);
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
        {/* breathsound option started */}
        <div className="container mt-4">
          <div className="patientid col-md-12">
            <div style={{ textAlign: "center" }}>
              <h3
                className="pathed p-2"
                type="text"
                value={(formData.patientId = selectedpatientID)}
                onChange={handleInputChange}
                name="patientid"
                disabled
              >
                <b>Patient ID:</b> {selectedpatientID}
              </h3>
            </div>
          </div>
          {/* breathsound option started */}
          <div className="row mt-4">
            <div className="col-sm-2 d-flex align-items-center">
              <h1
                className="titl"
                style={{ fontWeight: "600", fontSize: "1.1rem" }}
              >
                <b>Breath Sound : </b>
              </h1>
              {/* <div className="form-check form-switch ml-2" style={{ marginLeft: '15%' }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  checked={showBreathSoundOptions}
                  onChange={(e) => handleBreathSoundChange(e.target.checked)}
                  style={{ fontSize: '1rem', transform: 'scale(1.2)' }}
                />
              </div> */}
            </div>
          </div>
          {/* Stridorlaterity started */}
          <div className="row">
            <div className="col-sm-3 ms-4">
              {/* Additional options for Breath Sound */}
              {selectedOrgan && (
                <div className="row mt-3">
                  <div className="col-md-4 marital d-flex align-items-center">
                    {/* Content for Breath Sound Options */}
                    <label
                      className={`maritalcircle p-2 m-3 ${
                        selectedBreathSoundOptions.includes("Stridor")
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="breathSoundOption"
                        value="Stridor"
                        style={{ visibility: "hidden" }}
                        checked={selectedBreathSoundOptions.includes("Stridor")}
                        onChange={() =>
                          handleBreathSoundOptionChange("Stridor")
                        }
                        readonly
                      />
                      Stridor &nbsp;&nbsp;
                    </label>
                  </div>
                </div>
              )}
            </div>

            <div className="col-sm-4">
              {selectedBreathSoundOptions.includes("Stridor") && (
                <div className="row">
                  <div className="col-md-2 d-flex align-items-center">
                    <h1
                      className="titl"
                      style={{ fontWeight: "600", fontSize: "0.9rem" }}
                    >
                      <b>Laterality</b>
                    </h1>
                  </div>

                  <div className="col-md-6 ms-4">
                    {/* Additional options for Laterality */}
                    {selectedOrgan && (
                      <div className="marital d-flex m-3 align-items-center">
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedStridorLaterality.includes("RIGHT")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="StridorlateralityOption"
                            value="RIGHT"
                            style={{ visibility: "hidden" }}
                            checked={selectedStridorLaterality.includes(
                              "RIGHT"
                            )}
                            onChange={() =>
                              handleStridorLateralityChange("RIGHT")
                            }
                          />
                          RIGHT &nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedStridorLaterality.includes("LEFT")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="StridorlateralityOption"
                            value="LEFT"
                            style={{ visibility: "hidden" }}
                            checked={selectedStridorLaterality.includes("LEFT")}
                            onChange={() =>
                              handleStridorLateralityChange("LEFT")
                            }
                          />
                          LEFT &nbsp;
                        </label>
                        {/* Add more laterality options here using checkboxes */}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="col-sm-4">
              <div
                className="marital m-3 d-flex align-items-center"
                style={{ marginLeft: "90%" }}
              >
                <>
                  {/* Content for Right laterality */}
                  {selectedBreathSoundOptions.includes("Stridor") &&
                    selectedStridorLaterality.includes("RIGHT") && (
                      <div>
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedStridorLateralityOptionsopt.includes("RUL")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="StridorlateralityOptionopt"
                            value="RUL"
                            style={{ visibility: "hidden" }}
                            checked={selectedStridorLateralityOptionsopt.includes(
                              "RUL"
                            )}
                            onChange={() =>
                              handleStridorLateralityOptionoptChange("RUL")
                            }
                          />
                          RUL &nbsp;&nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedStridorLateralityOptionsopt.includes("RML")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="StridorlateralityOptionopt"
                            value="RML"
                            style={{ visibility: "hidden" }}
                            checked={selectedStridorLateralityOptionsopt.includes(
                              "RML"
                            )}
                            onChange={() =>
                              handleStridorLateralityOptionoptChange("RML")
                            }
                          />
                          RML &nbsp;&nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedStridorLateralityOptionsopt.includes("RLL")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="StridorlateralityOptionopt"
                            value="RLL"
                            style={{ visibility: "hidden" }}
                            checked={selectedStridorLateralityOptionsopt.includes(
                              "RLL"
                            )}
                            onChange={() =>
                              handleStridorLateralityOptionoptChange("RLL")
                            }
                          />
                          RLL &nbsp;&nbsp;
                        </label>
                        {/* Add more options for Right laterality here */}
                      </div>
                    )}

                  {selectedBreathSoundOptions.includes("Stridor") &&
                    selectedStridorLaterality.includes("LEFT") && (
                      <div>
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedStridorLateralityOptionsopt.includes("LUL")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="StridorlateralityOptionopt"
                            value="LUL"
                            style={{ visibility: "hidden" }}
                            checked={selectedStridorLateralityOptionsopt.includes(
                              "LUL"
                            )}
                            onChange={() =>
                              handleStridorLateralityOptionoptChange("LUL")
                            }
                          />
                          LUL &nbsp;&nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedStridorLateralityOptionsopt.includes("LLL")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="StridorlateralityOptionopt"
                            value="LLL"
                            style={{ visibility: "hidden" }}
                            checked={selectedStridorLateralityOptionsopt.includes(
                              "LLL"
                            )}
                            onChange={() =>
                              handleStridorLateralityOptionoptChange("LLL")
                            }
                          />
                          LLL &nbsp;&nbsp;
                        </label>
                        {/* Add more options for Left laterality here */}
                      </div>
                    )}
                </>
              </div>
            </div>
          </div>
          {/* stridorlaterity ended */}
          {/* Rhonchilaterity started */}
          <div className="row">
            <div className="col-sm-3 ms-4">
              {/* Additional options for Breath Sound */}
              {selectedOrgan && (
                <div className="row mt-3">
                  <div className="col-md-4 marital d-flex align-items-center">
                    {/* Content for Breath Sound Options */}
                    <label
                      className={`maritalcircle p-2 m-3 ${
                        selectedBreathSoundOptions.includes("Rhonchi")
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="breathSoundOption"
                        value="Rhonchi"
                        style={{ visibility: "hidden" }}
                        checked={selectedBreathSoundOptions.includes("Rhonchi")}
                        onChange={() =>
                          handleBreathSoundOptionChange("Rhonchi")
                        }
                        readonly
                      />
                      Rhonchi &nbsp;&nbsp;
                    </label>
                  </div>
                </div>
              )}
            </div>

            <div className="col-sm-4">
              {selectedBreathSoundOptions.includes("Rhonchi") && (
                <div className="row">
                  <div className="col-md-2 d-flex align-items-center">
                    <h1
                      className="titl"
                      style={{ fontWeight: "600", fontSize: "0.9rem" }}
                    >
                      <b>Laterality</b>
                    </h1>
                  </div>

                  <div className="col-md-6 ms-4">
                    {/* Additional options for Laterality */}
                    {selectedOrgan && (
                      <div className="marital d-flex m-3 align-items-center">
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedRhonchiLaterality.includes("RIGHT")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="RhonchilateralityOption"
                            value="RIGHT"
                            style={{ visibility: "hidden" }}
                            checked={selectedRhonchiLaterality.includes(
                              "RIGHT"
                            )}
                            onChange={() =>
                              handleRhonchiLateralityChange("RIGHT")
                            }
                          />
                          RIGHT &nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedRhonchiLaterality.includes("LEFT")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="RhonchilateralityOption"
                            value="LEFT"
                            style={{ visibility: "hidden" }}
                            checked={selectedRhonchiLaterality.includes("LEFT")}
                            onChange={() =>
                              handleRhonchiLateralityChange("LEFT")
                            }
                          />
                          LEFT &nbsp;
                        </label>
                        {/* Add more laterality options here using checkboxes */}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="col-sm-4">
              <div
                className="marital m-3 d-flex align-items-center"
                style={{ marginLeft: "90%" }}
              >
                <>
                  {selectedBreathSoundOptions.includes("Rhonchi") &&
                    selectedRhonchiLaterality.includes("RIGHT") && (
                      <>
                        {/* Content for Right laterality */}
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedRhonchiLateralityOptionsopt.includes("RUL")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="RhonchilateralityOptionopt"
                            value="RUL"
                            style={{ visibility: "hidden" }}
                            checked={selectedRhonchiLateralityOptionsopt.includes(
                              "RUL"
                            )}
                            onChange={() =>
                              handleRhonchiLateralityOptionoptChange("RUL")
                            }
                          />
                          RUL &nbsp;&nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedRhonchiLateralityOptionsopt.includes("RML")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="RhonchilateralityOptionopt"
                            value="RML"
                            style={{ visibility: "hidden" }}
                            checked={selectedRhonchiLateralityOptionsopt.includes(
                              "RML"
                            )}
                            onChange={() =>
                              handleRhonchiLateralityOptionoptChange("RML")
                            }
                          />
                          RML &nbsp;&nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedRhonchiLateralityOptionsopt.includes("RLL")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="RhonchilateralityOptionopt"
                            value="RLL"
                            style={{ visibility: "hidden" }}
                            checked={selectedRhonchiLateralityOptionsopt.includes(
                              "RLL"
                            )}
                            onChange={() =>
                              handleRhonchiLateralityOptionoptChange("RLL")
                            }
                          />
                          RLL &nbsp;&nbsp;
                        </label>
                        {/* Add more options for Right laterality here using checkboxes */}
                      </>
                    )}

                  {selectedBreathSoundOptions.includes("Rhonchi") &&
                    selectedRhonchiLaterality.includes("LEFT") && (
                      <>
                        {/* Content for Left laterality */}
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedRhonchiLateralityOptionsopt.includes("LUL")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="RhonchilateralityOptionopt"
                            value="LUL"
                            style={{ visibility: "hidden" }}
                            checked={selectedRhonchiLateralityOptionsopt.includes(
                              "LUL"
                            )}
                            onChange={() =>
                              handleRhonchiLateralityOptionoptChange("LUL")
                            }
                          />
                          LUL &nbsp;&nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedRhonchiLateralityOptionsopt.includes("LLL")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="RhonchilateralityOptionopt"
                            value="LLL"
                            style={{ visibility: "hidden" }}
                            checked={selectedRhonchiLateralityOptionsopt.includes(
                              "LLL"
                            )}
                            onChange={() =>
                              handleRhonchiLateralityOptionoptChange("LLL")
                            }
                          />
                          LLL &nbsp;&nbsp;
                        </label>
                        {/* Add more options for Left laterality here using checkboxes */}
                      </>
                    )}
                </>
              </div>
            </div>
          </div>
          {/* Rhonchilaterity ended */}
          {/* Crackleslaterity started */}
          <div className="row">
            <div className="col-sm-3 ms-4">
              {/* Additional options for Breath Sound */}
              {selectedOrgan && (
                <div className="row mt-3">
                  <div className="col-md-4 marital d-flex align-items-center">
                    {/* Content for Breath Sound Options */}
                    <label
                      className={`maritalcircle p-2 m-3 ${
                        selectedBreathSoundOptions.includes("Crackles")
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="breathSoundOption"
                        value="Crackles"
                        style={{ visibility: "hidden" }}
                        checked={selectedBreathSoundOptions.includes(
                          "Crackles"
                        )}
                        onChange={() =>
                          handleBreathSoundOptionChange("Crackles")
                        }
                        readOnly
                      />
                      Crackles &nbsp;&nbsp;
                    </label>
                  </div>
                </div>
              )}
            </div>

            <div className="col-sm-4">
              {selectedBreathSoundOptions.includes("Crackles") && (
                <div className="row">
                  <div className="col-md-2 d-flex align-items-center">
                    <h1
                      className="titl"
                      style={{ fontWeight: "600", fontSize: "0.9rem" }}
                    >
                      <b>Laterality</b>
                    </h1>
                  </div>

                  <div className="col-md-6 ms-4">
                    {/* Additional options for Laterality */}
                    {selectedOrgan && (
                      <div className="marital d-flex m-3 align-items-center">
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedCracklesLaterality.includes("RIGHT")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="CrackleslateralityOption"
                            value="RIGHT"
                            style={{ visibility: "hidden" }}
                            checked={selectedCracklesLaterality.includes(
                              "RIGHT"
                            )}
                            onChange={() =>
                              handleCracklesLateralityChange("RIGHT")
                            }
                          />
                          RIGHT &nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedCracklesLaterality.includes("LEFT")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="CrackleslateralityOption"
                            value="LEFT"
                            style={{ visibility: "hidden" }}
                            checked={selectedCracklesLaterality.includes(
                              "LEFT"
                            )}
                            onChange={() =>
                              handleCracklesLateralityChange("LEFT")
                            }
                          />
                          LEFT &nbsp;
                        </label>
                        {/* Add more options for Crackles laterality here with a similar structure */}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="col-sm-4">
              <div
                className="marital m-3 d-flex align-items-center"
                style={{ marginLeft: "90%" }}
              >
                {selectedBreathSoundOptions.includes("Crackles") &&
                  selectedCracklesLaterality.includes("RIGHT") && (
                    <>
                      {/* Content for Right laterality */}
                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedCracklesLateralityOptionsopt.includes("RUL")
                            ? "active"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="CrackleslateralityOptionopt"
                          value="RUL"
                          style={{ visibility: "hidden" }}
                          checked={selectedCracklesLateralityOptionsopt.includes(
                            "RUL"
                          )}
                          onChange={(e) => {
                            handleCracklesLateralityOptionoptChange("RUL");
                            handleInputChange(e);
                          }}
                        />
                        RUL &nbsp;&nbsp;
                      </label>
                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedCracklesLateralityOptionsopt.includes("RML")
                            ? "active"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="CrackleslateralityOptionopt"
                          value="RML"
                          style={{ visibility: "hidden" }}
                          checked={selectedCracklesLateralityOptionsopt.includes(
                            "RML"
                          )}
                          onChange={(e) => {
                            handleCracklesLateralityOptionoptChange("RML");
                            handleInputChange(e);
                          }}
                        />
                        RML &nbsp;&nbsp;
                      </label>
                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedCracklesLateralityOptionsopt.includes("RLL")
                            ? "active"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="CrackleslateralityOptionopt"
                          value="RLL"
                          style={{ visibility: "hidden" }}
                          checked={selectedCracklesLateralityOptionsopt.includes(
                            "RLL"
                          )}
                          onChange={(e) => {
                            handleCracklesLateralityOptionoptChange("RLL");
                            handleInputChange(e);
                          }}
                        />
                        RLL &nbsp;&nbsp;
                      </label>
                      {/* Add more options for Right laterality here with a similar structure */}
                    </>
                  )}

                {selectedBreathSoundOptions.includes("Crackles") &&
                  selectedCracklesLaterality.includes("LEFT") && (
                    <>
                      {/* Content for Left laterality */}
                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedCracklesLateralityOptionsopt.includes("LUL")
                            ? "active"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="CrackleslateralityOptionopt"
                          value="LUL"
                          style={{ visibility: "hidden" }}
                          checked={selectedCracklesLateralityOptionsopt.includes(
                            "LUL"
                          )}
                          onChange={(e) => {
                            handleCracklesLateralityOptionoptChange("LUL");
                            handleInputChange(e);
                          }}
                        />
                        LUL &nbsp;&nbsp;
                      </label>
                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedCracklesLateralityOptionsopt.includes("LLL")
                            ? "active"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="CrackleslateralityOptionopt"
                          value="LLL"
                          style={{ visibility: "hidden" }}
                          checked={selectedCracklesLateralityOptionsopt.includes(
                            "LLL"
                          )}
                          onChange={(e) => {
                            handleCracklesLateralityOptionoptChange("LLL");
                            handleInputChange(e);
                          }}
                        />
                        LLL &nbsp;&nbsp;
                      </label>
                      {/* Add more options for Left laterality here with a similar structure */}
                    </>
                  )}
              </div>
            </div>
          </div>
          {/* Crackleslaterity ended */}
          {/* wheezinglaterity started */}
          <div className="row">
            <div className="col-sm-3 ms-4">
              {/* Additional options for Breath Sound */}
              {selectedOrgan && (
                <div className="row mt-3">
                  <div className="col-md-4 marital d-flex align-items-center">
                    {/* Content for Breath Sound Options */}
                    <label
                      className={`maritalcircle p-2 m-3 ${
                        selectedBreathSoundOptions.includes("Wheezing")
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="breathSoundOption"
                        value="Wheezing"
                        style={{ visibility: "hidden" }}
                        checked={selectedBreathSoundOptions.includes(
                          "Wheezing"
                        )}
                        onChange={() =>
                          handleBreathSoundOptionChange("Wheezing")
                        }
                        readonly
                      />
                      Wheezing &nbsp;&nbsp;
                    </label>
                  </div>
                </div>
              )}
            </div>

            <div className="col-sm-4">
              {selectedBreathSoundOptions.includes("Wheezing") && (
                <div className="row">
                  <div className="col-md-2 d-flex align-items-center">
                    <h1
                      className="titl"
                      style={{ fontWeight: "600", fontSize: "0.9rem" }}
                    >
                      <b>Laterality</b>
                    </h1>
                  </div>

                  <div className="col-md-6 ms-4">
                    {/* Additional options for Laterality */}
                    {selectedOrgan && (
                      <div className="marital d-flex m-3 align-items-center">
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedWheezingLaterality.includes("RIGHT")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="WheezinglateralityOption"
                            value="RIGHT"
                            style={{ visibility: "hidden" }}
                            checked={selectedWheezingLaterality.includes(
                              "RIGHT"
                            )}
                            onChange={() =>
                              handleWheezingLateralityChange("RIGHT")
                            }
                          />
                          RIGHT &nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedWheezingLaterality.includes("LEFT")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="WheezinglateralityOption"
                            value="LEFT"
                            style={{ visibility: "hidden" }}
                            checked={selectedWheezingLaterality.includes(
                              "LEFT"
                            )}
                            onChange={() =>
                              handleWheezingLateralityChange("LEFT")
                            }
                          />
                          LEFT &nbsp;
                        </label>
                        {/* Add more laterality options here using checkboxes */}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="col-sm-4">
              <div
                className="marital m-3 d-flex align-items-center"
                style={{ marginLeft: "90%" }}
              >
                <>
                  {/* Content for Right laterality */}
                  <div>
                    {selectedBreathSoundOptions.includes("Wheezing") &&
                      selectedWheezingLaterality.includes("RIGHT") && (
                        <>
                          <label
                            className={`maritalcircle p-2 m-3 ${
                              selectedWheezingLateralityOptionsopt.includes(
                                "RUL"
                              )
                                ? "active"
                                : ""
                            }`}
                          >
                            <input
                              type="checkbox"
                              name="WheezinglateralityOptionopt"
                              value="RUL"
                              style={{ visibility: "hidden" }}
                              checked={selectedWheezingLateralityOptionsopt.includes(
                                "RUL"
                              )}
                              onChange={() =>
                                handleWheezingLateralityOptionoptChange("RUL")
                              }
                            />
                            RUL &nbsp;&nbsp;
                          </label>
                          <label
                            className={`maritalcircle p-2 m-3 ${
                              selectedWheezingLateralityOptionsopt.includes(
                                "RML"
                              )
                                ? "active"
                                : ""
                            }`}
                          >
                            <input
                              type="checkbox"
                              name="WheezinglateralityOptionopt"
                              value="RML"
                              style={{ visibility: "hidden" }}
                              checked={selectedWheezingLateralityOptionsopt.includes(
                                "RML"
                              )}
                              onChange={() =>
                                handleWheezingLateralityOptionoptChange("RML")
                              }
                            />
                            RML &nbsp;&nbsp;
                          </label>
                          <label
                            className={`maritalcircle p-2 m-3 ${
                              selectedWheezingLateralityOptionsopt.includes(
                                "RLL"
                              )
                                ? "active"
                                : ""
                            }`}
                          >
                            <input
                              type="checkbox"
                              name="WheezinglateralityOptionopt"
                              value="RLL"
                              style={{ visibility: "hidden" }}
                              checked={selectedWheezingLateralityOptionsopt.includes(
                                "RLL"
                              )}
                              onChange={() =>
                                handleWheezingLateralityOptionoptChange("RLL")
                              }
                            />
                            RLL &nbsp;&nbsp;
                          </label>
                          {/* Add more options for Right laterality here */}
                        </>
                      )}
                  </div>

                  {/* Content for Left laterality */}
                  <div>
                    {selectedBreathSoundOptions.includes("Wheezing") &&
                      selectedWheezingLaterality.includes("LEFT") && (
                        <>
                          <label
                            className={`maritalcircle p-2 m-3 ${
                              selectedWheezingLateralityOptionsopt.includes(
                                "LUL"
                              )
                                ? "active"
                                : ""
                            }`}
                          >
                            <input
                              type="checkbox"
                              name="WheezinglateralityOptionopt"
                              value="LUL"
                              style={{ visibility: "hidden" }}
                              checked={selectedWheezingLateralityOptionsopt.includes(
                                "LUL"
                              )}
                              onChange={() =>
                                handleWheezingLateralityOptionoptChange("LUL")
                              }
                            />
                            LUL &nbsp;&nbsp;
                          </label>
                          <label
                            className={`maritalcircle p-2 m-3 ${
                              selectedWheezingLateralityOptionsopt.includes(
                                "LLL"
                              )
                                ? "active"
                                : ""
                            }`}
                          >
                            <input
                              type="checkbox"
                              name="WheezinglateralityOptionopt"
                              value="LLL"
                              style={{ visibility: "hidden" }}
                              checked={selectedWheezingLateralityOptionsopt.includes(
                                "LLL"
                              )}
                              onChange={() =>
                                handleWheezingLateralityOptionoptChange("LLL")
                              }
                            />
                            LLL &nbsp;&nbsp;
                          </label>
                          {/* Add more options for Left laterality here */}
                        </>
                      )}
                  </div>
                </>
              </div>
            </div>
          </div>
          {/* wheezinglaterity ended*/}
          {/* Prlaterity started */}
          <div className="row">
            <div className="col-sm-3 ms-4">
              {/* Additional options for Breath Sound */}
              {selectedOrgan && (
                <div className="row mt-3">
                  <div className="col-md-4 marital d-flex align-items-center">
                    {/* Content for Breath Sound Options */}
                    <label
                      className={`maritalcircle p-2 m-3 ${
                        selectedBreathSoundOptions.includes("Pleural Rub")
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="breathSoundOption"
                        value="Pleural Rub"
                        style={{ visibility: "hidden" }}
                        checked={selectedBreathSoundOptions.includes(
                          "Pleural Rub"
                        )}
                        onChange={() =>
                          handleBreathSoundOptionChange("Pleural Rub")
                        }
                        readonly
                      />
                      Pleural Rub &nbsp;&nbsp;
                    </label>
                  </div>
                </div>
              )}
            </div>

            <div className="col-sm-4">
              {selectedBreathSoundOptions.includes("Pleural Rub") && (
                <div className="row">
                  <div className="col-md-2 d-flex align-items-center">
                    <h1
                      className="titl"
                      style={{ fontWeight: "600", fontSize: "0.9rem" }}
                    >
                      <b>Laterality</b>
                    </h1>
                  </div>

                  <div className="col-md-6 ms-4">
                    {/* Additional options for Laterality */}
                    {selectedOrgan && (
                      <div className="marital d-flex m-3 align-items-center">
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedPrLaterality.includes("RIGHT")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="PrlateralityOption"
                            value="RIGHT"
                            style={{ visibility: "hidden" }}
                            checked={selectedPrLaterality.includes("RIGHT")}
                            onChange={() => handlePrLateralityChange("RIGHT")}
                          />
                          RIGHT &nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedPrLaterality.includes("LEFT")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="PrlateralityOption"
                            value="LEFT"
                            style={{ visibility: "hidden" }}
                            checked={selectedPrLaterality.includes("LEFT")}
                            onChange={() => handlePrLateralityChange("LEFT")}
                          />
                          LEFT &nbsp;
                        </label>
                        {/* Add more laterality options here using checkboxes */}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="col-sm-4">
              <div
                className="marital m-3 d-flex align-items-center"
                style={{ marginLeft: "90%" }}
              >
                <>
                  {selectedBreathSoundOptions.includes("Pleural Rub") &&
                    selectedPrLaterality.includes("RIGHT") && (
                      <>
                        {/* Content for Right laterality */}
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedPrLateralityOptionsopt.includes("RUL")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="PrlateralityOptionopt"
                            value="RUL"
                            style={{ visibility: "hidden" }}
                            checked={selectedPrLateralityOptionsopt.includes(
                              "RUL"
                            )}
                            onChange={(e) => {
                              handlePrLateralityOptionoptChange("RUL");
                              handleInputChange(e);
                            }}
                          />
                          RUL &nbsp;&nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedPrLateralityOptionsopt.includes("RML")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="PrlateralityOptionopt"
                            value="RML"
                            style={{ visibility: "hidden" }}
                            checked={selectedPrLateralityOptionsopt.includes(
                              "RML"
                            )}
                            onChange={(e) => {
                              handlePrLateralityOptionoptChange("RML");
                              handleInputChange(e);
                            }}
                          />
                          RML &nbsp;&nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedPrLateralityOptionsopt.includes("RLL")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="PrlateralityOptionopt"
                            value="RLL"
                            style={{ visibility: "hidden" }}
                            checked={selectedPrLateralityOptionsopt.includes(
                              "RLL"
                            )}
                            onChange={(e) => {
                              handlePrLateralityOptionoptChange("RLL");
                              handleInputChange(e);
                            }}
                          />
                          RLL &nbsp;&nbsp;
                        </label>
                        {/* Add more options for Right laterality here using checkboxes */}
                      </>
                    )}

                  {selectedBreathSoundOptions.includes("Pleural Rub") &&
                    selectedPrLaterality.includes("LEFT") && (
                      <>
                        {/* Content for Left laterality */}
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedPrLateralityOptionsopt.includes("LUL")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="PrlateralityOptionopt"
                            value="LUL"
                            style={{ visibility: "hidden" }}
                            checked={selectedPrLateralityOptionsopt.includes(
                              "LUL"
                            )}
                            onChange={(e) => {
                              handlePrLateralityOptionoptChange("LUL");
                              handleInputChange(e);
                            }}
                          />
                          LUL &nbsp;&nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedPrLateralityOptionsopt.includes("LLL")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="PrlateralityOptionopt"
                            value="LLL"
                            style={{ visibility: "hidden" }}
                            checked={selectedPrLateralityOptionsopt.includes(
                              "LLL"
                            )}
                            onChange={(e) => {
                              handlePrLateralityOptionoptChange("LLL");
                              handleInputChange(e);
                            }}
                          />
                          LLL &nbsp;&nbsp;
                        </label>
                        {/* Add more options for Left laterality here using checkboxes */}
                      </>
                    )}
                </>
              </div>
            </div>
          </div>
          {/*Prlaterity ended */} {/* bbslaterrity started */}
          <div className="row">
            <div className="col-sm-3 ms-4">
              {/* Additional options for Breath Sound */}
              {selectedOrgan && (
                <div className="row mt-3">
                  <div className="col-md-4 marital d-flex align-items-center">
                    {/* Content for Breath Sound Options */}
                    <label
                      className={`maritalcircle  ${
                        selectedBreathSoundOptions.includes(
                          "Bronchial Breath Sounds"
                        )
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="breathSoundOption"
                        value="Bronchial Breath Sounds"
                        style={{ visibility: "hidden" }}
                        checked={selectedBreathSoundOptions.includes(
                          "Bronchial Breath Sounds"
                        )}
                        onChange={() =>
                          handleBreathSoundOptionChange(
                            "Bronchial Breath Sounds"
                          )
                        }
                        readonly
                      />
                      Bronchial Breath Sounds &nbsp;&nbsp;
                    </label>
                  </div>
                </div>
              )}
            </div>

            <div className="col-sm-4">
              {selectedBreathSoundOptions.includes(
                "Bronchial Breath Sounds"
              ) && (
                <div className="row">
                  <div className="col-md-2 d-flex align-items-center">
                    <h1
                      className="titl"
                      style={{ fontWeight: "600", fontSize: "0.9rem" }}
                    >
                      <b>Laterality</b>
                    </h1>
                  </div>

                  <div className="col-md-6 ms-4">
                    {/* Additional options for Laterality */}
                    {selectedOrgan && (
                      <div className="marital d-flex m-3 align-items-center">
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedBbsLaterality.includes("RIGHT")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="BbslateralityOption"
                            value="RIGHT"
                            style={{ visibility: "hidden" }}
                            checked={selectedBbsLaterality.includes("RIGHT")}
                            onChange={() => handleBbsLateralityChange("RIGHT")}
                          />
                          RIGHT &nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedBbsLaterality.includes("LEFT")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="BbslateralityOption"
                            value="LEFT"
                            style={{ visibility: "hidden" }}
                            checked={selectedBbsLaterality.includes("LEFT")}
                            onChange={() => handleBbsLateralityChange("LEFT")}
                          />
                          LEFT &nbsp;
                        </label>
                        {/* Add more laterality options here with similar structure */}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="col-sm-4">
              <div
                className="marital m-3 d-flex align-items-center"
                style={{ marginLeft: "90%" }}
              >
                {selectedBreathSoundOptions.includes(
                  "Bronchial Breath Sounds"
                ) &&
                  selectedBbsLaterality.includes("RIGHT") && (
                    <>
                      {/* Content for Right laterality */}
                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedBbsLateralityOptionsopt.includes("RUL")
                            ? "active"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="BbslateralityOptionopt"
                          value="RUL"
                          style={{ visibility: "hidden" }}
                          checked={selectedBbsLateralityOptionsopt.includes(
                            "RUL"
                          )}
                          onChange={(e) => {
                            handleBbsLateralityOptionoptChange("RUL");
                            handleInputChange(e);
                          }}
                        />
                        RUL &nbsp;&nbsp;
                      </label>
                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedBbsLateralityOptionsopt.includes("RML")
                            ? "active"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="BbslateralityOptionopt"
                          value="RML"
                          style={{ visibility: "hidden" }}
                          checked={selectedBbsLateralityOptionsopt.includes(
                            "RML"
                          )}
                          onChange={(e) => {
                            handleBbsLateralityOptionoptChange("RML");
                            handleInputChange(e);
                          }}
                        />
                        RML &nbsp;&nbsp;
                      </label>
                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedBbsLateralityOptionsopt.includes("RLL")
                            ? "active"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="BbslateralityOptionopt"
                          value="RLL"
                          style={{ visibility: "hidden" }}
                          checked={selectedBbsLateralityOptionsopt.includes(
                            "RLL"
                          )}
                          onChange={(e) => {
                            handleBbsLateralityOptionoptChange("RLL");
                            handleInputChange(e);
                          }}
                        />
                        RLL &nbsp;&nbsp;
                      </label>
                      {/* Add more options for Right laterality here */}
                    </>
                  )}

                {selectedBreathSoundOptions.includes(
                  "Bronchial Breath Sounds"
                ) &&
                  selectedBbsLaterality.includes("LEFT") && (
                    <>
                      {/* Content for Left laterality */}
                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedBbsLateralityOptionsopt.includes("LUL")
                            ? "active"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="BbslateralityOptionopt"
                          value="LUL"
                          style={{ visibility: "hidden" }}
                          checked={selectedBbsLateralityOptionsopt.includes(
                            "LUL"
                          )}
                          onChange={(e) => {
                            handleBbsLateralityOptionoptChange("LUL");
                            handleInputChange(e);
                          }}
                        />
                        LUL &nbsp;&nbsp;
                      </label>
                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedBbsLateralityOptionsopt.includes("LLL")
                            ? "active"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="BbslateralityOptionopt"
                          value="LLL"
                          style={{ visibility: "hidden" }}
                          checked={selectedBbsLateralityOptionsopt.includes(
                            "LLL"
                          )}
                          onChange={(e) => {
                            handleBbsLateralityOptionoptChange("LLL");
                            handleInputChange(e);
                          }}
                        />
                        LLL &nbsp;&nbsp;
                      </label>
                      {/* Add more options for Left laterality here with a similar structure */}
                    </>
                  )}
              </div>
            </div>
          </div>
          {/* bbslaterrity ended */}
          {/* dbslaterity started*/}
          <div className="row">
            <div className="col-sm-3 ms-4">
              {/* Additional options for Breath Sound */}
              {selectedOrgan && (
                <div className="row mt-3">
                  <div className="col-md-4 marital d-flex align-items-center">
                    {/* Content for Breath Sound Options */}
                    <label
                      className={`maritalcircle  ${
                        selectedBreathSoundOptions.includes(
                          "Decreased Breath Sounds"
                        )
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="breathSoundOption"
                        value="Decreased Breath Sounds"
                        style={{ visibility: "hidden" }}
                        checked={selectedBreathSoundOptions.includes(
                          "Decreased Breath Sounds"
                        )}
                        onChange={() =>
                          handleBreathSoundOptionChange(
                            "Decreased Breath Sounds"
                          )
                        }
                        readonly
                      />
                      Decreased Breath Sounds &nbsp;&nbsp;
                    </label>
                  </div>
                </div>
              )}
            </div>

            <div className="col-sm-4">
              {selectedBreathSoundOptions.includes(
                "Decreased Breath Sounds"
              ) && (
                <div className="row">
                  <div className="col-md-2 d-flex align-items-center">
                    <h1
                      className="titl"
                      style={{ fontWeight: "600", fontSize: "0.9rem" }}
                    >
                      <b>Laterality</b>
                    </h1>
                  </div>

                  <div className="col-md-6 ms-4">
                    {/* Additional options for Laterality */}
                    {selectedOrgan && (
                      <div className="marital d-flex m-3 align-items-center">
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedDbsLaterality.includes("RIGHT")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="DbslateralityOption"
                            value="RIGHT"
                            style={{ visibility: "hidden" }}
                            checked={selectedDbsLaterality.includes("RIGHT")}
                            onChange={() => handleDbsLateralityChange("RIGHT")}
                          />
                          RIGHT &nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${
                            selectedDbsLaterality.includes("LEFT")
                              ? "active"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="DbslateralityOption"
                            value="LEFT"
                            style={{ visibility: "hidden" }}
                            checked={selectedDbsLaterality.includes("LEFT")}
                            onChange={() => handleDbsLateralityChange("LEFT")}
                          />
                          LEFT &nbsp;
                        </label>
                        {/* Add more laterality options here with similar structure */}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="col-sm-4">
              <div
                className="marital m-3 d-flex align-items-center"
                style={{ marginLeft: "90%" }}
              >
                {selectedBreathSoundOptions.includes(
                  "Decreased Breath Sounds"
                ) &&
                  selectedDbsLaterality.includes("RIGHT") && (
                    <>
                      {/* Content for Right laterality */}
                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedDbsLateralityOptionsopt.includes("RUL")
                            ? "active"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="DbslateralityOptionopt"
                          value="RUL"
                          style={{ visibility: "hidden" }}
                          checked={selectedDbsLateralityOptionsopt.includes(
                            "RUL"
                          )}
                          onChange={(e) => {
                            handleDbsLateralityOptionoptChange("RUL");
                            handleInputChange(e);
                          }}
                        />
                        RUL &nbsp;&nbsp;
                      </label>
                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedDbsLateralityOptionsopt.includes("RML")
                            ? "active"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="DbslateralityOptionopt"
                          value="RML"
                          style={{ visibility: "hidden" }}
                          checked={selectedDbsLateralityOptionsopt.includes(
                            "RML"
                          )}
                          onChange={(e) => {
                            handleDbsLateralityOptionoptChange("RML");
                            handleInputChange(e);
                          }}
                        />
                        RML &nbsp;&nbsp;
                      </label>
                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedDbsLateralityOptionsopt.includes("RLL")
                            ? "active"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="DbslateralityOptionopt"
                          value="RLL"
                          style={{ visibility: "hidden" }}
                          checked={selectedDbsLateralityOptionsopt.includes(
                            "RLL"
                          )}
                          onChange={(e) => {
                            handleDbsLateralityOptionoptChange("RLL");
                            handleInputChange(e);
                          }}
                        />
                        RLL &nbsp;&nbsp;
                      </label>
                      {/* Add more options for Right laterality here */}
                    </>
                  )}

                {selectedBreathSoundOptions.includes(
                  "Decreased Breath Sounds"
                ) &&
                  selectedDbsLaterality.includes("LEFT") && (
                    <>
                      {/* Content for Left laterality */}
                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedDbsLateralityOptionsopt.includes("LUL")
                            ? "active"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="DbslateralityOptionopt"
                          value="LUL"
                          style={{ visibility: "hidden" }}
                          checked={selectedDbsLateralityOptionsopt.includes(
                            "LUL"
                          )}
                          onChange={(e) => {
                            handleDbsLateralityOptionoptChange("LUL");
                            handleInputChange(e);
                          }}
                        />
                        LUL &nbsp;&nbsp;
                      </label>
                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedDbsLateralityOptionsopt.includes("LLL")
                            ? "active"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="DbslateralityOptionopt"
                          value="LLL"
                          style={{ visibility: "hidden" }}
                          checked={selectedDbsLateralityOptionsopt.includes(
                            "LLL"
                          )}
                          onChange={(e) => {
                            handleDbsLateralityOptionoptChange("LLL");
                            handleInputChange(e);
                          }}
                        />
                        LLL &nbsp;&nbsp;
                      </label>
                      {/* Add more options for Left laterality here with a similar structure */}
                    </>
                  )}
              </div>
            </div>
          </div>
          {/* dbslaterity ended*/}
        </div>
        {/* breathsound option ended*/}

        {/* chest imaging  started*/}
        {Array.isArray(selectedPastMedicalHistory) &&
          selectedPastMedicalHistory.includes("Respiratory") && (
            <div className="container mt-4">
              <hr></hr>
              <div className="row">
                <div className="col-md-2 d-flex align-items-center">
                  <h1
                    className="titl"
                    style={{ fontWeight: "600", fontSize: "0.9rem" }}
                  >
                    <b>Chest Imaging</b>
                  </h1>
                </div>

                <div className="col-md-6 ms-4">
                  <div className="col-md-12">
                    {/* Additional options for Breath Sound */}
                    <div className="marital d-flex m-3 align-items-center">
                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedImagingOptions.includes("XRay")
                            ? "active"
                            : ""
                        }`}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                          type="checkbox"
                          name="imagingOption"
                          value="XRay"
                          style={{ visibility: "hidden" }}
                          checked={selectedImagingOptions.includes("XRay")}
                          onChange={() => handleImagingOptionChange("XRay")}
                        />
                        XRay &nbsp;&nbsp;&nbsp;&nbsp;
                      </label>
                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedImagingOptions.includes("CT") ? "active" : ""
                        }`}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                          type="checkbox"
                          name="imagingOption"
                          value="CT"
                          style={{ visibility: "hidden" }}
                          checked={selectedImagingOptions.includes("CT")}
                          onChange={() => handleImagingOptionChange("CT")}
                        />
                        CT &nbsp;&nbsp;&nbsp;&nbsp;
                      </label>

                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedImagingOptions.includes("MRI") ? "active" : ""
                        }`}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                          type="checkbox"
                          name="imagingOption"
                          value="MRI"
                          style={{ visibility: "hidden" }}
                          checked={selectedImagingOptions.includes("MRI")}
                          onChange={() => handleImagingOptionChange("MRI")}
                        />
                        MRI &nbsp;&nbsp;&nbsp;&nbsp;
                      </label>
                    </div>
                    <div className="marital d-flex m-3 align-items-center">
                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedImagingOptions.includes("Fluoroscopy")
                            ? "active"
                            : ""
                        }`}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                          type="checkbox"
                          name="imagingOption"
                          value="Fluoroscopy"
                          style={{ visibility: "hidden" }}
                          checked={selectedImagingOptions.includes(
                            "Fluoroscopy"
                          )}
                          onChange={() =>
                            handleImagingOptionChange("Fluoroscopy")
                          }
                        />
                        Fluoroscopy &nbsp;&nbsp;&nbsp;&nbsp;
                      </label>
                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedImagingOptions.includes("Ultrasound")
                            ? "active"
                            : ""
                        }`}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                          type="checkbox"
                          name="imagingOption"
                          value="Ultrasound"
                          style={{ visibility: "hidden" }}
                          checked={selectedImagingOptions.includes(
                            "Ultrasound"
                          )}
                          onChange={() =>
                            handleImagingOptionChange("Ultrasound")
                          }
                        />
                        Ultrasound &nbsp;&nbsp;&nbsp;&nbsp;
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 ms-auto text-align-right">
                  <div className="row">
                    <div className="col-md-12" style={{ marginLeft: "20%" }}>
                      <button
                        className="btn"
                        style={{ color: "#fff" }}
                        onClick={handleAddchestimageFreeTextClick}
                      >
                        <div className="pulser">
                          {showchestimageTextField ? (
                            <FaTimesCircle /> // Display close button when input is shown
                          ) : (
                            <FaPlusCircle /> // Display plus icon when input is hidden
                          )}
                        </div>
                      </button>
                    </div>
                  </div>
                  {showchestimageTextField && (
                    <div className="row mt-3">
                      <div className="col-md-12 offset-md-2">
                        <input
                          type="text"
                          style={{
                            border: "1px solid #000",
                            borderRadius: "10px",
                          }}
                          className="form-control"
                          name="freechestimaging"
                          placeholder="Enter Chest Imaging"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        {/* chest imaging  ended*/}

        {/* diagnosis started */}
        <div className="container mt-4">
          <hr />
          <div className="row">
            <div className="col-md-2 d-flex align-items-center">
              <h1
                className="titl"
                style={{ fontWeight: "600", fontSize: "0.9rem" }}
              >
                <b>Diagnosis</b>
              </h1>
            </div>

            <div className="col-md-6 ms-4">
              <div className="raj">
                <div className="marital d-flex align-items-center">
                  <label
                    className={`maritalcircle p-2 m-3 ${
                      selectedDiagnosisOption === "Drug Sensitive TB"
                        ? "active"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="diagnosisOption"
                      value="Drug Sensitive TB"
                      style={{ visibility: "hidden" }}
                      checked={
                        formData.selectedDiagnosisOption === "Drug Sensitive TB"
                      }
                      onChange={(e) => {
                        handleDiagnosisOptionChange("Drug Sensitive TB");
                        handleInputChange(e);
                      }}
                    />
                    Drug Sensitive TB &nbsp;&nbsp;
                  </label>

                  <label
                    className={`maritalcircle p-2 m-3 ${
                      selectedDiagnosisOption === "Drug Resistance TB"
                        ? "active"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="diagnosisOption"
                      value="Drug Resistance TB"
                      style={{ visibility: "hidden" }}
                      checked={
                        formData.selectedDiagnosisOption ===
                        "Drug Resistance TB"
                      }
                      onChange={(e) => {
                        handleDiagnosisOptionChange("Drug Resistance TB");
                        handleInputChange(e);
                      }}
                    />
                    Drug Resistance TB &nbsp;&nbsp;
                  </label>
                </div>
                <div className="marital d-flex align-items-center">
                  {selectedDiagnosisOption === "Drug Resistance TB" && (
                    <div>
                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedResistanceTB ===
                          "MDR/XDR TB R resistance detected and FQ resistance detected"
                            ? "active"
                            : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="resistancetb"
                          value="MDR/XDR TB R resistance detected and FQ resistance detected"
                          style={{ visibility: "hidden" }}
                          checked={
                            formData.selectedResistanceTB ===
                            "MDR/XDR TB R resistance detected and FQ resistance detected"
                          }
                          onChange={(e) => {
                            setSelectedResistanceTB(
                              "MDR/XDR TB R resistance detected and FQ resistance detected"
                            );
                            handleInputChange(e);
                          }}
                        />
                        MDR/XDR TB R resistance detected and FQ resistance
                        detected
                      </label>
                      {selectedResistanceTB ===
                        "MDR/XDR TB R resistance detected and FQ resistance detected" && (
                        <div className="ms-4 m-2">
                          {" "}
                          <span
                            style={{ fontWeight: "600", fontSize: "0.9rem" }}
                          >
                            {" "}
                            Choose the Medicine: &nbsp;
                          </span>
                          <label
                            className={`maritalcircle p-2 ms-4 m-3 ${
                              selectedMdrXdr === "Levofloxacin" ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="mdrxdrtb"
                              value="Levofloxacin"
                              style={{ visibility: "hidden" }}
                              checked={
                                formData.selectedMdrXdr === "Levofloxacin"
                              }
                              onChange={(e) => {
                                handleMdrXdrChange("Levofloxacin");
                                handleInputChange(e);
                              }}
                            />
                            Levofloxacin
                          </label>
                          <label
                            className={`maritalcircle p-2 m-3 ${
                              selectedMdrXdr === "Moxifloxacin" ? "active" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="mdrxdrtb"
                              value="Moxifloxacin"
                              style={{ visibility: "hidden" }}
                              checked={
                                formData.selectedMdrXdr === "Moxifloxacin"
                              }
                              onChange={(e) => {
                                handleMdrXdrChange("Moxifloxacin");
                                handleInputChange(e);
                              }}
                            />
                            Moxifloxacin
                          </label>
                        </div>
                      )}
                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedResistanceTB ===
                          "MDR/RR-TB R resistance detected and FQ resistance not detected"
                            ? "active"
                            : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="resistancetb"
                          value="MDR/RR-TB R resistance detected and FQ resistance not detected"
                          style={{ visibility: "hidden" }}
                          checked={
                            formData.selectedResistanceTB ===
                            "MDR/RR-TB R resistance detected and FQ resistance not detected"
                          }
                          onChange={(e) => {
                            setSelectedResistanceTB(
                              "MDR/RR-TB R resistance detected and FQ resistance not detected"
                            );
                            handleInputChange(e);
                          }}
                        />
                        MDR/RR-TB R resistance detected and FQ resistance not
                        detected
                      </label>

                      <label
                        className={`maritalcircle p-2 m-3 ${
                          selectedResistanceTB ===
                          "H MONO-POLY (H resistance detected and R resistance not detected)"
                            ? "active"
                            : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="resistancetb"
                          value="H MONO-POLY (H resistance detected and R resistance not detected)"
                          style={{ visibility: "hidden" }}
                          checked={
                            formData.selectedResistanceTB ===
                            "H MONO-POLY (H resistance detected and R resistance not detected)"
                          }
                          onChange={(e) => {
                            setSelectedResistanceTB(
                              "H MONO-POLY (H resistance detected and R resistance not detected)"
                            );
                            handleInputChange(e);
                          }}
                        />
                        H MONO-POLY (H resistance detected and R resistance not
                        detected)
                      </label>
                    </div>
                  )}
                </div>

                <div className="marital d-flex align-items-center">
                  {/* <label
                  className={`maritalcircle p-2 m-3 ${selectedDiagnosisOptions.includes('Ultrasound') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="diagnosisOption"
                    value="Ultrasound"
                    style={{ visibility: 'hidden' }}
                    checked={selectedDiagnosisOptions.includes('Ultrasound')}
                    onChange={() => handleDiagnosisOptionChange('Ultrasound')}
                  />
                  Ultrasound
                </label> */}
                </div>
              </div>
            </div>

            <div className="col-md-3 ms-auto text-align-right">
              <div className="row">
                <div className="col-md-12" style={{ marginLeft: "20%" }}>
                  <button
                    className="btn"
                    style={{ color: "#fff" }}
                    onClick={handleAdddiagnosisFreeTextClick}
                  >
                    <div className="pulser">
                      {showdiagnosisTextField ? (
                        <FaTimesCircle /> // Display close button when input is shown
                      ) : (
                        <FaPlusCircle /> // Display plus icon when input is hidden
                      )}
                    </div>
                  </button>
                </div>
              </div>
              {showdiagnosisTextField && (
                <div className="row mt-3">
                  <div className="col-md-12 offset-md-2">
                    <input
                      type="text"
                      style={{ border: "1px solid #000", borderRadius: "10px" }}
                      className="form-control"
                      name="freediagnosis"
                      placeholder="Enter Diagnosis"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* diagnosis ended*/}

        {/* cnf diagnosis started */}
        <div className="container mt-4">
          <hr />
          <div className="row">
            <div className="col-md-2 d-flex align-items-center">
              <h1
                className="titl"
                style={{ fontWeight: "600", fontSize: "0.9rem" }}
              >
                <b>Confirmed Diagnosis</b>
              </h1>
              {/* <div className="form-check form-switch ml-2" style={{ marginLeft: '15%' }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  checked={showCnfDiagnosisOptions}
                  onChange={(e) => handleCnfDiagnosisChange(e.target.checked)}
                  style={{ fontSize: '1rem', transform: 'scale(1.2)' }}
                />
              </div> */}
            </div>

            <div className="col-md-6 ms-4">
              {/* Additional options for Breath Sound */}
              {selectedOrgan && (
                <div className="row mt-3">
                  <div className="col-md-4 marital d-flex align-items-center">
                    {/* Content for Confirmed Diagnosis Options */}
                    <label
                      className={`maritalcircle p-2 m-3 ${
                        selectedConfirmedDiagnosisOptions.includes(
                          "Tuberculin Skin Test (TST)"
                        )
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="cnfdiagnosisOption"
                        value="Tuberculin Skin Test (TST)"
                        style={{ visibility: "hidden" }}
                        checked={selectedConfirmedDiagnosisOptions.includes(
                          "Tuberculin Skin Test (TST)"
                        )}
                        onChange={() =>
                          handleConfirmedDiagnosisOptionChange(
                            "Tuberculin Skin Test (TST)"
                          )
                        }
                      />
                      Tuberculin Skin Test (TST) &nbsp;&nbsp;
                    </label>
                  </div>
                  <div className="marital d-flex align-items-center">
                    <label
                      className={`maritalcircle p-2 m-3 ${
                        selectedConfirmedDiagnosisOptions.includes(
                          "Interferon-Gamma Release Assays (IGRAs)"
                        )
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="cnfdiagnosisOption"
                        value="Interferon-Gamma Release Assays (IGRAs)"
                        style={{ visibility: "hidden" }}
                        checked={selectedConfirmedDiagnosisOptions.includes(
                          "Interferon-Gamma Release Assays (IGRAs)"
                        )}
                        onChange={() =>
                          handleConfirmedDiagnosisOptionChange(
                            "Interferon-Gamma Release Assays (IGRAs)"
                          )
                        }
                      />
                      Interferon-Gamma Release Assays (IGRAs) &nbsp;&nbsp;
                    </label>
                  </div>
                  <div className="marital d-flex align-items-center">
                    <label
                      className={`maritalcircle p-2 m-3 ${
                        selectedConfirmedDiagnosisOptions.includes(
                          "GeneXpert (CBNAAT)"
                        )
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="cnfdiagnosisOption"
                        value="GeneXpert (CBNAAT)"
                        style={{ visibility: "hidden" }}
                        checked={selectedConfirmedDiagnosisOptions.includes(
                          "GeneXpert (CBNAAT)"
                        )}
                        onChange={() =>
                          handleConfirmedDiagnosisOptionChange(
                            "GeneXpert (CBNAAT)"
                          )
                        }
                      />
                      GeneXpert (CBNAAT) &nbsp;&nbsp;
                    </label>
                  </div>
                  <div className="marital d-flex align-items-center">
                    <label
                      className={`maritalcircle p-2 m-3 ${
                        selectedConfirmedDiagnosisOptions.includes(
                          "Sputum Microscopy"
                        )
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="cnfdiagnosisOption"
                        value="Sputum Microscopy"
                        style={{ visibility: "hidden" }}
                        checked={selectedConfirmedDiagnosisOptions.includes(
                          "Sputum Microscopy"
                        )}
                        onChange={() =>
                          handleConfirmedDiagnosisOptionChange(
                            "Sputum Microscopy"
                          )
                        }
                      />
                      Sputum Microscopy &nbsp;&nbsp;
                    </label>

                    <label
                      className={`maritalcircle p-2 m-3 ${
                        selectedConfirmedDiagnosisOptions.includes(
                          "Sputum Culture"
                        )
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="cnfdiagnosisOption"
                        value="Sputum Culture"
                        style={{ visibility: "hidden" }}
                        checked={selectedConfirmedDiagnosisOptions.includes(
                          "Sputum Culture"
                        )}
                        onChange={() =>
                          handleConfirmedDiagnosisOptionChange("Sputum Culture")
                        }
                      />
                      Sputum Culture &nbsp;&nbsp;
                    </label>
                  </div>
                  <div className=" marital d-flex align-items-center">
                    <label
                      className={`maritalcircle p-2 m-3 ${
                        selectedConfirmedDiagnosisOptions.includes(
                          "Urine Lipoarabinomannan (LAM) Test"
                        )
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="cnfdiagnosisOption"
                        value="Urine Lipoarabinomannan (LAM) Test"
                        style={{ visibility: "hidden" }}
                        checked={selectedConfirmedDiagnosisOptions.includes(
                          "Urine Lipoarabinomannan (LAM) Test"
                        )}
                        onChange={() =>
                          handleConfirmedDiagnosisOptionChange(
                            "Urine Lipoarabinomannan (LAM) Test"
                          )
                        }
                      />
                      Urine Lipoarabinomannan (LAM) Test &nbsp;&nbsp;
                    </label>
                  </div>
                  <div className="marital d-flex align-items-center">
                    <label
                      className={`maritalcircle p-2 m-3 ${
                        selectedConfirmedDiagnosisOptions.includes("T-SPOT.TB")
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="cnfdiagnosisOption"
                        value="T-SPOT.TB"
                        style={{ visibility: "hidden" }}
                        checked={selectedConfirmedDiagnosisOptions.includes(
                          "T-SPOT.TB"
                        )}
                        onChange={() =>
                          handleConfirmedDiagnosisOptionChange("T-SPOT.TB")
                        }
                      />
                      T-SPOT.TB &nbsp;&nbsp;
                    </label>
                  </div>
                </div>
              )}
            </div>

            <div className="col-md-3 ms-auto text-align-right">
              <div className="row">
                <div className="col-md-12" style={{ marginLeft: "20%" }}>
                  <button
                    className="btn"
                    style={{ color: "#fff" }}
                    onClick={handleAddcnfdiagnosisFreeTextClick}
                  >
                    <div className="pulser">
                      {showcnfdiagnosisTextField ? (
                        <FaTimesCircle /> // Display close button when input is shown
                      ) : (
                        <FaPlusCircle /> // Display plus icon when input is hidden
                      )}
                    </div>
                  </button>
                </div>
              </div>
              {showcnfdiagnosisTextField && (
                <div className="row mt-3">
                  <div className="col-md-12 offset-md-2">
                    <input
                      type="text"
                      style={{ border: "1px solid #000", borderRadius: "10px" }}
                      className="form-control"
                      name="freecnfdiagnosis"
                      placeholder="Enter Confirm Diagnosis"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* cnf diagnosis ended */}

        {/* relapse option started */}
        {selectedPastMedicalHistory.includes("Tuberculosis") && (
          <div className="container mt-4 mb-4">
            <hr />
            <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1
                  className="titl"
                  style={{ fontWeight: "600", fontSize: "0.9rem" }}
                >
                  <b>Relapse</b>
                </h1>
                <div
                  className="form-check form-switch ml-2"
                  style={{ marginLeft: "15%" }}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    checked={showRelapseOptions}
                    onChange={(e) => handleRelapseChange(e.target.checked)}
                    style={{ fontSize: "1rem", transform: "scale(1.2)" }}
                  />
                </div>
              </div>

              <div className="col-md-6 ms-4">
                {/* Additional options for Breath Sound */}
                {showRelapseOptions && selectedOrgan && (
                  <div className="row mt-3">
                    <div className="col-md-4 marital d-flex align-items-center">
                      {/* Content for Relapse Options */}
                      {["1st", "2nd", "3rd"].map((option) => (
                        <label
                          key={option}
                          className={`maritalcircle p-2 m-3 ${
                            selectedRelapseOption === option ? "active" : ""
                          }`}
                        >
                          <input
                            type="radio"
                            name="relapseChoice"
                            value={option}
                            style={{ visibility: "hidden" }}
                            checked={selectedRelapseOption === option}
                            onChange={() => handleRelapseChoice(option)}
                          />
                          {option} &nbsp;&nbsp;
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {/* relapse option ended */}
        {/* <div className="text-center mt-4" style={{paddingLeft:'80%'}}>

<button className="btn btn-primary btn-lg" onClick={(e) => {
  handleThirdblockNext(); 
  handleSubmit(e);
}}
  style={{ backgroundColor: '#795CED', color: '#fff' }}>
  &nbsp;&nbsp; Next &nbsp;&nbsp;
</button>

</div> */}
        <div className=" mt-4 mb-4">
          <div className="row">
            <div className="col-md-6">
              {" "}
              {/* Left column */}
              <button className="btn btn-primary btn-lg megha" onClick={onBack}>
                &nbsp;&nbsp; Back &nbsp;&nbsp;
              </button>
            </div>
            <div className="col-md-6 text-end">
              {" "}
              {/* Right column */}
              <button
                className="btn btn-primary btn-lg"
                onClick={(e) => {
                  handleThirdblockNext();
                  handleSubmit(e);
                }}
                style={{ backgroundColor: "#795CED", color: "#fff" }}
              >
                &nbsp;&nbsp; Next &nbsp;&nbsp;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Breath Sound ended */}
    </>
  );
}

export default Thirdblock;

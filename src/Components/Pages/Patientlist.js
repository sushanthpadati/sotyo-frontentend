import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Report from './Report'; 
const PatientList = () => {
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const [patients, setPatients] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (slno) => {
    setPatients((prevPatients) => prevPatients.filter((patient) => patient.slno !== slno));
  };

  const filteredPatients = patients && patients.length > 0
    ? patients.filter(
      (patient) =>
        patient &&
        patient.patientId &&
        patient.firstName &&
        patient.lastName &&
        patient.organ &&
        (patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          patient.lastName.toLowerCase().includes(searchTerm.toLowerCase()) || patient.patientId.toLowerCase().includes(searchTerm.toLowerCase()) || patient.organ.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    : [];

  const totalItems = filteredPatients.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  const getPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredPatients.slice(startIndex, endIndex);
  };

  useEffect(() => {
    // Make a GET request to the Flask API endpoint to fetch patient data
    fetch('http://3.16.11.52:5000/patient/data')
      .then(response => response.json())
      .then(data => {
        console.log('Raw data from server:', data);

        // Check if the response contains an error property
        if (data && data.error) {
          console.error('Server returned an error:', data.error);
        } else if (Array.isArray(data.patientData)) {
          // Check if the data is an array
          console.log('Fetched patient data:', data.patientData);

          // Update the state with the correct property names
          setPatients(data.patientData);
        } else {
          console.error('Invalid response structure:', data);
        }
      })
      .catch(error => console.error('Error fetching patient data:', error));
  }, []);

  const getTotalPatients = () => {
    return patients.length;
  };
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const navigate = useNavigate();

  // Function to handle the click on a patient ID
 // Inside handlePatientClick function
const handlePatientClick = (patientID) => {
  // Navigate to the report page with the selected patient ID
  navigate(`/report/${patientID}`);
};

  const [selectedPatientID, setSelectedPatientID] = useState(null);

  // Function to handle selecting a patient
  const handlePatientSelect = (patientID) => {
    setSelectedPatientID(patientID);
  };

  return (
    <>
       <div className="container-fluid">
        <h4 className="page-title">Patient List</h4>
        <div className="row">
          <div className="col-md-4">
            <div className="mb-3 input-group">
              <div className="input-group-prepend">
                <label className="input-group-text" style={{backgroundColor:'#893487',color:'#fff'}} htmlFor="itemsPerPage">
                  Items Per Page:
                </label>
              </div>
              <select
                id="itemsPerPage"
                className="form-control inputblocks"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
              >
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={150}>150</option>
                <option value={200}>200</option>
              </select>
            </div>
          </div>

          <div className="col-md-4">
            <div className="mb-3 input-group">
              <input
                type="text"
                className="form-control inputblocks"
                placeholder="Search by Name or Patient ID or Organ"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" style={{backgroundColor:'#893487',color:'#fff'}} type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
    <div className="row">
    <div className="col-xl-12 col-lg-8">
      <div className="card card-h-100">
        <div className="card-body">
          <h4 className="header-title mb-3">Patient List</h4>
          <div dir="ltr">
            <div id="sessions-overview" className="apex-charts mt-3" data-colors="#0acf97" />
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Patient ID</th>
                  <th scope="col">Patient Name</th>
                  <th scope="col">Organ</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
              {getPageItems().map((patient, index) => (
              <tr key={index}>
                <td style={{color:'#000'}}>{index + 1}</td>
                <td className='plinks'>
                  {/* Wrap the Patient ID in a Link or any other clickable element */}
                  <Link to={`/report/${patient.patientId}`} onClick={() => handlePatientClick(patient.patientId)}>
    {patient.patientId}
  </Link>
                </td>
                <td style={{color:'#000'}}>{`${capitalizeFirstLetter(patient.firstName)} ${capitalizeFirstLetter(patient.lastName)}`}</td>
                <td style={{color:'#000'}}>{patient.organ}</td>
                <td style={{ fontSize: '1.3rem',color:'red' }}>
                  <i
                    className="uil uil-trash-alt"
                    onClick={() => handleDelete(index + 1)}
                  >
                  </i>
                </td>
              </tr>
            ))}
              </tbody>
            </table>

          </div>
          
        </div> {/* end card-body*/}
        
      </div> {/* end card*/}
    </div>
    </div>
        {/* Move the Report component outside the table */}
        {selectedPatientID && <Report selectedpatientID={selectedPatientID} />}
       
        {totalItems > itemsPerPage && (
          <nav>
            <ul className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index}
                  className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  <a className="page-link" href="#">
                    {index + 1}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};

export default PatientList;

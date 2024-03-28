import React, { useEffect, useState } from 'react';
import { FaMale, FaFemale, FaUser } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Personaldetails({onSubmit}) {
  // State to track selected gender



 
  const [selectedGender, setSelectedGender] = useState('');

  // Function to handle gender selection
  // const handleGenderChange = (gender) => {
  //   setSelectedGender((prevGender) => (prevGender === gender ? null : gender));
    
  // };
  const handleGenderChange = (gender) => {
    setSelectedGender(gender); // Update selectedGender
    setFormData({
      ...formData,
      sex: gender, // Update 'sex' field in formData
    });
  };

  // State to track selected marital status
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState('');

  // Function to handle marital status selection
  const handleMaritalStatusChange = (value) => {
    setSelectedMaritalStatus(value);
  };

  // State to track selected organ
  const [selectedOrgan, setSelectedOrgan] = useState('');

  // Function to handle organ selection
  const handleOrganChange = (organ) => {
    setSelectedOrgan(organ);
  };
  const [patientId, setPatientId] = useState('');

  useEffect(() => {
    // Function to generate a new patient ID
    const generatePatientId = () => {
      // You can customize the format of the patient ID here
      const prefix = 'PATIENT';
      const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
      const timestamp = Date.now().toString().substring(9);
      const newPatientId = `${prefix}${randomPart}${timestamp}`;
      setPatientId(newPatientId); // Update patientId
      
    };
  
    // Generate a new patient ID on page refresh
    generatePatientId();
  }, []);
  
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    sex: '',
    marital: '',
    dob: '',
    organ: '',
    weight: '',
    patientId: '', // Include patientId directly from the state
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if any of the mandatory fields are empty
    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.dob ||
      !selectedGender ||
      !selectedMaritalStatus ||
      !selectedOrgan ||
      !formData.weight
    ) {
      console.log('Missing mandatory field(s)');
      toast.error('Please fill in all mandatory fields');
      return; // Do not proceed with submission
    }
  
    try {
      // Your existing form submission logic
      const response = await fetch('http://3.16.11.52:5000/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        toast.success('Data saved successfully!');
        setTimeout(() => {
          onSubmit(selectedOrgan, formData.patientId);
        }, 2000);
        console.log('Data saved successfully!', data);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const getCurrentTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    // Update time and date every second
    const interval = setInterval(() => {
      setTime(getCurrentTime());
      setDate(getCurrentDate());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const isNextButtonDisabled = () => {
    // Check if any of the mandatory fields are empty
    return (
      !formData.firstname ||
      !formData.lastname ||
      !formData.dob ||
      !selectedGender ||
      !selectedMaritalStatus ||
      !selectedOrgan ||
      !formData.weight
    );
  };
  return (
    
    <>
    
      <div className="container-fluid ">
      <ToastContainer />
        <div className="container">
        <div className="row">
        <form onSubmit={handleSubmit} />
        <div className='patientid col-md-2'>
      <div style={{ textAlign: 'right', float: 'right' }}>
        <h3 className='pathed' ><b>Current Time:</b> {time}
        </h3>
      </div>
      <div style={{ textAlign: 'left', float: 'left' }}>
        <h3 className='pathed'><b>Current Date:</b> {date}
        </h3>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h3 className='pathed' type='text'
    value={formData.patientId = patientId}
    onChange={handleInputChange} name="patientid"
     disabled>
          <b>Patient ID:</b> {patientId}
        </h3>
      </div>
    </div>

          <div className="col-xl-12 mt-4">
            <div className="col-xl-6 col-lg-12 col-md-6">
              
              <div className="form-group mb-4">
                {/* <label htmlFor="Sexsssss" className='sexsss'>SEX</label> */}
                <div className="gender">
                  <FaMale
                    className={`gendercircle ${selectedGender === 'male' ? 'active' : ''}`}
                    onClick={() => handleGenderChange('male')} name='sex'
                  />
                  <FaFemale
                    className={`gendercircle ${selectedGender === 'female' ? 'active' : ''}`}
                    onClick={() => handleGenderChange('female')} name='sex' 
                  />
                  <FaUser
                    className={`gendercircle ${selectedGender === 'other' ? 'active' : ''}`}
                    onClick={() => handleGenderChange('other')} name='sex' 
                  />
                </div>
              </div>
              
              <div className="form-group mb-4">
                <input type="text" className="form-control inputblocks"  id="firstName" name="firstname" value={formData.firstname} onChange={handleInputChange} placeholder='Enter First Name'  required/>
              </div>
              <div className="form-group mb-2" >
                <input type="text" className="form-control inputblocks" id="lastName" name='lastname' value={formData.lastname} onChange={handleInputChange} placeholder='Enter Last Name' required/>
              </div>
              <div className="form-group mb-3">
              <label htmlFor="date" style={{fontSize:'1.1rem'}}>Date of Birth</label>
                <input type="date" className="form-control inputblocks" id="dob" name='dob' placeholder='DOB' value={formData.dob} onChange={handleInputChange}  required/>
              </div>
              {/* this is new design started if not good delete this part */}
              <div className="form-group mb-3">
              <div className="input-group mb-3"  >
                      <input type="number" className="form-control inputblocks " name='weight'  aria-label="Amount (to the nearest dollar)" value={formData.weight} onChange={handleInputChange}  placeholder="Enter Weight" required/>
                      <span className="input-group-text inputblocks inputblocks2">Kg</span>
                  </div>
                  </div>
 {/* upto this delete it */}
 {/* if above is okay then delete this one */}
                  {/* <div className="form-group mb-3">
                <input type="text" className="form-control" id="weight" placeholder='Weight'/>
              </div>  */}
              {/* upto this delete */}
              <div className="form-group mb-3 mt-4">
                <label htmlFor="organ" className='tagorgan'>MARITAL STATUS</label><br />
                <div className="maritals">
                  <div className="row">
                    <div className="col-xl-3">
                      <label
                        className={`maritalcircles p-2 ${selectedMaritalStatus === 'Single' ? 'active' : ''}`}
                        onClick={() => handleMaritalStatusChange('Single')}
                      >
                        <input
                          type="radio"
                          name="marital"
                          value="Single"
                          className='butss'
                          checked={formData.selectedMaritalStatus === 'Single'}
                          onChange={handleInputChange}
                          readOnly
                          required
                        />
                        Single &nbsp;&nbsp;
                      </label>
                    </div>
                    <div className="col-xl-3">
                      <label
                        className={`maritalcircles p-2 ${selectedMaritalStatus === 'Married' ? 'active' : ''}`}
                        onClick={() => handleMaritalStatusChange('Married')}
                      >
                        <input
                          type="radio"
                          name="marital"
                          value="Married"
                          className='butss'
                          checked={formData.selectedMaritalStatus === 'Married'}
                          onChange={handleInputChange}
                          readOnly
                          required
                        />
                        Married &nbsp;&nbsp;
                      </label>
                    </div>
                    <div className="col-xl-3">
                      <label
                        className={`maritalcircles p-2 ${selectedMaritalStatus === 'Divorced' ? 'active' : ''}`}
                        onClick={() => handleMaritalStatusChange('Divorced')}
                      >
                        <input
                          type="radio"
                          name="marital"
                          value="Divorced"
                          className='butss'
                          checked={formData.selectedMaritalStatus === 'Divorced'}
                          onChange={handleInputChange}
                          readOnly
                        />
                        Divorced &nbsp;&nbsp;
                      </label>
                    </div>
                    <div className="col-xl-3">
                      <label
                        className={`maritalcircles p-2 ${selectedMaritalStatus === 'Widowed' ? 'active' : ''}`}
                        onClick={() => handleMaritalStatusChange('Widowed')}
                      >
                        <input
                          type="radio"
                          name="marital"
                          value="Widowed"
                          className='butss'
                          checked={formData.selectedMaritalStatus === 'Widowed'}
                          onChange={handleInputChange}
                          readOnly
                        />
                        Widowed &nbsp;&nbsp;
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* {selectedGender === 'female' && selectedMaritalStatus === 'Married' && (
      <div className="container">
        <p>wow you are married, how many child you have ?</p>
      </div>)} */}



            <div className="form-group mb-2 col-xl-11 col-md-12 col-sm-6">
              <label htmlFor="organ" className='tagorgan'>ORGAN</label><br />
              <div className="organ">
                <div className="row">
                  <div className="col">
                    <label
                      className={`organcircle p-2 ${selectedOrgan === 'Brain' ? 'active' : ''}`}
                      onClick={() => handleOrganChange('Brain')}
                    >
                      <input
                        type="radio"
                        name="organ"
                        className='butss'
                        value="Brain"
                        checked={formData.selectedOrgan === 'Brain'}
                        onChange={handleInputChange}
                        readOnly
                      />
                      Brain &nbsp;&nbsp;
                    </label>
                  </div>
                  <div className="col">
                    <label
                      className={`organcircle p-2 ${selectedOrgan === 'Heart' ? 'active' : ''}`}
                      onClick={() => handleOrganChange('Heart')}
                    >
                      <input
                        type="radio"
                        name="organ"
                        className='butss'
                        value="Heart"
                        checked={formData.selectedOrgan === 'Heart'}
                        onChange={handleInputChange}
                        readOnly
                      />
                      Heart &nbsp;&nbsp;
                    </label>
                  </div>
                  <div className="col">
                    <label
                      className={`organcircle p-2 ${selectedOrgan === 'Lungs' ? 'active' : ''}`}
                      onClick={() => handleOrganChange('Lungs')}
                    >
                      <input
                        type="radio"
                        name="organ"
                        value="Lungs"
                        className='butss'
                        checked={formData.selectedOrgan === 'Lungs'}
                        onChange={handleInputChange}
                        readOnly
                      />
                      Lungs &nbsp;&nbsp;
                    </label>
                  </div>
                  <div className="col">
                    <label
                      className={`organcircle p-2 ${selectedOrgan === 'Liver' ? 'active' : ''}`}
                      onClick={() => handleOrganChange('Liver')}
                    >
                      <input
                        type="radio"
                        name="organ"
                        value="Liver"
                        className='butss'
                        checked={formData.selectedOrgan === 'Liver'}
                        onChange={handleInputChange}
                        readOnly
                      />
                      Liver &nbsp;&nbsp;
                    </label>
                  </div>
                  <div className="col">
                    <label
                      className={`organcircle p-2 ${selectedOrgan === 'Kidney' ? 'active' : ''}`}
                      onClick={() => handleOrganChange('Kidney')}
                    >
                      <input
                        type="radio"
                        name="organ"
                        value="Kidney"
                        className='butss'
                        checked={selectedOrgan === 'Kidney'}
                        onChange={handleInputChange}
                        readOnly
                      />
                      Kidney &nbsp;&nbsp;
                    </label>
                  </div>
                  <div className="col">
                    <label
                      className={`organcircle p-2 ${selectedOrgan === 'Pancreas' ? 'active' : ''}`}
                      onClick={() => handleOrganChange('Pancreas')}
                    >
                      <input
                        type="radio"
                        name="organ"
                        value="Pancreas"
                        className='butss'
                        checked={selectedOrgan === 'Pancreas'}
                        onChange={handleInputChange}
                        readOnly
                      />
                      Pancreas &nbsp;&nbsp;
                    </label>
                  </div>
                  <div className="col">
                    <label
                      className={`organcircle p-2 ${selectedOrgan === 'Skin' ? 'active' : ''}`}
                      onClick={() => handleOrganChange('Skin')}
                    >
                      <input
                        type="radio"
                        className='butss'
                        name="organ"
                        value="Skin"
                        
                        checked={selectedOrgan === 'Skin'}
                        onChange={handleInputChange}
                        readOnly
                      />
                      Skin &nbsp;&nbsp;
                    </label>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
          
        </div>

        <div className="text-center mt-4 mb-4 rass" > {/* Use text-right class here */}
       
        
        <button
          className="btn btn-primary btn-lg megha"
          onClick={(e) => {
            if (!isNextButtonDisabled()) {
              handleSubmit(e);
              onSubmit(selectedOrgan, patientId);
            } else {
              // Display a toast error message
              toast.error('Please fill in all mandatory fields');
            }
          }}
          type="submit"
          disabled={isNextButtonDisabled()}
        >
          &nbsp;&nbsp; Next &nbsp;&nbsp;
        </button>




        </div>
        </div>
      </div>
    </>
  );
}

export default Personaldetails;

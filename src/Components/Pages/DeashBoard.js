import React,{useState,useEffect} from 'react';
import ModalSelection from './ModalSelection';
import { useNavigate } from 'react-router-dom';
import BarChart from './BarChart'
const DeashBoard = () => {

  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const handleDiseaseSelection = (selectedDisease) => {
    // Handle the selected disease
    // For now, let's navigate to the selected disease page
    if (selectedDisease === 'Tuberculosis') {
      setShow(false);
    } else if (selectedDisease === 'Cancer') {
      // Add the path for the Cancer page
      
    }
  };
  
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    // Increment the key to force a re-render
    setRefreshKey((prevKey) => prevKey + 1);
  };
  const [organCounts, setOrganCounts] = useState({
    totalPatientsCount: null,
    lungsCount: null,
    brainsCount: null,
    heartCount: 750,
    kidneyCount: 540,
  });
  const [totalPatientsCount, setTotalPatientsCount] = useState(null);
  const [lungsCount, setLungsCount] = useState(null);
  const [brainsCount, setBrainsCount] = useState(null);
  
  useEffect(() => {
    fetch('http://3.16.11.52:5000/patient/count')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setOrganCounts({
          totalPatientsCount: data.total_patients_count,
          lungsCount: data.lungs_count,
          brainsCount: data.brains_count,
          heartCount: 0, // Example value, replace with actual count
          kidneyCount: 0, // Example value, replace with actual count
        });
        setTotalPatientsCount(data.total_patients_count);
        setLungsCount(data.lungs_count);
        setBrainsCount(data.brains_count);
      })
      .catch(error => console.error('Error fetching patient count:', error));
  }, []);
  const calculateProgressBarWidth = (count) => {
    return organCounts.totalPatientsCount ? (count / organCounts.totalPatientsCount) * 100 : 0;
  };

  const data = {
    labels: ['Brain', 'Lung','heart','Kidney'],
    datasets: [{
        label: 'Patients',
        data: [organCounts.brainsCount, organCounts.lungsCount,organCounts.heartCount, organCounts.kidneyCount ],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 205, 86)',
            'rgb(54, 162, 235)',
            'rgb(32, 245, 192)',
        ],
        hoverOffset: 4,
    }],
};

    return (
      <>
      <ModalSelection show={show} onDiseaseSelect={handleDiseaseSelection} onClose={() => setShow(false)} />
       <div className="container-fluid">
  {/* start page title */}
  <div className="row">
    <div className="col-12">
      <div className="page-title-box">
        <div className="page-title-right">
          <form className="d-flex">
            
            <a href="javascript: void(0);" className="btn btn-primary ms-2" onClick={handleRefresh} style={{color:'#fff',backgroundColor:'#893487',border:'1px solid #893487'}}>
              <i  className="mdi mdi-autorenew" />
            </a>
          </form>
        </div>
        <h4 className="page-title">Analytics</h4>
      </div>
    </div>
  </div>
  {/* end page title */}
  <div className="row">
    <div className="col-xl-3 col-lg-4">
      <div className="card tilebox-one">
        <div className="card-body">
          <i className="uil uil-users-alt float-end" />
          <h6 className="text-uppercase mt-0">TOTAL PATIENT</h6>
          <h2 className="my-2" >{totalPatientsCount}</h2>
          
        </div> {/* end card-body*/}
      </div>
      </div>
      {/*end card*/}
      <div className="col-xl-3 col-lg-4">
      <div className="card tilebox-one">
        <div className="card-body">
          <i className="uil uil-window-restore float-end" />
          <h6 className="text-uppercase mt-0">REPORT GENERATED</h6>
          <h2 className="my-2">{totalPatientsCount}</h2>
         
        </div> 
        {/* end card-body*/}
      </div>
      {/*end card*/}
      
    </div> {/* end col */}
    <div className="col-xl-3 col-lg-4">
      <div className="card tilebox-one">
        <div className="card-body">
          <i className="uil uil-money-bill float-end" />
          <h6 className="text-uppercase mt-0">TOTAL INCOME</h6>
          <h2 className="my-2">2M</h2>
         
        </div> 
        {/* end card-body*/}
      </div>
      {/*end card*/}
      
    </div>
   
  </div>
  {/* end row */}
  {/* end row */}
  <div className="row">
    <div className="col-xl-4 col-lg-6">
      <div className="card card-h-100">
        <div className="card-body">
          <a href className="p-0 float-end">Export <i className="mdi mdi-download ms-1" /></a>
          <h4 className="header-title mt-1 mb-3">PATIENT ORGAN WISE</h4>
          <div className="table-responsive">
            <table className="table table-sm table-centered mb-0 font-14">
              <thead className="table-light">
                <tr>
                  <th>Organ</th>
                  <th>Patient</th>
                  <th style={{width: '40%'}} />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lung</td>
                  <td>{organCounts.lungsCount !== null ? organCounts.lungsCount : 'Loading...'}</td>
                  <td>
                  <div className="progress" style={{ height: 3 }}>
                  <div className="progress-bar" role="progressbar" style={{width: '65%', height: 20}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>Brain</td>
                  <td>{organCounts.brainsCount !== null ? organCounts.brainsCount : 'Loading...'}</td>
                  <td>
                  <div className="progress" style={{ height: 3 }}>
                  <div className="progress-bar" role="progressbar" style={{width: '25%', height: 20}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
                  </td>
                </tr>
                <tr>
                  <td>Heart</td>
                  <td>{organCounts.heartCount}</td>
                  <td>
                  <div className="progress" style={{ height: 3 }}>
                  <div className="progress-bar" role="progressbar" style={{width: '65%', height: 20}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
            </div>
                  </td>
                </tr>
                <tr>
                  <td>Kidney</td>
                  <td>{organCounts.kidneyCount}</td>
                  <td>
                  <div className="progress" style={{ height: 3 }}>
                  <div className="progress-bar" role="progressbar" style={{width: '65%', height: 20}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
            </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> {/* end table-responsive*/}
        </div> {/* end card-body*/}
      </div> {/* end card*/}
    </div> {/* end col*/}
    <div className="col-xl-4 col-lg-6 ">
    <div className="card card-h-100">
        <div className="card-body">
          <h5>No. of Patient according to Organ</h5> <br/>
            <BarChart data={data} />
            </div>
            </div>
        {/* end card-body*/}
      
        {/* end card-body */}
      
  </div>
   {/* add here */}
    
  </div>
  {/* end row */}
</div>

      </>

    );
};

export default DeashBoard;
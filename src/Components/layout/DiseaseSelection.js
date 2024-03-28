import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DiseaseSelection = () => {
  const navigate = useNavigate();

  const handleCancerSelection = () => {
    alert('Cancer information coming soon!');
  };

  return (
    <div>
      <h2>Select Disease</h2>
      <div>
        <Link to="/">
          <button>Tuberculosis</button>
        </Link>
        <button onClick={handleCancerSelection}>Cancer</button>
      </div>
    </div>
  );
};

export default DiseaseSelection;

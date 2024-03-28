import React from 'react';
import DiseaseSelection from './DiseaseSelection';

const DiseaseSelectionLayout = () => {
  return (
    <div className="content-page">
      <div className="content">
        {/* Only display DiseaseSelection component without Sidebar, Header, and Footer */}
        <DiseaseSelection />
      </div>
    </div>
  );
};

export default DiseaseSelectionLayout;

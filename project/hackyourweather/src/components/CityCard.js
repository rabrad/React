import React from 'react';

function CityCard({ children }) {
  return (
    <div className="single-card-container">
      <div>{children}</div>
    </div>
  );
}

export default CityCard;

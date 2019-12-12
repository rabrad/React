import React from 'react';

function WeatherDesc({ main, description }) {
  return (
    <div className="forecast-div">
      <h3>{main}</h3>
      <p>{description}</p>
    </div>
  );
}

export default WeatherDesc;

import React from 'react';

function WeatherDesc({ weatherState, weatherDesc }) {
  return (
    <div className="forecast-div">
      <h3>{weatherState}</h3>
      <p>{weatherDesc}</p>
    </div>
  );
}

export default WeatherDesc;

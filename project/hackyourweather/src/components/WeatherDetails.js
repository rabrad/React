import React from 'react';

function WeatherDetails({ minTemp, maxTemp, lat, lon }) {
  return (
    <div>
      <ul className="highlighted-info">
        <li key={minTemp.toString(2)}>min temp: {minTemp} &deg; </li>
        <li key={maxTemp.toString(2)}>max temp: {maxTemp} &deg; </li>
        <li key={lat + lon.toString(2)}>
          location: {lat}, {lon}
        </li>
      </ul>
    </div>
  );
}

export default WeatherDetails;

import React from 'react';

function WeatherDetails({ maxTemp, minTemp, lat, lon }) {
  return (
    <div>
      <ul className="highlighted-info">
        <li> max temp: {maxTemp} &deg; </li>
        <li> min temp: {minTemp} &deg; </li>
        <li>
          location: {lat}, {lon}
        </li>
      </ul>
    </div>
  );
}
export default WeatherDetails;

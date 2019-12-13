import React from 'react';

function FeaturedList({ maxTemp, minTemp, lat, lon }) {
  return (
    <div className="highlighted-info">
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
export default FeaturedList;

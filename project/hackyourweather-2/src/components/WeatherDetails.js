import React from 'react';
function FeaturedList({ maxTemp, minTemp, lat, lon }) {
  return (
    <div className="highlighted-info">
      <ul className="highlighted-info">
        <li key={Math.random()}> max temp: {maxTemp} &deg; </li>
        <li key={Math.random()}> min temp: {minTemp} &deg; </li>
        <li key={Math.random()}>
          location: {lat}, {lon}
        </li>
      </ul>
    </div>
  );
}
export default FeaturedList;

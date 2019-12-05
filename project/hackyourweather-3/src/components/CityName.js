import React from 'react';

const CityName = ({ cityName, countryCode }) => {
  return (
    <h2>
      {cityName}, {countryCode}
    </h2>
  );
};

export default CityName;

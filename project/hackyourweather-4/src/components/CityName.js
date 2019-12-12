import React from 'react';
import { Link } from 'react-router-dom';

const CityName = ({ cityName, countryCode, id }) => {
  return (
    <div>
      <Link to={`/${id}`} style={{ textDecoration: 'none', color: '#797979' }}>
        <h2 className="link">
          {cityName}, {countryCode}
        </h2>
      </Link>
    </div>
  );
};

export default CityName;

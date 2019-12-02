import React from 'react';
import CityName from './CityName';
import WeatherDesc from './WeatherDesc';
import WeatherDetails from './WeatherDetails';

function CityCard({ cityName, countryCode, main, description, maxTemp, minTemp, lat, lon }) {
  return (
    <div className="single-card-container">
      <CityName cityName={cityName} countryCode={countryCode} />
      <WeatherDesc main={main} description={description} />
      <WeatherDetails maxTemp={maxTemp} minTemp={minTemp} lat={lat} lon={lon} />
    </div>
  );
}

export default CityCard;

import React, { useState } from 'react';
import DataSource from './city-weather.json';
import AppTitle from './components/AppTitle';
import CityCard from './components/CityCard';
import CityName from './components/CityName';
import WeatherDesc from './components/WeatherDesc';
import WeatherDetails from './components/WeatherDetails';
import Form from './components/Form';
import './App.css';

const OPENWEATHERMAP_API_KEY = '64142132d94f35d63465d837b835e596';
function App() {
  const kelvinToCelsius = kelvin => kelvin - 273.15;

  const handleSubmitChange = data => {
    console.log('Data', data);
  };

  return (
    <div className="App">
      <AppTitle title="Hack your Weather" />
      <Form onSubmitForm={data => handleSubmitChange(data)} />

      <div className="cards-container">
        {DataSource.map((data, index) => {
          return (
            <CityCard key={index}>
              <CityName cityName={data.name} countryCode={data.sys.country} />
              <WeatherDesc
                weatherState={data.weather.map(wState => wState.main)}
                weatherDesc={data.weather.map(wDesc => wDesc.description)}
              />
              <WeatherDetails
                minTemp={kelvinToCelsius(data.main.temp_min).toFixed(2)}
                maxTemp={kelvinToCelsius(data.main.temp_max).toFixed(2)}
                lat={data.coord.lat}
                lon={data.coord.lon}
              />
            </CityCard>
          );
        })}
      </div>
    </div>
  );
}

export default App;

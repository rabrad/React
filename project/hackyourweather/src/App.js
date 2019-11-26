import React from 'react';
import DataSource from './city-weather.json';
import AppTitle from './components/AppTitle';
import CityCard from './components/CityCard';
import CityName from './components/CityName';
import WeatherDesc from './components/WeatherDesc';
import WeatherDetails from './components/WeatherDetails';
import './App.css';

function App() {
  const kelvinToCelsius = kelvin => kelvin - 273.15;

  return (
    <div className="App">
      <AppTitle title="Hack your Weather" />

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

import React, { useState } from 'react';
import AppTitle from './components/AppTitle';
import CityCard from './components/CityCard';
import Form from './components/Form';
import './App.css';

function App() {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [status, setStatus] = useState('loading');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchWeather = async city => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
      );
      if (!res.ok) {
        throw new Error('Oops! The city name is not correct. Please try again');
      }
      const weatherData = await res.json();
      console.log('DATA...>>>', weatherData);
      setWeatherInfo(weatherData);
      setStatus('success');
    } catch (err) {
      if (err) {
        setStatus('error');
        setErrorMessage(err.message);
      }
    }
  };

  return (
    <div className="App">
      <AppTitle title="Hack Your Weather" />

      <Form onSubmit={city => fetchWeather(city)} />
      {/* {Object.entries(weatherInfo).length === 0 && <p>Start by typing a city name </p>} */}
      {!weatherInfo.name && <p>Start by typing a city name </p>}
      {status === 'success' && (
        <CityCard
          cityName={weatherInfo.name}
          countryCode={weatherInfo.sys.country}
          main={weatherInfo.weather[0].main}
          description={weatherInfo.weather[0].description}
          maxTemp={weatherInfo.main.temp_max}
          minTemp={weatherInfo.main.temp_min}
          lat={weatherInfo.coord.lat}
          lon={weatherInfo.coord.lon}
        />
      )}

      {status === 'error' && (
        <p>{errorMessage || 'The city name is not correct. please try again.'} </p>
      )}
    </div>
  );
}

export default App;

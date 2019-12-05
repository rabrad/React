import React, { useState } from 'react';
import AppTitle from './components/AppTitle';
import CardList from './components/CardList';
import Form from './components/Form';
import './App.css';
require('dotenv').config();

function App() {
  const [status, setStatus] = useState('loading');
  const [hasError, setHasError] = useState('');
  const [cities, setCities] = useState([]);

  const fetchWeather = async city => {
    try {
      if (city.length === 0) {
        return;
      }
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
      );

      if (!res.ok) {
        throw new Error();
      }
      const newCity = await res.json();
      console.log('DATA:', newCity);

      const addCity =
        cities.filter(city => city.id === newCity.id).length === 0 || cities.length === 0;
      console.log('Add city', addCity); // log true

      if (addCity) {
        setCities([newCity, ...cities]);
      }

      setStatus('success');
    } catch (err) {
      if (err) {
        setStatus('error');
        setHasError(err.message);
      }
    }
  };

  function removeCityCard(id) {
    setCities(cities.filter(city => city.id === !id));
  }

  return (
    <div className="App">
      <AppTitle title="Hack Your Weather" />

      <Form onSubmit={city => fetchWeather(city)} />
      {Object.entries(cities).length === 0 && (
        <p>
          Get weather information for any city. <br />
          <strong>Start by typing the city name</strong>
        </p>
      )}

      {status === 'success' && <CardList cards={cities} onCardRemove={removeCityCard} />}

      {status === 'error' && <p>{hasError} The city name is not correct.</p>}
    </div>
  );
}

export default App;

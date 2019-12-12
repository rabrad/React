import React, { useState } from 'react';
import AppTitle from '../components/AppTitle';
import CardList from '../components/CardList';
import Form from '../components/Form';

function App() {
  const [status, setStatus] = useState('loading');
  const [errorMessage, setErrorMessage] = useState('');
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
        throw new Error('Oops! The city name is not correct. Please try again');
      }
      const newCity = await res.json();
      console.log('DATA:', newCity);

      const addCity =
        cities.filter(city => city.id === newCity.id).length === 0 || cities.length === 0;
      console.log('Add city', addCity);

      if (addCity) {
        setCities([newCity, ...cities]);
        console.log([newCity, ...cities]);
      }
      setStatus('success');
    } catch (err) {
      if (err) {
        setStatus('error');
        setErrorMessage(err.message);
      }
    }
  };

  function removeCityCard(id) {
    setCities(cities.filter(city => city.id !== id));
    console.log('REMOVE:', cities);
  }

  return (
    <div className="App half-width">
      <AppTitle title="Hack Your Weather" />

      <Form onSubmit={city => fetchWeather(city)} />
      {Object.entries(cities).length === 0 && <p>Get weather information for any city.</p>}

      {status === 'success' && <CardList cards={cities} onRemove={removeCityCard} />}
      {status === 'error' && (
        <p>{errorMessage || 'The city name is not correct. please try again.'} </p>
      )}
    </div>
  );
}

export default App;

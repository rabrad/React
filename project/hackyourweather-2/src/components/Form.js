import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [city, setCity] = useState('');

  const handleInputChange = e => {
    setCity(e.target.value);
  };

  const handleSubmit = e => {
    onSubmit(city);
    e.preventDefault();
    setCity('');
  };

  return (
    <form onSubmit={e => handleSubmit(e)} className="form">
      <input
        className="input-area"
        type="text"
        name="city"
        value={city}
        placeholder="Type city name"
        onChange={e => {
          handleInputChange(e);
        }}
      />

      <input className="btn" type="submit" value="Get Weather" />
    </form>
  );
}

export default Form;

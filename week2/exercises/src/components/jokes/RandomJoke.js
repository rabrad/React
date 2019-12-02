import React, { useState, useEffect } from 'react';
import Joke from './Joke';
import './jokes.css';

function RandomJoke() {
  const [joke, setJoke] = useState({});
  const [status, setStatus] = useState('loading');
  const [hasError, setErrors] = useState('');

  async function fetchJoke() {
    try {
      const apiCall = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await apiCall.json();
      setJoke(data);
      setStatus('success');
      console.log('DATA:....', data);
    } catch (err) {
      setStatus('error');
      setErrors(err.message);
    }
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h2>Refresh and get another Joke</h2>
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'success' && <Joke joke={joke} />}
      {status === 'error' && <h2>Error...{hasError}</h2>}
    </div>
  );
}

export default RandomJoke;

import React from 'react';
import RandomJoke from './components/jokes/RandomJoke';
import Friend from './components/friends/Friend';
import DogGallery from './components/dogs/dogGallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Friend />
      <DogGallery />
      <RandomJoke />
    </div>
  );
}

export default App;

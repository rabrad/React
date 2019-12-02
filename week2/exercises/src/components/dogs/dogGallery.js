import React, { useState, useCallback } from 'react';
import Button from './Button';
import DogPhoto from './DogPhoto';
import './dogs.css';

const DOG_API = `https://dog.ceo/api/breeds/image/random`;

function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [status, setStatus] = useState('loading');
  const [hasError, setHasError] = useState('');

  const getDogPhoto = async () => {
    try {
      const response = await fetch(DOG_API);
      const dogData = await response.json();
      console.log('jsonResponse', dogData);
      const newDogData = [...dogPhotos, dogData];
      setDogPhotos(newDogData);
      setStatus('success');
    } catch (err) {
      if (err) {
        setHasError(err.message);
        setStatus('error');
      }
    }
  };

  const getDogPhoto2 = useCallback(() => {
    getDogPhoto(DOG_API);
    // eslint-disable-next-line
  }, [dogPhotos]);

  return (
    <div className="dogs-main-container">
      <h1> Dog Gallery</h1>
      <Button fetchData={() => getDogPhoto2(DOG_API)} text="Get a dog!" />

      {status === 'loading' && <h3>Press the Button to find the best dog!</h3>}

      <section className="gallery-container">
        {status === 'success' &&
          dogPhotos.map(photo => <DogPhoto dogPhoto={photo} key={Math.random()} />)}
        {status === 'error' && { hasError }}
        <img src={dogPhotos.message} alt="" className="dog-image" />
      </section>
    </div>
  );
}

export default DogGallery;

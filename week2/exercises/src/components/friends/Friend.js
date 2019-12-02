import React, { useState, useEffect } from 'react';
import Button from './Button';
import FriendProfile from './FriendProfile';
import './friends.css';

function Friend() {
  const [friend, setFriend] = useState({});
  const [status, setStatus] = useState(false);
  const [hasError, setHasError] = useState('');

  const getFriend = async () => {
    try {
      const res = await fetch('https://www.randomuser.me/api?results=1');
      const data = await res.json();
      const newData = data.results[0];

      console.log('DATA:', newData);
      setFriend(newData);
      setStatus(true);
    } catch (err) {
      setHasError(err.message);
      setStatus('error');
    }
  };

  useEffect(() => {
    getFriend();
  }, []);

  return (
    <section className="fiends-container">
      <Button fetchData={() => getFriend()} text="Get a friend!" />

      {status === 'error' && <div>{hasError}</div>}
      {status === true && (
        <FriendProfile
          first={friend.name.first}
          last={friend.name.last}
          city={friend.location.city}
          country={friend.location.country}
          email={friend.email}
          phone={friend.phone}
        />
      )}
    </section>
  );
}

export default Friend;

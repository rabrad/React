import React from 'react';

const FriendProfile = props => {
  return (
    <div>
      <ul key={Math.random()} className="list">
        <li> Name: {`${props.first} ${props.last}`} </li>
        <li>From: {`${props.city}, ${props.country}`}</li>
        <li>Email: {props.email}</li>
        <li>Phone: {props.phone}</li>
      </ul>
    </div>
  );
};

export default FriendProfile;

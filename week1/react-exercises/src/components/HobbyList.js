import React from 'react';

function HobbyList(props) {
  return (
    <div className="hobbies-container">
      <h3 className="title">Hobbies List</h3>
      <ul className="hobbies">
        {props.hobbies.map(hobby => (
          <li key={hobby}> {hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default HobbyList;

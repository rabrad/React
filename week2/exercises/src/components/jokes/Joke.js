import React from 'react';

function Joke({ joke }) {
  return (
    <div className="main-container">
      <p>{joke.setup}</p>
      <hr />
      <p>{joke.punchline}</p>
    </div>
  );
}

export default Joke;

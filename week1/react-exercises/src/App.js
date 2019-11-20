import React from 'react';
import './App.css';
import HobbyList from './components/HobbyList';
import Guarantee from './components/Guarantee';
import Counter from './components/Counter';

import deliveryIcon from './assets/f-delivery.png';
import moneyIcon from './assets/coin.png';
import chatIcon from './assets/chat.png';

function App() {
  const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];

  return (
    <div>
      <p>
        <strong>Exercise 1:</strong> Extreme hobbies
      </p>
      <HobbyList hobbies={hobbies} />

      <p>
        <strong>Exercise 2:</strong> Perfect customer service!
      </p>
      <div className="guarantee-container">
        <Guarantee
          image={deliveryIcon}
          title="Free shipping"
          descriptions="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <Guarantee
          image={moneyIcon}
          title="100% Money back"
          descriptions="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
        <Guarantee
          image={chatIcon}
          title="Online support 24/7"
          descriptions="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        />
      </div>

      <p>
        <strong>Exercise 3:</strong> It's higher than 10!
      </p>
      <Counter />
    </div>
  );
}

export default App;

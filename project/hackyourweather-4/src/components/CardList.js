import React from 'react';
import CityCard from './CityCard';

function CardList(props) {
  return (
    <div>
      <ul className="card-list half-width">
        {props.cards.map(card => (
          <li key={card.id}>
            <CityCard
              handleRemoveClick={props.onRemove}
              cityName={card.name}
              countryCode={card.sys.country}
              id={card.id}
              main={card.weather[0].main}
              description={card.weather[0].description}
              maxTemp={card.main.temp_max}
              minTemp={card.main.temp_min}
              lat={card.coord.lat}
              lon={card.coord.lon}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CardList;

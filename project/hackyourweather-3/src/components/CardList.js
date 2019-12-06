import React from 'react';
import CityCard from './CityCard';

function CardList(props) {
  return (
    <ul className="card-list">
      {props.cards.map(card => (
        <li key={'city_card_' + card.id}>
          <CityCard
            handleRemoveClick={props.onRemove}
            id={card.id}
            cityName={card.name}
            countryCode={card.country}
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
  );
}
export default CardList;

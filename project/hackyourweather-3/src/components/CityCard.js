import React from 'react';
import CityName from './CityName';
import WeatherDesc from './WeatherDesc';
import WeatherDetails from './WeatherDetails';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function CityCard(props) {
  return (
    <div className="single-card-container">
      <div className="card-left">
        <CityName cityName={props.cityName} countryCode={props.countryCode} />
        <WeatherDesc main={props.main} description={props.description} />
        <WeatherDetails
          maxTemp={props.maxTemp}
          minTemp={props.minTemp}
          lat={props.lat}
          lon={props.lon}
        />
      </div>
      <div className="card-right" onClick={() => props.handelCardRemove(props.id)}>
        <HighlightOffIcon />
      </div>
    </div>
  );
}

export default CityCard;

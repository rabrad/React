import React from 'react';
import PostData from '../city-weather.json';

function WeatherPost() {
  return (
    <ul className="cards-container">
      {PostData.map(post => {
        return (
          <li key={post.id} className="single-card-container">
            <div className="city-name">
              {post.name}, {post.sys.country}
            </div>

            {post.weather.map(innerObject => {
              return (
                <div className="highlighted-info">
                  <h4>{innerObject.main}</h4>
                  <p>{innerObject.description}</p>
                </div>
              );
            })}

            <p className="rest-info"> min temp: {post.main.temp_min}</p>
            <p className="rest-info">max temp: {post.main.temp_max}</p>
            <p className="rest-info">
              Location: {post.coord.lat}, {post.coord.lon}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default WeatherPost;

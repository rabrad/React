import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Brush,
} from 'recharts';

function City() {
  const { CITY_ID } = useParams();
  const history = useHistory();

  const [hourlyForecast, setHourlyForecast] = useState({});
  const [chartData, setChartData] = useState([]);
  const [status, setStatus] = useState('loading');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchCityWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${CITY_ID}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
      );
      if (!res.ok) {
        throw new Error('Error while fetching data');
      }
      const data = await res.json();
      const { list } = data;
      console.log('LIST:===================', list);
      console.log('DATA:===================', data);

      setChartData(list);
      setHourlyForecast(data);
      setStatus('success');
    } catch (err) {
      if (err) {
        setStatus('error');
        setErrorMessage('Error while fetching data');
      }
    }
  };

  chartData.forEach(city => {
    const main_temp = { main_temp: city.main.temp };
    Object.assign(city, main_temp);
  });

  useEffect(() => {
    fetchCityWeather();
    return () => {
      fetchCityWeather();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="App">
        {status === 'success' && (
          <div>
            <section className="half-width">
              <h2 className="city-page-title">Hourly forecast of {hourlyForecast.city.name}</h2>
              <div className="single-card-container">
                <div className="card-left">
                  <h2>
                    {hourlyForecast.city.name}, {hourlyForecast.city.country}
                  </h2>
                  <div className="forecast-div">
                    <h3>{hourlyForecast.list[0].weather[0].main}</h3>
                    <div>{hourlyForecast.list[0].weather[0].description}</div>
                  </div>
                  <div>max temp: {hourlyForecast.list[0].main.temp_max} &deg;</div>
                  <div>min temp: {hourlyForecast.list[0].main.temp_min} &deg;</div>
                  <div>
                    location: {hourlyForecast.city.coord.lat.toFixed(2)},{' '}
                    {hourlyForecast.city.coord.lon.toFixed(2)}
                  </div>
                </div>
                <div className="card-right" onClick={() => history.push('/')}>
                  <HomeIcon />
                </div>
              </div>
            </section>

            <section className="chart-container">
              <h2 className="chart-header"> 5 day weather forecast</h2>
              <div className="chart">
                <ResponsiveContainer height={250}>
                  <AreaChart data={chartData} className="area-chart">
                    <defs>
                      <linearGradient id="main" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#eee" stopOpacity={1} />
                        <stop offset="95%" stopColor="#eee" stopOpacity={1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dt_txt" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="main_temp"
                      stroke="#888"
                      fill="#b2ccd4"
                      fillOpacity={0.4}
                    ></Area>
                    <Brush dataKey="dt_txt" height={30} stroke="#b4b4b4" fill="#b2ccd4" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </section>
          </div>
        )}

        {status === 'error' && (
          <p>{errorMessage || 'The city name is not correct. please try again.'} </p>
        )}
      </div>
    </div>
  );
}

export default City;

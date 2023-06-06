import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';


const SET_WEATHER = 'SET_WEATHER';


const setWeather = (weatherData) => ({
  type: SET_WEATHER,
  payload: weatherData
});


const initialState = {
  temperature: null,
  pressure: null,
  description: '',
  humidity: null,
  windSpeed: null,
  windDegree: null,
  icon: ''
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};


const fetchWeather = (city) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
      );
      const { main, weather, wind } = response.data;
      const weatherData = {
        temperature: main.temp,
        pressure: main.pressure,
        description: weather[0].description,
        humidity: main.humidity,
        windSpeed: wind.speed,
        windDegree: wind.deg,
        icon: weather[0].icon
      };
      dispatch(setWeather(weatherData));
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
};

const Weather = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather('Dnipro'));
  }, [dispatch]);

  return (
    <div>
      {weather.temperature && (
        <div>
          <h2>Weather in City</h2>
          <p>Temperature: {weather.temperature} °C</p>
          <p>Pressure: {weather.pressure} hPa</p>
          <p>Description: {weather.description}</p>
          <p>Humidity: {weather.humidity} %</p>
          <p>Wind Speed: {weather.windSpeed} m/s</p>
          <p>Wind Degree: {weather.windDegree}°</p>
          {weather.icon && (
            <img
              src={`http://openweathermap.org/img/w/${weather.icon}.png`}
              alt="Weather Icon"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Weather;
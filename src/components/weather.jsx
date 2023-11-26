import React from "react";

const Weather = (props) => (
  <div className="infoWeath">
    {props.city && (
      <div>
        <p>
          Location: {props.city}, {props.country}
        </p>
        <p>Temperature: {props.temp}</p>
        <p>Pressure: {props.pressure}</p>
        <p>Wind speed: {props.windSpeed}</p>
        <p>Weather condition: {props.weatherCondition}</p>
      </div>
    )}
    <p className="error">{props.error}</p>
  </div>
);

export default Weather;

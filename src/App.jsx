import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./components/weather";

const API_KEY = "ebf3e4c9cc26335b075fe3c737ac2fa3";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    pressure: undefined,
    windSpeed: undefined,
    error: undefined,
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();

      const timestampSunrise = data.sys.sunrise;
      const dateSunrise = new Date(timestampSunrise);
      const sunrise_time =
        dateSunrise.getHours() +
        ":" +
        dateSunrise.getMinutes() +
        ":" +
        dateSunrise.getSeconds();

      const timestampSunset = data.sys.sunrise;
      const dateSunset = new Date(timestampSunset);
      const sunset_time =
        dateSunset.getHours() +
        ":" +
        dateSunset.getMinutes() +
        ":" +
        dateSunset.getSeconds();

      this.setState({
        temp: data.main.temp,
        pressure: data.main.pressure,
        windSpeed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        sunrise: sunrise_time,
        sunset: sunset_time,
        error: undefined,
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        pressure: undefined,
        windSpeed: undefined,
        error: "Enter the name of the city",
      });
    }
  };

  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather
          temp={this.state.temp}
          pressure={this.state.pressure}
          windSpeed={this.state.windSpeed}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;

import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "ebf3e4c9cc26335b075fe3c737ac2fa3";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    weatherCondition: undefined,
    pressure: undefined,
    windSpeed: undefined,
    error: undefined,
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();

      this.setState({
        temp: data.main.temp,
        pressure: data.main.pressure,
        windSpeed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        weatherCondition: data.weather[0].description,
        error: undefined,
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        windSpeed: undefined,
        weatherCondition: undefined,
        error: "Enter the name of the city",
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="main">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <Form weatherMethod={this.gettingWeather} />
                <Weather
                  temp={this.state.temp}
                  pressure={this.state.pressure}
                  windSpeed={this.state.windSpeed}
                  city={this.state.city}
                  country={this.state.country}
                  weatherCondition={this.state.weatherCondition}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

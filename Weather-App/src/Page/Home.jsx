import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import ForeCastList from "../components/ForecastList/ForecastList";
import { fetchWeatherByCity, fetchWeatherByGeo } from "../utils/api.js";
import WeatherAnimation from "../components/WeatherAnimation/WeatherAnimation";
import "./Home.css";

const Home = () => {
  
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const handleSearch = async (city) => {
    const data = await fetchWeatherByCity(city);
    if (data) {
      setWeather(data.current);
      setForecast(data.forecast);
    }
  };

  const handleGeoSearch = async () => {
    const data = await fetchWeatherByGeo();
    if (data) {
      setWeather(data.current);
      setForecast(data.forecast);
    }
  };

  useEffect(() => {
    // Load default city on mount
    handleSearch("Addis Ababa");
  }, []);
  return (
    <div className="home-app">
      <WeatherAnimation weather={weather} />
      <div className="home-card">
        <Header />
        <SearchBar
          onSearch={() => fetchWeatherByCity()}
          onGeoSearch={() => handleGeoSearch()}
        />
        <WeatherCard weather={weather} />
        <ForeCastList forecast={forecast} />
      </div>
    </div>
  );
};

export default Home;

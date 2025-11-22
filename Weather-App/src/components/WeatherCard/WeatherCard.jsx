import { Droplets, Wind } from "lucide-react";
import "./WeatherCard.css";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const { name, sys, main, weather: w, wind } = weather;

  const icon = w[0]?.icon;
  const description = w[0]?.description;

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="weather-card fade-in">
      <div className="weather-main">
        <img src={iconUrl} alt={description} className="weather-icon" />

        <div className="temp-section">
          <h2 className="temp">{Math.round(main.temp)}°</h2>
          <p className="condition">{description}</p>
          <p className="location">
            {name}, {sys.country}
          </p>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <Droplets size={18} />
          <span>Humidity: {main.humidity}%</span>
        </div>

        <div className="detail-item">
          <Wind size={18} />
          <span>Wind: {wind.speed} m/s</span>
        </div>

        <div className="detail-item">
          <span>Min: {Math.round(main.temp_min)}°</span>
        </div>

        <div className="detail-item">
          <span>Max: {Math.round(main.temp_max)}°</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

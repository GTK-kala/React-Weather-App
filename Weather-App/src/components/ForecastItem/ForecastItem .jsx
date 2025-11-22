import "./ForecastItem .css";

const ForecastItem = ({ data }) => {
  if (!data) return null;

  const date = new Date(data.dt * 1000);
  const day = date.toLocaleDateString(undefined, { weekday: "short" });
  const tempMin = Math.round(data.temp.min || data.temp);
  const tempMax = Math.round(data.temp.max || data.temp);
  const icon = data.weather?.[0]?.icon;
  const description = data.weather?.[0]?.description || "";

  return (
    <div className="forecast-item fade-in">
      <p className="forecast-day">{day}</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
        className="forecast-icon"
      />
      <p className="forecast-temp">
        {tempMax}° / {tempMin}°
      </p>
    </div>
  );
};

export default ForecastItem

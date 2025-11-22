import ForecastItem from "../ForecastItem/ForecastItem ";
import "./ForecastList.css";

const ForecastList = ({ forecast }) => {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="forecast-container">
      <h3 className="forecast-title">Next 5 Days</h3>

      <div className="forecast-list">
        {forecast.map((item, index) => (
          <ForecastItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ForecastList

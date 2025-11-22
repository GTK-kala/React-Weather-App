import "./WeatherAnimation.css";

const WeatherAnimation = ({ weather }) => {
  if (!weather) return null;

  const condition = weather.weather?.[0]?.main?.toLowerCase();

  return (
    <div className="weather-animation-container">
      {condition.includes("clear") && <div className="sunshine"></div>}

      {condition.includes("cloud") && (
        <>
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
        </>
      )}

      {condition.includes("rain") && <div className="rain"></div>}

      {condition.includes("snow") && <div className="snow"></div>}

      {condition.includes("fog") || condition.includes("mist") ? (
        <div className="fog"></div>
      ) : null}
    </div>
  );
};

export default WeatherAnimation

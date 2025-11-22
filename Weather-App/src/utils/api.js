const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";

// Fetch weather by city name
export const fetchWeatherByCity = async (city) => {
  try {
    // 1️⃣ Current weather
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const data = await res.json();
    if (!data.coord) return null;

    const { lat, lon } = data.coord;

    // 2️⃣ Forecast using One Call API
    const forecastRes = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}`
    );
    const forecastData = await forecastRes.json();

    return {
      current: data,                  // for WeatherCard
      forecast: forecastData.daily.slice(0, 5), // for ForecastList
    };
  } catch (error) {
    console.error("Error fetching weather by city:", error);
    return null;
  }
};

// Fetch weather using geolocation
export const fetchWeatherByGeo = async () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) return reject("Geolocation not supported");

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        );
        const data = await res.json();

        const forecastRes = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}`
        );
        const forecastData = await forecastRes.json();

        resolve({
          current: data,
          forecast: forecastData.daily.slice(0, 5),
        });
      } catch (error) {
        console.error("Error fetching weather by geo:", error);
        resolve(null);
      }
    });
  });
};

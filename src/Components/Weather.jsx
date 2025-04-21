import { useEffect, useRef , useState} from 'react'
import search_icon from '../assets/Assets/search.png'
import clear_icon from '../assets/Assets/clear.png'
import cloud_icon from '../assets/Assets/cloud.png'
import drizzle_icon from '../assets/Assets/drizzle.png'
import humidity_icon from '../assets/Assets/humidity.png'
import rain_icon from '../assets/Assets/rain.png'
import snow_icon from '../assets/Assets/snow.png'
import wind_icon from '../assets/Assets/wind.png'
import './Weather.css'

const Weather = () => {
   
  const searchInputRef = useRef(null);
   
  const[weatherData, setWeatherData] = useState(false);
    
  const allIcons = {
        "0ld": clear_icon,
        "o1n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "013d": snow_icon,
        "013n": snow_icon,
     }
   
    
   const search = async (city) =>{
     if(city === ""){
        alert("Please enter a city name");
     }
         try {
           const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
               
           const response = await fetch(url);
           const data = await response.json();
             
           console.log(data);
            const icon = allIcons[data.weather[0].icon] || clear_icon;
           setWeatherData({
                humidity : data.main.humidity,
                windSpeed : data.wind.speed,
                temprature : Math.floor(data.main.temp) + "°C",
                location : data.name,
                icon : icon
           }) 

         }catch (error) {
            console.log("Error fetching weather data:", error);
         }
         searchInputRef.current.value = "";
   }
   useEffect(() => {
      search("Arba minch") // Default city to fetch weather data for
   },[])
  return (
    <div className='weather'>
       <div className="search-bar">
          <input type="text" placeholder='Search for a city' className='search-input' ref={searchInputRef} />
         <img src={search_icon} alt="Search Image" onClick={() =>{
            search(searchInputRef.current.value);
         }}/>
       </div>
        <img src={weatherData.icon} alt="" className='weather-icon'/>
       <p className='temprature'>{weatherData.temprature}</p>
        <p className='location'>{weatherData.location}</p>
        <div className="weather-data">
           <div className="col" id='col1'>
            <img src={humidity_icon} alt="Humidity Image" className='Humidity'/>
            <div>
                <p className='data'>{weatherData.humidity}</p>
                <span className='data-value'>Humidity</span>
            </div>
           </div>
           <div className="col" id='col2'>
            <img src={wind_icon} alt="Wind Image"/>
            <div>
                <p className='data'>{weatherData.windSpeed} Km/hr</p>
                <span className='data-value'>Wind Speed</span>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Weather

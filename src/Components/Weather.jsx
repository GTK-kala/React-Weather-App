 import { useRef } from 'react'
import './Weather.css'

import search_icon from '../assets/Assets/search.png'
import clear_icon from '../assets/Assets/clear.png'
// import cloud_icon from '../assets/Assets/cloud.png'
// import drizzle_icon from '../assets/Assets/drizzle.png'
import humidity_icon from '../assets/Assets/humidity.png'
// import rain_icon from '../assets/Assets/rain.png'
// import snow_icon from '../assets/Assets/snow.png'
import wind_icon from '../assets/Assets/wind.png'
import { useEffect } from 'react'

const Weather = (city) => {
  const searchInputRef = useRef(null);
    
    // const city = searchInputRef.current.value.trim();
    
   const search = async () =>{
         try {
           const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}`;
               
           const response = await fetch(url);
           const data = await response.json();
            
           console.log(data);
         }catch (error) {
            console.log("Error fetching weather data:", error);
         }
   }
   useEffect(() =>{
          search("London");
   },[])
  return (
    <div className='weather'>
       <div className="search-bar">
          <input type="text" placeholder='Search for a city' className='search-input' ref={searchInputRef} />
         <img src={search_icon} alt="Search Image" onClick={() =>{
            search()
         }}/>
       </div>
        <img src={clear_icon} alt="" className='weather-icon'/>
       <p className='temprature'>16</p>
        <p className='location'>London</p>
        <div className="weather-data">
           <div className="col">
            <img src={humidity_icon} alt="Humidity Image"/>
            <div>
                <p className='data'>90 %</p>
                <span className='data-value'>Humidity</span>
            </div>
           </div>
           <div className="col">
            <img src={wind_icon} alt="Wind Image"/>
            <div>
                <p className='data'>3.6 km/hr</p>
                <span className='data-value'>Wind Speed</span>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Weather

import './Weather.css'

import search_icon from '../assets/Assets/search.png'
import clear_icon from '../assets/Assets/clear.png'
// import cloud_icon from '../assets/Assets/cloud.png'
// import drizzle_icon from '../assets/Assets/drizzle.png'
// import humidity_icon from '../assets/Assets/humidity.png'
// import rain_icon from '../assets/Assets/rain.png'
// import snow_icon from '../assets/Assets/snow.png'
// import wind_icon from '../assets/Assets/wind.png'

const Weather = () => {
  return (
    <div className='weather'>
       <div className="search-bar">
          <input type="text" placeholder='Search for a city' className='search-input' />
         <img src={search_icon} alt="Search Image" />
       </div>
        <img src={clear_icon} alt="" className='weather-icon'/>
        <p>16</p>
        <p>London</p>
    </div>
  )
}

export default Weather

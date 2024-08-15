import React from 'react';
import AirQuality1 from './AirQuality1.png';
import HealthRecommendations1 from './HealthRecommendations1.png';
import './CurrentConditions.css';

function CurrentConditions() {
  return (
    <div className="endpoint">
      <h2>Current Conditions</h2>
      <h4 id='description'>
        Receive current real-time data on air quality for a specified location. 
      </h4>
     

      <div className='aqi'>
        <h3> Air Quality Index</h3>
        <div className="airquality-images-container">
          <img src={AirQuality1} className="airquality-image" alt="Air Quality 1"/>
          <h3 id='location'>Include a location in your request. Locations can be cities, states, countries, or continents.</h3>
        </div>
      </div>

      <div className='healthrecommendations'>
        <h3> Health Recommendations</h3>
        <div className="healthrecommendations-images-container">
          
          <div className='leftsidehealth'>
          <h3 id='healthdescription'>
            
          <h1 id='groups'>Get health recommendations for various groups.</h1>
        <li>General</li>
        <li>Children</li>
        <li>Athletes</li>
        <li>Pregnant Women</li>
        <li>Lung Disease</li>
        <li>Heart Disease</li>
            
            </h3>
            </div>
            <img src={HealthRecommendations1} className="healthrecommendations-image" />
        </div>
       
      </div>

      <div className='dominantpollutant'>
        <h3> Dominant Pollutants</h3>
      </div>
    </div>
  );
}

export default CurrentConditions;
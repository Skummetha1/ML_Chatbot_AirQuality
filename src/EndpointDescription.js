import React from 'react';
import './EndpointDescription.css';
import heatmapImage1 from './HEATMAP.png'; // Adjust the path to your image file
import heatmapImage2 from './heatmap_US_AQI_2_3_2.png'; // Adjust the path to your image file
import heatmapImage3 from './heatmap_US_AQI_1_0_0.png'; // Adjust the path to your image file

function EndpointDescription() {
  return (
    <div className="endpoint-description">
      <div className="endpoint">
        <h1>Current Conditions</h1>
        <p>Receive real-time data on air quality for a specified location. The data includes: Air Quality Index (AQI), Health recommendations based on current conditions, and the dominant pollutant in an area.</p>
      </div>
      
      <div className="endpoint">
        <h1>Heatmaps</h1>
        <p>Request air quality heatmaps to see the levels of pollutants in different continents or the world.</p>
        <div className="heatmap-images-container">
          <img src={heatmapImage1} alt="Heatmap Example 1" className="heatmap-image" />
          <img src={heatmapImage2} alt="Heatmap Example 2" className="heatmap-image" />
          <img src={heatmapImage3} alt="Heatmap Example 3" className="heatmap-image" />
        </div>
      </div>
      
      <div className="endpoint">
        <h1>History</h1>
        <p>Analyze historical air quality data for a specific location at a selected time, with a maximum range of thirty days. This data includes: Air Quality Index (AQI) and the dominant pollutant in an area.</p>
      </div>
    </div>
  );
}

export default EndpointDescription;
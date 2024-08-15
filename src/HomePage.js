import React from 'react';
import { Link } from 'react-router-dom';
import Map from './Map';
import './HomePage.css'; 
import CurrentConditions from './CurrentConditions';
import Heatmaps from './Heatmaps';

function HomePage() {
  return (
    <div className="homepage">
     
      <Map />
      <div className="content">
        <h1>Stay informed about Air Quality with PurifAI</h1>
        <Link to="/chat" className="cta-button">Check Air Quality Now</Link>
      </div>
      
      <CurrentConditions />
      <Heatmaps />

      
      
    </div>
  );
}

export default HomePage;
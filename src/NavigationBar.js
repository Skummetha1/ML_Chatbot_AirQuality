import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'; 

function NavigationBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <Link to="/">PurifAI</Link>
      </div>
      <div className="nav-links">
        <Link to="/chat">Start Chatting</Link>

      </div>
    </nav>
  );
}

export default NavigationBar;



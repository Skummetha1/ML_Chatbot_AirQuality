import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import HomePage from './HomePage';
import ChatPage from './ChatPage';
import './App.css'; 

function App() {
  return (
    <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      
    </Router>
  );
}

export default App;



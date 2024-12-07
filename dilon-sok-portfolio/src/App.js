import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import HomePage from './pages/Home.js';
function App() {
  return (
    <Router>
      <Navbar/>
      <div className='content-spacer'></div>
      <Routes>
        <Route exact path="/" Component={HomePage}/>
        <Route exact path="/Home" Component={HomePage}/>
      </Routes>
    </Router>
    
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PlayerProfile from './pages/PlayerProfile';
import TeamStats from './pages/TeamStats';
import Search from './pages/Search';
import Comparison from './pages/Comparison';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player/:id" element={<PlayerProfile />} />
          <Route path="/team/:id" element={<TeamStats />} />
          <Route path="/search" element={<Search />} />
          <Route path="/compare" element={<Comparison />} />
        </Routes>
      </main>
      <div className="figma-prototype-indicator">
        <div className="prototype-badge">Figma Prototype</div>
        <div className="screen-dimensions">1440 x 900</div>
      </div>
    </div>
  );
}

export default App;

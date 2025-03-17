import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PlayerProfile from './pages/PlayerProfile';
import TeamStats from './pages/TeamStats';
import Search from './pages/Search';
import ComparisonTool from './pages/ComparisonTool';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const navigateToPage = (page, data = null) => {
    setCurrentPage(page);
    if (page === 'player' && data) {
      setSelectedPlayer(data);
    } else if (page === 'team' && data) {
      setSelectedTeam(data);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigateToPage={navigateToPage} />;
      case 'player':
        return <PlayerProfile player={selectedPlayer} navigateToPage={navigateToPage} />;
      case 'team':
        return <TeamStats team={selectedTeam} navigateToPage={navigateToPage} />;
      case 'search':
        return <Search navigateToPage={navigateToPage} />;
      case 'comparison':
        return <ComparisonTool navigateToPage={navigateToPage} />;
      default:
        return <Home navigateToPage={navigateToPage} />;
    }
  };

  return (
    <div className="app-container">
      <Header navigateToPage={navigateToPage} currentPage={currentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;

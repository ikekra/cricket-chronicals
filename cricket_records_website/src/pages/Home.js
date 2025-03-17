import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import PlayerCard from '../components/PlayerCard';
import TeamCard from '../components/TeamCard';
import RecordCard from '../components/RecordCard';

// Importing dummy data
import { dummyPlayers, dummyTeams, dummyRecords } from '../utils/dummyData';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Cricket Records & Statistics</h1>
          <p className="hero-subtitle">Explore comprehensive cricket statistics, player profiles, and historic records</p>
          <SearchBar />
        </div>
      </section>
      
      <section className="trending-section">
        <div className="section-header">
          <h2>Trending Records</h2>
          <Link to="/search" className="view-all-link">
            View All <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
        
        <div className="records-grid">
          {dummyRecords.slice(0, 3).map(record => (
            <RecordCard key={record.id} record={record} />
          ))}
        </div>
      </section>
      
      <section className="featured-section">
        <div className="featured-players">
          <div className="section-header">
            <h2>Featured Players</h2>
            <Link to="/search?type=player" className="view-all-link">
              View All <i className="fas fa-chevron-right"></i>
            </Link>
          </div>
          
          <div className="players-grid">
            {dummyPlayers.slice(0, 4).map(player => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="teams-section">
        <div className="section-header">
          <h2>Top Teams</h2>
          <Link to="/search?type=team" className="view-all-link">
            View All <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
        
        <div className="teams-grid">
          {dummyTeams.slice(0, 3).map(team => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </section>
      
      <section className="features-section">
        <h2>Explore Cricket Data Like Never Before</h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>In-depth Statistics</h3>
            <p>Detailed player and team statistics with interactive visualizations</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-history"></i>
            </div>
            <h3>Historic Records</h3>
            <p>Browse through cricket's most impressive records and milestones</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-exchange-alt"></i>
            </div>
            <h3>Player Comparisons</h3>
            <p>Compare players side by side with our advanced comparison tool</p>
            <Link to="/compare" className="feature-link">Try it now</Link>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>Advanced Search</h3>
            <p>Find exactly what you're looking for with powerful filters</p>
            <Link to="/search" className="feature-link">Start searching</Link>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .home-page {
          padding-bottom: var(--space-xxl);
        }
        
        .hero-section {
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: white;
          padding: var(--space-xxl) var(--space-lg);
          border-radius: var(--border-radius-lg);
          margin-bottom: var(--space-xl);
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 40%;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M50 0A50 50 0 1 1 0 50 50 50 0 0 1 50 0z' fill='rgba(255, 255, 255, 0.1)'/%3E%3Cpath d='M50 10A40 40 0 1 1 10 50 40 40 0 0 1 50 10z' fill='rgba(255, 255, 255, 0.1)'/%3E%3Cpath d='M85 50A35 35 0 1 1 15 50 35 35 0 0 1 85 50z' stroke='rgba(255, 255, 255, 0.2)' stroke-width='2' fill='none'/%3E%3Cpath d='M50 15a35 35 0 0 1 0 70V15z' fill='rgba(255, 255, 255, 0.05)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 120px;
          opacity: 0.3;
        }
        
        .hero-content {
          max-width: 700px;
          position: relative;
          z-index: 1;
        }
        
        .hero-content h1 {
          font-size: 2.8rem;
          margin-bottom: var(--space-md);
          font-weight: 800;
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
          margin-bottom: var(--space-lg);
          opacity: 0.9;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-lg);
        }
        
        .view-all-link {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
          color: var(--primary-color);
          font-weight: var(--font-medium);
          transition: color var(--transition-speed) ease;
        }
        
        .view-all-link:hover {
          color: var(--secondary-color);
        }
        
        .view-all-link i {
          font-size: 0.8rem;
        }
        
        .trending-section, 
        .featured-section,
        .teams-section {
          margin-bottom: var(--space-xxl);
        }
        
        .records-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: var(--space-lg);
        }
        
        .players-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: var(--space-lg);
        }
        
        .teams-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: var(--space-lg);
        }
        
        .features-section {
          background-color: var(--background-light);
          padding: var(--space-xl) var(--space-lg);
          border-radius: var(--border-radius-lg);
        }
        
        .features-section h2 {
          text-align: center;
          margin-bottom: var(--space-xl);
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: var(--space-lg);
        }
        
        .feature-card {
          background-color: var(--background-white);
          padding: var(--space-lg);
          border-radius: var(--border-radius-md);
          box-shadow: var(--box-shadow);
          text-align: center;
          transition: transform var(--transition-speed) ease,
                      box-shadow var(--transition-speed) ease;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        
        .feature-icon {
          background-color: var(--primary-color);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto var(--space-md);
          font-size: 1.5rem;
        }
        
        .feature-card h3 {
          margin-bottom: var(--space-sm);
        }
        
        .feature-card p {
          color: var(--text-secondary);
          margin-bottom: var(--space-md);
          font-size: 0.95rem;
        }
        
        .feature-link {
          display: inline-block;
          color: var(--primary-color);
          font-weight: var(--font-medium);
        }
        
        .feature-link:hover {
          color: var(--secondary-color);
        }
        
        @media (max-width: 992px) {
          .hero-content h1 {
            font-size: 2.3rem;
          }
        }
        
        @media (max-width: 768px) {
          .hero-section {
            padding: var(--space-xl) var(--space-md);
          }
          
          .hero-content h1 {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .records-grid,
          .players-grid,
          .teams-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
        }
        
        @media (max-width: 576px) {
          .records-grid,
          .players-grid,
          .teams-grid,
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;

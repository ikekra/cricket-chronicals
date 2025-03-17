import React from 'react';
import { Link } from 'react-router-dom';

const PlayerCard = ({ player }) => {
  // Determine player image - using a placeholder path with initial
  const playerInitial = player.name.charAt(0).toUpperCase();
  
  return (
    <Link to={`/player/${player.id}`} className="player-card-link">
      <div className="player-card">
        <div className="player-image-container">
          <div className="player-image-placeholder">
            <span>{playerInitial}</span>
          </div>
          <div className="player-country-flag">
            <img 
              src={`https://www.countryflags.io/${player.countryCode}/flat/24.svg`} 
              alt={player.country}
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
        
        <div className="player-info">
          <h3 className="player-name">{player.name}</h3>
          <p className="player-role">{player.role}</p>
          
          <div className="player-stats">
            <div className="stat-item">
              <span className="stat-value">{player.matches}</span>
              <span className="stat-label">Matches</span>
            </div>
            
            {player.role === 'Batsman' || player.role === 'All-rounder' ? (
              <div className="stat-item">
                <span className="stat-value">{player.runs}</span>
                <span className="stat-label">Runs</span>
              </div>
            ) : null}
            
            {player.role === 'Bowler' || player.role === 'All-rounder' ? (
              <div className="stat-item">
                <span className="stat-value">{player.wickets}</span>
                <span className="stat-label">Wickets</span>
              </div>
            ) : null}
            
            <div className="stat-item">
              <span className="stat-value">{player.avg}</span>
              <span className="stat-label">
                {player.role === 'Batsman' ? 'Batting Avg' : 
                 player.role === 'Bowler' ? 'Bowling Avg' : 'Avg'}
              </span>
            </div>
          </div>
        </div>
        
        <div className="card-footer">
          <span className="view-profile">View Profile</span>
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
      
      <style jsx>{`
        .player-card-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }
        
        .player-card {
          background-color: var(--background-white);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--box-shadow);
          transition: transform var(--transition-speed) ease,
                      box-shadow var(--transition-speed) ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .player-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 20px rgba(0,0,0,0.1);
        }
        
        .player-image-container {
          position: relative;
          padding-top: 100%;
          background-color: var(--background-light);
        }
        
        .player-image-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--primary-color);
          color: white;
          font-size: 4rem;
          font-weight: bold;
        }
        
        .player-country-flag {
          position: absolute;
          bottom: var(--space-md);
          right: var(--space-md);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        
        .player-info {
          padding: var(--space-lg);
          flex-grow: 1;
        }
        
        .player-name {
          font-size: 1.25rem;
          margin-bottom: var(--space-xs);
          color: var(--text-primary);
        }
        
        .player-role {
          color: var(--text-secondary);
          margin-bottom: var(--space-md);
          font-size: 0.9rem;
        }
        
        .player-stats {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: var(--space-sm);
        }
        
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 60px;
        }
        
        .stat-value {
          font-weight: var(--font-bold);
          font-size: 1.2rem;
          color: var(--primary-color);
        }
        
        .stat-label {
          font-size: 0.75rem;
          color: var(--text-light);
          text-align: center;
        }
        
        .card-footer {
          border-top: 1px solid var(--border-color);
          padding: var(--space-md);
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: var(--background-light);
          color: var(--primary-color);
          font-weight: var(--font-medium);
          transition: background-color var(--transition-speed) ease;
        }
        
        .player-card:hover .card-footer {
          background-color: var(--primary-color);
          color: white;
        }
        
        @media (max-width: 576px) {
          .player-stats {
            justify-content: flex-start;
            gap: var(--space-lg);
          }
        }
      `}</style>
    </Link>
  );
};

export default PlayerCard;

import React from 'react';
import { Link } from 'react-router-dom';

const TeamCard = ({ team }) => {
  return (
    <Link to={`/team/${team.id}`} className="team-card-link">
      <div className="team-card">
        <div className="team-header">
          <div className="team-flag">
            <div className="flag-placeholder" style={{ backgroundColor: team.color || '#0066cc' }}>
              {team.code}
            </div>
          </div>
          <div className="team-info">
            <h3 className="team-name">{team.name}</h3>
            <p className="team-ranking">
              <span className="ranking-label">ICC Ranking:</span>
              <span className="ranking-value">
                <span className="ranking-number">{team.ranking}</span>
                <span className="ranking-format">{team.format}</span>
              </span>
            </p>
          </div>
        </div>
        
        <div className="team-stats">
          <div className="stat-row">
            <div className="stat-item">
              <span className="stat-value">{team.matches}</span>
              <span className="stat-label">Matches</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{team.wins}</span>
              <span className="stat-label">Wins</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{team.losses}</span>
              <span className="stat-label">Losses</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{team.draws}</span>
              <span className="stat-label">Draws</span>
            </div>
          </div>
          
          <div className="win-ratio-container">
            <span className="win-ratio-label">Win Ratio</span>
            <div className="win-ratio-bar">
              <div 
                className="win-ratio-fill" 
                style={{ width: `${(team.wins / team.matches) * 100}%` }}
              ></div>
            </div>
            <span className="win-ratio-value">{((team.wins / team.matches) * 100).toFixed(1)}%</span>
          </div>
        </div>
        
        <div className="team-recent-form">
          <span className="recent-form-label">Recent Form:</span>
          <div className="form-bubbles">
            {team.recentForm.map((result, index) => (
              <div 
                key={index} 
                className={`form-bubble ${result === 'W' ? 'win' : result === 'L' ? 'loss' : 'draw'}`}
                title={result === 'W' ? 'Win' : result === 'L' ? 'Loss' : 'Draw'}
              >
                {result}
              </div>
            ))}
          </div>
        </div>
        
        <div className="card-footer">
          <span className="view-team-stats">View Team Stats</span>
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
      
      <style jsx>{`
        .team-card-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }
        
        .team-card {
          background-color: var(--background-white);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--box-shadow);
          transition: transform var(--transition-speed) ease,
                      box-shadow var(--transition-speed) ease;
        }
        
        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 20px rgba(0,0,0,0.1);
        }
        
        .team-header {
          display: flex;
          align-items: center;
          padding: var(--space-md);
          gap: var(--space-md);
          border-bottom: 1px solid var(--border-color);
        }
        
        .team-flag {
          width: 60px;
          height: 40px;
          border-radius: var(--border-radius-sm);
          overflow: hidden;
          flex-shrink: 0;
        }
        
        .flag-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-weight: var(--font-bold);
          font-size: 1.2rem;
        }
        
        .team-info {
          flex: 1;
        }
        
        .team-name {
          margin-bottom: var(--space-xs);
          font-size: 1.2rem;
        }
        
        .team-ranking {
          display: flex;
          align-items: center;
          font-size: 0.9rem;
          gap: var(--space-sm);
        }
        
        .ranking-label {
          color: var(--text-secondary);
        }
        
        .ranking-value {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .ranking-number {
          font-weight: var(--font-bold);
          color: var(--primary-color);
        }
        
        .ranking-format {
          color: var(--text-light);
          font-size: 0.8rem;
        }
        
        .team-stats {
          padding: var(--space-md);
        }
        
        .stat-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: var(--space-md);
        }
        
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .stat-value {
          font-weight: var(--font-bold);
          color: var(--text-primary);
          font-size: 1.1rem;
        }
        
        .stat-label {
          color: var(--text-light);
          font-size: 0.8rem;
        }
        
        .win-ratio-container {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
        }
        
        .win-ratio-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        
        .win-ratio-bar {
          height: 8px;
          background-color: var(--background-light);
          border-radius: 4px;
          overflow: hidden;
        }
        
        .win-ratio-fill {
          height: 100%;
          background-color: var(--success-color);
          border-radius: 4px;
        }
        
        .win-ratio-value {
          align-self: flex-end;
          font-size: 0.9rem;
          font-weight: var(--font-medium);
        }
        
        .team-recent-form {
          padding: 0 var(--space-md) var(--space-md);
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }
        
        .recent-form-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          white-space: nowrap;
        }
        
        .form-bubbles {
          display: flex;
          gap: var(--space-xs);
        }
        
        .form-bubble {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.8rem;
          font-weight: var(--font-bold);
          color: white;
        }
        
        .form-bubble.win {
          background-color: var(--success-color);
        }
        
        .form-bubble.loss {
          background-color: var(--danger-color);
        }
        
        .form-bubble.draw {
          background-color: var(--warning-color);
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
        
        .team-card:hover .card-footer {
          background-color: var(--primary-color);
          color: white;
        }
        
        @media (max-width: 576px) {
          .team-recent-form {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-sm);
          }
        }
      `}</style>
    </Link>
  );
};

export default TeamCard;

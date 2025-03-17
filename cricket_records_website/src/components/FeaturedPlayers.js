import React from 'react';

function FeaturedPlayers({ navigateToPage }) {
  // For the UI prototype, we'll use static data for featured players
  const featuredPlayers = [
    {
      id: 'virat-kohli',
      name: 'Virat Kohli',
      country: 'India',
      role: 'Batsman',
      recentForm: 'Excellent',
      stats: {
        matches: 500,
        runs: 25000,
        average: 53.5,
        centuries: 74
      },
      highlight: 'Fastest to 10,000 ODI runs'
    },
    {
      id: 'joe-root',
      name: 'Joe Root',
      country: 'England',
      role: 'Batsman',
      recentForm: 'Good',
      stats: {
        matches: 330,
        runs: 18000,
        average: 49.2,
        centuries: 30
      },
      highlight: '10,000+ Test runs'
    },
    {
      id: 'pat-cummins',
      name: 'Pat Cummins',
      country: 'Australia',
      role: 'Bowler',
      recentForm: 'Excellent',
      stats: {
        matches: 200,
        wickets: 450,
        average: 22.5,
        economy: 3.2
      },
      highlight: 'Top-ranked Test bowler'
    },
    {
      id: 'jasprit-bumrah',
      name: 'Jasprit Bumrah',
      country: 'India',
      role: 'Bowler',
      recentForm: 'Good',
      stats: {
        matches: 180,
        wickets: 350,
        average: 21.8,
        economy: 4.5
      },
      highlight: 'Yorker specialist'
    }
  ];

  return (
    <div className="featured-players">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
        {featuredPlayers.map(player => (
          <div 
            key={player.id} 
            className="player-card"
            onClick={() => navigateToPage('player', { id: player.id, name: player.name })}
          >
            <div className="player-header">
              <div className="player-avatar">
                <div className="avatar-placeholder">{player.name.charAt(0)}</div>
              </div>
              <div className="player-basic-info">
                <h3>{player.name}</h3>
                <div className="player-meta">
                  <span className="player-country">{player.country}</span>
                  <span className="role-badge">{player.role}</span>
                </div>
              </div>
            </div>
            
            <div className="player-stats">
              {player.role === 'Batsman' ? (
                <>
                  <div className="stat-item">
                    <div className="stat-value">{player.stats.runs.toLocaleString()}</div>
                    <div className="stat-label">Runs</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">{player.stats.average}</div>
                    <div className="stat-label">Average</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">{player.stats.centuries}</div>
                    <div className="stat-label">100s</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="stat-item">
                    <div className="stat-value">{player.stats.wickets}</div>
                    <div className="stat-label">Wickets</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">{player.stats.average}</div>
                    <div className="stat-label">Average</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">{player.stats.economy}</div>
                    <div className="stat-label">Economy</div>
                  </div>
                </>
              )}
            </div>
            
            <div className="player-highlight">
              <i data-feather="award"></i>
              <span>{player.highlight}</span>
            </div>
            
            <div className="player-form">
              <div className="form-label">Recent Form:</div>
              <div className={`form-indicator ${player.recentForm.toLowerCase()}`}>
                {player.recentForm}
              </div>
            </div>
            
            <button className="btn btn-outline view-profile">
              <i data-feather="user"></i> View Full Profile
            </button>
          </div>
        ))}
      </div>
      
      <div className="view-all-players">
        <button className="btn btn-outline" onClick={() => navigateToPage('search', { filter: 'players' })}>
          <i data-feather="users"></i> View All Players
        </button>
      </div>
      
      <style jsx>{`
        .featured-players {
          margin-bottom: var(--spacing-xl);
        }
        
        .player-card {
          background-color: white;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          padding: var(--spacing-lg);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          transition: all 0.2s ease;
          cursor: pointer;
        }
        
        .player-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        
        .player-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }
        
        .player-avatar {
          flex-shrink: 0;
        }
        
        .avatar-placeholder {
          width: 50px;
          height: 50px;
          background-color: var(--primary-color);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 600;
        }
        
        .player-basic-info {
          flex: 1;
        }
        
        .player-basic-info h3 {
          margin: 0 0 var(--spacing-xs) 0;
          font-size: 1.1rem;
        }
        
        .player-meta {
          display: flex;
          gap: var(--spacing-sm);
          align-items: center;
          font-size: 0.85rem;
        }
        
        .player-country {
          color: var(--neutral-600);
        }
        
        .role-badge {
          background-color: var(--primary-light);
          color: var(--primary-dark);
          padding: 2px 8px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 500;
        }
        
        .player-stats {
          display: flex;
          justify-content: space-between;
          padding: var(--spacing-md) 0;
          border-top: 1px solid var(--neutral-200);
          border-bottom: 1px solid var(--neutral-200);
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--neutral-800);
        }
        
        .stat-label {
          font-size: 0.8rem;
          color: var(--neutral-500);
        }
        
        .player-highlight {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          color: var(--secondary-dark);
          font-size: 0.9rem;
        }
        
        .player-form {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .form-label {
          font-size: 0.9rem;
          color: var(--neutral-600);
        }
        
        .form-indicator {
          font-size: 0.85rem;
          font-weight: 500;
          padding: 2px 8px;
          border-radius: var(--radius-full);
        }
        
        .form-indicator.excellent {
          background-color: var(--secondary-light);
          color: var(--secondary-dark);
        }
        
        .form-indicator.good {
          background-color: rgba(245, 158, 11, 0.2);
          color: rgba(245, 158, 11, 1);
        }
        
        .form-indicator.moderate {
          background-color: rgba(239, 68, 68, 0.2);
          color: rgba(239, 68, 68, 1);
        }
        
        .view-profile {
          margin-top: var(--spacing-xs);
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-sm);
        }
        
        .view-all-players {
          display: flex;
          justify-content: center;
          margin-top: var(--spacing-xl);
        }
        
        @media (max-width: 480px) {
          .player-stats {
            flex-wrap: wrap;
            gap: var(--spacing-md);
          }
          
          .stat-item {
            flex: 1;
            min-width: 33%;
          }
        }
      `}</style>
    </div>
  );
}

export default FeaturedPlayers;

import React from 'react';

function FeaturedTeams({ navigateToPage }) {
  // For the UI prototype, we'll use static data for featured teams
  const featuredTeams = [
    {
      id: 'india',
      name: 'India',
      ranking: {
        test: 1,
        odi: 2,
        t20: 3
      },
      recentForm: 'WWLWW',
      winPercentage: 67,
      trophies: 5,
      captain: 'Rohit Sharma',
      highlight: 'Won 2011 Cricket World Cup'
    },
    {
      id: 'australia',
      name: 'Australia',
      ranking: {
        test: 2,
        odi: 1,
        t20: 4
      },
      recentForm: 'WWWLW',
      winPercentage: 72,
      trophies: 8,
      captain: 'Pat Cummins',
      highlight: 'Most World Cup wins (5)'
    },
    {
      id: 'england',
      name: 'England',
      ranking: {
        test: 3,
        odi: 3,
        t20: 1
      },
      recentForm: 'LWWLW',
      winPercentage: 64,
      trophies: 3,
      captain: 'Jos Buttler',
      highlight: 'Current ODI & T20 World Champions'
    }
  ];

  return (
    <div className="featured-teams">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {featuredTeams.map(team => (
          <div 
            key={team.id} 
            className="team-card"
            onClick={() => navigateToPage('team', { id: team.id, name: team.name })}
          >
            <div className="team-header">
              <div className="team-flag">
                <div className="flag-placeholder">{team.name.charAt(0)}</div>
              </div>
              <h3>{team.name}</h3>
            </div>
            
            <div className="team-rankings">
              <div className="ranking-item">
                <div className="format">Test</div>
                <div className="rank">#{team.ranking.test}</div>
              </div>
              <div className="ranking-item">
                <div className="format">ODI</div>
                <div className="rank">#{team.ranking.odi}</div>
              </div>
              <div className="ranking-item">
                <div className="format">T20I</div>
                <div className="rank">#{team.ranking.t20}</div>
              </div>
            </div>
            
            <div className="team-stats">
              <div className="stat-row">
                <div className="stat-label">Captain:</div>
                <div className="stat-value">{team.captain}</div>
              </div>
              <div className="stat-row">
                <div className="stat-label">Win Rate:</div>
                <div className="stat-value">{team.winPercentage}%</div>
              </div>
              <div className="stat-row">
                <div className="stat-label">ICC Trophies:</div>
                <div className="stat-value">{team.trophies}</div>
              </div>
            </div>
            
            <div className="team-recent-form">
              <div className="form-label">Recent Form:</div>
              <div className="form-indicators">
                {team.recentForm.split('').map((result, index) => (
                  <div key={index} className={`form-indicator ${result === 'W' ? 'win' : 'loss'}`}>
                    {result}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="team-highlight">
              <i data-feather="award"></i>
              <span>{team.highlight}</span>
            </div>
            
            <button className="btn btn-outline view-profile">
              <i data-feather="eye"></i> View Team Statistics
            </button>
          </div>
        ))}
      </div>
      
      <div className="view-all-teams">
        <button className="btn btn-outline" onClick={() => navigateToPage('search', { filter: 'teams' })}>
          <i data-feather="flag"></i> View All Teams
        </button>
      </div>
      
      <style jsx>{`
        .featured-teams {
          margin-bottom: var(--spacing-xl);
        }
        
        .team-card {
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
        
        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        
        .team-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-sm);
        }
        
        .team-flag {
          flex-shrink: 0;
        }
        
        .flag-placeholder {
          width: 50px;
          height: 50px;
          background-color: var(--secondary-color);
          color: white;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 600;
        }
        
        .team-header h3 {
          margin: 0;
          font-size: 1.2rem;
        }
        
        .team-rankings {
          display: flex;
          justify-content: space-between;
          margin-bottom: var(--spacing-sm);
        }
        
        .ranking-item {
          text-align: center;
          padding: var(--spacing-sm) var(--spacing-md);
          background-color: var(--neutral-100);
          border-radius: var(--radius-md);
          min-width: 60px;
        }
        
        .format {
          font-size: 0.8rem;
          color: var(--neutral-500);
          margin-bottom: 2px;
        }
        
        .rank {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--primary-color);
        }
        
        .team-stats {
          padding: var(--spacing-sm) 0;
          border-top: 1px solid var(--neutral-200);
          border-bottom: 1px solid var(--neutral-200);
        }
        
        .stat-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: var(--spacing-xs);
        }
        
        .stat-row:last-child {
          margin-bottom: 0;
        }
        
        .stat-label {
          color: var(--neutral-600);
          font-size: 0.9rem;
        }
        
        .stat-value {
          font-weight: 500;
        }
        
        .team-recent-form {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .form-label {
          font-size: 0.9rem;
          color: var(--neutral-600);
        }
        
        .form-indicators {
          display: flex;
          gap: var(--spacing-xs);
        }
        
        .form-indicator {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        .form-indicator.win {
          background-color: var(--secondary-light);
          color: var(--secondary-dark);
        }
        
        .form-indicator.loss {
          background-color: rgba(239, 68, 68, 0.2);
          color: rgba(239, 68, 68, 1);
        }
        
        .team-highlight {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          color: var(--secondary-dark);
          font-size: 0.9rem;
        }
        
        .view-profile {
          margin-top: var(--spacing-xs);
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-sm);
        }
        
        .view-all-teams {
          display: flex;
          justify-content: center;
          margin-top: var(--spacing-xl);
        }
      `}</style>
    </div>
  );
}

export default FeaturedTeams;

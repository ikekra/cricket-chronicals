import React from 'react';

function TrendingRecords({ navigateToPage }) {
  // For the UI prototype, we'll use static data for trending records
  const trendingRecords = [
    {
      id: 'most-odi-runs',
      title: 'Most Runs in ODI Cricket',
      holder: 'Sachin Tendulkar',
      value: '18,426 runs',
      formattedValue: '18,426',
      unit: 'runs',
      icon: 'award',
      type: 'player',
      playerId: 'sachin-tendulkar'
    },
    {
      id: 'most-test-wickets',
      title: 'Most Wickets in Test Cricket',
      holder: 'Muthiah Muralidaran',
      value: '800 wickets',
      formattedValue: '800',
      unit: 'wickets',
      icon: 'target',
      type: 'player',
      playerId: 'muralidaran'
    },
    {
      id: 'fastest-t20-century',
      title: 'Fastest Century in T20Is',
      holder: 'Rohit Sharma',
      value: '35 balls vs Sri Lanka',
      formattedValue: '35',
      unit: 'balls',
      icon: 'clock',
      type: 'player',
      playerId: 'rohit-sharma'
    },
    {
      id: 'highest-team-score-odi',
      title: 'Highest Team Score in ODIs',
      holder: 'England',
      value: '498/4 vs Netherlands',
      formattedValue: '498/4',
      unit: 'runs',
      icon: 'bar-chart-2',
      type: 'team',
      teamId: 'england'
    }
  ];
  
  const handleRecordClick = (record) => {
    if (record.type === 'player') {
      navigateToPage('player', { id: record.playerId, name: record.holder });
    } else if (record.type === 'team') {
      navigateToPage('team', { id: record.teamId, name: record.holder });
    }
  };

  return (
    <div className="trending-records">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        {trendingRecords.map(record => (
          <div 
            key={record.id} 
            className="record-card cricket-card"
            onClick={() => handleRecordClick(record)}
          >
            <div className="record-icon">
              <i data-feather={record.icon}></i>
            </div>
            
            <div className="record-details">
              <h3>{record.title}</h3>
              <div className="record-holder">
                <span className="holder-label">Current Holder:</span>
                <span className="holder-name">{record.holder}</span>
              </div>
              <div className="record-value">
                <span className="value">{record.formattedValue}</span>
                <span className="unit">{record.unit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="view-all-records">
        <button className="btn btn-outline" onClick={() => navigateToPage('search', { filter: 'records' })}>
          <i data-feather="list"></i> View All Records
        </button>
      </div>
      
      <style jsx>{`
        .trending-records {
          margin-bottom: var(--spacing-xl);
        }
        
        .record-card {
          display: flex;
          align-items: center;
          gap: var(--spacing-lg);
          padding: var(--spacing-lg);
          background-color: white;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          transition: all 0.2s ease;
          cursor: pointer;
        }
        
        .record-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        
        .record-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background-color: var(--primary-light);
          color: var(--primary-dark);
          border-radius: 50%;
          flex-shrink: 0;
        }
        
        .record-details {
          flex: 1;
        }
        
        .record-details h3 {
          margin-bottom: var(--spacing-xs);
          font-size: 1.1rem;
        }
        
        .record-holder {
          margin-bottom: var(--spacing-xs);
          font-size: 0.9rem;
        }
        
        .holder-label {
          color: var(--neutral-500);
          margin-right: var(--spacing-xs);
        }
        
        .holder-name {
          font-weight: 500;
        }
        
        .record-value {
          display: flex;
          align-items: baseline;
          gap: var(--spacing-xs);
        }
        
        .value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
        }
        
        .unit {
          font-size: 0.9rem;
          color: var(--neutral-500);
        }
        
        .view-all-records {
          display: flex;
          justify-content: center;
          margin-top: var(--spacing-xl);
        }
        
        @media (max-width: 768px) {
          .record-card {
            flex-direction: column;
            text-align: center;
          }
          
          .record-icon {
            margin-bottom: var(--spacing-md);
          }
        }
      `}</style>
    </div>
  );
}

export default TrendingRecords;

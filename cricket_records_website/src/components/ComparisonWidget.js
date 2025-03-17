import React, { useState } from 'react';

function ComparisonWidget({ entity1, entity2, metrics, type = 'players', onNavigate }) {
  // Type can be 'players' or 'teams'
  const [selectedMetric, setSelectedMetric] = useState(metrics && metrics.length > 0 ? metrics[0].id : '');
  
  // Sample data if none provided
  const defaultPlayers = [
    {
      id: 'virat-kohli',
      name: 'Virat Kohli',
      country: 'India',
      stats: {
        batting_avg: 53.5,
        strike_rate: 92.3,
        centuries: 74,
        matches: 500
      }
    },
    {
      id: 'joe-root',
      name: 'Joe Root',
      country: 'England',
      stats: {
        batting_avg: 49.2,
        strike_rate: 85.7,
        centuries: 30,
        matches: 330
      }
    }
  ];
  
  const defaultTeams = [
    {
      id: 'india',
      name: 'India',
      stats: {
        win_percentage: 65.3,
        icc_trophies: 5,
        win_loss_ratio: 1.73
      }
    },
    {
      id: 'australia',
      name: 'Australia',
      stats: {
        win_percentage: 72.1,
        icc_trophies: 8,
        win_loss_ratio: 2.15
      }
    }
  ];
  
  const defaultMetrics = type === 'players' ? [
    { id: 'batting_avg', name: 'Batting Average', unit: '' },
    { id: 'strike_rate', name: 'Strike Rate', unit: '' },
    { id: 'centuries', name: 'Centuries', unit: '' },
    { id: 'matches', name: 'Matches Played', unit: '' }
  ] : [
    { id: 'win_percentage', name: 'Win Percentage', unit: '%' },
    { id: 'icc_trophies', name: 'ICC Trophies', unit: '' },
    { id: 'win_loss_ratio', name: 'Win/Loss Ratio', unit: '' }
  ];
  
  // Use provided data or defaults
  const entities = type === 'players' 
    ? [entity1 || defaultPlayers[0], entity2 || defaultPlayers[1]]
    : [entity1 || defaultTeams[0], entity2 || defaultTeams[1]];
  
  const metricsToUse = metrics || defaultMetrics;
  
  // Calculate percentage for the selected metric
  const calculatePercentage = (index) => {
    if (!selectedMetric) return 50; // Equal if no metric selected
    
    const metric = selectedMetric;
    const value1 = entities[0].stats[metric];
    const value2 = entities[1].stats[metric];
    const total = value1 + value2;
    
    // Prevent division by zero
    if (total === 0) return 50;
    
    return index === 0 
      ? (value1 / total) * 100 
      : (value2 / total) * 100;
  };
  
  // Get the display value for the selected metric
  const getMetricValue = (index) => {
    if (!selectedMetric) return '-';
    
    const metric = selectedMetric;
    const value = entities[index].stats[metric];
    const metricObj = metricsToUse.find(m => m.id === metric);
    
    // Format number and add unit if needed
    return `${value}${metricObj.unit ? ` ${metricObj.unit}` : ''}`;
  };
  
  // Get the current metric name
  const getCurrentMetricName = () => {
    if (!selectedMetric) return 'Select a metric';
    return metricsToUse.find(m => m.id === selectedMetric).name;
  };

  return (
    <div className="comparison-widget">
      <div className="comparison-header">
        <h3>Quick Comparison</h3>
        <div className="metric-selector">
          <select 
            value={selectedMetric} 
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="metric-select"
          >
            <option value="" disabled>Select metric</option>
            {metricsToUse.map(metric => (
              <option key={metric.id} value={metric.id}>
                {metric.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="comparison-content">
        <div 
          className="entity-card" 
          onClick={() => onNavigate && onNavigate(type === 'players' ? 'player' : 'team', entities[0])}
        >
          <div className="entity-avatar">
            <div className="avatar-placeholder" style={{ backgroundColor: 'var(--primary-color)' }}>
              {entities[0].name.charAt(0)}
            </div>
          </div>
          <div className="entity-name">{entities[0].name}</div>
          {type === 'players' && <div className="entity-country">{entities[0].country}</div>}
          <div className="entity-value">{getMetricValue(0)}</div>
        </div>
        
        <div className="comparison-bar-container">
          <div className="comparison-metric">{getCurrentMetricName()}</div>
          <div className="comparison-bar">
            <div 
              className="comparison-bar-fill left" 
              style={{ width: `${calculatePercentage(0)}%` }}
            ></div>
            <div 
              className="comparison-bar-fill right" 
              style={{ width: `${calculatePercentage(1)}%` }}
            ></div>
          </div>
          <div className="comparison-values">
            <div className="comparison-value">{getMetricValue(0)}</div>
            <div className="comparison-value">{getMetricValue(1)}</div>
          </div>
        </div>
        
        <div 
          className="entity-card" 
          onClick={() => onNavigate && onNavigate(type === 'players' ? 'player' : 'team', entities[1])}
        >
          <div className="entity-avatar">
            <div className="avatar-placeholder" style={{ backgroundColor: 'var(--secondary-color)' }}>
              {entities[1].name.charAt(0)}
            </div>
          </div>
          <div className="entity-name">{entities[1].name}</div>
          {type === 'players' && <div className="entity-country">{entities[1].country}</div>}
          <div className="entity-value">{getMetricValue(1)}</div>
        </div>
      </div>
      
      <div className="full-comparison">
        <button 
          className="btn btn-outline" 
          onClick={() => onNavigate && onNavigate('comparison', { 
            [type === 'players' ? 'player1' : 'team1']: entities[0],
            [type === 'players' ? 'player2' : 'team2']: entities[1]
          })}
        >
          <i data-feather="bar-chart-2"></i> Full Comparison
        </button>
      </div>
      
      <style jsx>{`
        .comparison-widget {
          background-color: white;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          padding: var(--spacing-lg);
        }
        
        .comparison-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-lg);
        }
        
        .comparison-header h3 {
          margin: 0;
          font-size: 1.1rem;
        }
        
        .metric-select {
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: var(--radius-md);
          border: 1px solid var(--neutral-300);
          background-color: white;
          font-size: 0.9rem;
          cursor: pointer;
        }
        
        .metric-select:focus {
          outline: none;
          border-color: var(--primary-color);
        }
        
        .comparison-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-lg);
        }
        
        .entity-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100px;
          cursor: pointer;
          padding: var(--spacing-sm);
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
        }
        
        .entity-card:hover {
          background-color: var(--neutral-100);
        }
        
        .entity-avatar {
          margin-bottom: var(--spacing-sm);
        }
        
        .avatar-placeholder {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
        }
        
        .entity-name {
          font-weight: 600;
          margin-bottom: 2px;
          font-size: 0.9rem;
        }
        
        .entity-country {
          color: var(--neutral-500);
          font-size: 0.8rem;
          margin-bottom: var(--spacing-sm);
        }
        
        .entity-value {
          font-weight: 700;
          color: var(--primary-color);
        }
        
        .comparison-bar-container {
          flex: 1;
          margin: 0 var(--spacing-md);
          max-width: 300px;
        }
        
        .comparison-metric {
          text-align: center;
          font-size: 0.9rem;
          color: var(--neutral-600);
          margin-bottom: var(--spacing-sm);
        }
        
        .comparison-bar {
          height: 10px;
          background-color: var(--neutral-200);
          border-radius: var(--radius-full);
          display: flex;
          overflow: hidden;
          margin-bottom: var(--spacing-xs);
        }
        
        .comparison-bar-fill {
          height: 100%;
          transition: width 0.5s ease;
        }
        
        .comparison-bar-fill.left {
          background-color: var(--primary-color);
        }
        
        .comparison-bar-fill.right {
          background-color: var(--secondary-color);
        }
        
        .comparison-values {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--neutral-600);
        }
        
        .full-comparison {
          display: flex;
          justify-content: center;
        }
        
        @media (max-width: 768px) {
          .comparison-content {
            flex-direction: column;
            gap: var(--spacing-lg);
          }
          
          .entity-card {
            width: auto;
            padding: var(--spacing-md);
          }
          
          .comparison-bar-container {
            width: 100%;
            max-width: none;
            order: -1;
          }
        }
      `}</style>
    </div>
  );
}

export default ComparisonWidget;

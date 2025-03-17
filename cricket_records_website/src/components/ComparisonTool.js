import React, { useState } from 'react';
import StatChart from './StatChart';

const ComparisonTool = ({ type = 'player' }) => {
  const [item1, setItem1] = useState('');
  const [item2, setItem2] = useState('');
  const [comparisonData, setComparisonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [compareError, setCompareError] = useState('');

  const handleCompare = () => {
    if (!item1 || !item2) {
      setCompareError(`Please select two ${type}s to compare`);
      return;
    }
    
    setLoading(true);
    setCompareError('');
    
    // In a real app, this would be an API call to fetch comparison data
    // For now, we'll simulate a response delay and use dummy data
    setTimeout(() => {
      if (type === 'player') {
        setComparisonData(getPlayerComparisonData());
      } else {
        setComparisonData(getTeamComparisonData());
      }
      setLoading(false);
    }, 800);
  };

  const getPlayerComparisonData = () => {
    // Dummy player comparison data
    return {
      categories: ['Batting', 'Bowling', 'Fielding', 'Experience'],
      data: {
        labels: ['Runs', 'Average', 'Strike Rate', 'Centuries', 'Wickets', 'Economy', 'Catches', 'Matches'],
        datasets: [
          {
            label: item1,
            data: [9000, 50.5, 85.7, 25, 120, 4.2, 80, 200],
            backgroundColor: 'rgba(0, 102, 204, 0.2)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(0, 102, 204, 1)',
            pointRadius: 4
          },
          {
            label: item2,
            data: [10500, 46.8, 92.1, 30, 80, 5.1, 110, 220],
            backgroundColor: 'rgba(255, 102, 0, 0.2)',
            borderColor: 'rgba(255, 102, 0, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(255, 102, 0, 1)',
            pointRadius: 4
          }
        ]
      },
      statComparisons: [
        {
          category: 'Batting',
          stats: [
            { name: 'Runs', player1: '9,000', player2: '10,500', winner: 'player2' },
            { name: 'Average', player1: '50.5', player2: '46.8', winner: 'player1' },
            { name: 'Strike Rate', player1: '85.7', player2: '92.1', winner: 'player2' },
            { name: 'Centuries', player1: '25', player2: '30', winner: 'player2' },
            { name: 'Half Centuries', player1: '45', player2: '42', winner: 'player1' },
          ]
        },
        {
          category: 'Bowling',
          stats: [
            { name: 'Wickets', player1: '120', player2: '80', winner: 'player1' },
            { name: 'Average', player1: '32.1', player2: '36.5', winner: 'player1' },
            { name: 'Economy', player1: '4.2', player2: '5.1', winner: 'player1' },
            { name: 'Best Figures', player1: '6/23', player2: '5/30', winner: 'player1' },
          ]
        }
      ]
    };
  };

  const getTeamComparisonData = () => {
    // Dummy team comparison data
    return {
      data: {
        labels: ['Wins', 'Losses', 'Draws', 'Win %', 'Avg Score', 'Titles'],
        datasets: [
          {
            label: item1,
            data: [320, 180, 50, 58, 280, 5],
            backgroundColor: 'rgba(0, 102, 204,.7)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 1
          },
          {
            label: item2,
            data: [280, 210, 60, 51, 260, 3],
            backgroundColor: 'rgba(255, 102, 0, 0.7)',
            borderColor: 'rgba(255, 102, 0, 1)',
            borderWidth: 1
          }
        ]
      },
      headToHead: {
        total: 80,
        team1Wins: 42,
        team2Wins: 35,
        draws: 3
      },
      trendData: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [
          {
            label: item1,
            data: [65, 70, 68, 72, 75, 80],
            borderColor: 'rgba(0, 102, 204, 1)',
            backgroundColor: 'rgba(0, 102, 204, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: item2,
            data: [70, 65, 72, 68, 63, 67],
            borderColor: 'rgba(255, 102, 0, 1)',
            backgroundColor: 'rgba(255, 102, 0, 0.1)',
            tension: 0.4,
            fill: true
          }
        ]
      }
    };
  };

  // Dummy player and team lists for dropdowns
  const playerOptions = [
    { id: 1, name: "Virat Kohli" },
    { id: 2, name: "Joe Root" },
    { id: 3, name: "Kane Williamson" },
    { id: 4, name: "Steve Smith" },
    { id: 5, name: "Babar Azam" },
    { id: 6, name: "Jasprit Bumrah" },
    { id: 7, name: "Kagiso Rabada" },
    { id: 8, name: "Ben Stokes" }
  ];
  
  const teamOptions = [
    { id: 1, name: "India" },
    { id: 2, name: "Australia" },
    { id: 3, name: "England" },
    { id: 4, name: "New Zealand" },
    { id: 5, name: "South Africa" },
    { id: 6, name: "Pakistan" },
    { id: 7, name: "West Indies" },
    { id: 8, name: "Sri Lanka" }
  ];

  const options = type === 'player' ? playerOptions : teamOptions;

  return (
    <div className="comparison-tool">
      <div className="comparison-selector">
        <h2>Compare {type === 'player' ? 'Players' : 'Teams'}</h2>
        <p className="comparison-description">
          {type === 'player' 
            ? 'Select two players to compare their career statistics and performances.' 
            : 'Select two teams to compare their records, head-to-head stats, and trends.'}
        </p>
        
        <div className="comparison-form">
          <div className="comparison-inputs">
            <div className="selector-group">
              <label htmlFor="item1">Select {type} 1</label>
              <select 
                id="item1" 
                value={item1} 
                onChange={(e) => setItem1(e.target.value)}
                className="comparison-select"
              >
                <option value="">-- Select {type} --</option>
                {options.map(option => (
                  <option key={option.id} value={option.name}>{option.name}</option>
                ))}
              </select>
            </div>
            
            <div className="selector-group">
              <label htmlFor="item2">Select {type} 2</label>
              <select 
                id="item2" 
                value={item2} 
                onChange={(e) => setItem2(e.target.value)}
                className="comparison-select"
              >
                <option value="">-- Select {type} --</option>
                {options.map(option => (
                  <option key={option.id} value={option.name}>{option.name}</option>
                ))}
              </select>
            </div>
          </div>
          
          <button 
            className="compare-button" 
            onClick={handleCompare}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Compare'}
          </button>
          
          {compareError && <p className="compare-error">{compareError}</p>}
        </div>
      </div>
      
      {comparisonData && (
        <div className="comparison-results">
          <div className="comparison-header">
            <div className="comparison-title">
              <h3>Comparison: {item1} vs {item2}</h3>
            </div>
            <div className="comparison-legend">
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: 'rgba(0, 102, 204, 1)' }}></div>
                <span>{item1}</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: 'rgba(255, 102, 0, 1)' }}></div>
                <span>{item2}</span>
              </div>
            </div>
          </div>
          
          {type === 'player' ? (
            <>
              <div className="comparison-chart">
                <StatChart 
                  type="radar" 
                  data={comparisonData.data} 
                  labels={comparisonData.data.labels}
                  title="Player Stats Comparison"
                />
              </div>
              
              <div className="stat-comparison-tables">
                {comparisonData.statComparisons.map((catComp, index) => (
                  <div className="stat-category-table" key={index}>
                    <h4>{catComp.category} Stats</h4>
                    <table className="comparison-table">
                      <thead>
                        <tr>
                          <th>Stat</th>
                          <th>{item1}</th>
                          <th>{item2}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {catComp.stats.map((stat, idx) => (
                          <tr key={idx}>
                            <td>{stat.name}</td>
                            <td className={stat.winner === 'player1' ? 'winner' : ''}>
                              {stat.player1}
                            </td>
                            <td className={stat.winner === 'player2' ? 'winner' : ''}>
                              {stat.player2}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="team-comparison-charts">
                <div className="team-comparison-chart">
                  <StatChart 
                    type="bar"
                    data={comparisonData.data}
                    labels={comparisonData.data.labels}
                    title="Team Performance Comparison"
                  />
                </div>
                
                <div className="head-to-head-container">
                  <h4>Head-to-Head Record</h4>
                  <div className="head-to-head">
                    <div className="team-block" style={{ width: `${(comparisonData.headToHead.team1Wins / comparisonData.headToHead.total) * 100}%` }}>
                      {item1}: {comparisonData.headToHead.team1Wins} wins
                    </div>
                    <div className="draw-block" style={{ width: `${(comparisonData.headToHead.draws / comparisonData.headToHead.total) * 100}%` }}>
                      Draws: {comparisonData.headToHead.draws}
                    </div>
                    <div className="team-block team2" style={{ width: `${(comparisonData.headToHead.team2Wins / comparisonData.headToHead.total) * 100}%` }}>
                      {item2}: {comparisonData.headToHead.team2Wins} wins
                    </div>
                  </div>
                  <div className="head-to-head-total">
                    Total Matches: {comparisonData.headToHead.total}
                  </div>
                </div>
                
                <div className="team-trend-chart">
                  <StatChart 
                    type="line"
                    data={comparisonData.trendData}
                    labels={comparisonData.trendData.labels}
                    title="Performance Trend (Last 5 Years)"
                    options={{
                      scales: {
                        y: {
                          title: {
                            display: true,
                            text: 'Win Rate (%)'
                          }
                        }
                      }
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      )}
      
      <style jsx>{`
        .comparison-tool {
          background-color: var(--background-white);
          border-radius: var(--border-radius-lg);
          padding: var(--space-lg);
          box-shadow: var(--box-shadow);
        }
        
        .comparison-selector {
          margin-bottom: var(--space-xl);
        }
        
        .comparison-description {
          color: var(--text-secondary);
          margin-bottom: var(--space-lg);
        }
        
        .comparison-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }
        
        .comparison-inputs {
          display: flex;
          gap: var(--space-lg);
        }
        
        .selector-group {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
        }
        
        .selector-group label {
          font-weight: var(--font-medium);
          color: var(--text-primary);
        }
        
        .comparison-select {
          padding: var(--space-md);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          font-size: 1rem;
          width: 100%;
        }
        
        .compare-button {
          align-self: flex-start;
          padding: var(--space-md) var(--space-xl);
          background-color: var(--primary-color);
          color: white;
          border: none;
          border-radius: var(--border-radius-md);
          font-weight: var(--font-medium);
          cursor: pointer;
          transition: background-color var(--transition-speed) ease;
        }
        
        .compare-button:hover {
          background-color: var(--secondary-color);
        }
        
        .compare-button:disabled {
          background-color: var(--text-light);
          cursor: not-allowed;
        }
        
        .compare-error {
          color: var(--danger-color);
          font-size: 0.9rem;
        }
        
        .comparison-results {
          border-top: 1px solid var(--border-color);
          padding-top: var(--space-lg);
        }
        
        .comparison-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-lg);
        }
        
        .comparison-legend {
          display: flex;
          gap: var(--space-md);
        }
        
        .legend-item {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
        }
        
        .legend-color {
          width: 16px;
          height: 16px;
          border-radius: 4px;
        }
        
        .comparison-chart {
          height: 400px;
          margin-bottom: var(--space-lg);
        }
        
        .stat-comparison-tables {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-lg);
          margin-top: var(--space-lg);
        }
        
        .stat-category-table h4 {
          margin-bottom: var(--space-md);
          color: var(--text-primary);
        }
        
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .comparison-table th,
        .comparison-table td {
          padding: var(--space-sm);
          text-align: center;
          border-bottom: 1px solid var(--border-color);
        }
        
        .comparison-table th {
          background-color: var(--background-light);
          font-weight: var(--font-medium);
        }
        
        .comparison-table td.winner {
          font-weight: var(--font-bold);
          color: var(--primary-color);
          background-color: rgba(0, 102, 204, 0.05);
        }
        
        .comparison-table tr:hover {
          background-color: var(--background-light);
        }
        
        .team-comparison-charts {
          display: flex;
          flex-direction: column;
          gap: var(--space-xl);
        }
        
        .head-to-head-container {
          background-color: var(--background-light);
          padding: var(--space-lg);
          border-radius: var(--border-radius-md);
        }
        
        .head-to-head-container h4 {
          margin-bottom: var(--space-md);
        }
        
        .head-to-head {
          display: flex;
          height: 40px;
          border-radius: var(--border-radius-md);
          overflow: hidden;
          margin-bottom: var(--space-sm);
        }
        
        .team-block {
          background-color: rgba(0, 102, 204, 0.8);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: var(--font-medium);
          padding: var(--space-xs);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .team-block.team2 {
          background-color: rgba(255, 102, 0, 0.8);
        }
        
        .draw-block {
          background-color: rgba(150, 150, 150, 0.5);
          color: var(--text-primary);
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: var(--font-medium);
          padding: var(--space-xs);
        }
        
        .head-to-head-total {
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .comparison-inputs {
            flex-direction: column;
            gap: var(--space-md);
          }
          
          .compare-button {
            width: 100%;
          }
          
          .comparison-header {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-md);
          }
        }
      `}</style>
    </div>
  );
};

export default ComparisonTool;

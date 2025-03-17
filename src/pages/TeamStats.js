import React, { useEffect, useRef } from 'react';
import PerformanceChart from '../components/PerformanceChart';
import Chart from 'chart.js/auto';

function TeamStats({ team, navigateToPage }) {
  // Use defaults if no team is passed
  const teamData = team || {
    id: 'india',
    name: 'India',
    ranking: {
      test: 1,
      odi: 2,
      t20: 3
    },
    captain: {
      test: 'Rohit Sharma',
      odi: 'Rohit Sharma',
      t20: 'Rohit Sharma'
    },
    coach: 'Rahul Dravid'
  };
  
  const winLossRatioRef = useRef(null);
  const performanceByYearRef = useRef(null);
  const performanceByVenueRef = useRef(null);
  
  useEffect(() => {
    // Initialize charts when component mounts
    if (winLossRatioRef.current) {
      const winLossChart = new Chart(winLossRatioRef.current, {
        type: 'pie',
        data: {
          labels: ['Wins', 'Losses', 'Draws/Ties'],
          datasets: [{
            data: [520, 412, 48],
            backgroundColor: [
              'rgba(16, 185, 129, 0.8)',
              'rgba(239, 68, 68, 0.8)',
              'rgba(245, 158, 11, 0.8)'
            ],
            borderColor: [
              'rgba(16, 185, 129, 1)',
              'rgba(239, 68, 68, 1)',
              'rgba(245, 158, 11, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
            },
            title: {
              display: true,
              text: 'Overall Win/Loss Ratio'
            }
          }
        }
      });
      
      return () => {
        winLossChart.destroy();
      };
    }
  }, []);
  
  useEffect(() => {
    if (performanceByYearRef.current) {
      const yearChart = new Chart(performanceByYearRef.current, {
        type: 'line',
        data: {
          labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
          datasets: [{
            label: 'Win Percentage',
            data: [65, 70, 62, 72, 68, 75],
            backgroundColor: 'rgba(37, 99, 235, 0.2)',
            borderColor: 'rgba(37, 99, 235, 1)',
            borderWidth: 2,
            tension: 0.3,
            fill: true
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              text: 'Performance by Year (Win %)'
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: {
                callback: function(value) {
                  return value + '%';
                }
              }
            }
          }
        }
      });
      
      return () => {
        yearChart.destroy();
      };
    }
  }, []);
  
  useEffect(() => {
    if (performanceByVenueRef.current) {
      const venueChart = new Chart(performanceByVenueRef.current, {
        type: 'bar',
        data: {
          labels: ['Home', 'Away', 'Neutral'],
          datasets: [{
            label: 'Win Percentage',
            data: [78, 52, 65],
            backgroundColor: [
              'rgba(16, 185, 129, 0.8)',
              'rgba(37, 99, 235, 0.8)',
              'rgba(245, 158, 11, 0.8)'
            ],
            borderColor: [
              'rgba(16, 185, 129, 1)',
              'rgba(37, 99, 235, 1)',
              'rgba(245, 158, 11, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              text: 'Performance by Venue (Win %)'
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: {
                callback: function(value) {
                  return value + '%';
                }
              }
            }
          }
        }
      });
      
      return () => {
        venueChart.destroy();
      };
    }
  }, []);

  return (
    <div className="team-stats fade-in">
      <div className="team-header">
        <div className="back-button" onClick={() => navigateToPage('home')}>
          <i data-feather="arrow-left"></i> Back
        </div>
        
        <div className="team-basic-info">
          <div className="team-flag">
            <div className="flag-placeholder">
              {teamData.name.charAt(0)}
            </div>
          </div>
          
          <div className="team-details">
            <h1>{teamData.name}</h1>
            <div className="team-rankings">
              <div className="ranking-item">
                <span className="ranking-label">Test Ranking:</span>
                <span className="ranking-value">{teamData.ranking.test}</span>
              </div>
              <div className="ranking-item">
                <span className="ranking-label">ODI Ranking:</span>
                <span className="ranking-value">{teamData.ranking.odi}</span>
              </div>
              <div className="ranking-item">
                <span className="ranking-label">T20 Ranking:</span>
                <span className="ranking-value">{teamData.ranking.t20}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Info */}
      <section className="section team-info-section">
        <h2 className="section-title">
          <i data-feather="info"></i> Team Information
        </h2>
        
        <div className="card info-card">
          <div className="info-grid">
            <div className="info-item">
              <div className="info-label">Test Captain</div>
              <div className="info-value">{teamData.captain.test}</div>
            </div>
            <div className="info-item">
              <div className="info-label">ODI Captain</div>
              <div className="info-value">{teamData.captain.odi}</div>
            </div>
            <div className="info-item">
              <div className="info-label">T20 Captain</div>
              <div className="info-value">{teamData.captain.t20}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Head Coach</div>
              <div className="info-value">{teamData.coach}</div>
            </div>
            <div className="info-item">
              <div className="info-label">ICC Trophies</div>
              <div className="info-value">5</div>
            </div>
            <div className="info-item">
              <div className="info-label">First International Match</div>
              <div className="info-value">June 25, 1932</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Overall Performance */}
      <section className="section">
        <h2 className="section-title">
          <i data-feather="bar-chart-2"></i> Overall Performance
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div className="card stat-card">
            <h3>Test Cricket</h3>
            <div className="stat-grid">
              <div className="stat-item">
                <div className="stat-value">662</div>
                <div className="stat-label">Matches</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">173</div>
                <div className="stat-label">Wins</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">167</div>
                <div className="stat-label">Losses</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">217</div>
                <div className="stat-label">Draws</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">50.3%</div>
                <div className="stat-label">Win Rate</div>
              </div>
            </div>
          </div>
          
          <div className="card stat-card">
            <h3>One Day Internationals</h3>
            <div className="stat-grid">
              <div className="stat-item">
                <div className="stat-value">1015</div>
                <div className="stat-label">Matches</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">518</div>
                <div className="stat-label">Wins</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">423</div>
                <div className="stat-label">Losses</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">9</div>
                <div className="stat-label">Ties/NR</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">55.1%</div>
                <div className="stat-label">Win Rate</div>
              </div>
            </div>
          </div>
          
          <div className="card stat-card">
            <h3>T20 Internationals</h3>
            <div className="stat-grid">
              <div className="stat-item">
                <div className="stat-value">193</div>
                <div className="stat-label">Matches</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">125</div>
                <div className="stat-label">Wins</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">57</div>
                <div className="stat-label">Losses</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">8</div>
                <div className="stat-label">Ties/NR</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">68.7%</div>
                <div className="stat-label">Win Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Performance Charts */}
      <section className="section">
        <h2 className="section-title">
          <i data-feather="pie-chart"></i> Performance Analytics
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div className="card">
            <div className="chart-container">
              <canvas ref={winLossRatioRef}></canvas>
            </div>
          </div>
          
          <div className="card">
            <div className="chart-container">
              <canvas ref={performanceByVenueRef}></canvas>
            </div>
          </div>
        </div>
        
        <div className="card mt-lg">
          <div className="chart-container">
            <canvas ref={performanceByYearRef}></canvas>
          </div>
        </div>
      </section>
      
      {/* Key Players */}
      <section className="section">
        <h2 className="section-title">
          <i data-feather="users"></i> Key Players
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-lg">
          <div className="card player-card" onClick={() => navigateToPage('player', { id: 'virat-kohli', name: 'Virat Kohli' })}>
            <div className="avatar-placeholder">VK</div>
            <h3>Virat Kohli</h3>
            <p>Batsman</p>
          </div>
          
          <div className="card player-card" onClick={() => navigateToPage('player', { id: 'rohit-sharma', name: 'Rohit Sharma' })}>
            <div className="avatar-placeholder">RS</div>
            <h3>Rohit Sharma</h3>
            <p>Batsman (Captain)</p>
          </div>
          
          <div className="card player-card" onClick={() => navigateToPage('player', { id: 'jasprit-bumrah', name: 'Jasprit Bumrah' })}>
            <div className="avatar-placeholder">JB</div>
            <h3>Jasprit Bumrah</h3>
            <p>Bowler</p>
          </div>
          
          <div className="card player-card" onClick={() => navigateToPage('player', { id: 'ravindra-jadeja', name: 'Ravindra Jadeja' })}>
            <div className="avatar-placeholder">RJ</div>
            <h3>Ravindra Jadeja</h3>
            <p>All-rounder</p>
          </div>
        </div>
      </section>
      
      {/* Recent Form */}
      <section className="section">
        <h2 className="section-title">
          <i data-feather="activity"></i> Recent Form
        </h2>
        
        <div className="recent-results">
          <div className="result-item win">
            <div className="result-icon">W</div>
            <div className="result-details">
              <h3>India vs Australia</h3>
              <p>ODI Series 2023</p>
              <div className="result-score">India won by 5 wickets</div>
            </div>
          </div>
          
          <div className="result-item win">
            <div className="result-icon">W</div>
            <div className="result-details">
              <h3>India vs England</h3>
              <p>Test Series 2023</p>
              <div className="result-score">India won by an innings and 25 runs</div>
            </div>
          </div>
          
          <div className="result-item loss">
            <div className="result-icon">L</div>
            <div className="result-details">
              <h3>India vs South Africa</h3>
              <p>T20I Series 2023</p>
              <div className="result-score">South Africa won by 7 wickets</div>
            </div>
          </div>
          
          <div className="result-item win">
            <div className="result-icon">W</div>
            <div className="result-details">
              <h3>India vs New Zealand</h3>
              <p>ODI Series 2023</p>
              <div className="result-score">India won by 7 wickets</div>
            </div>
          </div>
          
          <div className="result-item win">
            <div className="result-icon">W</div>
            <div className="result-details">
              <h3>India vs Sri Lanka</h3>
              <p>T20I Series 2023</p>
              <div className="result-score">India won by 34 runs</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ICC Tournament Performance */}
      <section className="section">
        <h2 className="section-title">
          <i data-feather="award"></i> ICC Tournament Performance
        </h2>
        
        <div className="tournament-history">
          <div className="tournament-card">
            <div className="tournament-header">
              <h3>Cricket World Cup</h3>
              <div className="trophy-count">
                <i data-feather="award"></i>
                <span>2</span>
              </div>
            </div>
            <div className="tournament-details">
              <div className="tournament-result">
                <div className="tournament-year">1983</div>
                <div className="tournament-position winner">Winner</div>
              </div>
              <div className="tournament-result">
                <div className="tournament-year">2011</div>
                <div className="tournament-position winner">Winner</div>
              </div>
              <div className="tournament-result">
                <div className="tournament-year">2003</div>
                <div className="tournament-position">Runner-up</div>
              </div>
              <div className="tournament-result">
                <div className="tournament-year">2023</div>
                <div className="tournament-position">Runner-up</div>
              </div>
            </div>
          </div>
          
          <div className="tournament-card">
            <div className="tournament-header">
              <h3>T20 World Cup</h3>
              <div className="trophy-count">
                <i data-feather="award"></i>
                <span>1</span>
              </div>
            </div>
            <div className="tournament-details">
              <div className="tournament-result">
                <div className="tournament-year">2007</div>
                <div className="tournament-position winner">Winner</div>
              </div>
              <div className="tournament-result">
                <div className="tournament-year">2014</div>
                <div className="tournament-position">Runner-up</div>
              </div>
              <div className="tournament-result">
                <div className="tournament-year">2022</div>
                <div className="tournament-position">Semi-finalist</div>
              </div>
            </div>
          </div>
          
          <div className="tournament-card">
            <div className="tournament-header">
              <h3>Champions Trophy</h3>
              <div className="trophy-count">
                <i data-feather="award"></i>
                <span>2</span>
              </div>
            </div>
            <div className="tournament-details">
              <div className="tournament-result">
                <div className="tournament-year">2002</div>
                <div className="tournament-position winner">Winner (shared)</div>
              </div>
              <div className="tournament-result">
                <div className="tournament-year">2013</div>
                <div className="tournament-position winner">Winner</div>
              </div>
              <div className="tournament-result">
                <div className="tournament-year">2017</div>
                <div className="tournament-position">Runner-up</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="action-buttons">
        <button className="btn btn-primary" onClick={() => navigateToPage('comparison', { team1: teamData })}>
          <i data-feather="bar-chart-2"></i> Compare with Other Teams
        </button>
      </div>
      
      <style jsx>{`
        .team-header {
          margin-bottom: var(--spacing-2xl);
        }
        
        .back-button {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-sm);
          color: var(--neutral-600);
          margin-bottom: var(--spacing-md);
          cursor: pointer;
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
        }
        
        .back-button:hover {
          background-color: var(--neutral-100);
        }
        
        .team-basic-info {
          display: flex;
          gap: var(--spacing-xl);
          align-items: center;
        }
        
        .team-flag {
          flex-shrink: 0;
        }
        
        .flag-placeholder {
          width: 120px;
          height: 120px;
          background-color: var(--primary-color);
          color: white;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          font-weight: 600;
        }
        
        .team-details h1 {
          margin-bottom: var(--spacing-md);
        }
        
        .team-rankings {
          display: flex;
          gap: var(--spacing-lg);
        }
        
        .ranking-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
        }
        
        .ranking-label {
          color: var(--neutral-600);
        }
        
        .ranking-value {
          font-weight: 600;
          color: var(--primary-color);
          font-size: 1.1rem;
        }
        
        .info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-lg);
        }
        
        .info-label {
          font-size: 0.875rem;
          color: var(--neutral-500);
          margin-bottom: var(--spacing-xs);
        }
        
        .info-value {
          font-weight: 500;
        }
        
        .stat-card h3 {
          text-align: center;
          margin-bottom: var(--spacing-md);
          color: var(--primary-color);
        }
        
        .stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-md);
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--neutral-800);
        }
        
        .stat-label {
          font-size: 0.875rem;
          color: var(--neutral-500);
        }
        
        .player-card {
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .player-card:hover {
          transform: translateY(-5px);
        }
        
        .player-card .avatar-placeholder {
          width: 80px;
          height: 80px;
          font-size: 1.5rem;
          margin: 0 auto var(--spacing-md);
        }
        
        .player-card h3 {
          margin-bottom: var(--spacing-xs);
          font-size: 1rem;
        }
        
        .player-card p {
          color: var(--neutral-500);
          margin-bottom: 0;
          font-size: 0.875rem;
        }
        
        .recent-results {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }
        
        .result-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          background-color: white;
          box-shadow: var(--shadow-sm);
        }
        
        .result-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          flex-shrink: 0;
        }
        
        .win .result-icon {
          background-color: var(--secondary-light);
          color: var(--secondary-dark);
        }
        
        .loss .result-icon {
          background-color: rgba(239, 68, 68, 0.2);
          color: rgba(239, 68, 68, 1);
        }
        
        .draw .result-icon {
          background-color: rgba(245, 158, 11, 0.2);
          color: rgba(245, 158, 11, 1);
        }
        
        .result-details h3 {
          margin-bottom: var(--spacing-xs);
          font-size: 1rem;
        }
        
        .result-details p {
          color: var(--neutral-500);
          margin-bottom: var(--spacing-xs);
          font-size: 0.875rem;
        }
        
        .result-score {
          font-weight: 500;
        }
        
        .tournament-history {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-lg);
        }
        
        .tournament-card {
          background-color: white;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
        }
        
        .tournament-header {
          background-color: var(--primary-light);
          padding: var(--spacing-md);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .tournament-header h3 {
          margin: 0;
          color: var(--primary-dark);
          font-size: 1.1rem;
        }
        
        .trophy-count {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          color: var(--primary-dark);
          font-weight: 600;
        }
        
        .tournament-details {
          padding: var(--spacing-md);
        }
        
        .tournament-result {
          display: flex;
          justify-content: space-between;
          margin-bottom: var(--spacing-sm);
          padding-bottom: var(--spacing-sm);
          border-bottom: 1px solid var(--neutral-200);
        }
        
        .tournament-result:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }
        
        .tournament-year {
          font-weight: 500;
        }
        
        .tournament-position {
          color: var(--neutral-600);
        }
        
        .tournament-position.winner {
          color: var(--secondary-dark);
          font-weight: 600;
        }
        
        .action-buttons {
          display: flex;
          justify-content: center;
          margin-top: var(--spacing-2xl);
        }
        
        @media (max-width: 768px) {
          .team-basic-info {
            flex-direction: column;
            text-align: center;
          }
          
          .team-rankings {
            justify-content: center;
            flex-wrap: wrap;
          }
          
          .info-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .flag-placeholder {
            margin: 0 auto var(--spacing-md);
          }
          
          .tournament-history {
            grid-template-columns: repeat(1, 1fr);
          }
        }
        
        @media (max-width: 480px) {
          .info-grid {
            grid-template-columns: 1fr;
          }
          
          .stat-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

export default TeamStats;

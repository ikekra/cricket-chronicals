import React, { useEffect, useRef } from 'react';
import StatisticsCard from '../components/StatisticsCard';
import CareerGraph from '../components/CareerGraph';
import Chart from 'chart.js/auto';

function PlayerProfile({ player, navigateToPage }) {
  // Use defaults if no player is passed
  const playerData = player || { 
    id: 'virat-kohli', 
    name: 'Virat Kohli',
    role: 'Batsman',
    country: 'India',
    born: 'November 5, 1988',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm medium',
  };
  
  const careerGraphRef = useRef(null);
  const formatDistributionRef = useRef(null);
  const performanceByOppositionRef = useRef(null);
  
  useEffect(() => {
    // Initialize charts when component mounts
    if (formatDistributionRef.current) {
      const formatChart = new Chart(formatDistributionRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Test', 'ODI', 'T20I'],
          datasets: [{
            data: [8043, 12898, 4008],
            backgroundColor: [
              'rgba(37, 99, 235, 0.8)',
              'rgba(16, 185, 129, 0.8)',
              'rgba(245, 158, 11, 0.8)'
            ],
            borderColor: [
              'rgba(37, 99, 235, 1)',
              'rgba(16, 185, 129, 1)',
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
              text: 'Runs by Format'
            }
          }
        }
      });
      
      return () => {
        formatChart.destroy();
      };
    }
  }, []);
  
  useEffect(() => {
    if (performanceByOppositionRef.current) {
      const oppositionChart = new Chart(performanceByOppositionRef.current, {
        type: 'bar',
        data: {
          labels: ['Australia', 'England', 'South Africa', 'West Indies', 'New Zealand', 'Sri Lanka', 'Pakistan'],
          datasets: [{
            label: 'Average',
            data: [54.08, 43.76, 57.92, 59.12, 51.33, 62.84, 58.89],
            backgroundColor: 'rgba(37, 99, 235, 0.8)',
            borderColor: 'rgba(37, 99, 235, 1)',
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
              text: 'Batting Average by Opposition'
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      
      return () => {
        oppositionChart.destroy();
      };
    }
  }, []);

  return (
    <div className="player-profile fade-in">
      <div className="profile-header">
        <div className="back-button" onClick={() => navigateToPage('home')}>
          <i data-feather="arrow-left"></i> Back
        </div>
        
        <div className="player-basic-info">
          <div className="player-avatar">
            <div className="avatar-placeholder">
              {playerData.name.charAt(0)}
            </div>
          </div>
          
          <div className="player-details">
            <h1>{playerData.name}</h1>
            <div className="player-meta">
              <span className="tag tag-primary">{playerData.role}</span>
              <span className="tag">{playerData.country}</span>
            </div>
            <div className="player-quick-stats">
              <div className="quick-stat">
                <div className="stat-value">74</div>
                <div className="stat-label">Centuries</div>
              </div>
              <div className="quick-stat">
                <div className="stat-value">25,000+</div>
                <div className="stat-label">Total Runs</div>
              </div>
              <div className="quick-stat">
                <div className="stat-value">53.51</div>
                <div className="stat-label">Average</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Personal Details */}
      <section className="section personal-info-section">
        <h2 className="section-title">
          <i data-feather="user"></i> Personal Information
        </h2>
        
        <div className="card info-card">
          <div className="info-grid">
            <div className="info-item">
              <div className="info-label">Full Name</div>
              <div className="info-value">{playerData.name}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Born</div>
              <div className="info-value">{playerData.born}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Country</div>
              <div className="info-value">{playerData.country}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Role</div>
              <div className="info-value">{playerData.role}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Batting Style</div>
              <div className="info-value">{playerData.battingStyle}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Bowling Style</div>
              <div className="info-value">{playerData.bowlingStyle}</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Career Statistics */}
      <section className="section">
        <h2 className="section-title">
          <i data-feather="bar-chart-2"></i> Career Statistics
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <StatisticsCard 
            title="Test Cricket" 
            matches={105}
            runs={8043}
            average={50.5}
            strikeRate={57.5}
            hundreds={27}
            fifties={28}
            highestScore={254}
          />
          
          <StatisticsCard 
            title="One Day Internationals" 
            matches={275}
            runs={12898}
            average={58.1}
            strikeRate={93.5}
            hundreds={46}
            fifties={65}
            highestScore={183}
          />
          
          <StatisticsCard 
            title="T20 Internationals" 
            matches={115}
            runs={4008}
            average={52.7}
            strikeRate={137.9}
            hundreds={1}
            fifties={37}
            highestScore={122}
          />
        </div>
        
        <div className="card mt-lg">
          <h3>Format Distribution</h3>
          <div className="chart-container">
            <canvas ref={formatDistributionRef}></canvas>
          </div>
        </div>
      </section>
      
      {/* Career Graph */}
      <section className="section">
        <h2 className="section-title">
          <i data-feather="trending-up"></i> Career Progression
        </h2>
        
        <div className="card">
          <CareerGraph ref={careerGraphRef} />
        </div>
      </section>
      
      {/* Performance by Opposition */}
      <section className="section">
        <h2 className="section-title">
          <i data-feather="users"></i> Performance by Opposition
        </h2>
        
        <div className="card">
          <div className="chart-container">
            <canvas ref={performanceByOppositionRef}></canvas>
          </div>
        </div>
      </section>
      
      {/* Milestones & Achievements */}
      <section className="section">
        <h2 className="section-title">
          <i data-feather="award"></i> Milestones & Achievements
        </h2>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2008</div>
            <div className="timeline-content">
              <h3>International Debut</h3>
              <p>Made ODI debut against Sri Lanka in August 2008</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2011</div>
            <div className="timeline-content">
              <h3>World Cup Winner</h3>
              <p>Part of the Indian team that won the 2011 Cricket World Cup</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2013</div>
            <div className="timeline-content">
              <h3>Fastest ODI Century by an Indian</h3>
              <p>Scored a century in just 52 balls against Australia</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2018</div>
            <div className="timeline-content">
              <h3>Fastest to 10,000 ODI runs</h3>
              <p>Reached the milestone in 205 innings, breaking Sachin Tendulkar's record</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Similar Players */}
      <section className="section">
        <h2 className="section-title">
          <i data-feather="users"></i> Similar Players
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-lg">
          <div className="card similar-player" onClick={() => navigateToPage('player', { id: 'sachin-tendulkar', name: 'Sachin Tendulkar' })}>
            <div className="avatar-placeholder">ST</div>
            <h3>Sachin Tendulkar</h3>
            <p>India</p>
          </div>
          
          <div className="card similar-player" onClick={() => navigateToPage('player', { id: 'steve-smith', name: 'Steve Smith' })}>
            <div className="avatar-placeholder">SS</div>
            <h3>Steve Smith</h3>
            <p>Australia</p>
          </div>
          
          <div className="card similar-player" onClick={() => navigateToPage('player', { id: 'kane-williamson', name: 'Kane Williamson' })}>
            <div className="avatar-placeholder">KW</div>
            <h3>Kane Williamson</h3>
            <p>New Zealand</p>
          </div>
          
          <div className="card similar-player" onClick={() => navigateToPage('player', { id: 'joe-root', name: 'Joe Root' })}>
            <div className="avatar-placeholder">JR</div>
            <h3>Joe Root</h3>
            <p>England</p>
          </div>
        </div>
      </section>
      
      <div className="action-buttons">
        <button className="btn btn-primary" onClick={() => navigateToPage('comparison', { player1: playerData })}>
          <i data-feather="bar-chart-2"></i> Compare with Other Players
        </button>
      </div>
      
      <style jsx>{`
        .profile-header {
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
        
        .player-basic-info {
          display: flex;
          gap: var(--spacing-xl);
          align-items: center;
        }
        
        .player-avatar {
          flex-shrink: 0;
        }
        
        .avatar-placeholder {
          width: 120px;
          height: 120px;
          background-color: var(--primary-color);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          font-weight: 600;
        }
        
        .player-details h1 {
          margin-bottom: var(--spacing-sm);
        }
        
        .player-meta {
          margin-bottom: var(--spacing-md);
        }
        
        .player-quick-stats {
          display: flex;
          gap: var(--spacing-xl);
        }
        
        .quick-stat {
          text-align: center;
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
        
        .timeline {
          position: relative;
          padding-left: 30px;
          margin-top: var(--spacing-lg);
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: var(--primary-light);
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: var(--spacing-xl);
        }
        
        .timeline-dot {
          position: absolute;
          left: -34px;
          top: 0;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: var(--primary-color);
          border: 2px solid white;
        }
        
        .timeline-date {
          display: inline-block;
          padding: var(--spacing-xs) var(--spacing-sm);
          background-color: var(--primary-light);
          color: var(--primary-dark);
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: var(--spacing-sm);
        }
        
        .timeline-content {
          background-color: white;
          border-radius: var(--radius-md);
          padding: var(--spacing-md);
          box-shadow: var(--shadow-sm);
        }
        
        .timeline-content h3 {
          margin-bottom: var(--spacing-xs);
          font-size: 1.1rem;
        }
        
        .timeline-content p {
          margin-bottom: 0;
          color: var(--neutral-600);
        }
        
        .similar-player {
          text-align: center;
          cursor: pointer;
        }
        
        .similar-player .avatar-placeholder {
          width: 80px;
          height: 80px;
          font-size: 1.5rem;
          margin: 0 auto var(--spacing-md);
        }
        
        .similar-player h3 {
          margin-bottom: var(--spacing-xs);
          font-size: 1rem;
        }
        
        .similar-player p {
          color: var(--neutral-500);
          margin-bottom: 0;
        }
        
        .action-buttons {
          display: flex;
          justify-content: center;
          margin-top: var(--spacing-2xl);
        }
        
        @media (max-width: 768px) {
          .player-basic-info {
            flex-direction: column;
            text-align: center;
          }
          
          .player-meta, .player-quick-stats {
            justify-content: center;
          }
          
          .info-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .avatar-placeholder {
            margin: 0 auto var(--spacing-md);
          }
        }
        
        @media (max-width: 480px) {
          .info-grid {
            grid-template-columns: 1fr;
          }
          
          .player-quick-stats {
            flex-direction: column;
            gap: var(--spacing-md);
          }
        }
      `}</style>
    </div>
  );
}

export default PlayerProfile;

import React from 'react';

function StatisticsCard({ title, matches, runs, average, strikeRate, hundreds, fifties, highestScore }) {
  return (
    <div className="statistics-card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      
      <div className="statistics-grid">
        <div className="stat-item">
          <div className="stat-value">{matches}</div>
          <div className="stat-label">Matches</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-value">{runs}</div>
          <div className="stat-label">Runs</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-value">{average}</div>
          <div className="stat-label">Average</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-value">{strikeRate}</div>
          <div className="stat-label">Strike Rate</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-value">{hundreds}</div>
          <div className="stat-label">100s</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-value">{fifties}</div>
          <div className="stat-label">50s</div>
        </div>
        
        <div className="stat-item highlight">
          <div className="stat-value">{highestScore}</div>
          <div className="stat-label">Highest Score</div>
        </div>
      </div>
      
      <style jsx>{`
        .statistics-card {
          background-color: white;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          overflow: hidden;
          transition: all 0.2s ease;
        }
        
        .statistics-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-lg);
        }
        
        .card-header {
          background-color: var(--primary-light);
          padding: var(--spacing-md);
          text-align: center;
        }
        
        .card-header h3 {
          margin: 0;
          color: var(--primary-dark);
          font-size: 1.1rem;
        }
        
        .statistics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          padding: var(--spacing-md);
          gap: var(--spacing-md);
        }
        
        .stat-item {
          text-align: center;
          padding: var(--spacing-sm);
          border-radius: var(--radius-sm);
          background-color: var(--neutral-50);
        }
        
        .stat-item.highlight {
          grid-column: span 2;
          background-color: var(--primary-light);
        }
        
        .stat-item.highlight .stat-value {
          color: var(--primary-dark);
        }
        
        .stat-value {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--neutral-800);
          margin-bottom: 2px;
        }
        
        .stat-label {
          font-size: 0.8rem;
          color: var(--neutral-500);
        }
        
        @media (max-width: 768px) {
          .statistics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 480px) {
          .statistics-grid {
            grid-template-columns: 1fr;
          }
          
          .stat-item.highlight {
            grid-column: span 1;
          }
        }
      `}</style>
    </div>
  );
}

export default StatisticsCard;

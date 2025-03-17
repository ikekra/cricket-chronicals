import React from 'react';
import { Link } from 'react-router-dom';

const RecordCard = ({ record }) => {
  // Generate a color based on record type
  const getBackgroundColor = (recordType) => {
    switch (recordType.toLowerCase()) {
      case 'batting':
        return '#4caf50';
      case 'bowling':
        return '#2196f3';
      case 'fielding':
        return '#ff9800';
      case 'team':
        return '#9c27b0';
      default:
        return '#0066cc';
    }
  };

  return (
    <div className="record-card">
      <div 
        className="record-type-badge"
        style={{ backgroundColor: getBackgroundColor(record.type) }}
      >
        {record.type}
      </div>
      
      <h3 className="record-title">{record.title}</h3>
      <p className="record-description">{record.description}</p>
      
      <div className="record-holder-info">
        {record.type.toLowerCase() !== 'team' ? (
          <Link to={`/player/${record.holderId}`} className="record-holder-link">
            <div className="record-holder-circle">
              {record.holderName.charAt(0)}
            </div>
            <div className="record-holder-details">
              <span className="record-holder-name">{record.holderName}</span>
              <span className="record-holder-country">{record.holderCountry}</span>
            </div>
          </Link>
        ) : (
          <Link to={`/team/${record.holderId}`} className="record-holder-link">
            <div className="record-holder-circle team">
              {record.holderName.charAt(0)}
            </div>
            <div className="record-holder-details">
              <span className="record-holder-name">{record.holderName}</span>
              <span className="record-holder-country">{record.format}</span>
            </div>
          </Link>
        )}
      </div>
      
      <div className="record-value-container">
        <span className="record-value">{record.value}</span>
        <span className="record-date">{record.date}</span>
      </div>
      
      <style jsx>{`
        .record-card {
          background-color: var(--background-white);
          border-radius: var(--border-radius-lg);
          padding: var(--space-lg);
          box-shadow: var(--box-shadow);
          position: relative;
          transition: transform var(--transition-speed) ease,
                      box-shadow var(--transition-speed) ease;
        }
        
        .record-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 20px rgba(0,0,0,0.1);
        }
        
        .record-type-badge {
          position: absolute;
          top: var(--space-md);
          right: var(--space-md);
          padding: 4px 8px;
          border-radius: var(--border-radius-sm);
          color: white;
          font-size: 0.75rem;
          font-weight: var(--font-medium);
          text-transform: uppercase;
        }
        
        .record-title {
          margin-bottom: var(--space-sm);
          padding-right: 80px; /* Space for the badge */
        }
        
        .record-description {
          color: var(--text-secondary);
          margin-bottom: var(--space-md);
          font-size: 0.9rem;
        }
        
        .record-holder-info {
          margin-bottom: var(--space-md);
        }
        
        .record-holder-link {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          text-decoration: none;
          color: inherit;
          padding: var(--space-sm);
          border-radius: var(--border-radius-md);
          transition: background-color var(--transition-speed) ease;
        }
        
        .record-holder-link:hover {
          background-color: var(--background-light);
        }
        
        .record-holder-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--primary-color);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: var(--font-bold);
          font-size: 1.2rem;
        }
        
        .record-holder-circle.team {
          background-color: var(--accent-color);
        }
        
        .record-holder-details {
          display: flex;
          flex-direction: column;
        }
        
        .record-holder-name {
          font-weight: var(--font-medium);
          color: var(--text-primary);
        }
        
        .record-holder-country {
          font-size: 0.8rem;
          color: var(--text-light);
        }
        
        .record-value-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-top: 1px solid var(--border-color);
          padding-top: var(--space-md);
        }
        
        .record-value {
          font-size: 1.5rem;
          font-weight: var(--font-bold);
          color: var(--primary-color);
        }
        
        .record-date {
          font-size: 0.9rem;
          color: var(--text-light);
        }
      `}</style>
    </div>
  );
};

export default RecordCard;

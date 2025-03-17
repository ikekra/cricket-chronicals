import React from 'react';

function FilterComponent({ label, options, value, onChange }) {
  return (
    <div className="filter-component">
      <label className="filter-label">{label}</label>
      <select 
        className="filter-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      <style jsx>{`
        .filter-component {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }
        
        .filter-label {
          font-size: 0.9rem;
          color: var(--neutral-600);
        }
        
        .filter-select {
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: var(--radius-md);
          border: 1px solid var(--neutral-300);
          background-color: white;
          font-size: 0.95rem;
          min-width: 150px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .filter-select:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        
        @media (max-width: 768px) {
          .filter-select {
            min-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default FilterComponent;

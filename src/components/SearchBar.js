import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <div className="search-input-container">
          <i data-feather="search" className="search-icon"></i>
          <input
            type="text"
            placeholder="Search for players, teams, or records..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </div>
      </form>
      
      <style jsx>{`
        .search-bar {
          width: 100%;
        }
        
        .search-input-container {
          display: flex;
          align-items: center;
          position: relative;
          width: 100%;
        }
        
        .search-icon {
          position: absolute;
          left: var(--spacing-md);
          color: var(--neutral-500);
          width: 18px;
          height: 18px;
        }
        
        .search-input {
          flex: 1;
          padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) calc(var(--spacing-md) * 3);
          border: 1px solid var(--neutral-300);
          border-radius: var(--radius-full);
          font-size: 0.95rem;
          width: 100%;
          transition: all 0.2s ease;
        }
        
        .search-input:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        
        .search-button {
          position: absolute;
          right: var(--spacing-xs);
          background-color: var(--primary-color);
          color: white;
          border: none;
          border-radius: var(--radius-full);
          padding: var(--spacing-sm) var(--spacing-md);
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        
        .search-button:hover {
          background-color: var(--primary-dark);
        }
        
        @media (max-width: 768px) {
          .search-button {
            padding: var(--spacing-xs) var(--spacing-sm);
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}

export default SearchBar;

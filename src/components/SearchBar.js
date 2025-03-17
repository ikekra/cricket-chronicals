import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ fullWidth = false, showFilters = false }) => {
  const [query, setQuery] = useState('');
  const [filtersVisible, setFiltersVisible] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  return (
    <div className={`search-bar-container ${fullWidth ? 'full-width' : ''}`}>
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-container">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for players, teams, tournaments..."
            className="search-input"
          />
          {showFilters && (
            <button 
              type="button" 
              className="filter-toggle-btn"
              onClick={toggleFilters}
            >
              <i className="fas fa-sliders-h"></i>
              <span>Filters</span>
            </button>
          )}
          <button type="submit" className="search-button">
            Search
          </button>
        </div>
        
        {showFilters && filtersVisible && (
          <div className="search-filters">
            <div className="filter-section">
              <label>Format</label>
              <div className="filter-options">
                <label className="filter-option">
                  <input type="checkbox" name="format" value="test" />
                  <span>Test</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" name="format" value="odi" />
                  <span>ODI</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" name="format" value="t20" />
                  <span>T20</span>
                </label>
              </div>
            </div>
            
            <div className="filter-section">
              <label>Year Range</label>
              <div className="year-range">
                <input type="number" placeholder="From" min="1900" max="2023" />
                <span>to</span>
                <input type="number" placeholder="To" min="1900" max="2023" />
              </div>
            </div>
            
            <div className="filter-section">
              <label>Country</label>
              <select className="country-select">
                <option value="">All Countries</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="england">England</option>
                <option value="south-africa">South Africa</option>
                <option value="new-zealand">New Zealand</option>
                <option value="pakistan">Pakistan</option>
                <option value="west-indies">West Indies</option>
                <option value="sri-lanka">Sri Lanka</option>
              </select>
            </div>
            
            <div className="filter-section">
              <label>Record Type</label>
              <div className="filter-options">
                <label className="filter-option">
                  <input type="checkbox" name="recordType" value="batting" />
                  <span>Batting</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" name="recordType" value="bowling" />
                  <span>Bowling</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" name="recordType" value="fielding" />
                  <span>Fielding</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" name="recordType" value="team" />
                  <span>Team</span>
                </label>
              </div>
            </div>
            
            <div className="filter-actions">
              <button type="button" className="filter-reset-btn">Reset</button>
              <button type="button" className="filter-apply-btn">Apply Filters</button>
            </div>
          </div>
        )}
      </form>

      <style jsx>{`
        .search-bar-container {
          margin-bottom: var(--space-lg);
          width: ${fullWidth ? '100%' : '70%'};
          max-width: ${fullWidth ? '100%' : '800px'};
        }
        
        .search-form {
          width: 100%;
        }
        
        .search-input-container {
          display: flex;
          position: relative;
          align-items: center;
          width: 100%;
        }
        
        .search-icon {
          position: absolute;
          left: var(--space-md);
          color: var(--text-light);
          z-index: 1;
        }
        
        .search-input {
          flex: 1;
          padding: var(--space-md) var(--space-md) var(--space-md) calc(var(--space-lg) + var(--space-md));
          border: 2px solid var(--border-color);
          border-radius: var(--border-radius-md);
          font-size: 16px;
          transition: border-color var(--transition-speed) ease;
        }
        
        .search-input:focus {
          outline: none;
          border-color: var(--primary-color);
        }
        
        .filter-toggle-btn {
          background: none;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          padding: var(--space-sm) var(--space-md);
          margin: 0 var(--space-sm);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-sm);
        }
        
        .filter-toggle-btn:hover {
          color: var(--primary-color);
          background: none;
          transform: none;
        }
        
        .search-button {
          background-color: var(--primary-color);
          color: white;
          border: none;
          padding: var(--space-md) var(--space-lg);
          border-radius: var(--border-radius-md);
          font-weight: var(--font-medium);
          transition: background-color var(--transition-speed) ease;
        }
        
        .search-button:hover {
          background-color: var(--secondary-color);
        }
        
        .search-filters {
          margin-top: var(--space-md);
          padding: var(--space-lg);
          background-color: var(--background-white);
          border-radius: var(--border-radius-md);
          box-shadow: var(--box-shadow);
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-lg);
        }
        
        .filter-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }
        
        .filter-section label {
          font-weight: var(--font-medium);
          color: var(--text-primary);
        }
        
        .filter-options {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
        }
        
        .filter-option {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
          cursor: pointer;
        }
        
        .year-range {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
        }
        
        .year-range input {
          width: 100px;
        }
        
        .country-select {
          width: 100%;
          padding: var(--space-sm);
        }
        
        .filter-actions {
          grid-column: 1 / -1;
          display: flex;
          justify-content: flex-end;
          gap: var(--space-md);
          margin-top: var(--space-md);
        }
        
        .filter-reset-btn {
          background: none;
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }
        
        .filter-reset-btn:hover {
          background: var(--background-light);
          transform: none;
        }
        
        .filter-apply-btn {
          background-color: var(--primary-color);
          color: white;
        }
        
        @media (max-width: 768px) {
          .search-bar-container {
            width: 100%;
          }
          
          .search-filters {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default SearchBar;

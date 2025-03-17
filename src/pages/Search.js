import React, { useState } from 'react';
import FilterComponent from '../components/FilterComponent';

function Search({ navigateToPage }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    format: 'all',
    country: 'all',
    dateRange: 'all',
    recordType: 'all'
  });
  
  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, this would trigger a search API call
    console.log('Searching for:', searchQuery, 'with filters:', filters);
  };
  
  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value
    });
  };
  
  // Sample search results for the UI prototype
  const searchResults = [
    {
      type: 'player',
      id: 'virat-kohli',
      name: 'Virat Kohli',
      country: 'India',
      matchingField: 'Most centuries in successful run chases'
    },
    {
      type: 'player',
      id: 'rohit-sharma',
      name: 'Rohit Sharma',
      country: 'India',
      matchingField: 'Most double centuries in ODIs'
    },
    {
      type: 'team',
      id: 'australia',
      name: 'Australia',
      matchingField: 'Most consecutive test match wins'
    },
    {
      type: 'record',
      id: 'highest-odi-score',
      title: 'Highest ODI Score',
      holder: 'Rohit Sharma',
      value: '264 runs vs Sri Lanka'
    },
    {
      type: 'player',
      id: 'sachin-tendulkar',
      name: 'Sachin Tendulkar',
      country: 'India',
      matchingField: 'Most runs in international cricket'
    },
    {
      type: 'team',
      id: 'india',
      name: 'India',
      matchingField: 'Most T20I wins in a calendar year'
    },
    {
      type: 'record',
      id: 'fastest-t20-century',
      title: 'Fastest T20I Century',
      holder: 'Rohit Sharma',
      value: '35 balls vs Sri Lanka'
    },
    {
      type: 'player',
      id: 'ms-dhoni',
      name: 'MS Dhoni',
      country: 'India',
      matchingField: 'Most stumpings in international cricket'
    }
  ];

  return (
    <div className="search-page fade-in">
      <div className="back-button" onClick={() => navigateToPage('home')}>
        <i data-feather="arrow-left"></i> Back to Home
      </div>
      
      <h1 className="page-title"><i data-feather="search"></i> Advanced Search</h1>
      
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <div className="main-search">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for players, teams, or records..."
              className="search-input"
            />
            <button type="submit" className="btn btn-primary search-button">
              <i data-feather="search"></i> Search
            </button>
          </div>
          
          <div className="filters-section">
            <h2>Filters</h2>
            <div className="filters-grid">
              <FilterComponent 
                label="Format" 
                options={[
                  { value: 'all', label: 'All Formats' },
                  { value: 'test', label: 'Test Matches' },
                  { value: 'odi', label: 'One Day Internationals' },
                  { value: 't20', label: 'T20 Internationals' }
                ]}
                value={filters.format}
                onChange={(value) => handleFilterChange('format', value)}
              />
              
              <FilterComponent 
                label="Country" 
                options={[
                  { value: 'all', label: 'All Countries' },
                  { value: 'india', label: 'India' },
                  { value: 'australia', label: 'Australia' },
                  { value: 'england', label: 'England' },
                  { value: 'south-africa', label: 'South Africa' },
                  { value: 'new-zealand', label: 'New Zealand' }
                ]}
                value={filters.country}
                onChange={(value) => handleFilterChange('country', value)}
              />
              
              <FilterComponent 
                label="Time Period" 
                options={[
                  { value: 'all', label: 'All Time' },
                  { value: 'last-year', label: 'Last Year' },
                  { value: 'last-5-years', label: 'Last 5 Years' },
                  { value: 'last-10-years', label: 'Last 10 Years' },
                  { value: 'custom', label: 'Custom Range' }
                ]}
                value={filters.dateRange}
                onChange={(value) => handleFilterChange('dateRange', value)}
              />
              
              <FilterComponent 
                label="Record Type" 
                options={[
                  { value: 'all', label: 'All Records' },
                  { value: 'batting', label: 'Batting Records' },
                  { value: 'bowling', label: 'Bowling Records' },
                  { value: 'fielding', label: 'Fielding Records' },
                  { value: 'team', label: 'Team Records' }
                ]}
                value={filters.recordType}
                onChange={(value) => handleFilterChange('recordType', value)}
              />
            </div>
            
            <div className="filter-actions">
              <button type="button" className="btn btn-outline" onClick={() => setFilters({
                format: 'all',
                country: 'all',
                dateRange: 'all',
                recordType: 'all'
              })}>
                <i data-feather="x-circle"></i> Clear Filters
              </button>
              <button type="submit" className="btn btn-primary">
                <i data-feather="filter"></i> Apply Filters
              </button>
            </div>
          </div>
        </form>
      </div>
      
      <div className="search-results">
        <div className="results-header">
          <h2>Search Results</h2>
          <div className="results-meta">Showing {searchResults.length} results</div>
        </div>
        
        <div className="results-grid">
          {searchResults.map((result, index) => (
            <div 
              key={index} 
              className={`result-card ${result.type}`}
              onClick={() => {
                if (result.type === 'player') {
                  navigateToPage('player', { id: result.id, name: result.name });
                } else if (result.type === 'team') {
                  navigateToPage('team', { id: result.id, name: result.name });
                }
                // For records, we could add a specific page or modal in a real app
              }}
            >
              {result.type === 'player' && (
                <>
                  <div className="result-icon player-icon">
                    {result.name.charAt(0)}
                  </div>
                  <div className="result-content">
                    <h3>{result.name}</h3>
                    <div className="result-meta">
                      <span className="tag">{result.country}</span>
                      <span className="tag">Player</span>
                    </div>
                    <p className="result-detail">
                      <i data-feather="award"></i> {result.matchingField}
                    </p>
                  </div>
                </>
              )}
              
              {result.type === 'team' && (
                <>
                  <div className="result-icon team-icon">
                    {result.name.charAt(0)}
                  </div>
                  <div className="result-content">
                    <h3>{result.name}</h3>
                    <div className="result-meta">
                      <span className="tag">Team</span>
                    </div>
                    <p className="result-detail">
                      <i data-feather="flag"></i> {result.matchingField}
                    </p>
                  </div>
                </>
              )}
              
              {result.type === 'record' && (
                <>
                  <div className="result-icon record-icon">
                    <i data-feather="trending-up"></i>
                  </div>
                  <div className="result-content">
                    <h3>{result.title}</h3>
                    <div className="result-meta">
                      <span className="tag">Record</span>
                    </div>
                    <p className="result-detail">
                      <i data-feather="user"></i> {result.holder}: {result.value}
                    </p>
                  </div>
                </>
              )}
              
              <div className="result-action">
                <i data-feather="chevron-right"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .search-page {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .back-button {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-sm);
          color: var(--neutral-600);
          margin-bottom: var(--spacing-lg);
          cursor: pointer;
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
        }
        
        .back-button:hover {
          background-color: var(--neutral-100);
        }
        
        .page-title {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-xl);
        }
        
        .search-container {
          background-color: white;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          padding: var(--spacing-xl);
          margin-bottom: var(--spacing-2xl);
        }
        
        .main-search {
          display: flex;
          margin-bottom: var(--spacing-lg);
        }
        
        .search-input {
          flex: 1;
          padding: var(--spacing-md);
          border: 1px solid var(--neutral-300);
          border-radius: var(--radius-md) 0 0 var(--radius-md);
          font-size: 1rem;
        }
        
        .search-input:focus {
          outline: none;
          border-color: var(--primary-color);
        }
        
        .search-button {
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }
        
        .filters-section h2 {
          font-size: 1.25rem;
          margin-bottom: var(--spacing-md);
        }
        
        .filters-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-lg);
        }
        
        .filter-actions {
          display: flex;
          justify-content: flex-end;
          gap: var(--spacing-md);
        }
        
        .results-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-lg);
        }
        
        .results-header h2 {
          margin: 0;
        }
        
        .results-meta {
          color: var(--neutral-500);
        }
        
        .results-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-lg);
        }
        
        .result-card {
          background-color: white;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          padding: var(--spacing-lg);
          display: flex;
          align-items: center;
          gap: var(--spacing-lg);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .result-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-lg);
        }
        
        .result-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 1.5rem;
          flex-shrink: 0;
        }
        
        .player-icon {
          background-color: var(--primary-light);
          color: var(--primary-dark);
        }
        
        .team-icon {
          background-color: var(--secondary-light);
          color: var(--secondary-dark);
        }
        
        .record-icon {
          background-color: rgba(245, 158, 11, 0.2);
          color: rgba(245, 158, 11, 1);
        }
        
        .result-content {
          flex: 1;
        }
        
        .result-content h3 {
          margin-bottom: var(--spacing-xs);
        }
        
        .result-meta {
          margin-bottom: var(--spacing-xs);
        }
        
        .result-detail {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          color: var(--neutral-600);
          margin: 0;
        }
        
        .result-action {
          color: var(--neutral-400);
        }
        
        @media (max-width: 768px) {
          .filters-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .results-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 480px) {
          .filters-grid {
            grid-template-columns: 1fr;
          }
          
          .filter-actions {
            flex-direction: column;
          }
          
          .result-card {
            flex-direction: column;
            text-align: center;
          }
          
          .result-action {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Search;

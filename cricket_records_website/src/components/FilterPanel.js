import React, { useState } from 'react';

const FilterPanel = ({ onApplyFilters, initialFilters = {} }) => {
  const [filters, setFilters] = useState({
    formats: initialFilters.formats || [],
    yearRange: initialFilters.yearRange || { from: '', to: '' },
    countries: initialFilters.countries || [],
    recordTypes: initialFilters.recordTypes || [],
    sortBy: initialFilters.sortBy || 'recent'
  });
  
  const handleFormatChange = (format) => {
    if (filters.formats.includes(format)) {
      setFilters({
        ...filters,
        formats: filters.formats.filter(f => f !== format)
      });
    } else {
      setFilters({
        ...filters,
        formats: [...filters.formats, format]
      });
    }
  };
  
  const handleCountryChange = (country) => {
    if (filters.countries.includes(country)) {
      setFilters({
        ...filters,
        countries: filters.countries.filter(c => c !== country)
      });
    } else {
      setFilters({
        ...filters,
        countries: [...filters.countries, country]
      });
    }
  };
  
  const handleRecordTypeChange = (type) => {
    if (filters.recordTypes.includes(type)) {
      setFilters({
        ...filters,
        recordTypes: filters.recordTypes.filter(t => t !== type)
      });
    } else {
      setFilters({
        ...filters,
        recordTypes: [...filters.recordTypes, type]
      });
    }
  };
  
  const handleYearChange = (field, value) => {
    setFilters({
      ...filters,
      yearRange: {
        ...filters.yearRange,
        [field]: value
      }
    });
  };
  
  const handleSortChange = (value) => {
    setFilters({
      ...filters,
      sortBy: value
    });
  };
  
  const handleApply = () => {
    onApplyFilters(filters);
  };
  
  const handleReset = () => {
    setFilters({
      formats: [],
      yearRange: { from: '', to: '' },
      countries: [],
      recordTypes: [],
      sortBy: 'recent'
    });
  };
  
  // Cricket formats
  const formats = [
    { id: 'test', name: 'Test' },
    { id: 'odi', name: 'ODI' },
    { id: 't20', name: 'T20I' },
    { id: 'worldCup', name: 'World Cup' }
  ];
  
  // Cricket playing countries
  const countries = [
    { id: 'ind', name: 'India' },
    { id: 'aus', name: 'Australia' },
    { id: 'eng', name: 'England' },
    { id: 'nz', name: 'New Zealand' },
    { id: 'sa', name: 'South Africa' },
    { id: 'pak', name: 'Pakistan' },
    { id: 'wi', name: 'West Indies' },
    { id: 'sl', name: 'Sri Lanka' },
    { id: 'ban', name: 'Bangladesh' },
    { id: 'afg', name: 'Afghanistan' }
  ];
  
  // Record types
  const recordTypes = [
    { id: 'batting', name: 'Batting' },
    { id: 'bowling', name: 'Bowling' },
    { id: 'fielding', name: 'Fielding' },
    { id: 'team', name: 'Team' },
    { id: 'tournament', name: 'Tournament' }
  ];
  
  // Sort options
  const sortOptions = [
    { id: 'recent', name: 'Most Recent' },
    { id: 'oldest', name: 'Oldest First' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'highest', name: 'Highest Value' },
    { id: 'lowest', name: 'Lowest Value' }
  ];

  return (
    <div className="filter-panel">
      <div className="filter-section">
        <h3 className="filter-heading">Format</h3>
        <div className="filter-options">
          {formats.map(format => (
            <label key={format.id} className="filter-checkbox">
              <input 
                type="checkbox" 
                checked={filters.formats.includes(format.id)} 
                onChange={() => handleFormatChange(format.id)}
              />
              <span className="checkbox-label">{format.name}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="filter-section">
        <h3 className="filter-heading">Time Period</h3>
        <div className="year-range-inputs">
          <div className="year-input-group">
            <label>From</label>
            <input 
              type="number" 
              placeholder="Year" 
              min="1900" 
              max={new Date().getFullYear()} 
              value={filters.yearRange.from}
              onChange={(e) => handleYearChange('from', e.target.value)}
            />
          </div>
          <div className="year-input-group">
            <label>To</label>
            <input 
              type="number" 
              placeholder="Year" 
              min="1900" 
              max={new Date().getFullYear()} 
              value={filters.yearRange.to}
              onChange={(e) => handleYearChange('to', e.target.value)}
            />
          </div>
        </div>
      </div>
      
      <div className="filter-section">
        <h3 className="filter-heading">Country</h3>
        <div className="filter-options country-grid">
          {countries.map(country => (
            <label key={country.id} className="filter-checkbox">
              <input 
                type="checkbox" 
                checked={filters.countries.includes(country.id)} 
                onChange={() => handleCountryChange(country.id)}
              />
              <span className="checkbox-label">{country.name}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="filter-section">
        <h3 className="filter-heading">Record Type</h3>
        <div className="filter-options">
          {recordTypes.map(type => (
            <label key={type.id} className="filter-checkbox">
              <input 
                type="checkbox" 
                checked={filters.recordTypes.includes(type.id)} 
                onChange={() => handleRecordTypeChange(type.id)}
              />
              <span className="checkbox-label">{type.name}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="filter-section">
        <h3 className="filter-heading">Sort By</h3>
        <div className="sort-options">
          {sortOptions.map(option => (
            <label key={option.id} className="filter-radio">
              <input 
                type="radio" 
                name="sortBy" 
                checked={filters.sortBy === option.id} 
                onChange={() => handleSortChange(option.id)}
              />
              <span className="radio-label">{option.name}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="filter-actions">
        <button className="filter-reset" onClick={handleReset}>
          Reset All
        </button>
        <button className="filter-apply" onClick={handleApply}>
          Apply Filters
        </button>
      </div>
      
      <style jsx>{`
        .filter-panel {
          background-color: var(--background-white);
          border-radius: var(--border-radius-md);
          padding: var(--space-lg);
          box-shadow: var(--box-shadow);
        }
        
        .filter-section {
          margin-bottom: var(--space-lg);
          padding-bottom: var(--space-md);
          border-bottom: 1px solid var(--border-color);
        }
        
        .filter-section:last-of-type {
          border-bottom: none;
        }
        
        .filter-heading {
          font-size: 1.1rem;
          margin-bottom: var(--space-md);
          color: var(--text-primary);
        }
        
        .filter-options {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }
        
        .country-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: var(--space-sm);
        }
        
        .filter-checkbox, .filter-radio {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          cursor: pointer;
        }
        
        .checkbox-label, .radio-label {
          color: var(--text-primary);
          font-size: 0.95rem;
        }
        
        .year-range-inputs {
          display: flex;
          gap: var(--space-md);
        }
        
        .year-input-group {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
        }
        
        .year-input-group label {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        
        .year-input-group input {
          padding: var(--space-sm);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-sm);
        }
        
        .sort-options {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }
        
        .filter-actions {
          display: flex;
          justify-content: space-between;
          margin-top: var(--space-lg);
        }
        
        .filter-reset {
          padding: var(--space-sm) var(--space-md);
          border: 1px solid var(--border-color);
          background-color: transparent;
          color: var(--text-secondary);
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          transition: background-color var(--transition-speed) ease;
        }
        
        .filter-reset:hover {
          background-color: var(--background-light);
          color: var(--text-primary);
        }
        
        .filter-apply {
          padding: var(--space-sm) var(--space-lg);
          background-color: var(--primary-color);
          color: white;
          border: none;
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          transition: background-color var(--transition-speed) ease;
        }
        
        .filter-apply:hover {
          background-color: var(--secondary-color);
        }
        
        @media (max-width: 768px) {
          .country-grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          }
          
          .filter-actions {
            flex-direction: column-reverse;
            gap: var(--space-md);
          }
          
          .filter-reset, .filter-apply {
            width: 100%;
          }
          
          .year-range-inputs {
            flex-direction: column;
            gap: var(--space-md);
          }
        }
      `}</style>
    </div>
  );
};

export default FilterPanel;

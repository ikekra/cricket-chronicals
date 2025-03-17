import React, { useState } from 'react';
import SearchBar from './SearchBar';

function Header({ navigateToPage, currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="figma-status">
        <span>Cricket Records Website - UI Prototype</span>
        <span>Resolution: 1440 x 900</span>
        <span>Home Screen</span>
      </div>
      
      <div className="container">
        <nav className="flex justify-between items-center p-md">
          <div className="logo" onClick={() => navigateToPage('home')} style={{ cursor: 'pointer' }}>
            <h1 style={{ 
              fontSize: '1.5rem', 
              margin: 0, 
              color: 'var(--primary-color)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <i data-feather="award"></i> CricketRecords
            </h1>
          </div>
          
          <div className="search-container" style={{ flex: 1, maxWidth: '500px', margin: '0 var(--spacing-lg)' }}>
            <SearchBar onSearch={(query) => navigateToPage('search', { query })} />
          </div>
          
          <div className="desktop-menu">
            <ul className="flex gap-md" style={{ listStyle: 'none', margin: 0 }}>
              <li>
                <a 
                  className={`nav-link ${currentPage === 'home' ? 'active' : ''}`} 
                  onClick={() => navigateToPage('home')}
                  style={{ 
                    cursor: 'pointer', 
                    color: currentPage === 'home' ? 'var(--primary-color)' : 'var(--neutral-600)',
                    fontWeight: currentPage === 'home' ? '600' : '400',
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-md)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  className={`nav-link ${currentPage === 'player' ? 'active' : ''}`} 
                  onClick={() => navigateToPage('player', { id: 'virat-kohli', name: 'Virat Kohli' })}
                  style={{ 
                    cursor: 'pointer', 
                    color: currentPage === 'player' ? 'var(--primary-color)' : 'var(--neutral-600)',
                    fontWeight: currentPage === 'player' ? '600' : '400',
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-md)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Players
                </a>
              </li>
              <li>
                <a 
                  className={`nav-link ${currentPage === 'team' ? 'active' : ''}`} 
                  onClick={() => navigateToPage('team', { id: 'india', name: 'India' })}
                  style={{ 
                    cursor: 'pointer', 
                    color: currentPage === 'team' ? 'var(--primary-color)' : 'var(--neutral-600)',
                    fontWeight: currentPage === 'team' ? '600' : '400',
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-md)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Teams
                </a>
              </li>
              <li>
                <a 
                  className={`nav-link ${currentPage === 'comparison' ? 'active' : ''}`} 
                  onClick={() => navigateToPage('comparison')}
                  style={{ 
                    cursor: 'pointer', 
                    color: currentPage === 'comparison' ? 'var(--primary-color)' : 'var(--neutral-600)',
                    fontWeight: currentPage === 'comparison' ? '600' : '400',
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-md)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Compare
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mobile-menu-toggle" onClick={toggleMenu} style={{ display: 'none' }}>
            <i data-feather="menu"></i>
          </div>
        </nav>
        
        {menuOpen && (
          <div className="mobile-menu" style={{ display: 'none' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a onClick={() => { navigateToPage('home'); toggleMenu(); }}>Home</a></li>
              <li><a onClick={() => { navigateToPage('player', { id: 'virat-kohli', name: 'Virat Kohli' }); toggleMenu(); }}>Players</a></li>
              <li><a onClick={() => { navigateToPage('team', { id: 'india', name: 'India' }); toggleMenu(); }}>Teams</a></li>
              <li><a onClick={() => { navigateToPage('comparison'); toggleMenu(); }}>Compare</a></li>
            </ul>
          </div>
        )}
      </div>
      
      <style jsx>{`
        .header {
          background-color: white;
          box-shadow: var(--shadow-sm);
          position: sticky;
          top: 0;
          z-index: 10;
        }
        
        .nav-link:hover {
          background-color: var(--neutral-100);
        }
        
        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }
          
          .mobile-menu-toggle {
            display: block !important;
          }
          
          .mobile-menu {
            display: block !important;
            padding: var(--spacing-md);
            background-color: white;
            box-shadow: var(--shadow-md);
          }
          
          .mobile-menu ul li {
            margin-bottom: var(--spacing-md);
          }
          
          .mobile-menu ul li a {
            display: block;
            padding: var(--spacing-md);
            color: var(--neutral-600);
            border-radius: var(--radius-md);
            cursor: pointer;
          }
          
          .mobile-menu ul li a:hover {
            background-color: var(--neutral-100);
          }
          
          .search-container {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;

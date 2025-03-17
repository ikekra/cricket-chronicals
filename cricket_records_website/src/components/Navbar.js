import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="19" fill="white" stroke="#0066CC" strokeWidth="2"/>
            <path d="M14 10L14 30" stroke="#0066CC" strokeWidth="2" strokeLinecap="round"/>
            <path d="M26 10L26 30" stroke="#0066CC" strokeWidth="2" strokeLinecap="round"/>
            <path d="M10 20L30 20" stroke="#0066CC" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="20" cy="20" r="5" fill="#FF6600"/>
          </svg>
          <span>CricketRecords</span>
        </Link>

        <div className="navbar-links-desktop">
          <Link to="/" className={`navbar-link ${isActive('/')}`}>Home</Link>
          <Link to="/search" className={`navbar-link ${isActive('/search')}`}>Search</Link>
          <Link to="/compare" className={`navbar-link ${isActive('/compare')}`}>Compare</Link>
        </div>

        <button className="navbar-mobile-toggle" onClick={toggleMobileMenu}>
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="navbar-mobile-menu">
          <Link to="/" className={`navbar-mobile-link ${isActive('/')}`} onClick={toggleMobileMenu}>Home</Link>
          <Link to="/search" className={`navbar-mobile-link ${isActive('/search')}`} onClick={toggleMobileMenu}>Search</Link>
          <Link to="/compare" className={`navbar-mobile-link ${isActive('/compare')}`} onClick={toggleMobileMenu}>Compare</Link>
        </div>
      )}

      <style jsx>{`
        .navbar {
          background-color: var(--background-white);
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-md) var(--space-lg);
          max-width: 1440px;
          margin: 0 auto;
        }
        
        .navbar-logo {
          display: flex;
          align-items: center;
          font-weight: var(--font-bold);
          font-size: 1.5rem;
          color: var(--primary-color);
        }
        
        .navbar-logo svg {
          margin-right: var(--space-sm);
        }
        
        .navbar-links-desktop {
          display: flex;
          gap: var(--space-xl);
        }
        
        .navbar-link {
          color: var(--text-primary);
          font-weight: var(--font-medium);
          padding: var(--space-sm) 0;
          position: relative;
        }
        
        .navbar-link.active {
          color: var(--primary-color);
        }
        
        .navbar-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: var(--primary-color);
          border-radius: 2px;
        }
        
        .navbar-mobile-toggle {
          display: none;
          background: none;
          color: var(--text-primary);
          font-size: 1.5rem;
          padding: var(--space-sm);
        }
        
        .navbar-mobile-toggle:hover {
          background: none;
          color: var(--primary-color);
          transform: none;
        }
        
        .navbar-mobile-menu {
          display: none;
          flex-direction: column;
          padding: var(--space-md);
          background-color: var(--background-white);
          border-top: 1px solid var(--border-color);
        }
        
        .navbar-mobile-link {
          padding: var(--space-md);
          font-weight: var(--font-medium);
          color: var(--text-primary);
          border-bottom: 1px solid var(--border-color);
        }
        
        .navbar-mobile-link.active {
          color: var(--primary-color);
          font-weight: var(--font-bold);
        }
        
        @media (max-width: 768px) {
          .navbar-links-desktop {
            display: none;
          }
          
          .navbar-mobile-toggle {
            display: block;
          }
          
          .navbar-mobile-menu {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

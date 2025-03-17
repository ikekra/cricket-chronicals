import React from 'react';
import TrendingRecords from '../components/TrendingRecords';
import FeaturedPlayers from '../components/FeaturedPlayers';
import FeaturedTeams from '../components/FeaturedTeams';
import SearchBar from '../components/SearchBar';

function Home({ navigateToPage }) {
  return (
    <div className="home-page fade-in">
      {/* Hero section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Discover Cricket's Greatest Records</h1>
          <p>Explore comprehensive statistics, player profiles, and historic moments from international cricket.</p>
          
          <div className="hero-search">
            <SearchBar onSearch={(query) => navigateToPage('search', { query })} />
          </div>
          
          <div className="hero-quick-links">
            <button className="btn btn-outline" onClick={() => navigateToPage('player', { id: 'sachin-tendulkar', name: 'Sachin Tendulkar' })}>
              <i data-feather="user"></i> Player Profiles
            </button>
            <button className="btn btn-outline" onClick={() => navigateToPage('team', { id: 'australia', name: 'Australia' })}>
              <i data-feather="users"></i> Team Stats
            </button>
            <button className="btn btn-outline" onClick={() => navigateToPage('comparison')}>
              <i data-feather="bar-chart-2"></i> Compare Players
            </button>
          </div>
        </div>
      </section>
      
      {/* Trending Records */}
      <section className="section">
        <h2 className="section-title">
          <i data-feather="trending-up"></i> Trending Records
        </h2>
        <TrendingRecords navigateToPage={navigateToPage} />
      </section>
      
      {/* Featured Players */}
      <section className="section">
        <h2 className="section-title">
          <i data-feather="award"></i> Featured Players
        </h2>
        <FeaturedPlayers navigateToPage={navigateToPage} />
      </section>
      
      {/* Featured Teams */}
      <section className="section">
        <h2 className="section-title">
          <i data-feather="flag"></i> Featured Teams
        </h2>
        <FeaturedTeams navigateToPage={navigateToPage} />
      </section>
      
      {/* Content categories */}
      <section className="section">
        <h2 className="section-title">
          <i data-feather="layers"></i> Explore Cricket Records
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div className="card category-card">
            <div className="category-icon">
              <i data-feather="bar-chart-2"></i>
            </div>
            <h3>Batting Records</h3>
            <p>Highest scores, best averages, fastest centuries, and more batting milestones.</p>
            <a className="btn btn-outline w-full">View Batting Records</a>
          </div>
          
          <div className="card category-card">
            <div className="category-icon">
              <i data-feather="target"></i>
            </div>
            <h3>Bowling Records</h3>
            <p>Most wickets, best figures, hat-tricks, and other bowling achievements.</p>
            <a className="btn btn-outline w-full">View Bowling Records</a>
          </div>
          
          <div className="card category-card">
            <div className="category-icon">
              <i data-feather="globe"></i>
            </div>
            <h3>Tournament Stats</h3>
            <p>World Cup, T20 World Cup, and other major tournament statistics and records.</p>
            <a className="btn btn-outline w-full">View Tournament Stats</a>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          color: white;
          border-radius: var(--radius-lg);
          padding: var(--spacing-2xl);
          margin-bottom: var(--spacing-2xl);
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::after {
          content: '';
          position: absolute;
          right: -200px;
          top: -100px;
          width: 500px;
          height: 500px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          z-index: 1;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
        }
        
        .hero-content h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: var(--spacing-md);
        }
        
        .hero-content p {
          font-size: 1.1rem;
          margin-bottom: var(--spacing-lg);
          opacity: 0.9;
        }
        
        .hero-search {
          margin-bottom: var(--spacing-lg);
        }
        
        .hero-quick-links {
          display: flex;
          gap: var(--spacing-md);
          flex-wrap: wrap;
        }
        
        .hero-quick-links .btn {
          background-color: rgba(255, 255, 255, 0.15);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(5px);
        }
        
        .hero-quick-links .btn:hover {
          background-color: rgba(255, 255, 255, 0.25);
        }
        
        .category-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .category-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: var(--primary-light);
          color: var(--primary-dark);
          margin-bottom: var(--spacing-md);
        }
        
        .category-icon i {
          width: 24px;
          height: 24px;
        }
        
        .category-card h3 {
          margin-bottom: var(--spacing-sm);
        }
        
        .category-card p {
          margin-bottom: var(--spacing-md);
          flex: 1;
        }
        
        @media (max-width: 768px) {
          .hero-section {
            padding: var(--spacing-xl) var(--spacing-md);
          }
          
          .hero-content h1 {
            font-size: 2rem;
          }
          
          .hero-quick-links {
            flex-direction: column;
          }
          
          .hero-quick-links .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;

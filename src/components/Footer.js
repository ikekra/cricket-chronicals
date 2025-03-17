import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="prototype-note">
        Figma Prototype - Cricket Records Website
      </div>
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>CricketRecords</h4>
            <p>The ultimate destination for cricket statistics, records, and player information.</p>
            <div className="social-icons">
              <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
              <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
              <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
              <a href="#" aria-label="YouTube"><i data-feather="youtube"></i></a>
            </div>
          </div>
          
          <div className="footer-section links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Players</a></li>
              <li><a href="#">Teams</a></li>
              <li><a href="#">Tournaments</a></li>
              <li><a href="#">Rankings</a></li>
            </ul>
          </div>
          
          <div className="footer-section links">
            <h4>Records</h4>
            <ul>
              <li><a href="#">Batting Records</a></li>
              <li><a href="#">Bowling Records</a></li>
              <li><a href="#">Fielding Records</a></li>
              <li><a href="#">Team Records</a></li>
              <li><a href="#">Partnership Records</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Subscribe</h4>
            <p>Get the latest cricket updates and news.</p>
            <div className="subscribe-form">
              <input type="email" placeholder="Your email address" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2023 CricketRecords. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background-color: var(--neutral-800);
          color: var(--neutral-300);
          padding: var(--spacing-xl) 0 var(--spacing-lg);
          margin-top: var(--spacing-2xl);
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-xl);
        }
        
        .footer-section h4 {
          color: white;
          margin-bottom: var(--spacing-md);
          font-size: 1.1rem;
        }
        
        .social-icons {
          display: flex;
          gap: var(--spacing-md);
          margin-top: var(--spacing-md);
        }
        
        .social-icons a {
          color: var(--neutral-400);
          transition: color 0.2s ease;
        }
        
        .social-icons a:hover {
          color: white;
        }
        
        .links ul {
          list-style: none;
          padding: 0;
        }
        
        .links ul li {
          margin-bottom: var(--spacing-sm);
        }
        
        .links ul li a {
          color: var(--neutral-400);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .links ul li a:hover {
          color: white;
        }
        
        .subscribe-form {
          display: flex;
          margin-top: var(--spacing-md);
        }
        
        .subscribe-form input {
          flex: 1;
          padding: 0.5rem;
          border: none;
          border-radius: var(--radius-md) 0 0 var(--radius-md);
        }
        
        .subscribe-form button {
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
        }
        
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: var(--spacing-lg);
          border-top: 1px solid var(--neutral-700);
        }
        
        .footer-bottom p {
          margin: 0;
        }
        
        .footer-bottom-links {
          display: flex;
          gap: var(--spacing-lg);
        }
        
        .footer-bottom-links a {
          color: var(--neutral-400);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }
        
        .footer-bottom-links a:hover {
          color: white;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 480px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: var(--spacing-md);
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;

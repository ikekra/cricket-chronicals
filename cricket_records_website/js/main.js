// main.js - Main JavaScript file for Cricket Records Website

document.addEventListener('DOMContentLoaded', function() {
    console.log('Cricket Records Website - Figma Prototype');
    
    // Initialize tooltips if Bootstrap is available
    if (typeof bootstrap !== 'undefined') {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
    
    // Add hover effects to cards
    initCardHoverEffects();
    
    // Initialize search functionality
    initSearch();
    
    // Initialize filter functionality
    initFilters();
    
    // Initialize comparison tool
    initComparisonTool();
    
    // Initialize charts if on relevant pages
    if (window.location.pathname.includes('player-profile')) {
        initPlayerCharts();
    }
    
    if (window.location.pathname.includes('team-stats')) {
        initTeamCharts();
    }
    
    if (window.location.pathname.includes('comparison')) {
        initComparisonCharts();
    }
});

// Add hover effects to cards for interactive feel
function initCardHoverEffects() {
    const cards = document.querySelectorAll('.trending-card, .player-card, .team-card, .feature-card, .result-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}

// Initialize search functionality
function initSearch() {
    const searchForm = document.querySelector('form[action="/pages/search.html"]');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = this.querySelector('input').value.trim();
            
            if (searchInput) {
                // In a real implementation, this would search the database
                // For prototype, just redirect to search page
                window.location.href = `/pages/search.html?q=${encodeURIComponent(searchInput)}`;
            }
        });
    }
    
    // Handle search page functionality
    if (window.location.pathname.includes('search')) {
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('q');
        
        if (searchQuery) {
            const searchInput = document.querySelector('#mainSearchInput');
            if (searchInput) {
                searchInput.value = searchQuery;
                
                // For prototype, show predefined results
                document.querySelector('.search-results-count').textContent = `Showing results for "${searchQuery}"`;
            }
        }
    }
}

// Initialize filter functionality
function initFilters() {
    const filterOptions = document.querySelectorAll('.filter-option');
    
    filterOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Toggle active class for this option
            this.classList.toggle('active');
            
            // In a real implementation, this would filter the results
            // For prototype, just log the selection
            console.log(`Filter toggled: ${this.textContent.trim()}`);
            
            // If we're on the search page, simulate filtering results
            if (window.location.pathname.includes('search')) {
                // Get all active filters
                const activeFilters = document.querySelectorAll('.filter-option.active');
                const filterCount = activeFilters.length;
                
                // Update the result count based on active filters (simulated)
                const resultsCount = document.querySelector('.search-results-count');
                if (filterCount > 0) {
                    resultsCount.textContent = `Showing ${4 - filterCount} filtered results`;
                } else {
                    const searchInput = document.querySelector('#mainSearchInput');
                    if (searchInput && searchInput.value) {
                        resultsCount.textContent = `Showing results for "${searchInput.value}"`;
                    } else {
                        resultsCount.textContent = 'Showing all results';
                    }
                }
            }
        });
    });
}

// Initialize comparison tool
function initComparisonTool() {
    const comparisonForm = document.querySelector('.comparison-form');
    
    if (comparisonForm) {
        comparisonForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const player1 = document.querySelector('#player1').value.trim();
            const player2 = document.querySelector('#player2').value.trim();
            
            if (player1 && player2) {
                // For prototype, just show the comparison section
                document.querySelector('.comparison-results').style.display = 'block';
                
                // Scroll to the results
                document.querySelector('.comparison-results').scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Update player names in UI
                document.querySelectorAll('.comparison-card-title')[0].textContent = player1;
                document.querySelectorAll('.comparison-card-title')[1].textContent = player2;
                
                // Simulate loading data
                updateComparisonStats();
            }
        });
    }
}

function updateComparisonStats() {
    // For prototype, just toggle winner classes randomly
    const statValues = document.querySelectorAll('.comparison-stat-value');
    
    statValues.forEach(value => {
        // Randomly assign winner class to simulate comparison
        if (Math.random() > 0.5) {
            value.classList.add('winner-value');
        } else {
            value.classList.remove('winner-value');
        }
    });
}

// For prototyping purposes, add a function to simulate tab switching
function switchTab(event, tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-pane');
    tabContents.forEach(tab => {
        tab.classList.remove('show', 'active');
    });
    
    // Show the selected tab content
    document.getElementById(tabId).classList.add('show', 'active');
    
    // Update active state of tab buttons
    const tabButtons = document.querySelectorAll('.nav-link');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Set the clicked button as active
    event.currentTarget.classList.add('active');
}

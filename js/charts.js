// charts.js - Chart initialization for cricket statistics visualization

// Initialize player profile charts
function initPlayerCharts() {
    // Career Progression Chart
    const careerProgressionCtx = document.getElementById('careerProgressionChart');
    if (careerProgressionCtx) {
        new Chart(careerProgressionCtx, {
            type: 'line',
            data: {
                labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
                datasets: [{
                    label: 'Test Runs',
                    data: [0, 150, 600, 1200, 1800, 2400, 3000, 3600, 4200, 4800, 5400, 6000, 6600, 7200, 7800, 8400],
                    borderColor: '#1e88e5',
                    backgroundColor: 'rgba(30, 136, 229, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                }, {
                    label: 'ODI Runs',
                    data: [0, 300, 900, 1800, 2700, 3600, 4500, 5400, 6300, 7200, 8100, 9000, 9900, 10800, 11700, 12600],
                    borderColor: '#26a69a',
                    backgroundColor: 'rgba(38, 166, 154, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                }, {
                    label: 'T20 Runs',
                    data: [0, 100, 400, 800, 1200, 1600, 2000, 2400, 2800, 3200, 3600, 4000, 4400, 4800, 5200, 5600],
                    borderColor: '#f44336',
                    backgroundColor: 'rgba(244, 67, 54, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Career Run Progression'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    },
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Runs'
                        },
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Format Performance Chart
    const formatPerformanceCtx = document.getElementById('formatPerformanceChart');
    if (formatPerformanceCtx) {
        new Chart(formatPerformanceCtx, {
            type: 'radar',
            data: {
                labels: ['Batting Average', 'Strike Rate', 'Centuries', 'Half Centuries', 'Highest Score', 'Consistency'],
                datasets: [{
                    label: 'Test Cricket',
                    data: [50, 65, 75, 85, 90, 80],
                    backgroundColor: 'rgba(30, 136, 229, 0.2)',
                    borderColor: 'rgba(30, 136, 229, 1)',
                    pointBackgroundColor: 'rgba(30, 136, 229, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(30, 136, 229, 1)'
                }, {
                    label: 'ODI Cricket',
                    data: [60, 90, 80, 70, 75, 85],
                    backgroundColor: 'rgba(38, 166, 154, 0.2)',
                    borderColor: 'rgba(38, 166, 154, 1)',
                    pointBackgroundColor: 'rgba(38, 166, 154, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(38, 166, 154, 1)'
                }, {
                    label: 'T20 Cricket',
                    data: [45, 95, 50, 70, 60, 75],
                    backgroundColor: 'rgba(244, 67, 54, 0.2)',
                    borderColor: 'rgba(244, 67, 54, 1)',
                    pointBackgroundColor: 'rgba(244, 67, 54, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(244, 67, 54, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    line: {
                        borderWidth: 2
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Performance Across Formats'
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                }
            }
        });
    }

    // Batting Position Chart
    const battingPositionCtx = document.getElementById('battingPositionChart');
    if (battingPositionCtx) {
        new Chart(battingPositionCtx, {
            type: 'bar',
            data: {
                labels: ['#1', '#2', '#3', '#4', '#5', '#6', '#7'],
                datasets: [{
                    label: 'Test Batting Average',
                    data: [0, 0, 55, 58, 45, 30, 0],
                    backgroundColor: 'rgba(30, 136, 229, 0.8)'
                }, {
                    label: 'ODI Batting Average',
                    data: [0, 45, 60, 58, 35, 20, 0],
                    backgroundColor: 'rgba(38, 166, 154, 0.8)'
                }, {
                    label: 'T20 Batting Average',
                    data: [0, 35, 45, 40, 25, 15, 0],
                    backgroundColor: 'rgba(244, 67, 54, 0.8)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Batting Average by Position'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    },
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Batting Position'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Average'
                        },
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Opposition Performance Chart
    const oppositionPerfCtx = document.getElementById('oppositionPerfChart');
    if (oppositionPerfCtx) {
        new Chart(oppositionPerfCtx, {
            type: 'polarArea',
            data: {
                labels: ['Australia', 'England', 'South Africa', 'New Zealand', 'West Indies', 'Sri Lanka', 'Pakistan', 'Bangladesh'],
                datasets: [{
                    data: [65, 70, 60, 75, 85, 90, 80, 95],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.8)',   // Australia (yellow)
                        'rgba(54, 162, 235, 0.8)',   // England (blue)
                        'rgba(75, 192, 192, 0.8)',   // South Africa (teal)
                        'rgba(34, 34, 34, 0.8)',     // New Zealand (black)
                        'rgba(153, 102, 255, 0.8)',  // West Indies (purple)
                        'rgba(0, 128, 0, 0.8)',      // Sri Lanka (green)
                        'rgba(0, 153, 0, 0.8)',      // Pakistan (green)
                        'rgba(255, 99, 132, 0.8)'    // Bangladesh (red)
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Performance Against Teams (Batting Average)'
                    },
                    legend: {
                        position: 'right'
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                }
            }
        });
    }
}

// Initialize team statistics charts
function initTeamCharts() {
    // Win/Loss Ratio Chart
    const winLossRatioCtx = document.getElementById('winLossRatioChart');
    if (winLossRatioCtx) {
        new Chart(winLossRatioCtx, {
            type: 'doughnut',
            data: {
                labels: ['Wins', 'Losses', 'Draws/Ties'],
                datasets: [{
                    data: [65, 25, 10],
                    backgroundColor: [
                        'rgba(76, 175, 80, 0.8)',    // Green for wins
                        'rgba(244, 67, 54, 0.8)',    // Red for losses
                        'rgba(189, 189, 189, 0.8)'   // Grey for draws/ties
                    ],
                    borderColor: [
                        'rgba(76, 175, 80, 1)',
                        'rgba(244, 67, 54, 1)',
                        'rgba(189, 189, 189, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Overall Win/Loss Ratio'
                    },
                    legend: {
                        position: 'right'
                    }
                }
            }
        });
    }

    // Performance by Year Chart
    const performanceByYearCtx = document.getElementById('performanceByYearChart');
    if (performanceByYearCtx) {
        new Chart(performanceByYearCtx, {
            type: 'line',
            data: {
                labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
                datasets: [{
                    label: 'Winning Percentage',
                    data: [55, 60, 65, 70, 75, 65, 80, 75, 85],
                    borderColor: 'rgba(30, 136, 229, 1)',
                    backgroundColor: 'rgba(30, 136, 229, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Winning Percentage by Year'
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Winning Percentage'
                        },
                        min: 0,
                        max: 100
                    }
                }
            }
        });
    }

    // Format Performance Chart
    const formatPerformanceCtx = document.getElementById('teamFormatPerformanceChart');
    if (formatPerformanceCtx) {
        new Chart(formatPerformanceCtx, {
            type: 'bar',
            data: {
                labels: ['Test', 'ODI', 'T20'],
                datasets: [{
                    label: 'Wins',
                    data: [120, 350, 150],
                    backgroundColor: 'rgba(76, 175, 80, 0.8)'
                }, {
                    label: 'Losses',
                    data: [60, 150, 80],
                    backgroundColor: 'rgba(244, 67, 54, 0.8)'
                }, {
                    label: 'Draws/Ties',
                    data: [40, 20, 10],
                    backgroundColor: 'rgba(189, 189, 189, 0.8)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Performance by Format'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    },
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Format'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Matches'
                        },
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Home vs Away Performance Chart
    const homeAwayCtx = document.getElementById('homeAwayChart');
    if (homeAwayCtx) {
        new Chart(homeAwayCtx, {
            type: 'radar',
            data: {
                labels: ['Overall Win %', 'Batting Average', 'Bowling Average', 'Centuries', 'Five-Wicket Hauls', 'Run Rate'],
                datasets: [{
                    label: 'Home',
                    data: [85, 40, 25, 90, 70, 80],
                    backgroundColor: 'rgba(30, 136, 229, 0.2)',
                    borderColor: 'rgba(30, 136, 229, 1)',
                    pointBackgroundColor: 'rgba(30, 136, 229, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(30, 136, 229, 1)'
                }, {
                    label: 'Away',
                    data: [65, 35, 30, 70, 50, 75],
                    backgroundColor: 'rgba(244, 67, 54, 0.2)',
                    borderColor: 'rgba(244, 67, 54, 1)',
                    pointBackgroundColor: 'rgba(244, 67, 54, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(244, 67, 54, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    line: {
                        borderWidth: 2
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Home vs Away Performance'
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                }
            }
        });
    }
}

// Initialize comparison charts
function initComparisonCharts() {
    // Career Statistics Comparison
    const careerStatsComparisonCtx = document.getElementById('careerStatsComparisonChart');
    if (careerStatsComparisonCtx) {
        new Chart(careerStatsComparisonCtx, {
            type: 'radar',
            data: {
                labels: ['Batting Average', 'Strike Rate', 'Centuries', 'Half Centuries', 'Highest Score', 'Consistency'],
                datasets: [{
                    label: 'Player 1',
                    data: [55, 85, 80, 75, 90, 85],
                    backgroundColor: 'rgba(30, 136, 229, 0.2)',
                    borderColor: 'rgba(30, 136, 229, 1)',
                    pointBackgroundColor: 'rgba(30, 136, 229, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(30, 136, 229, 1)'
                }, {
                    label: 'Player 2',
                    data: [60, 75, 70, 85, 80, 75],
                    backgroundColor: 'rgba(244, 67, 54, 0.2)',
                    borderColor: 'rgba(244, 67, 54, 1)',
                    pointBackgroundColor: 'rgba(244, 67, 54, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(244, 67, 54, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    line: {
                        borderWidth: 2
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Performance Comparison'
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                }
            }
        });
    }

    // Year-by-Year Run Comparison
    const yearlyRunsComparisonCtx = document.getElementById('yearlyRunsComparisonChart');
    if (yearlyRunsComparisonCtx) {
        new Chart(yearlyRunsComparisonCtx, {
            type: 'line',
            data: {
                labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
                datasets: [{
                    label: 'Player 1',
                    data: [1200, 1500, 1100, 1600, 1400, 1300],
                    borderColor: 'rgba(30, 136, 229, 1)',
                    backgroundColor: 'rgba(30, 136, 229, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: false
                }, {
                    label: 'Player 2',
                    data: [1000, 1300, 1600, 1200, 1500, 1400],
                    borderColor: 'rgba(244, 67, 54, 1)',
                    backgroundColor: 'rgba(244, 67, 54, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Yearly Runs Comparison'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Runs'
                        },
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Format Comparison Chart
    const formatComparisonCtx = document.getElementById('formatComparisonChart');
    if (formatComparisonCtx) {
        new Chart(formatComparisonCtx, {
            type: 'bar',
            data: {
                labels: ['Test', 'ODI', 'T20'],
                datasets: [{
                    label: 'Player 1 (Average)',
                    data: [55, 60, 40],
                    backgroundColor: 'rgba(30, 136, 229, 0.8)'
                }, {
                    label: 'Player 2 (Average)',
                    data: [50, 55, 45],
                    backgroundColor: 'rgba(244, 67, 54, 0.8)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Batting Average by Format'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    },
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Format'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Average'
                        },
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Team Comparison Chart (if comparing teams)
    const teamComparisonCtx = document.getElementById('teamComparisonChart');
    if (teamComparisonCtx) {
        new Chart(teamComparisonCtx, {
            type: 'radar',
            data: {
                labels: ['Win Percentage', 'Batting Strength', 'Bowling Strength', 'Fielding', 'Home Record', 'Away Record'],
                datasets: [{
                    label: 'Team 1',
                    data: [85, 80, 75, 85, 90, 70],
                    backgroundColor: 'rgba(30, 136, 229, 0.2)',
                    borderColor: 'rgba(30, 136, 229, 1)',
                    pointBackgroundColor: 'rgba(30, 136, 229, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(30, 136, 229, 1)'
                }, {
                    label: 'Team 2',
                    data: [75, 85, 80, 70, 80, 75],
                    backgroundColor: 'rgba(244, 67, 54, 0.2)',
                    borderColor: 'rgba(244, 67, 54, 1)',
                    pointBackgroundColor: 'rgba(244, 67, 54, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(244, 67, 54, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    line: {
                        borderWidth: 2
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Team Comparison'
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                }
            }
        });
    }
}

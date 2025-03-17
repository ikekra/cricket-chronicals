import React, { useState, useEffect, useRef } from 'react';
import ComparisonWidget from '../components/ComparisonWidget';
import FilterComponent from '../components/FilterComponent';
import Chart from 'chart.js/auto';

function ComparisonTool({ navigateToPage }) {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [comparisonType, setComparisonType] = useState('players'); // 'players' or 'teams'
  const [comparisonMetric, setComparisonMetric] = useState('overall');
  const [comparisonFormat, setComparisonFormat] = useState('all');
  
  const radarChartRef = useRef(null);
  const barChartRef = useRef(null);
  
  // Sample player selection options for the prototype
  const playerOptions = [
    { id: 'virat-kohli', name: 'Virat Kohli', country: 'India' },
    { id: 'joe-root', name: 'Joe Root', country: 'England' },
    { id: 'steve-smith', name: 'Steve Smith', country: 'Australia' },
    { id: 'kane-williamson', name: 'Kane Williamson', country: 'New Zealand' },
    { id: 'babar-azam', name: 'Babar Azam', country: 'Pakistan' },
    { id: 'rohit-sharma', name: 'Rohit Sharma', country: 'India' },
    { id: 'david-warner', name: 'David Warner', country: 'Australia' }
  ];
  
  // Sample team selection options for the prototype
  const teamOptions = [
    { id: 'india', name: 'India' },
    { id: 'australia', name: 'Australia' },
    { id: 'england', name: 'England' },
    { id: 'west-indies', name: 'West Indies' },
    { id: 'south-africa', name: 'South Africa' },
    { id: 'new-zealand', name: 'New Zealand' },
    { id: 'pakistan', name: 'Pakistan' }
  ];
  
  const handleAddPlayer = (playerId) => {
    if (selectedPlayers.length < 3 && !selectedPlayers.find(p => p.id === playerId)) {
      const player = playerOptions.find(p => p.id === playerId);
      if (player) {
        setSelectedPlayers([...selectedPlayers, player]);
      }
    }
  };
  
  const handleRemovePlayer = (playerId) => {
    setSelectedPlayers(selectedPlayers.filter(p => p.id !== playerId));
  };
  
  const handleAddTeam = (teamId) => {
    if (selectedTeams.length < 3 && !selectedTeams.find(t => t.id === teamId)) {
      const team = teamOptions.find(t => t.id === teamId);
      if (team) {
        setSelectedTeams([...selectedTeams, team]);
      }
    }
  };
  
  const handleRemoveTeam = (teamId) => {
    setSelectedTeams(selectedTeams.filter(t => t.id !== teamId));
  };
  
  useEffect(() => {
    // Update charts when selected entities or comparison metrics change
    if (comparisonType === 'players' && selectedPlayers.length > 0) {
      renderPlayerComparisonCharts();
    } else if (comparisonType === 'teams' && selectedTeams.length > 0) {
      renderTeamComparisonCharts();
    }
  }, [selectedPlayers, selectedTeams, comparisonType, comparisonMetric, comparisonFormat]);
  
  const renderPlayerComparisonCharts = () => {
    // Sample data for the radar chart (player skills comparison)
    if (radarChartRef.current && selectedPlayers.length > 0) {
      const existingChart = Chart.getChart(radarChartRef.current);
      if (existingChart) {
        existingChart.destroy();
      }
      
      const skillsData = {
        labels: ['Batting', 'Bowling', 'Fielding', 'Consistency', 'Strike Rate', 'Big Match Performance'],
        datasets: selectedPlayers.map((player, index) => {
          // Sample skill values - would come from API in a real app
          const colors = [
            { bg: 'rgba(37, 99, 235, 0.2)', border: 'rgba(37, 99, 235, 1)' },
            { bg: 'rgba(16, 185, 129, 0.2)', border: 'rgba(16, 185, 129, 1)' },
            { bg: 'rgba(239, 68, 68, 0.2)', border: 'rgba(239, 68, 68, 1)' }
          ];
          
          // Generate semi-realistic but varying skill values based on player name
          const getSkillValue = (skill, name) => {
            // Using the sum of char codes to create a semi-random but consistent value
            const charSum = name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
            // Generate a value between 50-95 that will be consistent for a given name and skill
            const baseValue = 50 + ((charSum * (skill.length + 1)) % 45);
            return baseValue;
          };
          
          return {
            label: player.name,
            data: [
              getSkillValue('Batting', player.name),
              getSkillValue('Bowling', player.name),
              getSkillValue('Fielding', player.name),
              getSkillValue('Consistency', player.name),
              getSkillValue('StrikeRate', player.name),
              getSkillValue('BigMatch', player.name)
            ],
            backgroundColor: colors[index].bg,
            borderColor: colors[index].border,
            borderWidth: 2,
            pointBackgroundColor: colors[index].border,
            pointRadius: 4
          };
        })
      };
      
      new Chart(radarChartRef.current, {
        type: 'radar',
        data: skillsData,
        options: {
          scales: {
            r: {
              min: 0,
              max: 100,
              ticks: {
                stepSize: 20
              }
            }
          },
          plugins: {
            title: {
              display: true,
              text: 'Player Skills Comparison'
            }
          }
        }
      });
    }
    
    // Sample data for the bar chart (statistics comparison)
    if (barChartRef.current && selectedPlayers.length > 0) {
      const existingChart = Chart.getChart(barChartRef.current);
      if (existingChart) {
        existingChart.destroy();
      }
      
      // Key statistics based on selected metric
      let metricLabels, metricTitle, metricData;
      
      if (comparisonMetric === 'overall') {
        metricLabels = ['Average', 'Strike Rate', 'Centuries', 'Half Centuries', 'Highest Score'];
        metricTitle = 'Overall Batting Statistics';
        
        // Sample realistic data for each player
        metricData = selectedPlayers.map((player, index) => {
          const colors = [
            'rgba(37, 99, 235, 0.8)',
            'rgba(16, 185, 129, 0.8)',
            'rgba(239, 68, 68, 0.8)'
          ];
          
          // Generate semi-realistic stat values
          const getStatValue = (stat, name) => {
            const charSum = name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
            
            if (stat === 'Average') {
              return 30 + ((charSum * 7) % 25); // Between 30-55
            } else if (stat === 'Strike Rate') {
              return 70 + ((charSum * 3) % 40); // Between 70-110
            } else if (stat === 'Centuries') {
              return 5 + ((charSum) % 25); // Between 5-30
            } else if (stat === 'Half Centuries') {
              return 20 + ((charSum * 2) % 35); // Between 20-55
            } else if (stat === 'Highest Score') {
              return 150 + ((charSum * 5) % 150); // Between 150-300
            }
            return 50;
          };
          
          return {
            label: player.name,
            data: metricLabels.map(label => getStatValue(label, player.name)),
            backgroundColor: colors[index],
            borderColor: colors[index].replace('0.8', '1'),
            borderWidth: 1
          };
        });
      } else if (comparisonMetric === 'batting') {
        metricLabels = ['Test Avg', 'ODI Avg', 'T20 Avg', 'Test SR', 'ODI SR', 'T20 SR'];
        metricTitle = 'Format-wise Batting Statistics';
        
        // Generate format-specific data
        metricData = selectedPlayers.map((player, index) => {
          const colors = [
            'rgba(37, 99, 235, 0.8)',
            'rgba(16, 185, 129, 0.8)',
            'rgba(239, 68, 68, 0.8)'
          ];
          
          // Generate values based on player name for consistency
          const charSum = player.name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
          const testAvg = 35 + ((charSum * 5) % 25);
          const odiAvg = 30 + ((charSum * 7) % 25);
          const t20Avg = 25 + ((charSum * 9) % 20);
          const testSR = 45 + ((charSum * 2) % 25);
          const odiSR = 75 + ((charSum * 3) % 30);
          const t20SR = 115 + ((charSum * 4) % 55);
          
          return {
            label: player.name,
            data: [testAvg, odiAvg, t20Avg, testSR, odiSR, t20SR],
            backgroundColor: colors[index],
            borderColor: colors[index].replace('0.8', '1'),
            borderWidth: 1
          };
        });
      } else if (comparisonMetric === 'bowling') {
        metricLabels = ['Test Economy', 'ODI Economy', 'T20 Economy', 'Test Wickets', 'ODI Wickets', 'T20 Wickets'];
        metricTitle = 'Bowling Statistics Comparison';
        
        // Generate bowling data
        metricData = selectedPlayers.map((player, index) => {
          const colors = [
            'rgba(37, 99, 235, 0.8)',
            'rgba(16, 185, 129, 0.8)',
            'rgba(239, 68, 68, 0.8)'
          ];
          
          // Generate values based on player name
          const charSum = player.name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
          const testEcon = 2.5 + ((charSum * 2) % 1.5);
          const odiEcon = 4.2 + ((charSum * 3) % 2);
          const t20Econ = 7 + ((charSum * 5) % 3);
          const testWickets = 50 + ((charSum * 7) % 250);
          const odiWickets = 75 + ((charSum * 6) % 200);
          const t20Wickets = 30 + ((charSum * 8) % 100);
          
          return {
            label: player.name,
            data: [testEcon, odiEcon, t20Econ, testWickets, odiWickets, t20Wickets],
            backgroundColor: colors[index],
            borderColor: colors[index].replace('0.8', '1'),
            borderWidth: 1
          };
        });
      }
      
      new Chart(barChartRef.current, {
        type: 'bar',
        data: {
          labels: metricLabels,
          datasets: metricData
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: metricTitle
            }
          }
        }
      });
    }
  };
  
  const renderTeamComparisonCharts = () => {
    // Similar implementation for team comparison charts
    if (radarChartRef.current && selectedTeams.length > 0) {
      const existingChart = Chart.getChart(radarChartRef.current);
      if (existingChart) {
        existingChart.destroy();
      }
      
      const teamSkillsData = {
        labels: ['Batting Strength', 'Bowling Attack', 'Fielding', 'Home Performance', 'Away Performance', 'Consistency'],
        datasets: selectedTeams.map((team, index) => {
          const colors = [
            { bg: 'rgba(37, 99, 235, 0.2)', border: 'rgba(37, 99, 235, 1)' },
            { bg: 'rgba(16, 185, 129, 0.2)', border: 'rgba(16, 185, 129, 1)' },
            { bg: 'rgba(239, 68, 68, 0.2)', border: 'rgba(239, 68, 68, 1)' }
          ];
          
          // Generate consistent team attributes based on team name
          const getTeamValue = (attribute, name) => {
            const charSum = name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
            const baseValue = 60 + ((charSum * (attribute.length)) % 35);
            return baseValue;
          };
          
          return {
            label: team.name,
            data: [
              getTeamValue('Batting', team.name),
              getTeamValue('Bowling', team.name),
              getTeamValue('Fielding', team.name),
              getTeamValue('HomePerf', team.name),
              getTeamValue('AwayPerf', team.name),
              getTeamValue('Consistency', team.name)
            ],
            backgroundColor: colors[index].bg,
            borderColor: colors[index].border,
            borderWidth: 2,
            pointBackgroundColor: colors[index].border,
            pointRadius: 4
          };
        })
      };
      
      new Chart(radarChartRef.current, {
        type: 'radar',
        data: teamSkillsData,
        options: {
          scales: {
            r: {
              min: 0,
              max: 100,
              ticks: {
                stepSize: 20
              }
            }
          },
          plugins: {
            title: {
              display: true,
              text: 'Team Performance Attributes'
            }
          }
        }
      });
    }
    
    // Bar chart for team statistics
    if (barChartRef.current && selectedTeams.length > 0) {
      const existingChart = Chart.getChart(barChartRef.current);
      if (existingChart) {
        existingChart.destroy();
      }
      
      // Different metrics based on what we're comparing
      let metricLabels, metricTitle, metricData;
      
      if (comparisonMetric === 'overall') {
        metricLabels = ['Win %', 'Home Win %', 'Away Win %', 'Avg Runs/Match', 'Avg Wickets/Match'];
        metricTitle = 'Overall Team Performance';
        
        metricData = selectedTeams.map((team, index) => {
          const colors = [
            'rgba(37, 99, 235, 0.8)',
            'rgba(16, 185, 129, 0.8)',
            'rgba(239, 68, 68, 0.8)'
          ];
          
          // Generate values based on team name
          const charSum = team.name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
          const winPct = 40 + ((charSum * 2) % 35);
          const homeWinPct = winPct + 15;
          const awayWinPct = winPct - 10;
          const avgRuns = 250 + ((charSum * 3) % 100);
          const avgWickets = 5 + ((charSum * 5) % 5);
          
          return {
            label: team.name,
            data: [winPct, homeWinPct, awayWinPct, avgRuns, avgWickets],
            backgroundColor: colors[index],
            borderColor: colors[index].replace('0.8', '1'),
            borderWidth: 1
          };
        });
      } else if (comparisonMetric === 'batting') {
        metricLabels = ['Test Runs/Inning', 'ODI Runs/Inning', 'T20 Runs/Inning', '200+ Scores', '300+ Scores', '400+ Scores'];
        metricTitle = 'Team Batting Comparison';
        
        metricData = selectedTeams.map((team, index) => {
          const colors = [
            'rgba(37, 99, 235, 0.8)',
            'rgba(16, 185, 129, 0.8)',
            'rgba(239, 68, 68, 0.8)'
          ];
          
          // Generate values based on team name
          const charSum = team.name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
          const testRuns = 300 + ((charSum * 2) % 100);
          const odiRuns = 250 + ((charSum * 3) % 100);
          const t20Runs = 150 + ((charSum * 5) % 50);
          const scores200 = 25 + ((charSum * 2) % 50);
          const scores300 = 10 + ((charSum * 3) % 40);
          const scores400 = 2 + ((charSum * 7) % 15);
          
          return {
            label: team.name,
            data: [testRuns, odiRuns, t20Runs, scores200, scores300, scores400],
            backgroundColor: colors[index],
            borderColor: colors[index].replace('0.8', '1'),
            borderWidth: 1
          };
        });
      } else if (comparisonMetric === 'bowling') {
        metricLabels = ['Test Bowling Avg', 'ODI Bowling Avg', 'T20 Bowling Avg', 'Test Economy', 'ODI Economy', 'T20 Economy'];
        metricTitle = 'Team Bowling Comparison';
        
        metricData = selectedTeams.map((team, index) => {
          const colors = [
            'rgba(37, 99, 235, 0.8)',
            'rgba(16, 185, 129, 0.8)',
            'rgba(239, 68, 68, 0.8)'
          ];
          
          // Generate values based on team name
          const charSum = team.name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
          const testBowlAvg = 25 + ((charSum * 2) % 15);
          const odiBowlAvg = 28 + ((charSum * 3) % 12);
          const t20BowlAvg = 22 + ((charSum * 5) % 10);
          const testEcon = 2.5 + ((charSum * 2) % 1.5);
          const odiEcon = 4.5 + ((charSum * 3) % 2);
          const t20Econ = 7.5 + ((charSum * 5) % 3);
          
          return {
            label: team.name,
            data: [testBowlAvg, odiBowlAvg, t20BowlAvg, testEcon, odiEcon, t20Econ],
            backgroundColor: colors[index],
            borderColor: colors[index].replace('0.8', '1'),
            borderWidth: 1
          };
        });
      }
      
      new Chart(barChartRef.current, {
        type: 'bar',
        data: {
          labels: metricLabels,
          datasets: metricData
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: metricTitle
            }
          }
        }
      });
    }
  };

  return (
    <div className="comparison-tool fade-in">
      <div className="back-button" onClick={() => navigateToPage('home')}>
        <i data-feather="arrow-left"></i> Back
      </div>
      
      <h1 className="page-title">
        <i data-feather="bar-chart-2"></i> Statistical Comparison Tool
      </h1>
      
      <div className="comparison-container">
        <div className="comparison-header">
          <div className="comparison-type-toggle">
            <button 
              className={`comparison-type-btn ${comparisonType === 'players' ? 'active' : ''}`}
              onClick={() => setComparisonType('players')}
            >
              <i data-feather="user"></i> Compare Players
            </button>
            
            <button 
              className={`comparison-type-btn ${comparisonType === 'teams' ? 'active' : ''}`}
              onClick={() => setComparisonType('teams')}
            >
              <i data-feather="users"></i> Compare Teams
            </button>
          </div>
          
          <div className="comparison-filters">
            <FilterComponent 
              label="Format" 
              options={[
                { value: 'all', label: 'All Formats' },
                { value: 'test', label: 'Test' },
                { value: 'odi', label: 'ODI' },
                { value: 't20', label: 'T20' }
              ]}
              value={comparisonFormat}
              onChange={(value) => setComparisonFormat(value)}
            />
            
            <FilterComponent 
              label="Statistics" 
              options={[
                { value: 'overall', label: 'Overall Statistics' },
                { value: 'batting', label: 'Batting Statistics' },
                { value: 'bowling', label: 'Bowling Statistics' }
              ]}
              value={comparisonMetric}
              onChange={(value) => setComparisonMetric(value)}
            />
          </div>
        </div>
        
        <div className="comparison-selection-area">
          <div className="selection-panel">
            <h3>
              {comparisonType === 'players' ? 'Select Players to Compare' : 'Select Teams to Compare'}
              <span className="selection-count">
                {comparisonType === 'players' 
                  ? `${selectedPlayers.length}/3 selected` 
                  : `${selectedTeams.length}/3 selected`}
              </span>
            </h3>
            
            {comparisonType === 'players' ? (
              <div className="selection-grid">
                {playerOptions.map(player => (
                  <div 
                    key={player.id} 
                    className={`selection-item ${selectedPlayers.find(p => p.id === player.id) ? 'selected' : ''}`}
                    onClick={() => {
                      if (selectedPlayers.find(p => p.id === player.id)) {
                        handleRemovePlayer(player.id);
                      } else {
                        handleAddPlayer(player.id);
                      }
                    }}
                  >
                    <div className="avatar-placeholder">
                      {player.name.charAt(0)}
                    </div>
                    <div className="selection-details">
                      <h4>{player.name}</h4>
                      <p>{player.country}</p>
                    </div>
                    <div className="selection-action">
                      {selectedPlayers.find(p => p.id === player.id) ? (
                        <i data-feather="check-circle"></i>
                      ) : (
                        <i data-feather="plus-circle"></i>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="selection-grid">
                {teamOptions.map(team => (
                  <div 
                    key={team.id} 
                    className={`selection-item ${selectedTeams.find(t => t.id === team.id) ? 'selected' : ''}`}
                    onClick={() => {
                      if (selectedTeams.find(t => t.id === team.id)) {
                        handleRemoveTeam(team.id);
                      } else {
                        handleAddTeam(team.id);
                      }
                    }}
                  >
                    <div className="avatar-placeholder team">
                      {team.name.charAt(0)}
                    </div>
                    <div className="selection-details">
                      <h4>{team.name}</h4>
                    </div>
                    <div className="selection-action">
                      {selectedTeams.find(t => t.id === team.id) ? (
                        <i data-feather="check-circle"></i>
                      ) : (
                        <i data-feather="plus-circle"></i>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="comparison-result">
            <div className="selected-entities">
              {comparisonType === 'players' ? (
                selectedPlayers.length > 0 ? (
                  <div className="selected-list">
                    {selectedPlayers.map((player, index) => (
                      <div key={player.id} className="selected-entity">
                        <div className="avatar-placeholder" style={{ 
                          backgroundColor: index === 0 ? 'rgba(37, 99, 235, 0.8)' : 
                                           index === 1 ? 'rgba(16, 185, 129, 0.8)' : 
                                           'rgba(239, 68, 68, 0.8)'
                        }}>
                          {player.name.charAt(0)}
                        </div>
                        <div className="entity-name">{player.name}</div>
                        <button className="remove-entity" onClick={() => handleRemovePlayer(player.id)}>
                          <i data-feather="x"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="empty-selection">
                    <i data-feather="users"></i>
                    <p>Select players to compare their statistics</p>
                  </div>
                )
              ) : (
                selectedTeams.length > 0 ? (
                  <div className="selected-list">
                    {selectedTeams.map((team, index) => (
                      <div key={team.id} className="selected-entity">
                        <div className="avatar-placeholder team" style={{ 
                          backgroundColor: index === 0 ? 'rgba(37, 99, 235, 0.8)' : 
                                           index === 1 ? 'rgba(16, 185, 129, 0.8)' : 
                                           'rgba(239, 68, 68, 0.8)'
                        }}>
                          {team.name.charAt(0)}
                        </div>
                        <div className="entity-name">{team.name}</div>
                        <button className="remove-entity" onClick={() => handleRemoveTeam(team.id)}>
                          <i data-feather="x"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="empty-selection">
                    <i data-feather="flag"></i>
                    <p>Select teams to compare their statistics</p>
                  </div>
                )
              )}
            </div>
            
            {(comparisonType === 'players' && selectedPlayers.length > 0) || 
             (comparisonType === 'teams' && selectedTeams.length > 0) ? (
              <div className="charts-container">
                <div className="chart-wrapper">
                  <canvas ref={radarChartRef}></canvas>
                </div>
                
                <div className="chart-wrapper">
                  <canvas ref={barChartRef}></canvas>
                </div>
              </div>
            ) : (
              <div className="no-data-placeholder">
                <i data-feather="bar-chart-2" className="placeholder-icon"></i>
                <p>Select at least one {comparisonType === 'players' ? 'player' : 'team'} to view comparison charts</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {(comparisonType === 'players' && selectedPlayers.length > 0) && (
        <div className="detailed-comparison">
          <h2>Detailed Statistics Comparison</h2>
          
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Statistic</th>
                  {selectedPlayers.map(player => (
                    <th key={player.id}>{player.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Matches Played</td>
                  {selectedPlayers.map(player => (
                    <td key={player.id}>
                      {Math.floor(100 + (player.name.length * 10))}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Total Runs</td>
                  {selectedPlayers.map(player => (
                    <td key={player.id}>
                      {Math.floor(5000 + (player.name.length * 1000))}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Batting Average</td>
                  {selectedPlayers.map(player => (
                    <td key={player.id}>
                      {(35 + (player.name.charCodeAt(0) % 20)).toFixed(2)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Strike Rate</td>
                  {selectedPlayers.map(player => (
                    <td key={player.id}>
                      {(70 + (player.name.charCodeAt(1) % 40)).toFixed(2)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Centuries</td>
                  {selectedPlayers.map(player => (
                    <td key={player.id}>
                      {Math.floor(10 + (player.name.charCodeAt(0) % 20))}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Half Centuries</td>
                  {selectedPlayers.map(player => (
                    <td key={player.id}>
                      {Math.floor(30 + (player.name.charCodeAt(1) % 30))}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Highest Score</td>
                  {selectedPlayers.map(player => (
                    <td key={player.id}>
                      {Math.floor(150 + (player.name.charCodeAt(2) % 150))}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Wickets Taken</td>
                  {selectedPlayers.map(player => (
                    <td key={player.id}>
                      {Math.floor(50 + (player.name.charCodeAt(0) % 250))}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Bowling Average</td>
                  {selectedPlayers.map(player => (
                    <td key={player.id}>
                      {(25 + (player.name.charCodeAt(0) % 15)).toFixed(2)}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Economy Rate</td>
                  {selectedPlayers.map(player => (
                    <td key={player.id}>
                      {(3 + (player.name.charCodeAt(0) % 3)).toFixed(2)}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {(comparisonType === 'teams' && selectedTeams.length > 0) && (
        <div className="detailed-comparison">
          <h2>Detailed Team Comparison</h2>
          
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Statistic</th>
                  {selectedTeams.map(team => (
                    <th key={team.id}>{team.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total Matches</td>
                  {selectedTeams.map(team => (
                    <td key={team.id}>
                      {Math.floor(500 + (team.name.length * 100))}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Wins</td>
                  {selectedTeams.map(team => (
                    <td key={team.id}>
                      {Math.floor(250 + (team.name.charCodeAt(0) % 150))}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Win Percentage</td>
                  {selectedTeams.map(team => (
                    <td key={team.id}>
                      {(45 + (team.name.charCodeAt(0) % 25)).toFixed(1)}%
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>ICC Trophies</td>
                  {selectedTeams.map(team => (
                    <td key={team.id}>
                      {Math.floor(1 + (team.name.charCodeAt(0) % 5))}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Highest Team Score</td>
                  {selectedTeams.map(team => (
                    <td key={team.id}>
                      {Math.floor(400 + (team.name.charCodeAt(0) % 200))}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Lowest Team Score</td>
                  {selectedTeams.map(team => (
                    <td key={team.id}>
                      {Math.floor(30 + (team.name.charCodeAt(0) % 100))}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Current Ranking (Test)</td>
                  {selectedTeams.map(team => (
                    <td key={team.id}>
                      {Math.floor(1 + (team.name.charCodeAt(0) % 8))}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Current Ranking (ODI)</td>
                  {selectedTeams.map(team => (
                    <td key={team.id}>
                      {Math.floor(1 + (team.name.charCodeAt(1) % 8))}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Current Ranking (T20)</td>
                  {selectedTeams.map(team => (
                    <td key={team.id}>
                      {Math.floor(1 + (team.name.charCodeAt(2) % 8))}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .comparison-tool {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .back-button {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-sm);
          color: var(--neutral-600);
          margin-bottom: var(--spacing-md);
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
        
        .comparison-container {
          background-color: white;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          padding: var(--spacing-xl);
          margin-bottom: var(--spacing-xl);
        }
        
        .comparison-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: var(--spacing-xl);
          flex-wrap: wrap;
          gap: var(--spacing-lg);
        }
        
        .comparison-type-toggle {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }
        
        .comparison-type-btn {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: var(--radius-md);
          border: 1px solid var(--neutral-300);
          background-color: var(--neutral-100);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .comparison-type-btn.active {
          background-color: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
        }
        
        .comparison-filters {
          display: flex;
          gap: var(--spacing-md);
          align-items: center;
        }
        
        .comparison-selection-area {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--spacing-xl);
        }
        
        .selection-panel {
          background-color: var(--neutral-50);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          border: 1px solid var(--neutral-200);
        }
        
        .selection-panel h3 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-md);
          font-size: 1.1rem;
        }
        
        .selection-count {
          font-size: 0.9rem;
          color: var(--neutral-500);
        }
        
        .selection-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-sm);
          max-height: 400px;
          overflow-y: auto;
        }
        
        .selection-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-sm);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }
        
        .selection-item:hover {
          background-color: var(--neutral-100);
        }
        
        .selection-item.selected {
          background-color: var(--primary-light);
          border-color: var(--primary-color);
        }
        
        .avatar-placeholder {
          width: 40px;
          height: 40px;
          background-color: var(--primary-color);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 600;
        }
        
        .avatar-placeholder.team {
          border-radius: var(--radius-md);
          background-color: var(--secondary-color);
        }
        
        .selection-details {
          flex: 1;
        }
        
        .selection-details h4 {
          margin: 0;
          font-size: 1rem;
        }
        
        .selection-details p {
          margin: 0;
          font-size: 0.85rem;
          color: var(--neutral-500);
        }
        
        .selection-action {
          color: var(--neutral-400);
        }
        
        .selection-item.selected .selection-action {
          color: var(--primary-color);
        }
        
        .comparison-result {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }
        
        .selected-entities {
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          background-color: var(--neutral-50);
          border: 1px solid var(--neutral-200);
        }
        
        .selected-list {
          display: flex;
          gap: var(--spacing-md);
          flex-wrap: wrap;
        }
        
        .selected-entity {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-sm) var(--spacing-md);
          background-color: white;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
        }
        
        .entity-name {
          font-weight: 500;
        }
        
        .remove-entity {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: none;
          background-color: var(--neutral-200);
          color: var(--neutral-600);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .remove-entity:hover {
          background-color: var(--red);
          color: white;
        }
        
        .empty-selection {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-md);
          color: var(--neutral-400);
          padding: var(--spacing-lg);
        }
        
        .empty-selection i {
          width: 32px;
          height: 32px;
        }
        
        .empty-selection p {
          margin: 0;
          text-align: center;
        }
        
        .charts-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-lg);
        }
        
        .chart-wrapper {
          background-color: white;
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
        }
        
        .no-data-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: white;
          border-radius: var(--radius-md);
          padding: var(--spacing-2xl);
          gap: var(--spacing-lg);
          color: var(--neutral-400);
        }
        
        .placeholder-icon {
          width: 48px;
          height: 48px;
        }
        
        .detailed-comparison {
          background-color: white;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          padding: var(--spacing-xl);
          margin-bottom: var(--spacing-xl);
        }
        
        .detailed-comparison h2 {
          margin-bottom: var(--spacing-lg);
        }
        
        .comparison-table-wrapper {
          overflow-x: auto;
        }
        
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .comparison-table th,
        .comparison-table td {
          padding: var(--spacing-md);
          border-bottom: 1px solid var(--neutral-200);
          text-align: left;
        }
        
        .comparison-table th {
          background-color: var(--neutral-100);
          font-weight: 600;
        }
        
        .comparison-table tbody tr:hover {
          background-color: var(--neutral-50);
        }
        
        @media (max-width: 1024px) {
          .comparison-selection-area {
            grid-template-columns: 1fr;
          }
          
          .charts-container {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .comparison-header {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .comparison-filters {
            width: 100%;
            flex-wrap: wrap;
          }
          
          .comparison-type-toggle {
            width: 100%;
          }
          
          .comparison-type-btn {
            flex: 1;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}

export default ComparisonTool;

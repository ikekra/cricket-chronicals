import React, { useEffect, forwardRef } from 'react';
import Chart from 'chart.js/auto';

const CareerGraph = forwardRef((props, ref) => {
  useEffect(() => {
    if (ref.current) {
      const existingChart = Chart.getChart(ref.current);
      if (existingChart) {
        existingChart.destroy();
      }
      
      // For the UI prototype, we'll use sample data to show a career progression
      const years = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];
      
      // Generate semi-realistic data with an upward trend and some variation
      const generateProgressionData = () => {
        let average = 30; // Start with a decent average
        return years.map((year, index) => {
          // Gradual improvement with some ups and downs
          const change = Math.random() * 8 - 2; // Random change between -2 and 6
          average += change;
          
          // Cap at a realistic value and ensure no negative values
          average = Math.min(Math.max(average, 20), 65);
          return average;
        });
      };
      
      const battingAvgData = generateProgressionData();
      
      // Strike rate tends to improve over career
      const generateStrikeRateData = () => {
        let strikeRate = 70; // Starting strike rate
        return years.map((year, index) => {
          const change = Math.random() * 6 - 1; // Random change between -1 and 5
          strikeRate += change;
          
          // Cap at realistic values for this metric
          strikeRate = Math.min(Math.max(strikeRate, 65), 110);
          return strikeRate;
        });
      };
      
      const strikeRateData = generateStrikeRateData();
      
      new Chart(ref.current, {
        type: 'line',
        data: {
          labels: years,
          datasets: [
            {
              label: 'Batting Average',
              data: battingAvgData,
              backgroundColor: 'rgba(37, 99, 235, 0.1)',
              borderColor: 'rgba(37, 99, 235, 1)',
              borderWidth: 2,
              fill: true,
              tension: 0.4,
              yAxisID: 'y'
            },
            {
              label: 'Strike Rate',
              data: strikeRateData,
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              borderColor: 'rgba(16, 185, 129, 1)',
              borderWidth: 2,
              fill: true,
              tension: 0.4,
              yAxisID: 'y1'
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Career Progression'
            },
            tooltip: {
              callbacks: {
                title: function(context) {
                  return `Year: ${context[0].label}`;
                },
                label: function(context) {
                  let label = context.dataset.label || '';
                  if (label) {
                    label += ': ';
                  }
                  if (context.parsed.y !== null) {
                    label += context.parsed.y.toFixed(2);
                  }
                  return label;
                }
              }
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              },
              title: {
                display: true,
                text: 'Year'
              }
            },
            y: {
              type: 'linear',
              display: true,
              position: 'left',
              title: {
                display: true,
                text: 'Batting Average'
              },
              min: 0,
              max: 70
            },
            y1: {
              type: 'linear',
              display: true,
              position: 'right',
              title: {
                display: true,
                text: 'Strike Rate'
              },
              min: 50,
              max: 120,
              grid: {
                drawOnChartArea: false, // only want the grid lines for one axis to show up
              },
            }
          },
          interaction: {
            mode: 'index',
            intersect: false,
          }
        }
      });
    }
    
    return () => {
      if (ref.current) {
        const existingChart = Chart.getChart(ref.current);
        if (existingChart) {
          existingChart.destroy();
        }
      }
    };
  }, []);

  return (
    <div className="career-graph">
      <div className="chart-container">
        <canvas ref={ref}></canvas>
      </div>
      
      <div className="career-milestones">
        <h3>Key Career Milestones</h3>
        <div className="milestone-timeline">
          <div className="milestone">
            <div className="milestone-year">2008</div>
            <div className="milestone-content">
              <div className="milestone-dot"></div>
              <div className="milestone-title">International Debut</div>
              <div className="milestone-desc">Made ODI debut against Sri Lanka</div>
            </div>
          </div>
          
          <div className="milestone">
            <div className="milestone-year">2011</div>
            <div className="milestone-content">
              <div className="milestone-dot"></div>
              <div className="milestone-title">World Cup Champion</div>
              <div className="milestone-desc">Won the ICC Cricket World Cup</div>
            </div>
          </div>
          
          <div className="milestone">
            <div className="milestone-year">2017</div>
            <div className="milestone-content">
              <div className="milestone-dot"></div>
              <div className="milestone-title">Captaincy</div>
              <div className="milestone-desc">Appointed as captain in all formats</div>
            </div>
          </div>
          
          <div className="milestone">
            <div className="milestone-year">2023</div>
            <div className="milestone-content">
              <div className="milestone-dot"></div>
              <div className="milestone-title">10,000 Test Runs</div>
              <div className="milestone-desc">Reached 10,000 runs milestone in Test cricket</div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .career-graph {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xl);
        }
        
        .chart-container {
          height: 400px;
          width: 100%;
        }
        
        .career-milestones h3 {
          margin-bottom: var(--spacing-md);
          font-size: 1.2rem;
        }
        
        .milestone-timeline {
          position: relative;
          padding-left: 20px;
        }
        
        .milestone-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: var(--primary-light);
        }
        
        .milestone {
          display: flex;
          margin-bottom: var(--spacing-lg);
          position: relative;
        }
        
        .milestone:last-child {
          margin-bottom: 0;
        }
        
        .milestone-year {
          min-width: 80px;
          font-weight: 600;
          color: var(--primary-color);
          padding-top: 3px;
        }
        
        .milestone-content {
          position: relative;
        }
        
        .milestone-dot {
          position: absolute;
          left: -24.5px;
          top: 6px;
          width: 12px;
          height: 12px;
          background-color: var(--primary-color);
          border-radius: 50%;
          border: 2px solid white;
        }
        
        .milestone-title {
          font-weight: 600;
          margin-bottom: var(--spacing-xs);
        }
        
        .milestone-desc {
          color: var(--neutral-600);
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .milestone {
            flex-direction: column;
          }
          
          .milestone-year {
            margin-bottom: var(--spacing-xs);
          }
        }
      `}</style>
    </div>
  );
});

CareerGraph.displayName = 'CareerGraph';

export default CareerGraph;

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function PerformanceChart({ title, data, type = 'bar', height = 300 }) {
  const chartRef = useRef(null);
  
  useEffect(() => {
    if (chartRef.current) {
      const existingChart = Chart.getChart(chartRef.current);
      if (existingChart) {
        existingChart.destroy();
      }
      
      // For the UI prototype, we'll use sample data
      const sampleData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Performance',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: 'rgba(37, 99, 235, 0.5)',
            borderColor: 'rgba(37, 99, 235, 1)',
            borderWidth: 2,
            fill: type === 'line' ? true : false,
            tension: 0.3
          }
        ]
      };
      
      // Override with provided data if any
      const chartData = data || sampleData;
      
      new Chart(chartRef.current, {
        type: type,
        data: chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
            title: {
              display: !!title,
              text: title || ''
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
    
    return () => {
      const existingChart = Chart.getChart(chartRef.current);
      if (existingChart) {
        existingChart.destroy();
      }
    };
  }, [data, title, type]);

  return (
    <div className="performance-chart">
      <div className="chart-container" style={{ height: `${height}px` }}>
        <canvas ref={chartRef}></canvas>
      </div>
      
      <style jsx>{`
        .performance-chart {
          width: 100%;
          background-color: white;
          border-radius: var(--radius-md);
          padding: var(--spacing-md);
          box-shadow: var(--shadow-sm);
        }
        
        .chart-container {
          position: relative;
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default PerformanceChart;

import React, { useEffect, useRef } from 'react';

const StatChart = ({ 
  type = 'line', // line, bar, pie, radar
  data,
  labels,
  title,
  height = '300px',
  width = '100%',
  options = {}
}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;
    
    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    
    const ctx = chartRef.current.getContext('2d');
    
    // Prepare data for Chart.js
    const chartData = {
      labels: labels,
      datasets: Array.isArray(data.datasets) ? data.datasets : [{
        label: data.label || 'Data',
        data: data.values,
        backgroundColor: data.backgroundColor || getDefaultColors(type, data.values.length),
        borderColor: data.borderColor || getDefaultBorderColors(type, data.values.length),
        borderWidth: 2,
        fill: type === 'line' ? (data.fill || false) : undefined,
        tension: type === 'line' ? 0.4 : undefined
      }]
    };
    
    // Default chart options with overrides
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: type === 'pie' || type === 'radar' || (data.datasets && data.datasets.length > 1),
          position: 'top',
        },
        title: {
          display: !!title,
          text: title,
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        tooltip: {
          enabled: true,
          mode: type === 'pie' ? 'nearest' : 'index',
          intersect: false
        }
      },
      scales: type !== 'pie' && type !== 'radar' ? {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        }
      } : undefined,
      ...options
    };
    
    // Create chart
    chartInstance.current = new Chart(ctx, {
      type,
      data: chartData,
      options: chartOptions
    });
    
    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [type, data, labels, title, options]);

  // Helper function to generate default colors
  function getDefaultColors(chartType, count) {
    const baseColors = [
      'rgba(0, 102, 204, 0.7)',
      'rgba(255, 102, 0, 0.7)',
      'rgba(40, 167, 69, 0.7)',
      'rgba(220, 53, 69, 0.7)',
      'rgba(255, 193, 7, 0.7)',
      'rgba(111, 66, 193, 0.7)',
      'rgba(23, 162, 184, 0.7)',
    ];
    
    if (chartType === 'line') {
      return 'rgba(0, 102, 204, 0.1)';
    }
    
    if (count <= baseColors.length) {
      return baseColors.slice(0, count);
    }
    
    // If we need more colors than available, repeat with variation
    const colors = [];
    for (let i = 0; i < count; i++) {
      const baseColor = baseColors[i % baseColors.length];
      const opacity = 0.5 + (i / count) * 0.5;
      colors.push(baseColor.replace('0.7', opacity.toString()));
    }
    
    return colors;
  }
  
  function getDefaultBorderColors(chartType, count) {
    const baseColors = [
      'rgba(0, 102, 204, 1)',
      'rgba(255, 102, 0, 1)',
      'rgba(40, 167, 69, 1)',
      'rgba(220, 53, 69, 1)',
      'rgba(255, 193, 7, 1)',
      'rgba(111, 66, 193, 1)',
      'rgba(23, 162, 184, 1)',
    ];
    
    if (chartType === 'line') {
      return 'rgba(0, 102, 204, 1)';
    }
    
    if (count <= baseColors.length) {
      return baseColors.slice(0, count);
    }
    
    // If we need more colors than available, repeat
    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push(baseColors[i % baseColors.length]);
    }
    
    return colors;
  }

  return (
    <div className="stat-chart-container" style={{ height, width }}>
      <canvas ref={chartRef}></canvas>
      
      <style jsx>{`
        .stat-chart-container {
          background-color: var(--background-white);
          border-radius: var(--border-radius-md);
          padding: var(--space-md);
          box-shadow: var(--box-shadow);
          margin-bottom: var(--space-lg);
        }
      `}</style>
    </div>
  );
};

export default StatChart;

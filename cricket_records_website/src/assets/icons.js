// This file provides a centralized collection of SVG icons for the application
// We're using Feather Icons via CDN for most icons, but this file can house any custom SVG icons

const cricketIcons = {
  // Custom cricket-specific icons
  batsman: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 18L18 6"/>
      <path d="M9 6L18 6L18 15"/>
      <circle cx="5" cy="19" r="2"/>
    </svg>
  `,
  
  bowler: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22C13.5 22 15 21.5 16 20L22 14C22 14 18 12 16 12C14 12 12 14 12 16"/>
      <circle cx="5" cy="19" r="2"/>
      <path d="M7 19L12 14"/>
      <path d="M5 15V5C5 3 6 2 8 2H16C18 2 19 3 19 5"/>
    </svg>
  `,
  
  cricket: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 18L18 6"/>
      <path d="M7.5 16.5L16.5 7.5"/>
      <path d="M9 6L18 6L18 15"/>
      <circle cx="5" cy="19" r="2"/>
      <rect x="2" y="6" width="4" height="12" rx="1"/>
    </svg>
  `,
  
  stadium: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="8" width="20" height="12" rx="2"/>
      <path d="M12 8V4"/>
      <path d="M6 8V6"/>
      <path d="M18 8V6"/>
      <path d="M4 12a8 6 0 0 1 16 0"/>
    </svg>
  `,
  
  tournament: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2L16 10L22 11L17 17L18 23L12 20L6 23L7 17L2 11L8 10L12 2Z"/>
    </svg>
  `,
  
  wicket: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="6" y1="3" x2="6" y2="21"/>
      <line x1="12" y1="3" x2="12" y2="21"/>
      <line x1="18" y1="3" x2="18" y2="21"/>
      <line x1="4" y1="3" x2="20" y2="3"/>
    </svg>
  `
};

// Helper function to convert SVG string to data URI for use in img src
const svgToDataUri = (svgString) => {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;
};

// Export both the raw SVG strings and data URIs
export default {
  raw: cricketIcons,
  uri: {
    batsman: svgToDataUri(cricketIcons.batsman),
    bowler: svgToDataUri(cricketIcons.bowler),
    cricket: svgToDataUri(cricketIcons.cricket),
    stadium: svgToDataUri(cricketIcons.stadium),
    tournament: svgToDataUri(cricketIcons.tournament),
    wicket: svgToDataUri(cricketIcons.wicket)
  }
};

// Usage examples:
// 1. Direct embedding in JSX: <div dangerouslySetInnerHTML={{ __html: cricketIcons.raw.batsman }} />
// 2. As image source: <img src={cricketIcons.uri.batsman} alt="Batsman" />

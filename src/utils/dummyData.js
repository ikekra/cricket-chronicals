// This file provides mock data for the Cricket Records Website Figma prototype

// Dummy player data
export const dummyPlayers = [
  {
    id: 1,
    name: "Virat Kohli",
    role: "Batsman",
    country: "India",
    countryCode: "in",
    matches: 492,
    runs: 25,385,
    avg: 53.2,
    centuries: 76,
    fifties: 134,
    wickets: 4,
    bestBowling: "1/15",
    bio: "Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team. Widely regarded as one of the greatest batsmen of all time, Kohli holds numerous records for his batting prowess and leadership.",
    dateOfBirth: "November 5, 1988",
    birthPlace: "Delhi, India",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm medium",
    debut: {
      test: "June 20, 2011",
      odi: "August 18, 2008",
      t20: "June 12, 2010"
    },
    awards: ["ICC Cricketer of the Year (2017, 2018)", "Rajiv Gandhi Khel Ratna (2018)", "Padma Shri (2017)"],
    recentForm: ["72", "54", "124*", "36", "82*"],
    careerHighlights: [
      { year: 2008, event: "Led India to victory in the U-19 World Cup as captain" },
      { year: 2013, event: "Fastest century by an Indian in ODIs (52 balls)" },
      { year: 2018, event: "Completed 10,000 ODI runs in record time" },
      { year: 2020, event: "Became the fastest to score 12,000 ODI runs" }
    ],
    rankings: {
      test: 4,
      odi: 1,
      t20: 10
    },
    performanceByFormat: {
      test: { matches: 108, runs: 8416, avg: 49.5, centuries: 27, fifties: 28 },
      odi: { matches: 274, runs: 12898, avg: 57.3, centuries: 46, fifties: 65 },
      t20: { matches: 115, runs: 4008, avg: 52.7, centuries: 1, fifties: 37 }
    },
    performanceByYear: [
      { year: 2017, matches: 26, runs: 2818, avg: 68.7 },
      { year: 2018, matches: 37, runs: 2735, avg: 60.8 },
      { year: 2019, matches: 34, runs: 2455, avg: 64.6 },
      { year: 2020, matches: 9, runs: 842, avg: 36.6 },
      { year: 2021, matches: 24, runs: 1726, avg: 43.2 },
      { year: 2022, matches: 22, runs: 1665, avg: 47.6 },
      { year: 2023, matches: 28, runs: 2144, avg: 58.0 }
    ]
  },
  {
    id: 2,
    name: "Joe Root",
    role: "Batsman",
    country: "England",
    countryCode: "gb",
    matches: 354,
    runs: 18,432,
    avg: 49.6,
    wickets: 92,
    bestBowling: "5/8",
    bio: "Joseph Edward Root is an English international cricketer who is the current captain of the England Test team. He represents Yorkshire in domestic cricket. Root is widely regarded as one of the best batsmen in the world."
  },
  {
    id: 3,
    name: "Jasprit Bumrah",
    role: "Bowler",
    country: "India",
    countryCode: "in",
    matches: 187,
    wickets: 356,
    avg: 22.8,
    runs: 598,
    bestBowling: "6/19",
    bio: "Jasprit Jasbirsingh Bumrah is an Indian international cricketer who plays for the Indian national cricket team in all formats of the game. He is known for his unorthodox bowling action and ability to bowl yorkers at will."
  },
  {
    id: 4,
    name: "Ben Stokes",
    role: "All-rounder",
    country: "England",
    countryCode: "gb",
    matches: 286,
    runs: 8954,
    avg: 35.2,
    wickets: 254,
    bestBowling: "6/22",
    bio: "Benjamin Andrew Stokes is an English international cricketer and the current captain of the England Test team. He is regarded as one of the greatest all-rounders in cricket history."
  },
  {
    id: 5,
    name: "Kane Williamson",
    role: "Batsman",
    country: "New Zealand",
    countryCode: "nz",
    matches: 332,
    runs: 17862,
    avg: 52.7,
    wickets: 37,
    bestBowling: "4/22",
    bio: "Kane Stuart Williamson is a New Zealand international cricketer who is currently the captain of the New Zealand national team in all formats. He is considered as one of the greatest batsmen in the world."
  },
  {
    id: 6,
    name: "Mitchell Starc",
    role: "Bowler",
    country: "Australia",
    countryCode: "au",
    matches: 245,
    wickets: 489,
    avg: 23.5,
    runs: 2134,
    bestBowling: "6/28",
    bio: "Mitchell Aaron Starc is an Australian international cricketer who plays for the Australian national team and New South Wales in domestic cricket. He is a left-arm fast bowler and a capable lower order left-handed batsman."
  },
  {
    id: 7,
    name: "Babar Azam",
    role: "Batsman",
    country: "Pakistan",
    countryCode: "pk",
    matches: 254,
    runs: 12635,
    avg: 50.1,
    wickets: 2,
    bestBowling: "1/8",
    bio: "Babar Azam is a Pakistani international cricketer who captains Pakistan in all formats. He is regarded as one of the finest batsmen in the modern game."
  },
  {
    id: 8,
    name: "Shakib Al Hasan",
    role: "All-rounder",
    country: "Bangladesh",
    countryCode: "bd",
    matches: 412,
    runs: 14386,
    avg: 37.2,
    wickets: 654,
    bestBowling: "6/36",
    bio: "Shakib Al Hasan is a Bangladeshi international cricket player and former captain of the Bangladesh national cricket team. He is considered the greatest cricketer to have ever played for Bangladesh."
  }
];

// Dummy team data
export const dummyTeams = [
  {
    id: 1,
    name: "India",
    code: "IND",
    color: "#0070B9",
    ranking: 1,
    format: "ODI",
    matches: 1037,
    wins: 542,
    losses: 429,
    draws: 66,
    recentForm: ["W", "W", "L", "W", "W"],
    currentCaptain: "Rohit Sharma",
    coach: "Rahul Dravid",
    description: "The India national cricket team, also known as Team India and Men in Blue, represents India in international cricket. It is governed by the Board of Control for Cricket in India (BCCI) and is a Full Member of the International Cricket Council (ICC).",
    homeGround: "Multiple venues across India",
    worldCupTitles: 3,
    rankings: {
      test: 2,
      odi: 1,
      t20: 1
    },
    topPlayers: [
      { id: 1, name: "Virat Kohli", role: "Batsman" },
      { id: 3, name: "Jasprit Bumrah", role: "Bowler" },
      { id: 10, name: "Rohit Sharma", role: "Batsman" },
      { id: 11, name: "Ravindra Jadeja", role: "All-rounder" }
    ],
    performanceByYear: [
      { year: 2018, matches: 53, wins: 38, losses: 13, draws: 2 },
      { year: 2019, matches: 58, wins: 42, losses: 14, draws: 2 },
      { year: 2020, matches: 27, wins: 17, losses: 8, draws: 2 },
      { year: 2021, matches: 45, wins: 31, losses: 10, draws: 4 },
      { year: 2022, matches: 47, wins: 33, losses: 12, draws: 2 },
      { year: 2023, matches: 50, wins: 36, losses: 12, draws: 2 }
    ],
    rivalryStats: [
      { opponent: "Australia", matches: 156, wins: 77, losses: 64, draws: 15 },
      { opponent: "England", matches: 142, wins: 67, losses: 58, draws: 17 },
      { opponent: "Pakistan", matches: 131, wins: 71, losses: 47, draws: 13 },
      { opponent: "South Africa", matches: 98, wins: 46, losses: 42, draws: 10 },
      { opponent: "New Zealand", matches: 112, wins: 62, losses: 39, draws: 11 }
    ]
  },
  {
    id: 2,
    name: "Australia",
    code: "AUS",
    color: "#FFCC00",
    ranking: 2,
    format: "Test",
    matches: 958,
    wins: 548,
    losses: 306,
    draws: 104,
    recentForm: ["W", "L", "W", "W", "W"],
    description: "The Australia national cricket team represents Australia in international cricket. It is the most successful team in Test cricket history with a win rate of over 47%."
  },
  {
    id: 3,
    name: "England",
    code: "ENG",
    color: "#003A70",
    ranking: 3,
    format: "T20I",
    matches: 876,
    wins: 432,
    losses: 398,
    draws: 46,
    recentForm: ["L", "W", "W", "L", "W"],
    description: "The England cricket team represents England and Wales in international cricket. England is the joint oldest team in Test cricket history, having played in the first ever Test match in 1877."
  },
  {
    id: 4,
    name: "New Zealand",
    code: "NZ",
    color: "#000000",
    ranking: 2,
    format: "Test",
    matches: 786,
    wins: 324,
    losses: 384,
    draws: 78,
    recentForm: ["W", "L", "W", "W", "L"],
    description: "The New Zealand national cricket team, nicknamed the Black Caps, represents New Zealand in men's international cricket."
  },
  {
    id: 5,
    name: "South Africa",
    code: "SA",
    color: "#007A4D",
    ranking: 4,
    format: "ODI",
    matches: 754,
    wins: 428,
    losses: 287,
    draws: 39,
    recentForm: ["L", "L", "W", "W", "W"],
    description: "The South Africa national cricket team, also known as the Proteas, represents South Africa in men's international cricket."
  },
  {
    id: 6,
    name: "Pakistan",
    code: "PAK",
    color: "#01411C",
    ranking: 5,
    format: "T20I",
    matches: 832,
    wins: 398,
    losses: 392,
    draws: 42,
    recentForm: ["W", "W", "W", "L", "L"],
    description: "The Pakistan national cricket team, popularly referred to as the Shaheens, Green Shirts, Men in Green, and Cornered Tigers, represents Pakistan in international cricket."
  }
];

// Dummy cricket records
export const dummyRecords = [
  {
    id: 1,
    title: "Highest Individual Score in ODIs",
    description: "Rohit Sharma's magnificent 264 against Sri Lanka in Kolkata, 2014.",
    type: "Batting",
    holderName: "Rohit Sharma",
    holderId: 10,
    holderCountry: "India",
    value: "264 runs",
    date: "November 13, 2014",
    match: "India vs Sri Lanka",
    venue: "Eden Gardens, Kolkata"
  },
  {
    id: 2,
    title: "Best Bowling Figures in Test Cricket",
    description: "Jim Laker's incredible 10/53 in an innings against Australia at Old Trafford.",
    type: "Bowling",
    holderName: "Jim Laker",
    holderId: 15,
    holderCountry: "England",
    value: "10/53",
    date: "July 26, 1956",
    match: "England vs Australia",
    venue: "Old Trafford, Manchester"
  },
  {
    id: 3,
    title: "Fastest Century in T20 Internationals",
    description: "David Miller's explosive 100 off just 35 balls against Bangladesh.",
    type: "Batting",
    holderName: "David Miller",
    holderId: 20,
    holderCountry: "South Africa",
    value: "35 balls",
    date: "October 29, 2017",
    match: "South Africa vs Bangladesh",
    venue: "Shere Bangla Stadium, Dhaka"
  },
  {
    id: 4,
    title: "Most Catches in Test Cricket (Non-wicketkeeper)",
    description: "Rahul Dravid's 210 catches in 164 Test matches.",
    type: "Fielding",
    holderName: "Rahul Dravid",
    holderId: 25,
    holderCountry: "India",
    value: "210 catches",
    date: "2012 (Career End)",
    match: "Career Record",
    venue: "Multiple"
  },
  {
    id: 5,
    title: "Highest Team Total in ODIs",
    description: "England's massive 498/4 against the Netherlands.",
    type: "Team",
    holderName: "England",
    holderId: 3,
    format: "ODI",
    value: "498/4",
    date: "June 17, 2022",
    match: "England vs Netherlands",
    venue: "VRA Cricket Ground, Amstelveen"
  },
  {
    id: 6,
    title: "Most International Centuries",
    description: "Sachin Tendulkar's 100 centuries across all formats.",
    type: "Batting",
    holderName: "Sachin Tendulkar",
    holderId: 30,
    holderCountry: "India",
    value: "100 centuries",
    date: "2012 (Career End)",
    match: "Career Record",
    venue: "Multiple"
  },
  {
    id: 7,
    title: "Most Wickets in International Cricket",
    description: "Muttiah Muralitharan's 1347 wickets across all formats.",
    type: "Bowling",
    holderName: "Muttiah Muralitharan",
    holderId: 35,
    holderCountry: "Sri Lanka",
    value: "1347 wickets",
    date: "2011 (Career End)",
    match: "Career Record",
    venue: "Multiple"
  },
  {
    id: 8,
    title: "Longest Winning Streak in Test Cricket",
    description: "Australia's 16 consecutive Test victories (twice).",
    type: "Team",
    holderName: "Australia",
    holderId: 2,
    format: "Test",
    value: "16 matches",
    date: "1999-2001 and 2005-2008",
    match: "Multiple Series",
    venue: "Multiple"
  }
];

// Dummy search results
export const dummySearchResults = {
  players: dummyPlayers.slice(0, 6),
  teams: dummyTeams.slice(0, 4),
  records: dummyRecords.slice(0, 5)
};

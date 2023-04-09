export type Team = {
  conference: number;
  inPlayoffs: boolean;
  teamID: number;
  teamName: string;
  teamCode: string;
  previousRank: number; // *optional
  played: number;
  points: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  lastFive: string;
  cleansheets: number;
};

export const teams: Team[] = [
  /**
   * Conference 1
   */
  {
    conference: 1,
    inPlayoffs: false,
    teamID: 101,
    teamName: "A2SV Group 12",
    teamCode: "G12",
    previousRank: 0,
    played: 0,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    lastFive: "",
    cleansheets: 0,
  },
  {
    conference: 1,
    inPlayoffs: false,
    teamID: 102,
    teamName: "A2SV Group 31",
    teamCode: "G31",
    previousRank: 0,
    played: 0,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    lastFive: "",
    cleansheets: 0,
  },
  {
    conference: 1,
    inPlayoffs: false,
    teamID: 103,
    teamName: "A2SV Group 32",
    teamCode: "G32",
    previousRank: 0,
    played: 0,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    lastFive: "",
    cleansheets: 0,
  },
  {
    conference: 1,
    inPlayoffs: false,
    teamID: 104,
    teamName: "A2SV Group 33",
    teamCode: "G33",
    previousRank: 0,
    played: 0,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    lastFive: "",
    cleansheets: 0,
  },
  {
    conference: 1,
    inPlayoffs: false,
    teamID: 105,
    teamName: "A2SV Group 41",
    teamCode: "G41",
    previousRank: 0,
    played: 0,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    lastFive: "",
    cleansheets: 0,
  },

  /**
   * Conference 2
   */
  {
    conference: 2,
    inPlayoffs: false,
    teamID: 201,
    teamName: "A2SV Group 42",
    teamCode: "G42",
    previousRank: 0,
    played: 0,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    lastFive: "",
    cleansheets: 0,
  },
  {
    conference: 2,
    inPlayoffs: false,
    teamID: 202,
    teamName: "A2SV Group 43",
    teamCode: "G43",
    previousRank: 0,
    played: 0,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    lastFive: "",
    cleansheets: 0,
  },
  {
    conference: 2,
    inPlayoffs: false,
    teamID: 203,
    teamName: "A2SV Group 44",
    teamCode: "G44",
    previousRank: 0,
    played: 0,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    lastFive: "",
    cleansheets: 0,
  },
  {
    conference: 2,
    inPlayoffs: false,
    teamID: 204,
    teamName: "A2SV Group 45",
    teamCode: "G45",
    previousRank: 0,
    played: 0,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    lastFive: "",
    cleansheets: 0,
  },
  {
    conference: 2,
    inPlayoffs: false,
    teamID: 204,
    teamName: "A2SV Group 46",
    teamCode: "G46",
    previousRank: 0,
    played: 0,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    lastFive: "",
    cleansheets: 0,
  },
];

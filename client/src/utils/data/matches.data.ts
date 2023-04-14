export type Match = {
  state: string;
  playOffStage?: string;
  conference: number;
  matchID: string;
  teams: {
    team1: number;
    team2: number;
  };
  schedule: string;
  score: {
    team1: number | null;
    team2: number | null;
  };
  events: {
    team1: MatchEvent[];
    team2: MatchEvent[];
  };
};

type MatchEvent = {
  name: string;
  event: String;
  assist?: string;
  minute?: Date;
};

export const matches: Match[] = [
  /**
   * Conference 1
   */
  {
    state: "sc",
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 100,
      team2: 100,
    },
    schedule: new Date("April 17, 2023 11:00").toString(),
    score: {
      team1: 0,
      team2: 0,
    },
    events: {
      team1: [],
      team2: [],
    },
  },

    {
    state: "sc",
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 201,
      team2: 202,
    },
    schedule: new Date("April 19, 2023 11:00").toString(),
    score: {
      team1: 0,
      team2: 0,
    },
    events: {
      team1: [],
      team2: [],
    },
  },

    {
    state: "sc",
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 100,
      team2: 100,
    },
    schedule: new Date("April 21, 2023 11:00").toString(),
    score: {
      team1: 0,
      team2: 0,
    },
    events: {
      team1: [],
      team2: [],
    },
  },

    {
    state: "sc",
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 200,
      team2: 200,
    },
    schedule: new Date("April 24, 2023 11:00").toString(),
    score: {
      team1: 0,
      team2: 0,
    },
    events: {
      team1: [],
      team2: [],
    },
  },

    {
    state: "sc",
    conference: 1,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 100,
      team2: 100,
    },
    schedule: new Date("April 26, 2023 11:00").toString(),
    score: {
      team1: 0,
      team2: 0,
    },
    events: {
      team1: [],
      team2: [],
    },
  },

    {
    state: "sc",
    conference: 2,
    matchID: Math.random().toString(36).slice(2),
    teams: {
      team1: 201,
      team2: 205,
    },
    schedule: new Date("April 28, 2023 11:00").toString(),
    score: {
      team1: 0,
      team2: 0,
    },
    events: {
      team1: [],
      team2: [],
    },
  },

  
  // {
  //   state: "ft",
  //   conference: 1,
  //   matchID: Math.random().toString(36).slice(2),
  //   teams: {
  //     team1: 103,
  //     team2: 105,
  //   },
  //   schedule: new Date("May 26, 2022 16:00").toString(),
  //   score: {
  //     team1: 5,
  //     team2: 1,
  //   },
  //   events: {
  //     team1: [
  //       {
  //         name: "Birhanu",
  //         event: "goal",
  //         assist: "Fitsum",
  //       },
  //       {
  //         name: "Birhanu",
  //         event: "goal",
  //         assist: "Fitsum",
  //       },
  //       {
  //         name: "Birhanu",
  //         event: "goal",
  //         assist: "Samuel",
  //       },
  //       {
  //         name: "Bultum",
  //         event: "goal",
  //         assist: "Biniyam",
  //       },
  //       {
  //         name: "Dawit",
  //         event: "goal",
  //         assist: "Girmachew",
  //       },
  //     ],
  //     team2: [
  //       {
  //         name: "Yididya",
  //         event: "goal",
  //         assist: "Ewnet",
  //       },
  //     ],
  //   },
  // },
  
  /**
   * Play-offs
   */
  // {
  //   state: "ft",
  //   playOffStage: "QF",
  //   conference: 3,
  //   matchID: Math.random().toString(36).slice(2),
  //   schedule: new Date("June 8, 2022 14:00").toString(),
  //   teams: {
  //     team1: 202,
  //     team2: 103,
  //   },
  //   score: {
  //     team1: 0,
  //     team2: 5,
  //   },
  //   events: {
  //     team1: [],
  //     team2: [
  //       {
  //         name: "Dawit",
  //         event: "goal",
  //         assist: "Biruk",
  //       },
  //       {
  //         name: "Dawit",
  //         event: "goal",
  //         assist: "Biniyam",
  //       },
  //       {
  //         name: "Mulugeta",
  //         event: "goal",
  //         assist: "Girmachew",
  //       },
  //       {
  //         name: "Bultum",
  //         event: "goal",
  //         assist: "Mulugeta",
  //       },
  //       {
  //         name: "Mikiyas",
  //         event: "og",
  //       },
  //     ],
  //   },
  // },
 
  // {
  //   state: "ft",
  //   playOffStage: "SF",
  //   conference: 3,
  //   matchID: Math.random().toString(36).slice(2),
  //   schedule: new Date("June 28, 2022 10:00").toString(),
  //   teams: {
  //     team1: 102,
  //     team2: 103,
  //   },
  //   score: {
  //     team1: 7,
  //     team2: 3,
  //   },
  //   events: {
  //     team1: [
  //       {
  //         name: "Nati G.",
  //         event: "goal",
  //         assist: "Robel",
  //       },
  //       {
  //         name: "Ermiyas",
  //         event: "goal",
  //         assist: "Robel",
  //       },
  //       {
  //         name: "Nati G.",
  //         event: "goal",
  //         assist: "Robel",
  //       },
  //       {
  //         name: "Nati G.",
  //         event: "goal",
  //         assist: "Robel",
  //       },
  //       {
  //         name: "Biruk",
  //         event: "goal",
  //         assist: "Yonas E.",
  //       },
  //       {
  //         name: "Sewnet",
  //         event: "goal",
  //         assist: "Robel",
  //       },
  //       {
  //         name: "Nati G.",
  //         event: "goal",
  //         assist: "Robel",
  //       },
  //     ],
  //     team2: [
  //       {
  //         name: "Kassa",
  //         event: "goal",
  //         assist: "Biniam",
  //       },
  //       {
  //         name: "Fitsum",
  //         event: "goal",
  //         assist: "Biniam",
  //       },
  //       {
  //         name: "Dawit",
  //         event: "goal",
  //         assist: "Kassa",
  //       },
  //     ],
  //   },
  // },
  // {
  //   state: "ft",
  //   playOffStage: "SF",
  //   conference: 3,
  //   matchID: Math.random().toString(36).slice(2),
  //   schedule: new Date("June 27, 2022 10:00").toString(),
  //   teams: {
  //     team1: 201,
  //     team2: 204,
  //   },
  //   score: {
  //     team1: 3,
  //     team2: 0,
  //   },
  //   events: {
  //     team1: [
  //       {
  //         name: "Ermisha",
  //         event: "goal",
  //         assist: "Abel",
  //       },
  //       {
  //         name: "Ermisha",
  //         event: "goal",
  //         assist: "Yirga",
  //       },
  //       {
  //         name: "Ermisha",
  //         event: "goal",
  //         assist: "Abel",
  //       },
  //     ],
  //     team2: [],
  //   },
  // },
  // {
  //   state: "ft",
  //   playOffStage: "F",
  //   conference: 3,
  //   matchID: Math.random().toString(36).slice(2),
  //   schedule: new Date("July 05, 2022 10:00").toString(),
  //   teams: {
  //     team1: 201,
  //     team2: 102,
  //   },
  //   score: {
  //     team1: 0,
  //     team2: 5,
  //   },
  //   events: {
  //     team1: [],
  //     team2: [
  //       {
  //         name: "Robel",
  //         event: "goal",
  //         assist: "Nati G.",
  //       },
  //       {
  //         name: "Robel",
  //         event: "goal",
  //         assist: "Nati G.",
  //       },
  //       {
  //         name: "Robel",
  //         event: "goal",
  //         assist: "Biruk",
  //       },
  //       {
  //         name: "Biruk",
  //         event: "goal",
  //         assist: "Robel",
  //       },
  //       {
  //         name: "Nati G.",
  //         event: "goal",
  //         assist: "Robel",
  //       },
  //     ],
  //   },
  // },
];

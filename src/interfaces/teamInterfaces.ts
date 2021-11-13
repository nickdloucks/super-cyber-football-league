/**
 * These interfaces define the different data fields that each team will store and keep track of.
 * The profile property of a team will be it's main identifier data.
 * Each team will also track its own statistics from games as the season progresses.
 * The record property will keep track of the team's wins/losses/ties.
 */


export interface TeamProfile {
    readonly name: string,
    readonly city: string,
    readonly abrv: string,
    readonly colors: string[],
    readonly logo?: string // string URL referencing an SVG logo (team logo SVGs have not been created yet)
    readonly helmet?: string // string URL referencing an SVG of the team's helmet design
}
export interface TeamStats { // all team stats will be integers. 
    // Yards:
    passYds: number,
    rushYds: number,
    passDef: number,
    rushDef: number,

    // Ball carrying:
    carries: number,
    receptions: number,
    passAtt: number,
    fumblesLost: number,
    intercepted: number,

    // Defensive plays:
    tackles: number,
    tfl: number,
    sacks: number,
    fumblesRec: number,
    interceptions: number,

    // Scoring:
    passTD: number,
    rushTD: number,
    madeFG: number,
    blockFG: number,
    madePAT: number,
    blockPAT: number,

    pointsAgainst: number,
  
}

export interface TeamRecord { // counts game results for standings
    wins: number,
    losses: number,
    ties: number
}
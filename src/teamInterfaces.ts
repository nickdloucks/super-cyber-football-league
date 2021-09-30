export interface TeamProfile {
    name: string,
    city: string,
    abrv: string,
    colors: string[]
    logo?: string
}
export interface TeamStats {
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
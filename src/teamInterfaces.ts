export interface TeamProfile { // is this redundant if constructor params are type-specified?
    name: string,
    city: string,
    abrv: string,
    colors: string[]
    logo?: string // string URL referencing an SVG logo (team logo SVGs have not been created yet)
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
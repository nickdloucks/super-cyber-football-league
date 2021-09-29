export interface TeamProfile {
    name: string,
    city: string,
    abrv: string,
    color1: string,
    color2: string,
    color3: string,
    color4?: string
}
export interface TeamStats {
    passYds: number,
    rushYds: number,
    passDef: number,
    rushDef: number,

    carries: number,
    receptions: number,
    passAtt: number,

    tackles: number,

    passTD: number,
    rushTD: number,
    madeFG: number,
    blockFG: number,
    madePAT: number,
    blockPAT: number,
}
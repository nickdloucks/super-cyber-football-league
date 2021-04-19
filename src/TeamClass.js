class Team{
    constructor(name, abrv, city) {
        this.info = {
            name: name,
            city: city,
            abrv: abrv.toUpperCase(),
            color1: undefined,
            color2: undefined,
            color3: undefined,
            color4: undefined,
        }
        this.profile = {
            passO: undefined,
            rushO: undefined,
            passD: undefined,
            rushD: undefined,
            kick: undefined,
            kickR: undefined,
        }
        this.stats = {
            passYds: undefined,
            rushYds: undefined,
            passDef: undefined,
            rushDef: undefined,
            passTD: undefined,
            rushTD: undefined,
            madeFG: undefined,
            blockFG: undefined,
            madePAT: undefined,
            blockPAT: undefined,
        }
        this.games = {}
    }
}

export default Team;
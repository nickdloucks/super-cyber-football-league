import { TeamProfile, TeamStats } from './teamInterfaces';


class Team {
    profile: TeamProfile;
    stats: TeamStats;
    constructor(name: string, abrv: string, city: string, colors: string[]) {

        this.profile = {
            name: name,
            city: city,
            abrv: abrv.toUpperCase(),
            colors: colors
        }
        this.stats = {
            passYds: 0,
            rushYds: 0,
            passDef: 0,
            rushDef: 0,
        
            // Ball carrying:
            carries: 0,
            receptions: 0,
            passAtt: 0,
            fumblesLost: 0,
            intercepted: 0,
        
            // Defensive plays:
            tackles: 0,
            tfl: 0,
            sacks: 0,
            fumblesRec: 0,
            interceptions: 0,
        
            // Scoring:
            passTD: 0,
            rushTD: 0,
            madeFG: 0,
            blockFG: 0,
            madePAT: 0,
            blockPAT: 0,
        
            pointsAgainst: 0,
        
        }



        /*this.profile = {
            passO: undefined,
            rushO: undefined,
            passD: undefined,
            rushD: undefined,
            kick: undefined,
            kickR: undefined,
        }*/
        //this.games = {}
    }
}

export default Team;
import { TeamProfile, TeamStats } from './teamInterfaces';

class Team {
    profile: TeamProfile;
    stats: TeamStats;
    constructor(name: string, abrv: string, city: string, colors: string[]) {

        this.profile = {
            name: name,
            city: city,
            abrv: abrv.toUpperCase(),
            color1: colors[0],
            color2: colors[1],
            color3: colors[2],
            color4: colors[3],
        }
        /*this.profile = {
            passO: undefined,
            rushO: undefined,
            passD: undefined,
            rushD: undefined,
            kick: undefined,
            kickR: undefined,
        }*/
        this.stats;
        //this.games = {}
    }
}

export default Team;
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
import { TeamProfile, TeamStats, TeamRecord } from './interfaces/teamInterfaces';
import {TeamSchedule} from './interfaces/scheduleInterface';


class Team { // the Team will be the central data structure of the league and the app.
    // each team will track its own data, while analytics and simulation tools will use each team's data 
    // for game simulation and league analysis and tracking
    profile: TeamProfile;
    stats: TeamStats;
    record: TeamRecord;
    schedule: TeamSchedule;
    constructor({name, abrv, city, colors, logo}: TeamProfile) {

        this.profile = { // read-only object to describe the instance of Team
            name: name,
            city: city,
            abrv: abrv.toUpperCase(),
            colors: colors,
            logo: logo
        }
        this.record = { // record of the team's wins/losses used for standings
            wins: 0,
            losses: 0,
            ties: 0
        }

        this.schedule = {
            scft: [],
            regSeason: [],
            postSeason: []
        }

        this.stats = { // implement stats interface, initialize values to zero; 
                        //will be updated as games are played
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



        /*this.profile = { // this might be used as a sliding scale to determine how good each team is
            passO: undefined,
            rushO: undefined,
            passD: undefined,
            rushD: undefined,
            kick: undefined,
            kickR: undefined,
        }*/
        //this.games: object[] = []; // array of game objects
    }
}

export default Team;
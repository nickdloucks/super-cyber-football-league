import { TeamProfile, TeamStats, TeamRecord } from './interfaces/teamInterfaces';
import {TeamSchedule} from './interfaces/scheduleInterface';

/**
 * The Team will be the central data structure of the league and the app.
 * Each team will track its own data, while analytics and simulation tools will use each team's data 
 * for game simulation and league analysis and schedule tracking.
 */

class Team {
    profile: TeamProfile;
    stats: TeamStats;
    record: TeamRecord;
    schedule: TeamSchedule;
    updateStats(newStats:TeamStats): void{
        // update stats in this method
        // for each field in the newStats param,
        // --add the new stat to the current value in the team's stats
        // example: if newStats.rushTD == 2, then subjectTeam.stats.rushTD += 2;
    }

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

        this.stats = { // implement stats interface, initialize values to zero; updated as games are played
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
        this.updateStats = this.updateStats.bind(this);
        
        function initVals(property: object, init_val: any): void {
            // dynamically initialize values of all props to a given value such as 0 or an empty string
        }(this.stats, 0); // FIND A WAY TO CALL ON EACH INTERFACE
        // or, call this function on separate interfaces/objects on the Team class
        // ex: this.initVals(this.stats, 0); this.initVals(this.record, 0)
        // make initVals a function that is immediately called at construction time, so that
        // a Team only has to be constructed with it's unique profile data

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
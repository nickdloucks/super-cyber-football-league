import {default as Team } from './TeamClass';
import { TeamStats } from './interfaces/teamInterfaces';
import {Game} from './interfaces/gameInterface';

/**
 * This function will be one of the main tasks that the SCFL app performs.
 * Calling this function will use roster data to simulate a football game between the two teams (parameters).
 * It will update the stats for each team, and provide a final score/game result.
 * Input the two teams that will be playing the game: one home team, one away team.
 * 
 */

const SIMULATE_GAME = function(home_Team: Team, away_Team: Team){

    const drives:number = 12; // number of possessions each team gets
    let home_score:number = 0;
    let away_score:number = 0; // scores part of stats interface?
    const first_down:number = 16;

    let home_stats:TeamStats;
    let away_stats:TeamStats;

    let game: Game ={
        gameID: `${away_Team.profile.abrv}at${home_Team.profile.abrv}3004_01`,
        matchUpTitle: `${away_Team} @ ${home_Team} : Game 1, 3004`,
        homeTeam: home_Team.profile.abrv,
        awayTeam: away_Team.profile.abrv,
        winner: '',
        loser:'',
        finalScore: ''
    };

}
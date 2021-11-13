import {default as Team } from './TeamClass';
import { TeamStats } from './interfaces/teamInterfaces';

/**
 * This function will be one of the main tasks that the SCFL app performs.
 * Calling this function will use roster data to simulate a football game between the two teams (parameters).
 * It will update the stats for each team, and provide a final score/game result.
 * Input the two teams that will be playing the game: one home team, one away team.
 * 
 */

const SIMULATE_GAME = function(homeTeam: Team, awayTeam: Team){

    const drives:number = 12; // number of possessions each team gets
    let home_score:number = 0;
    let away_score:number = 0; // scores part of stats interface?
    const first_down:number = 16;

    let game: object = {

    };

}
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
        // year and game # will need to be dynamically generated for gameID and matchUpTitle properties
        matchUpTitle: `${away_Team} @ ${home_Team} : Game 1, 3004`,
        homeTeam: home_Team.profile.abrv,
        awayTeam: away_Team.profile.abrv,
        winner: '',
        loser:'',
        finalScore: ''
    };


    /* Use each team's roster to simulate drives. Set up such that:
    -Teams with better running backs get an advantage on run plays
    -teams with better defensive backs get an advantage on pass defense
    -more or less accurate kickers
    -etc.

    Each team gets 12 drives/posessions so the games do not need to be timed.
        - a takeaway drive does not count towards total, as that would penalize team that go the takeaway

        each play, probability of first down is set by a default probability that is either 
        increaed or decreased based on down and distance, then player actions (runs, passes, catches, tackles)
        produce a value. if the value is within the successful range of probability, the first down is acheived

    set default probabilities of outcomes like first downs, TDs, etc. and adjust based on team rosters.
    */

    // update stats for each team

    //home_Team.updateStats(home_stats); use an update method defined on the team class or stats interface

    return game;
}
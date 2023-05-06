import { TeamStats } from "./teamInterfaces";
/**
 * Interface for a Game object. It will store data ablout a matchup between two different teams, 
 * including score, season, stats, etc. It will store data used by the game simulator.
 * 
 * Use TeamStats interface to keep track of each team's stats just at the game level. 
 * These will be returned as part of the game object return value. 
 * Outside the game function, these stats will be added to the team's running total of stats
 */

let homeStats: TeamStats; // still need to initialize with 0s
let awayStats: TeamStats; // still need to initialize with 0s

export interface Game {
    readonly gameID: string, // unique identifier for the game, which could be the matchUpTitle...
    // something like `${away_team.profile.abrv}at${home_team.profile.abrv}${year}_${game#}`
    readonly matchUpTitle: string, // <matchUpTitle> will be a template literal in the form:
    //`${awayTeam} @ ${homeTeam} : Game ${game_number_or_designation}, ${season_year}`
    readonly homeTeam: string, // either team name or abbreviation
    readonly awayTeam: string,
    winner: string,
    loser: string,
    finalScore: string, // `${winner.pointsScored} - ${loser.pointsScored}` 
        // highlight winner's score...
}
import Team from "../TeamClass";
/**
 * As of the 3002 season, the SCFL plays a 7 game regular season, preceded by a league-wide tournament.
 * Those teams with good enough regular season records are invited to the playoffs for 
 * single-elimination Bowl-games, eventually crowning the leagues Champion for the year. 
 * This interface will be the structure for each team to store
 * a record of the games it plays in one year. 
 * It's broken down into pre-season, regular season, and, if applicable, post-season.
 */



interface ScheduledGame {
    opponent: Team,
    opp_name: string, // Team.profile.name; use to create a teamTag component
    subjTeam_score?: number, // score of the subject team
    opp_score?: number // score of the subject team's opponent
    // both score fields will be blank or initialized to 0 until the game is played, 
    // after which it will display the final score
}

export interface TeamSchedule {
    scft: Array<object>,
    regSeason: Array<object>,
    postSeason: Array<object>
}
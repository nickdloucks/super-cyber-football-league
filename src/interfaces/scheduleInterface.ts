/**
 * As of the 3002 season, he SCFL plays a 7 game regular season, preceded by a league-wide tournament.
 * Those teams with good enough regular season records are invited to the playoffs for 
 * single-elimination Bowl-games, eventually crowning the leagues Champion for the year. 
 * This interface will be the structure for each team to store
 * a record of the games it plays in one year. 
 * It's broken down into pre-season, regular season, and, if applicable, post-season.
 */

export interface TeamSchedule {
    scft: Array<object>,
    regSeason: Array<object>,
    postSeason: Array<object>
}
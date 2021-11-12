export interface Game {
    readonly gameID: string, // unique identifier for the game, which could be the matchUpTitle...
    readonly matchUpTitle: string, // <matchUpTitle> will be a template literal in the form:
    //`${awayTeam} @ ${homeTeam} : Game ${game_number_or_designation}, ${season_year}`
    readonly homeTeam: string, // either team name or abbreviation
    readonly awayTeam: string,
    winner: string,
    loser: string,
    finalScore: string, // `${winner.pointsScored} - ${loser.pointsScored}` 
        // highlight winner's score...
}
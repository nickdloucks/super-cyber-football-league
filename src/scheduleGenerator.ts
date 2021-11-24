import Team from "./TeamClass";

/**
 * This function will generate a schedule for the subject team. The second parameter is the number of games 
 * that should be scheduled against teams in the same conference. If the subject team has an established rivalry
 * with another team outside its conference, the third param can be used to ensure that specific non-conference 
 * team(s) are included as opponents in the subject team's schedule. 
 * @param subject_team 
 * @param conf_games 
 * @param spec_nonConf 
 */

function genSchedule(subject_team: Team, conf_games: number,  spec_nonConf: Array<Team>):void {
    
}
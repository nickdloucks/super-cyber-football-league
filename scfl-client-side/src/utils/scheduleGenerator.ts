import Team from "../types/TeamClass";

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
    // loop thru teams in conf.
        // if a team is free on that week, add them to this team's schedule
    // teams should play all the other teams in their conference
    // add the rivalry game where there's an opening? or do the rivals get scheduled first?

    // look up matrix processing algorithms for this program
}
import Team from "./TeamClass";


/**
 * The Conference class is used to define a group of Teams. 
 * It is below the League level (meaning there are multiple conferences), but above the Division level
 * (a conference can have multiple Divisions).
 * 
 * The Conference's <currentStandings> method will return the list of teams in the conference 
 * sorted by highest winning percentage first.
 */

class Conference {
    name: string;
    abrv: string;
    teams: Array<Team>;
    bowl: string;
    currentStandings(): Array<Team>{
        return this.teams.sort(function (team_a:Team, team_b:Team){
            return team_b.getWinPct() > team_a.getWinPct();
        });
    };

    constructor(conf_name:string, conf_abrv:string, conf_teams:Array<Team>, conf_bowl:string) {
        this.name = conf_name;
        this.abrv = conf_abrv;
        this.teams = conf_teams;
        this.bowl = conf_bowl;
        this.currentStandings = this.currentStandings.bind(this);
    }


}

export default Conference;
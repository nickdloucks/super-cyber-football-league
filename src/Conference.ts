import Team from "./TeamClass";


/**
 * The Conference class is used to define a group of Teams. 
 * It is below the League level (meaning there are multiple conferences), but above the Division level
 * (a conference can have multiple Divisions).
 */

class Conference {
    name: string;
    abrv: string;
    teams: Array<Team>;
    bowl: string;

    constructor(conf_name:string, conf_abrv:string, conf_teams:Array<Team>, conf_bowl:string) {
        this.name = conf_name;
        this.abrv = conf_abrv;
        this.teams = conf_teams;
        this.bowl = conf_bowl;
    }
    

}

export default Conference;
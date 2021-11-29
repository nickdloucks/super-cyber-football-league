import Team from "./TeamClass";

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
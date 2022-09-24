import Team from "./TeamClass";
import {TeamProfile, TeamRecord, TeamStats} from "./interfaces/teamInterfaces"


// constructor({name, abrv, city, colors, logo, conference}: TeamProfile) 
let BATS = new Team({
    name:'Bats', 
    abrv:'ARK', 
    city:'Arkham', 
    colors:['#800080', '#000000', '#c0c0c0'], 
    logo:'<bats-logo>', 
    conference:'NC'});


// A team factory function is not needed if a database is setup first. just query DB to get the team data
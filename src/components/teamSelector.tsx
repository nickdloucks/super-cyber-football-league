import Team from "../TeamClass";
import TeamAdminGUI from "./teamGUI";


/**
 * This component if for selecting which team to edit. It renders the GUI for
 * manually changing Team data once the team is specified.
 */

function TeamSelector(): JSX.Element{
    // get list of Teams from database
    let selectedTeam: Team;
    if(selectedTeam !== undefined){
        return(
            <>
                <TeamAdminGUI /> {/**PASS SELECTED TEAM AS A PROP */}
            </>
        );
    }else{
        return(
            <>
                <ul>{/**LIST OF ALL TEAMS HERE */}</ul>
                <button>Select</button>
            </>
        );
    }
    
}



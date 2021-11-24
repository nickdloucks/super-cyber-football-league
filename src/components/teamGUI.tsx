import Team from "../TeamClass";
import React from "react";
import { ReactPropTypes } from "react";

/**
 * This will be an admin panel for editing specific data 
 * stored on the Team data structure. It will be handy for 
 * editing sample data throughout the testing phase.
 * This form should only render if the user has input the correct password
 * in order to change the data.
 */

class TeamAdminGUI extends React.Component {
    subjTeam: Team;

    constructor(props: Team){ // pass a Team as a prop; user will edit data for this team
        super(props);
        this.subjTeam = this.props.children;
    }
    render(){
        return(
            <>
                <h2>{this.subjTeam.profile.name}</h2>
                <form>
                    <label></label>
                    <input></input>
                </form>
            </>
        );
    }
}

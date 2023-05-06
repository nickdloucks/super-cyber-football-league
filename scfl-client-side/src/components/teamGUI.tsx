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


    constructor(props: Team){ // pass a Team as a prop; user will edit data for this team
        super(props);

    }
    render(){
        return(
            <>
                <h2>{/*team name and logo here*/}</h2>
                <form>
                    <section>
                        <h4>Profile:</h4>
                        <label></label>
                        <input></input>
                        <button>Update</button>
                        <button>Cancel</button>
                    </section>
                    <section>
                        <h4>Record:</h4>
                        <label></label>
                        <input></input>
                        <button>Update</button>
                        <button>Cancel</button>
                    </section>
                    <section>
                        <h4>Stats:</h4>
                        <label></label>
                        <input></input>
                        <button>Update</button>
                        <button>Cancel</button>
                    </section>
                </form>
            </>
        );
    }
}
export default TeamAdminGUI;
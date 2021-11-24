import Team from "../TeamClass";
import React from "react";

/**
 * This will be an admin panel for editing specific data 
 * stored on the Team data structure. It will be handy for 
 * editing sample data throughout the testing phase.
 * This form should only render if the user has input the correct password
 * in order to change the data.
 */

class TeamAdminGUI extends React.Component {
    constructor(props: Array<Team>){ // pass an array of Teams; user will pick one to edit
        super(props);
    }
}
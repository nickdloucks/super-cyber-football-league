import React from "react";
import {default as TeamTag} from "./TeamTag";
import {default as Team} from "../TeamClass";

const Schedule = function(subjectTeam: Team){
    //let opponents = new Array(7); // create new array of games to be filled with opponents later. 
    // set default value to the string 'empty' instead of <undefined>
    let opponents = subjectTeam.schedule.regSeason.map(opponent:Team => <tr><td>{opponent.name}</td><td>{'insert score here'}</td></tr>);
    return(
        <>
            <table>
                <thead>
                    <td>Opponent:</td>
                    <td>Score:</td>
                </thead>
                {opponents}
            </table>
        </>
    );
}
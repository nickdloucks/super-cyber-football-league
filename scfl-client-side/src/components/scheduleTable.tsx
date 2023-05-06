import React from "react";
import {default as TeamTag} from "./TeamTag";
import {default as Team} from "../TeamClass";

/**
 * 
 * @param subjectTeam: the team whose schedule this will display
 * @returns Table of opponent teams and the score of the game played between the two
 * note* configure such that the schedule table can display pre-season, regular season, or postseason (or all three)
 */

const Schedule = function(subjectTeam: Team, opponents:Array<Team>){ //  SEPARATE OPPONENTS ARRAY? 
    //OR WILL THIS BE STORED ON THE SUBJECT TEAM ITSELF?
    //let opponents = new Array(7); // create new array of games to be filled with opponents later. 
    // set default value to the string 'empty' instead of <undefined>
    // let opponents = subjectTeam.schedule.regSeason.map(opponent:Team => <tr><td>{opponent.name}</td><td>{'insert score here'}</td></tr>);
    return(
        <>
            <table>
                <thead>
                    <td>Opponent:</td>
                    <td>Score:</td>
                </thead>
                {/*opponents*/}
            </table>
        </>
    );
}
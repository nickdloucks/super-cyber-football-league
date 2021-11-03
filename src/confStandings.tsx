import React from'react';
import {default as Team} from './TeamClass';

const Standings = function(teamList: Team[], groupId: string){ // group ID will be a string to identify the conference, league, etc.
    const rows = teamList.map(function(team: Team){
        return(
            <>
                <tr key={team.profile.name.concat('-standingsRow')}>
                    <th scope='row'>{/* INSERT LOGO CARD HERE */}</th>
                    <td>{team.profile.name}</td>
                    <td>{team.record.wins}</td>
                    <td>{team.record.losses}</td>
                    <td>{team.record.ties}</td>
                </tr>
            </>
        );
    });

    return(
        <>
            <table>
                <thead>
                    {groupId} Standings
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </>
    );
}

export default Standings;
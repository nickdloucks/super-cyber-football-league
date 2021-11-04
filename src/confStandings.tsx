import React from'react';
import {default as Team} from './TeamClass';

const Standings = function(teamList: Team[], groupId: string){ // group ID will be a string to identify the conference, league, etc.
    let style = {
        padding: '15px',
        thead: {
            backgroundColor: '#555555'
        }
    }
    
    const rows = teamList.map(function(team: Team){
        let winPct = (team.record.wins/(team.record.wins + team.record.losses + team.record.ties)).toFixed(3);
        return(
            <>
                <tr key={team.profile.name.concat('-standingsRow')}>
                    <th scope='row'>{/* INSERT LOGO CARD HERE */}&nbsp;{team.profile.name}</th>
                    <td>{team.record.wins}</td>
                    <td>{team.record.losses}</td>
                    <td>{team.record.ties}</td>
                    <td>{winPct}</td>
                </tr>
            </>
        );
    });

    return(
        <>
            <span>{groupId} Standings</span>
            <table style = {style}>
                <thead style = {style.thead}>
                    <tr>
                        <th>{/*logo*/}</th>
                        <th scope='col'>Team</th>
                        <th scope='col'>Wins</th>
                        <th scope='col'>Losses</th>
                        <th scope='col'>Ties</th>
                        <th scope='col'>Pct.</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </>
    );
}

export default Standings;
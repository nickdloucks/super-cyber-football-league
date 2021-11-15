import React, { FC } from 'react'; // React Functional Component

/**
 * The team tag is a custom, stylized element that will be used to display a given team's logo and name.
 * It will most frequently be used for standings tables, schedule tables, and at the top of a game log document.
 */


interface NameProps {
  teamName: string; // the team's name
  logo: string; // URL for the team's SVG logo
}

const style: object = {
  // figure out how to select by a dynamically generated ID
}

const TeamTag: FC<NameProps> = ({ teamName }) => {
  return (
    <>
      <div id = {`${teamName}-tag`}>
        <div>{/*DISPLAY logo here, not just URL string*/}</div>
        <div>{teamName}</div>
        <img src='../images/football-icon1.png'></img>{/*image test...*/}
      </div>
    </>
  );
};

export default TeamTag;

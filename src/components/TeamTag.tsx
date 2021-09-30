import React, { FC } from 'react'; // React Functional Component

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
      </div>
    </>
  );
};

export default TeamTag;

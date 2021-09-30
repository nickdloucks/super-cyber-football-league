import React, { FC } from 'react'; // React Functional Component

interface NameProps {
  teamName: string; // the team's name
  logo: string; // URL for the team's SVG logo
}

const TeamTag: FC<NameProps> = ({ teamName }) => {
  return (
    <>
      <div>{/*DISPLAY logo here, not just URL string*/}</div>
      <div>{teamName}</div>
    </>
  );
};

export default TeamTag;

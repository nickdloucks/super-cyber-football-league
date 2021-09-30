import React, { FC } from 'react';

interface NameProps {
  title: string;
}

const TeamTag: FC<NameProps> = ({ title }) => {
  return (
    <React.Fragment>
      <div>{/*logo here*/}</div>
      <div>{title}</div>
    </React.Fragment>
  );
};

export default TeamTag;
import React, { FC } from 'react';

interface NameProps {
  title: string,
  logo?: File;
}

const TeamTag: FC<NameProps> = ({ title }) => {
  return (
    <>
      <div>{/*logo here*/}</div>
      <div>{title}</div>
    </>
  );
};

export default TeamTag;

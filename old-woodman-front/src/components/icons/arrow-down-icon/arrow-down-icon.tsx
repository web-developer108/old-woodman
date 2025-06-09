import React from 'react';

type ArrowDownIconProps = {
  width?: string;
  height?: string;
};

export const ArrowDownIcon: React.FC<ArrowDownIconProps> = ({
  width = '18',
  height ='9'
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 12" fill="none">
      <path d="M1 1.56262L10.0001 10.5625L19 1.5625" stroke="black" strokeWidth="1.25" strokeLinecap="round"
            strokeLinejoin="round"/>
    </svg>
  );
};

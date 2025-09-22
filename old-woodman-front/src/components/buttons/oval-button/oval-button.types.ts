import React from 'react';

export type OvalButtonProps = {
  theme?: 'light' | 'dark' | 'yellow';
  icon?: React.ReactNode;
  text: string;
  onClick?: () => void;
};
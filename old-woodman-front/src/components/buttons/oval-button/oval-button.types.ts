import React from 'react';

export type OvalButtonProps = {
  theme?: 'light' | 'dark';
  icon?: React.ReactNode;
  text: string;
  onClick?: () => void;
};
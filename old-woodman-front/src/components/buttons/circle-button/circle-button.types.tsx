import React from 'react';

export type CircleButtonProps = {
  icon: React.ReactNode;
  ariaLabel:string;
  bgColor?: string;
  onClick?: () => void;
  disabled?: boolean;
};
import React from 'react';

export type CircleButtonProps = {
  icon: React.ReactNode;
  bgColor?: string;
  onClick?: () => void;
  disabled?: boolean;
};
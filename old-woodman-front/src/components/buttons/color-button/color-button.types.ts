import React from 'react';

type ColorButtonVariant = 'yellow' | 'green' | 'blue' | 'black';

export type ColorButtonProps = {
  label: string;
  variant?: ColorButtonVariant;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?:boolean;
};
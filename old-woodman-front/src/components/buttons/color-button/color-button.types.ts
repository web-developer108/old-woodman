import React from 'react';

type ColorButtonVariant = 'yellow' | 'green' | 'blue' | 'black' | 'white';

export type ColorButtonProps = {
  label: string;
  variant?: ColorButtonVariant;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?:boolean;
  type?: "button" | "submit" | "reset" | undefined;
};
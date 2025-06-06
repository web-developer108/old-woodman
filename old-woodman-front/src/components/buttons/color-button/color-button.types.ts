import React from 'react';

type ColorButtonVariant = 'yellow' | 'green' | 'blue';

export type ColorButtonProps = {
  label: string;
  variant?: ColorButtonVariant;
  icon?: React.ReactNode;
  onClick?: () => void;
};
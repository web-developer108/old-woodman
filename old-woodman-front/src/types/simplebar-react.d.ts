declare module 'simplebar-react' {
  import * as React from 'react';

  interface SimpleBarProps extends React.HTMLAttributes<HTMLDivElement> {
    scrollableNodeProps?: React.HTMLAttributes<HTMLDivElement>;
    autoHide?: boolean;
    timeout?: number;
    clickOnTrack?: boolean;
    forceVisible?: boolean | 'x' | 'y';
  }

  export default class SimpleBar extends React.Component<SimpleBarProps> {}
}
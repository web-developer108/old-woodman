
import React, { type ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pushGTMEvent } from '../../utils/gtm.ts';

interface GTMProviderProps {
  children: ReactNode;
  gtmId?: string;
}

export const GTMProvider: React.FC<GTMProviderProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    pushGTMEvent({
      event: 'pageview',
      page: location.pathname,
    });
  }, [location.pathname]);

  return children;
};


import React, { type ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGTM, pushGTMEvent } from '../../utils/gtm.ts';

interface GTMProviderProps {
  children: ReactNode;
  gtmId: string;
}

export const GTMProvider: React.FC<GTMProviderProps> = ({ children, gtmId }) => {
  const location = useLocation();

  /*useEffect(() => {
    initGTM(gtmId);
  }, [gtmId]);
*/
  useEffect(() => {
    pushGTMEvent({
      event: 'pageview',
      page: location.pathname,
    });
  }, [location.pathname]);

  return children;
};

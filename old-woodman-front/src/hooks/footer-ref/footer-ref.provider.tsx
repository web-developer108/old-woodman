import { useRef } from 'react';
import { FooterRefContext } from './footer-ref-context';

export const FooterRefProvider = ({ children }: { children: React.ReactNode }) => {
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <FooterRefContext.Provider value={footerRef}>
      {children}
    </FooterRefContext.Provider>
  );
};
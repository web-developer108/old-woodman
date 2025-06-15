import React from 'react';
import { SeoHead } from '../seo-head/seo-head.tsx';
import { HeaderBar } from '../header-bar/header-bar.tsx';
import { FooterTop } from '../footer/footer-top/footer-top.tsx';
import { FooterBottom } from '../footer/footer-bottom/footer-bottom.tsx';

interface ToolPageLayoutProps {
  isFullFooter?: boolean
  children: React.ReactNode;
}

export const ToolPageLayout: React.FC<ToolPageLayoutProps> = ({ isFullFooter = true, children }) => {

  return (
    <div>
      <SeoHead/>
      <HeaderBar/>
      {children}
      {isFullFooter && <FooterTop/>}
      <FooterBottom/>
    </div>
  );
};

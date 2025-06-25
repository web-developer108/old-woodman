import { type RefObject, useContext } from 'react';
import { FooterRefContext } from './footer-ref-context.ts';

export const useFooterRef = (): RefObject<HTMLDivElement | null> | null =>
  useContext(FooterRefContext);
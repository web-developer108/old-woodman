import { createContext, type RefObject } from 'react';

export const FooterRefContext = createContext<RefObject<HTMLDivElement | null> | null>(null);
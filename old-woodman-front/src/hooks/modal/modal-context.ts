import { createContext, type ReactNode } from 'react';

interface ModalContextType {
  showModal: (content: ReactNode) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);



import { ModalContext } from "./modal-context";
import { type ReactNode, useState } from 'react';
import styles from './modal.module.scss'
import { CircleButton } from '../../components/buttons/circle-button/circle-button.tsx';
import { CloseIcon } from '../../components/icons/close-icon/close-icon.tsx';

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const showModal = (content: ReactNode) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <ModalContext.Provider value={{ showModal, closeModal }}>
      {children}
      {modalContent && (
        <div className={styles.overlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div   className={styles.close} >
                <CircleButton
                  icon={<CloseIcon/>}
                  onClick={closeModal}
                  bgColor='transparent'
                />
            </div>
            {modalContent}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

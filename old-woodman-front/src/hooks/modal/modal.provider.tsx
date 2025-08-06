import { ModalContext } from "./modal-context";
import { type ReactNode, useState } from 'react';
import useDevice from '../device/use-device.ts';
import { CircleButton } from '../../components/buttons/circle-button/circle-button.tsx';
import { CloseIcon } from '../../components/icons/close-icon/close-icon.tsx';
import { useTranslation } from 'react-i18next';
import styles from './modal.module.scss'

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const { t } = useTranslation('common')
  const { isMobile } = useDevice();
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const showModal = (content: ReactNode) => {
    setModalContent(content);
    setIsClosing(false);
  };
  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalContent(null);
      setIsClosing(false);
    }, 300);
  };


  return (
    <ModalContext.Provider value={{ showModal, closeModal }}>
      {children}
      {modalContent && (
        <div className={styles.overlay} onClick={closeModal}>
          <div
            className={`${isMobile ? styles.drawer : styles.modal} ${
              isClosing ? styles.animateOut : styles.animateIn
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={isMobile ? styles.drawerInner : ''}>
              <div className={styles.close}>
                <CircleButton
                  ariaLabel={t('header.aria-label')}
                  icon={<CloseIcon/>}
                  onClick={closeModal}
                  bgColor='transparent'
                />
              </div>

              {modalContent}
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

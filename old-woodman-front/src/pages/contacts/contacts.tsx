import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { useModal } from '../../hooks/modal/use-modal.ts';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { ColorButton } from '../../components/buttons/color-button/color-button.tsx';
import { ArrowTopRightIcon } from '../../components/icons/arrow-top-right-icon/arrow-top-right-icon.tsx';
import { ContactsModal } from '../../components/modal-windows/contacts-modal/contacts-modal.tsx';
import styles from './contacts.module.scss';

const Contacts = () => {
  const { t } = usePageTranslate();
  const { showModal } = useModal();

  return (
    <ToolPageLayout isFullFooter={false}>
      <div className={styles.contactsContainer}>
        <div className={styles.imageContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d358.52071230775834!2d76.93486923378899!3d43.26778674175085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f46af665e7b%3A0x618d1a246ccf8f25!2soldwoodman!5e0!3m2!1sru!2sde!4v1752832639007!5m2!1sru!2sde"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className={styles.contactsContent}>
          <Breadcrumbs current={t('main-header')}/>
          <h1 className={styles.mainHeader}>
            {t('header-1').toUpperCase()}
            <br/>
            {t('header-2').toUpperCase()}
          </h1>
          <div className={styles.infoContainer}>
            <div className={styles.infoWrap}>
              <h2>{t('section-title-1').toUpperCase()}</h2>
              <span>{t('section-description-1')}</span>
            </div>
            <div className={styles.infoWrap}>
              <h2>{t('section-title-2').toUpperCase()}</h2>
              <span>{t('section-description-2')}</span>
            </div>
            <div className={styles.infoWrap}>
              <h2>{t('section-title-3').toUpperCase()}</h2>
              <span>{t('section-description-3')}</span>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <ColorButton
              icon={<ArrowTopRightIcon/>}
              label={t('button-label')}
              onClick={() => showModal(<ContactsModal/>)}
            />
          </div>
        </div>
      </div>
    </ToolPageLayout>
  )
}

export default Contacts;
import { useEffect, useRef } from 'react';
import { usePageTranslate } from '../../hooks/page-translate/page-translate.ts';
import { useFooterRef } from '../../hooks/footer-ref/use-footer-ref.ts';
import { ToolPageLayout } from '../../components/tool-page-layout/tool-page-layout.tsx';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.tsx';
import { InfoIcon } from '../../components/icons/info-icon/info-icon.tsx';
import { CircleButton } from '../../components/buttons/circle-button/circle-button.tsx';
import { ArrowBottomIcon } from '../../components/icons/arrow-bottom-icon/arrow-bottom-icon.tsx';
import doorWidth from '@assets/images/info/door-width.svg'
import doorHeight from '@assets/images/info/door-height.svg'
import doorDepth from '@assets/images/info/door-depth.svg'
import { AppColors } from '../../styles.ts';
import styles from '../info/info.module.scss';

const Info = () => {
  const { t } = usePageTranslate();
  const footerRef = useFooterRef();
  const instructionRef = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    footerRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    if (location.pathname === '/info' && location.hash === '#instructions') {

      instructionRef.current?.scrollIntoView({ behavior: 'smooth' });

    }
  }, []);
  return (
    <ToolPageLayout>
      <div className={styles.infoContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.mainHeader}
                dangerouslySetInnerHTML={{ __html: t('main-header').toUpperCase() }}/>
            <div className={styles.iconWrapper}>
              <InfoIcon/>
            </div>
          </div>

        </div>
        <div className={styles.infoContent}>
          <Breadcrumbs current={t('info')}/>
          <h2 className={styles.header}>{t('header-1').toUpperCase()}</h2>
          <section className={styles.section}>
            <h3>{t('subtitle-1').toUpperCase()}</h3>
            <span>{t('text-1.1')}</span>
            <span>{t('text-1.2')}</span>
            <span>{t('text-1.3')}</span>
            <span>{t('text-1.4')}</span>
          </section>
          <section className={styles.section}>
            <h3>{t('subtitle-2').toUpperCase()}</h3>
            <span>{t('text-2.1')}</span>
            <span>{t('text-2.2')}</span>
            <span>{t('text-2.3')}</span>
            <span>{t('text-2.4')}</span>
          </section>
          <section className={styles.list}>
            <h3>{t('subtitle-3').toUpperCase()}</h3>
            <ol>
              <li>{t('text-3.1')}</li>
              <li>{t('text-3.2')}</li>
              <li>{t('text-3.3')}</li>
              <li>{t('text-3.4')}</li>
              <li>{t('text-3.5')}</li>
            </ol>
          </section>

          <div className={styles.grey} onClick={handleClick}>
            <div className={styles.headerWrap}>

              <div className={styles.buttonWrap}>
                <CircleButton ariaLabel={t('arrow.aria-label')} onClick={handleClick}
                              bgColor={AppColors.background.circleButton} icon={<ArrowBottomIcon/>}/>
              </div>

              <h3>{t('subtitle-4').toUpperCase()}</h3>
            </div>
            <div className={styles.buttonText}>{t('text-4')}</div>
          </div>
          <h2 id='instructions' ref={instructionRef}
              className={styles.instructionsTitle}>{t('instruction').toUpperCase()}</h2>
          <section className={styles.section}>
            <h3>{t('instruction-label-1').toUpperCase()}</h3>
            <span>{t('instruction-text-1.1')}</span>
            <span>{t('instruction-text-1.2')}</span>
            <span>{t('instruction-text-1.3')}</span>
          </section>
          <section className={styles.section}>
            <h3>{t('instruction-label-2').toUpperCase()}</h3>
            <span>{t('instruction-text-2')}</span>
          </section>
          <section className={styles.sectionImage}>
            <div className={styles.instructionsWrap}>
              <h3>{t('instruction-label-3').toUpperCase()}</h3>
              <span>{t('instruction-text-3.1')}</span>
              <span>{t('instruction-text-3.2')}</span>
            </div>
            <img className={styles.image} src={doorWidth} alt="Ширина проёма"/>
          </section>
          <section className={styles.sectionImage}>
            <div className={styles.instructionsWrap}>
              <h3>{t('instruction-label-4').toUpperCase()}</h3>
              <span>{t('instruction-text-4.1')}</span>
              <span>{t('instruction-text-4.2')}</span>
            </div>
            <img className={styles.image} src={doorHeight} alt="Ширина проёма"/>
          </section>
          <section className={styles.sectionImage}>
            <div className={styles.instructionsWrap}>
              <h3>{t('instruction-label-5').toUpperCase()}</h3>
              <span>{t('instruction-text-5.1')}</span>
              <span>{t('instruction-text-5.2')}</span>
              <span>{t('instruction-text-5.3')}</span>
            </div>
            <img className={styles.image} src={doorDepth} alt="Ширина проёма"/>
          </section>
          <div className={styles.finalBlock}>
            <span><b className={styles.warning}>{t('instruction-warning')}</b>
              {t('instruction-warning-text-1')}</span>
            <span className={styles.block}>{t('instruction-warning-text-2')}</span>
          </div>
        </div>
      </div>
    </ToolPageLayout>
  )
}
export default Info
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo } from '../../logo/logo.tsx';
import { SocialPanel } from '../../social-panel/social-panel.tsx';
import { FooterLanguageSelect } from '../footer-language-select/footer-language-select.tsx';
import styles from './footer-bottom.module.scss';

export const FooterBottom = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();

  const currentYear = new Date().getFullYear();

  const goToFaq = () => {
    if (location.pathname === '/') {
      const faqElement = document.getElementById('faq');
      if (faqElement) {
        faqElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/#faq');
      }
    } else {
      navigate('/#faq');
    }
  };

  return (
    <div className={styles.footerBottom}>
      <div className={styles.logo}>
        <Logo/>
      </div>
      <div className={styles.address}>
        <p className={styles.text}>{t('footer.address1')} </p>
        <p className={styles.text}>{t('footer.address2')} </p>
        <p className={styles.time}>{t('footer.address3')} </p>
      </div>
      <div className={styles.whatsapp}>
        <a href="https://wa.me/77081826004"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="WhatsApp"
        >
          <p className={styles.number}>WhatsApp: </p>
          <p className={styles.number}> +7 (708) 182-60-04 </p>
        </a>
      </div>
      <div className={styles.copyright}>
        <p>{`©Old Woodman. 2023—${currentYear}`}</p>
        <p>{t('footer.adv')}</p>
      </div>
      <div className={styles.order}>
        <h3>{t('footer.order')}</h3>
        <nav className={styles.navigation}>
          <Link to="/doors" className={styles.items}>{t('footer.doors')}</Link>
          <Link to="/furniture" className={styles.items}
          >{t('footer.furniture')}</Link>
          <Link to="/facades" className={styles.items}>{t('footer.panels')}</Link>
          <Link to="/gifts" className={styles.items}>{t('footer.decor')}</Link>
          <Link to="/promotions" className={styles.items}>{t('promotions')}</Link>
        </nav>
      </div>
      <div className={styles.helpful}>
        <h3>{t('footer.helpful')}</h3>
        <nav className={styles.navigation}>
          <Link to="/#faq"  onClick = {()=>goToFaq()} className={styles.items}>{t('footer.questions')}</Link>
          <Link to="/info" className={styles.items}
          >{t('footer.info')}</Link>
          <Link to="/terms" className={styles.items}>{t('footer.terms')}</Link>
          <Link to="/privacy-policy" className={styles.items}
          >{t('footer.privacy')}</Link>
          <Link to="/contacts" className={styles.items}>{t('contacts')}</Link>
        </nav>
      </div>
      <div className={styles.social}>
        <SocialPanel/>
      </div>
      <div className={styles.select}>
        <FooterLanguageSelect/>
      </div>
    </div>
  )
}
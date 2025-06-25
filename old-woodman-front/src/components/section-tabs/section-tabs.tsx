import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './section-tabs.module.scss';

export const SectionTabs = () => {
  const { pathname } = useLocation();
  const { t } =useTranslation('common');

  const tabs = [
    { label: t('button-doors'), path: '/doors' },
    { label: t('button-furniture'), path: '/furniture' },
    { label: t('button-facades'), path: '/facades' },
    { label: t('button-decor'), path: '/gifts' },
  ];

  return (
    <div className={styles.tabsContainer}>
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) =>
            `${styles.tab} ${isActive || pathname.startsWith(tab.path) ? styles.active : ''}`
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
};


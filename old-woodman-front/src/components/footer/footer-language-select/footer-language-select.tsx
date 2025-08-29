import React, {useState, useRef, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {ArrowDownIcon} from '../../icons/arrow-down-icon/arrow-down-icon.tsx';
import styles from './footer-language-select.module.scss';

export const FooterLanguageSelect: React.FC = () => {
    const {i18n} = useTranslation();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const currentLang = i18n.language === 'kk' ? 'Қазақша' : 'Русский';
    const altLang = i18n.language === 'kk' ? 'ru' : 'kk';
    const altLabel = altLang === 'kk' ? 'Қазақша' : 'Русский';

    const handleSelect = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('i18nextLng', lang);
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={styles.dropdown} ref={ref}>
            <button className={`${styles.toggle} ${open ? styles.open : ''}`} onClick={() => setOpen(!open)}>
                {currentLang}
                <ArrowDownIcon/>
            </button>
            {open && (
                <div className={styles.menu}>
                    <button onClick={() => handleSelect(altLang)}>{altLabel}</button>
                </div>
            )}
        </div>
    );
};

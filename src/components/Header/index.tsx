import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import styles from './Header.module.css';

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
            <div className={styles.headerContainer}>
                <div className={styles.headerLogo}>
                    <p className={styles.oneTitle}>Ruppel-Transporte – Expressfahrten</p>
                    {/* <p className={styles.twoTitle}>Expressfahrten, Möbeltransport, Kurierfahrten, Umzüge</p> */}
                </div>
                <div className={styles.divider}></div>
                <div className={styles.contactIcons}>
                    <a href="#about-us" className={styles.contactLink}>
                        <Icon icon="mdi:information" style={{ fontSize: '24px', color: '#fff' }} />
                    </a>
                    <a href="tel:+491729017929" className={styles.contactLink}>
                        <Icon icon="mdi:phone" style={{ fontSize: '24px', color: '#fff' }} />
                    </a>
                    <a href="mailto:example@example.com" className={styles.contactLink}>
                        <Icon icon="mdi:email" style={{ fontSize: '24px', color: '#fff' }} />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;




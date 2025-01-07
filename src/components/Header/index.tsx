import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import WhatsAppButton from '../UI/WhatsAppButton';
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
                </div>
                <div className={styles.contactIcons}>
                    <WhatsAppButton phoneNumber='491729017929' message='Hallo!%20Ich%20möchte%20mehr%20über%20Ihre%20Dienstleistungen%20erfahren.' />
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




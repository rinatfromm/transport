import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import WhatsAppButton from '../UI/WhatsAppButton';
import styles from './Header.module.css';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
            <div className={styles.headerContainer}>
                <div className={styles.headerLogo}>
                    <p className={styles.oneTitle}>Ruppel-Transporte – Expressfahrten</p>
                </div>

                <div className={styles.burgerMenu} onClick={toggleMenu}>
                    <div className={styles.burgerLine}></div>
                    <div className={styles.burgerLine}></div>
                    <div className={styles.burgerLine}></div>
                </div>
                <div className={`${styles.contactIcons} ${isMenuOpen ? styles.menuOpen : ''}`}>
                    <WhatsAppButton
                        phoneNumber='491729017929'
                        message='Hallo!%20Ich%20möchte%20mehr%20über%20Ihre%20Dienstleistungen%20erfahren.'
                    />
                    <a href="tel:+491729017929" className={`${styles.contactLink} ${scrolled ? styles.scrolledLink : ''}`}>
                        <Icon icon="mdi:phone"  />
                    </a>
                    <a href="mailto:info@ruppel-transporte.de" className={`${styles.contactLink} ${scrolled ? styles.scrolledLink : ''}`}>
                        <Icon icon="mdi:email"  />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;






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

        if (!isMenuOpen) {
            setTimeout(() => {
                setIsMenuOpen(false);
            }, 5000);
        }
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
            <div className={styles.headerContainer}>
                <div className={styles.headerLogo}>
                    <p className={styles.oneTitle}>Ruppel - Transporte</p>
                </div>

                <div
                    className={styles.burgerMenu}
                    onClick={toggleMenu}
                    role="button"
                >
                    <div className={styles.burgerLine}></div>
                    <div className={styles.burgerLine}></div>
                    <div className={styles.burgerLine}></div>
                </div>

                <div className={`${styles.contactIcons} ${isMenuOpen ? styles.menuOpen : ''}`} data-testid="contact-icons">
                    <WhatsAppButton
                        phoneNumber="+4917669653451"
                        message="Hallo! Ich interessiere mich für Ihre Dienstleistungen und möchte mehr darüber erfahren. Könnten Sie mir bitte mehr Informationen geben?"
                    />
                    <a href="tel:+4917669653451" className={`${styles.contactLink} ${scrolled ? styles.scrolledLink : ''}`}
                        role="link" aria-label="phone">
                        <Icon icon="mdi:phone" />
                    </a>
                    <a href="mailto:info@ruppel-transporte.de" className={`${styles.contactLink} ${scrolled ? styles.scrolledLink : ''}`}
                        role="link" aria-label="email">
                        <Icon icon="mdi:email" />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;







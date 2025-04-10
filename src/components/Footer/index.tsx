import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';
import ContactInfo from './ContactInfo';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.contactInfo}>
                    <h3 className={styles.footerTitle}>Kontakt</h3>
                    <NavLink to="/impressum" className={styles.footerTitleImp}>
                        Impressum
                    </NavLink>
                    <ContactInfo value="Ruppel-Transporte" />
                    <ContactInfo value="Svetlana Ruppel" />
                    <ContactInfo value="Neudammstraße 27, 38116 Braunschweig" />
                    <ContactInfo label="Telefon" value="+4917669653451" isLink />
                    <ContactInfo label="E-Mail" value="info@ruppel-transporte.de" isLink />
                </div>
            </div>
        </footer>
    );
};

export default Footer;

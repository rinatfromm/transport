import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.contactInfo}>
                    <h3 className={styles.footerTitle}>Kontakt</h3>
                    <p className={styles.footerText}>Ruppel-Transporte</p>
                    <p className={styles.footerText}>Inh. Svetlana Ruppel</p>
                    <p className={styles.footerText}>Dornenbusch 39</p>
                    <p className={styles.footerText}>38120 Braunschweig</p>
                    <p className={styles.footerKontakt}>Telefon: <a href="tel:+4917669653451">+49 176 696 53 451</a></p>
                    <p className={styles.footerKontakt}>E-Mail: <a href="mailto:info@ruppel-transporte.de">info@ruppel-transporte.de</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

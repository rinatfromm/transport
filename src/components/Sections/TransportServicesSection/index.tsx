import React from 'react';
import ServicesList from './ServicesList';
import styles from './TransportServicesSection.module.css';

const TransportServicesSection: React.FC = () => {
    return (
        <section className={styles.servicesContainer}>
            <h2 className={styles.servicesTitel}>Warum Ruppel-Transporte?</h2>
            <ul className={styles.servicesInfo}>
                <li className={styles.servicesList}>Kurzfristige Verfügbarkeit </li>
                <li className={styles.servicesList}>Schnelle Angebotsbearbeitung</li>
                <li className={styles.servicesList}>Transparente Preise – Keine versteckten Kosten</li>
            </ul>
            <p className={styles.servicesText}>
                Ob Umzüge, Möbeltransporte oder größere Einkäufe wie Maschinen – wir erledigen alles aus einer Hand!
            </p>
            <ServicesList />
            <div className={styles.servicesFooter}>
                <h2 className={styles.servicesFooterTitel}>Kontaktieren Sie uns</h2>
                <p className={styles.servicesFooterText}>Wir erstellen Ihnen gerne ein individuelles Angebot – kostenlos und unverbindlich. Auf Wunsch bieten wir nach Besichtigung ein Festpreisangebot an.</p>
                <h3 className={styles.servicesFooterKontakt}>Telefon | E-Mail</h3>
                <p className={styles.servicesFooterText}>Überzeugen Sie sich von unserem erstklassigen Preis-Leistungs-Verhältnis!</p>
                <p className={styles.servicesFooterInfo}>Rechnung gemäß Kleinunternehmerregelung (§ 19 UStG)</p>
                <p className={styles.servicesFooterInfo}>Wir freuen uns auf Ihre Anfrage!</p>
            </div>
        </section>
    );
};

export default TransportServicesSection;


import styles from './AboutUs.module.css';
import { contentData } from '../../../data/contentData';
import CardSection from './CardSection';

const AboutUs: React.FC = () => {
  return (
    <section className={styles.aboutUs}>
      <h2 className={styles.heading}>Über uns</h2>
      <p className={styles.description}>
        Ruppel-Transporte – Ihr zuverlässiger Partner für Transporte seit 2008 mit Sitz in Braunschweig. Wir bieten europaweite Gütertransporte für Privat- und Gewerbekunden.
      </p>
      <p className={styles.leistungTitel}>Unsere Leistungen</p>
      <CardSection heading={contentData.transporter.heading} items={contentData.transporter.items} />
      <CardSection heading={contentData.anhaenger.heading} items={contentData.anhaenger.items} />

    </section>
  );
};

export default AboutUs;


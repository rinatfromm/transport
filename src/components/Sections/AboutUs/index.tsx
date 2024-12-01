// AboutUs.tsx
import styles from './AboutUs.module.css';
import { contentData } from '../../../data/contentData';
import CardSection from './CardSection';

const AboutUs: React.FC = () => {
  return (
    <section className={styles.aboutUs}>
      <h2 className={styles.heading}>Über uns</h2>
      <p className={styles.description}>
        Ruppel-Transporte ist ein Transportunternehmen, gegründet im Jahre 2008, mit Sitz in Braunschweig. Wir erledigen Gütertransporte jeglicher Art, auch für Privat- und Gewerbekunden europaweit.
      </p>

      <CardSection heading={contentData.leistungen.heading} items={contentData.leistungen.items} />
      <CardSection heading={contentData.transporter.heading} items={contentData.transporter.items} />
      <CardSection heading={contentData.anhaenger.heading} items={contentData.anhaenger.items} />

      <h2 className={styles.heading}>Kontaktieren Sie uns:</h2>
      <p className={styles.contactDescription}>
        Informieren Sie sich über unsere Preise und Leistungen auf unserer Homepage, per Email oder telefonisch.
      </p>
      <p className={styles.contactDetails}>
        Email: <a className={styles.contactLink} href="mailto:info@ruppel-transporte.de">info@ruppel-transporte.de</a>
      </p>
      <p className={styles.contactDetails}>
        Tel-Nr.: <a className={styles.contactLink} href="tel:+4917669653451">0176 696 53 451</a>
      </p>
    </section>
  );
};

export default AboutUs;


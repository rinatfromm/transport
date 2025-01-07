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

    </section>
  );
};

export default AboutUs;


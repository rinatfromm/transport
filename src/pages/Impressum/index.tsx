import { NavLink } from 'react-router-dom';
import styles from './Impressum.module.css';

const Impressum: React.FC = () => {
    return (
        <section className={styles.impressumContainer}>
            <div className={styles.arrowContainer}>
                <NavLink to="/" className={styles.linkWithArrow}>
                    <span className={styles.arrow}>←</span> Zurück zur Startseite
                </NavLink>
            </div>

            <h1 className={styles.impressumTitle}>Impressum</h1>

            <h2 className={styles.impressumSubtitle}>Angaben gemäß § 5 TMG</h2>
            <p className={styles.impressumText}>Ruppel-Transporte</p>
            <p className={styles.impressumText}>Neudammstraße 27 </p>
            <p className={styles.impressumText}>38116 Braunschweig</p>

            <h3 className={styles.impressumSectionTitle}>Vertreten durch:</h3>
            <p className={styles.impressumText}>Geschäftsführer: Svetlana Ruppel</p>

            <h3 className={styles.impressumSectionTitle}>Kontakt:</h3>
            <p>
                Telefon: <a href="tel:+4917669653451" className={styles.impressumLink}>+49 176 696 53 451</a>
            </p>
            <p >
                E-Mail: <a href="mailto:info@ruppel-transporte.de" className={styles.impressumLink}>info@ruppel-transporte.de</a>
            </p>

            <h3 className={styles.impressumSectionTitle}>Umsatzsteuer-Identifikationsnummer gemäß §27 a</h3>
            <p className={styles.impressumText}>Umsatzsteuer-ID: DE31096XXXX</p>

            <p className={styles.impressumText}>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2 className={styles.impressumSubtitle}>Haftung für Inhalte</h2>
            <p className={styles.impressumText}>
                Als Dienstanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Dienstanbieter jedoch
                nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className={styles.impressumText}>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h2 className={styles.impressumSubtitle}>Haftung für Links</h2>
            <p className={styles.impressumText}>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
                haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
                der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p className={styles.impressumText}>
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className={styles.impressumText}>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
                einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                Links umgehend entfernen.
            </p>

            <h2 className={styles.impressumSubtitle}>Urheberrecht</h2>
            <p className={styles.impressumText}>
                Die, durch die Seitenbetreiber erstellten, Inhalte und Werke auf diesen Seiten unterliegen dem
                deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
                Gebrauch gestattet.
            </p>
            <p className={styles.impressumText}>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
                auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>

            <p className={styles.impressumText}>
                <strong className={styles.quelle}>Quelle:</strong> eRecht24
            </p>
        </section>
    );
};

export default Impressum;


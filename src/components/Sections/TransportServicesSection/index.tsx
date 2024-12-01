import RentalTerms from './RentalTerms'
import ServicesInfo from './ServicesInfo'
import ServicesList from './ServicesList'
import TextBlock from './TextBlock'
import styles from './TransportServicesSection.module.css'

const TransportServicesSection: React.FC = () => {
    return (
        <section className={styles.servicesContainer}>
            <h2 className={styles.leistungTitle}>Unsere Leistungen</h2>
            <p className={styles.servicesText}>Wir vermieten Transporter mit einem Ladevolumen von 1,8 bis 15,5 Kubikmetern, auch mit Fahrer, für private und gewerbliche Kunden.</p>
            <p className={styles.servicesText}><strong>OHNE ZUSÄTZLICHE KM-PAUSCHALE!</strong></p>
            <ServicesInfo />
            <p className={styles.servicesText}>Ob Umzüge, Möbeltransporte oder der Transport von überdimensionalen Gütern wie Maschinen – wir erledigen alles aus einer Hand, ganz ohne versteckte Kosten.</p>
            <p className={styles.servicesText}>Auch bei E-Bay-Käufen oder dem Transport von gewerblichen Waren stehen wir Ihnen gerne zur Verfügung, auch am Wochenende.</p>
            <ServicesList />
            <RentalTerms />
            <TextBlock />
            <div className={styles.serviceFooter}>
                <p className={styles.servicesText}>Wir freuen uns auf Ihre Anfrage!</p>
            </div>
        </section>
    )
}

export default TransportServicesSection
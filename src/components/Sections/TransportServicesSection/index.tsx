import RentalTerms from './RentalTerms'
import ServicesInfo from './ServicesInfo'
import ServicesList from './ServicesList'
import TextBlock from './TextBlock'
import styles from './TransportServicesSection.module.css'

const TransportServicesSection: React.FC = () => {
    return (
        <section className={styles.root}>
            <h2>Unsere Leistungen</h2>
            <p>Wir vermieten Transporter mit einem Ladevolumen von 1,8 bis 15,5 Kubikmetern, auch mit Fahrer, für private und gewerbliche Kunden.</p>
            <p><strong>OHNE ZUSÄTZLICHE KM-PAUSCHALE!</strong></p>
            <ServicesInfo />
            <p>Ob Umzüge, Möbeltransporte oder der Transport von überdimensionalen Gütern wie Maschinen – wir erledigen alles aus einer Hand, ganz ohne versteckte Kosten.</p>
            <p>Auch bei E-Bay-Käufen oder dem Transport von gewerblichen Waren stehen wir Ihnen gerne zur Verfügung, auch am Wochenende.</p>
            <ServicesList />
            <RentalTerms />
            <TextBlock />
            <div className={styles.footer}>
                <p>Wir freuen uns auf Ihre Anfrage!</p>
            </div>
        </section>
    )
}

export default TransportServicesSection
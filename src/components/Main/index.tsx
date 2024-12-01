import styles from './Main.module.css'
import AboutUs from '../Sections/AboutUs'
import Imprint from '../Sections/Imprint'
import Billboard from '../Sections/billboard'
import TransportServicesSection from '../Sections/TransportServicesSection'
import ServiceList from '../Sections/ServiceList'
import GallerySection from '../Sections/GallerySection'

function Main() {
    return (
        <main className={styles.main}>
            <Billboard />
            <ServiceList />
            <AboutUs />
            <GallerySection />
            <TransportServicesSection />
            <Imprint />
        </main>
    )
}

export default Main
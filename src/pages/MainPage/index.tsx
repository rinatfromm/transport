import AboutUs from '../../components/Sections/AboutUs'
import Billboard from '../../components/Sections/Billboard'
import TransportServicesSection from '../../components/Sections/TransportServicesSection'
import ServiceList from '../../components/Sections/ServiceList'
import GallerySection from '../../components/Sections/GallerySection'
import styles from './MainPage.module.css'

function MainPage() {
    return (
        <main className={styles.main}>
            <Billboard />
            <ServiceList />
            <AboutUs />
            <GallerySection />
            <TransportServicesSection />
        </main>
    )
}

export default MainPage
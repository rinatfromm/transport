import { servicesInfo } from '../../../../data/servicesInfoData'
import styles from './ServicesInfo.module.css'

function ServicesInfo() {
    return (
        <div className={styles.servicesInfo}>
            {servicesInfo.map((item, id) => (
                <div key={id} className={styles.serviceItem}>
                    <h3 className={styles.servicesTitle}>{item.title}</h3>
                    <p className={styles.serviceText}>{item.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ServicesInfo
import { transportServicesData } from '../../../../data/transportServicesData'
import styles from './ServicesList.module.css'


function ServicesList() {
    return (
        <div>
            {transportServicesData.map((section, index) => (
                <div key={index} className={styles.servicesList}>
                    <h3>{section.title}</h3>
                    <ul>
                        {section.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default ServicesList



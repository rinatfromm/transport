import Icon from '@mdi/react';
import { services } from '../../../data/services';
import styles from './ServiceList.module.css';

const ServiceList = () => {
    return (
        <section className={styles.section}>
            {services.map((service) => (
                <div key={service.id} className={styles.service}>
                    <Icon
                        path={service.icon}
                        size={3}
                        className={styles.icon}
                        data-testid={`service-icon-${service.id}`}
                    />
                    <div className={styles.serviceTextWrapper}>
                        <span className={styles.serviceText}>{service.title}</span>
                        <p className={styles.serviceDescription}>{service.description}</p>
                    </div>
                </div>
            ))}
            <div className={styles.bottomLine}></div>
        </section>
    );
};

export default ServiceList;

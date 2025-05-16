import styles from './ContactInfo.module.css'
import ContactInfoProps from '../../../types/ContactInfoProps'

const ContactInfo: React.FC<ContactInfoProps> = ({ label, value, isLink = false }) => {
    let hrefValue = value;
    if (isLink) {
        if (label === 'Telefon') {
            hrefValue = `tel:${value}`;
        } else if (label === 'E-Mail') {
            hrefValue = `mailto:${value}`;
        }
    }

    return (
        <p className={styles.footerText}>
            {label} {isLink ? <a href={hrefValue}>{value}</a> : value}
        </p>
    );
};

export default ContactInfo;

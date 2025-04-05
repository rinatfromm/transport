import styles from './ContactInfo.module.css'
import ContactInfoProps from '../../../types/ContactInfoProps'


const ContactInfo: React.FC<ContactInfoProps> = ({ label, value, isLink = false }) => (
    <p className={styles.footerText}>
        {label} {isLink ? <a href={value}>{value}</a> : value}
    </p>
);

export default ContactInfo;
import React from 'react';
import whatsappLogo from '../../../assets/icons/wa.svg'
import { WhatsAppButtonProps } from '../../../types/WhatsAppButton'
import styles from './WhatsAppButton.module.css'; // Импорт стилей, если нужно


const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
        >
            <img
                src={whatsappLogo}
                alt="WhatsApp"
                className={styles.whatsappLogo} />
        </a>
    );
};

export default WhatsAppButton;

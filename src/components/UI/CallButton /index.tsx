import { Fab } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { useEffect, useState } from 'react';
import { CallButtonProps } from '../../../types/CallButtonProps'
import styles from './CallButton.module.css';


const CallButton: React.FC<CallButtonProps> = ({ phoneNumber = '+123456789' }) => {
    const [shake, setShake] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShake(true);
            setTimeout(() => {
                setShake(false);
            }, 1000); //
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Fab
            aria-label="call"
            href={`tel:${phoneNumber}`}
            className={`${styles.fabCallButton} ${shake ? styles.shake : ''}`}
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                backgroundColor: '#406182',
                color: '#fff',
            }}
        >
            <PhoneIcon />
        </Fab>
    );
};

export default CallButton;




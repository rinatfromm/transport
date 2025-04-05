import { Fab } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { CallButtonProps } from '../../../types/CallButtonProps';
import styles from './CallButton.module.css';

const CallButton: React.FC<CallButtonProps> = ({ phoneNumber }) => {
  const [shake, setShake] = useState(false);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 1000);
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
        right: '40px',
        backgroundColor: '#406182',
        color: '#fff',
        display: isMobile ? 'inline-flex' : 'none',
      }}
    >
      <PhoneIcon />
    </Fab>
  );
};

export default CallButton;






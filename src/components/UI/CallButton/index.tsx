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
  zIndex: 9999,

  right: 'calc(14px + env(safe-area-inset-right))',
  bottom: 'calc(18px + env(safe-area-inset-bottom))',

  display: isMobile ? 'inline-flex' : 'none',
  alignItems: 'center',
  justifyContent: 'center',
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.22)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(255,255,255,0.55)',
  color: 'rgba(64, 97, 130, 1)',
boxShadow:
  '0 0 0 8px rgba(0,0,0,0.18), 0 12px 30px rgba(0,0,0,0.25)',
  transition: 'transform 0.18s ease, background 0.18s ease, box-shadow 0.18s ease, color 0.18s ease',
}}
    >
      <PhoneIcon />
    </Fab>
  );
};

export default CallButton;






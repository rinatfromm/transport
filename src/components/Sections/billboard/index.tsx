import billboard from '../../../assets/images/bustwo.png';
import styles from './Billboard.module.css';

function Billboard() {
    return (
        <section className={styles.billboard}>
            <img alt="Von Tür zu Tür – einfach, zuverlässig, professionell." src={billboard} className={styles.image} />
            <div className={styles.slogan}>
                <h1>Von Tür zu Tür – einfach, zuverlässig, professionell.</h1>
                <p className={styles.p}>Expressfahrten, Möbeltransport, Kurierfahrten, Umzüge</p>
                <button onClick={() => alert('Contact us!')}>Kontaktieren Sie uns</button>
            </div>
        </section>
    );
}

export default Billboard;

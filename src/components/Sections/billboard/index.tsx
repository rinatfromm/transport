import billboard from '../../../assets/images/bustwo.png';
import styles from './Billboard.module.css';

function Billboard() {
    const phoneNumber = "+4917669653451";

    return (
        <section className={styles.billboard}>
            <img alt="Von Tür zu Tür – einfach, zuverlässig, professionell." src={billboard} className={styles.image} />
            <div className={styles.slogan}>
                <h1>Von Tür zu Tür – einfach, zuverlässig, professionell.</h1>
                <p className={styles.p}>Expressfahrten, Möbeltransport, Kurierfahrten, Umzüge</p>
                <a href={`tel:${phoneNumber}`}>
                    <button>Kontaktieren Sie uns</button>
                </a>
            </div>
        </section>
    );
}

export default Billboard;
